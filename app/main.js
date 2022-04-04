import { PlayersController } from "./Controllers/PlayersController.js"
// Make sure to check for the .js on the end of the file path!!!!


// THIS IS THE ENTRY POINT INTO OUR APPLICATION!!! We will "register" our controllers here
class App {
  // camelcasing for INSTANCE of the class - PASCAL casing for the class definition
  playersController = new PlayersController()
}

// window.app works as well, but some computers will get intellisense errors
window["app"] = new App() 