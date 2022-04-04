import { AppState } from "../AppState.js";
import { PlayersController } from "../Controllers/PlayersController.js";


// Services are the only place we allow manipulation of data!!!!
class PlayersService {
  greetPlayers() {
    // TODO Come back to this later
    console.log(AppState.players);
  }

  increaseScore(playerName) {
    // ***THIS IS THE PROPER WAY - WE WILL DO IT LIKE THIS WHEN WE HAVE PROXYSTATE AND LISTENERS***

    // let foundPlayer = AppState.players.find(p => p.name == playerName)
    // foundPlayer.score++
    // NOTE this will differ from the full template where we have access to the ProxyState and listeners
    // playersController.drawPlayers()
    console.log('player name in service', foundPlayer);
  }
}


// This is called the singleton pattern - this allows us to make sure that only one instance of this class can be instantiated and used
export const playersService = new PlayersService()