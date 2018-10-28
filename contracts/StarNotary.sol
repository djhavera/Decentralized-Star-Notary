pragma solidity ^0.4.23;

import 'openzeppelin-solidity/contracts/token/ERC721/ERC721.sol';
//import './ProofOfExistence.sol';

contract StarNotary is ERC721 { 

    struct Star { 
        string name; 
        string starCoordinators;
        string starStory;
        string dec;
        string mag;
        string cent;
    }

    event ProofCreated(
        uint256 indexed id,
        bytes32 indexed documentHash
    );

    address public owner;
    mapping (uint256 => bytes32) hashesById;
   
    mapping(uint256 => Star) public tokenIdToStarInfo; 
    mapping(uint256 => uint256) public starsForSale;
    mapping(string => uint256) internal starsUniqueCheck;
    mapping (bytes32 => bool) proofs;

    modifier checkIfStarExist1(string _name) {
        string memory starInfo = _name;
        require(starsUniqueCheck[starInfo] == 0, "Star already registered");
        _;
    }

    function createStar(string _name, string _starCoordinators, string _starStory, string _dec, string _mag, string _cent, uint256 _tokenId) public checkIfStarExist1(_name) { 
        Star memory newStar = Star(_name, _starCoordinators, _starStory, _dec, _mag, _cent);
        //Check memory newUnique = Check(_name);
        tokenIdToStarInfo[_tokenId] = newStar;
        _mint(msg.sender, _tokenId);
    }
    //https://github.com/ramyhardan/proof-of-existence/blob/master/contracts/ProofOfExistence.sol
    function notarizeHash(uint256 id, bytes32 documentHash) public returns (bytes32) {
        
        return hashesById[id] = documentHash;

        emit ProofCreated(id, documentHash);
        //return ProofCreated;
    }

    function checkIfStarExist(uint256 id, bytes32 documentHash) public view returns (bool) {
        return hashesById[id] == documentHash;
    }



    function putStarUpForSale(uint256 _tokenId, uint256 _price) public { 
        require(this.ownerOf(_tokenId) == msg.sender);

        starsForSale[_tokenId] = _price;
    }

        function buyStar(uint256 _tokenId) public payable { 
        require(starsForSale[_tokenId] > 0);
        
        uint256 starCost = starsForSale[_tokenId];
        address starOwner = this.ownerOf(_tokenId);
        require(msg.value >= starCost);

        _removeTokenFrom(starOwner, _tokenId);
        _addTokenTo(msg.sender, _tokenId);
        
        starOwner.transfer(starCost);

        if(msg.value > starCost) { 
            msg.sender.transfer(msg.value - starCost);
        }
    }
}   