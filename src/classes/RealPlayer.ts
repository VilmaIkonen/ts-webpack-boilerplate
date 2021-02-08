import AbstractPlayer from './AbstractPlayer'
import Card from './Card'

class RealPlayer extends AbstractPlayer {

  private cardDeck: Card [] = [];
  private stop: number;

  constructor(stop: number) {
    super(name);
    this.stop = stop;
  }

  // Assigning numeric values to cards > 10:
  cardValue(value: Card): number {
    if(name===11 || name===12 || name===13 || name===14) {
      return 10;
    }
    else {
      return name;
    }
  }  
  
  // Sum of current card deck value with .reduce()
  // sum(name: number) = cardDeck.reduce(sum, )...


  // Request card only if the current sum of cards is <=10
  requestCard(): boolean {
    if(this.cardValue === name || this.cardValue === 10) {
      return true
    }
    else {
      return false
    }
  }
  
  receiveCard(card: Card | undefined) {
    if (this.cardDeck.length < this.stop && card !== undefined) {
        this.cardDeck.push(card);
    }
  }

  reviewCards(): Card[] {
    return this.cardDeck;
  }
}

export default RealPlayer;
