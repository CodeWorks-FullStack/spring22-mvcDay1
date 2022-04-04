// in order to IMPORT something, that thing has to be exported!

import { AppState } from "../AppState.js"
import { playersService } from "../Services/PlayersService.js"

// _ denotes a private function - but doesn't actually do anything
// anything written OUTSIDE of the class in considered private

function _drawPlayers() {
  let template = ''
  const players = AppState.players
  players.forEach(p => template += p.Template)
  document.getElementById('players').innerHTML = template
}

function _drawScore() {
  AppState.players.forEach(p => {
    document.getElementById(`score-${p.name}`).innerText = p.score.toString()
  })
}

export class PlayersController {
  // INSIDE of the controller is PUBLIC
  constructor() {
    // If you want something to happen immediately when this controller is loaded, put it inside a constructor
    console.log('hello from the playersController')
    this.greetPlayers()
    this.drawPlayers()
  }

  greetPlayers() {
    playersService.greetPlayers()
  }

  drawPlayers() {
    _drawPlayers()
  }

  drawScore() {
    _drawScore()
  }

  increaseScore(playerName) {
    // passing player name to the service so that we can find them in the array, and manipulate their score
    // playersService.increaseScore(playerName)
    // ***THIS SHOULD BE HAPPENING IN THE SERVICE - THIS IS ONLY FOR TODAY!!!!!****
    let foundPlayer = AppState.players.find(p => p.name == playerName)
    foundPlayer.score++
    this.drawScore()
  }

}