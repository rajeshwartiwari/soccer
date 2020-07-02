import {
  addNewPlayer,
  getPlayers,
  getPlayerWithID,
  updatePlayer,
  deletePlayer
} from "../controllers/playerControllers";

const routes= (app) => {
app.route('/players')

//get operations
.get(getPlayers)
//post operations
.post(addNewPlayer);

app.route('/player/:PlayerId')
//getbyID
.get(getPlayerWithID)
//updatebyID
.put(updatePlayer)
.delete(deletePlayer)
}
export default routes;