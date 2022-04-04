import { Player } from "./Models/Player.js"
// { } around the thing you are importing denotes that it is NOT a default, and therefore there could be many different classes in that file to be exported

// Appstate is the single source of truth - it is the only place where data should live

let player1 = new Player('beezer twelve', 'punter', 'san diego state', 'https://pbs.twimg.com/media/EP2nszuWAAYg-X7?format=jpg&name=large')
let player2 = new Player('scoish velociraptor maloish', 'ball boy', 'nevada', 'https://img.ifunny.co/images/c93bd0b8831ded695ba43d572057dabe82097c7adbd5ca195bb6c2fca8344c88_3.jpg')
let player3 = new Player('dglester harcunkichud', 'TE', 'Alabama', 'https://i.ytimg.com/vi/XxM-TxUizaw/maxresdefault.jpg')

export const AppState = {
  players: [player1, player2, player3]
}
