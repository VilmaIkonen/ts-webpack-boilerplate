class Card {
  name: number = Math.floor(Math.random()*15);

  constructor(name: number) {
    this.name = name;
  }
}

export default Card;