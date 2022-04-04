export class Player {
  // constructors run immediately when class is instantiated
  constructor(name, position, team, imgURL, score = 0) {
    this.name = name
    this.position = position
    this.team = team
    this.imgURL = imgURL
    this.score = score
  }

  get PlayerInfo() {
    return `My name is ${this.name}, and I play ${this.position} for ${this.team}`
  }

  // HTML template for player
  get Template() {
    return /*html*/ `
    <div class="col-md-4">
      <div class="shadow p-2">
        <h1>${this.team}</h1>
        <img src="${this.imgURL}" class="img-fluid" alt="">
        <div class="d-flex justify-content-between p-2">
          <h4>${this.name}</h4>
          <h4>${this.position}</h4>
          <h4 id="score-${this.name}">${this.score}</h4>
        </div>
        <button class="btn btn-success" onclick="app.playersController.increaseScore('${this.name}')">Increase Score</button>
      </div>
    </div>
    `
  }
}
