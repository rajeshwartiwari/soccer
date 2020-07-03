const mongoose = require("mongoose");
const  PlayerSchema  = require('../models/playerModels');

const Player =mongoose.model('Player', PlayerSchema);

 const addNewPlayer=(req, res) => {
    let newPlayer = new Player(req.body);

    newPlayer.save((err, Player) => {

        if(err){
            res.send(err);

        }
        res.send(Player);
    });
};


 const getPlayers = (req, res) => {
 
  Player.find({},(err, Player) => {
    if (err) {
      res.send(err);
    }
    res.send(Player);
  });
};


 const getPlayerWithID = (req, res) => {
  Player.findById(req.params.PlayerId, (err, Player) => {
    if (err) {
      res.send(err);
    }
    res.send(Player);
  });
};

 const updatePlayer = (req, res) => {
  Player.findOneAndUpdate({_id:req.params.PlayerId},req.body,{new:true}, (err, Player) => {
     
    if (err) {
      res.send(err);
    }
    res.json(Player);
  });
};

 const deletePlayer = (req, res) => {
  Player.remove(
    { _id: req.params.PlayerId },
    (err, Player) => {
      if (err) {
        res.send(err);
      }
      res.json({message: 'Successfully deleted player'});
    }
  );
};


module.exports = {
   addNewPlayer,
  getPlayers,
  getPlayerWithID,
  updatePlayer,
  deletePlayer
}