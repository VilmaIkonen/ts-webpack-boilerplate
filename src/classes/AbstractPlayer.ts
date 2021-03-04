import PlayerBehavior from '../interfaces/PlayerBehavior';
import Card from './Card';

abstract class AbstractPlayer implements PlayerBehavior {
  private holdings: Card[] = [];
  private max: number; // max number of cards that can be held

  abstract requestCard(): boolean;

  constructor(max: number){
    this.max = max;
  }

  receiveCard(card: Card | undefined) {
    if (this.holdings.length < this.max && card !== undefined) {
        this.holdings.push(card);
    }
  }

  reviewCards(): Card[] {
    return this.holdings;
  }

  getSum(): number {
    return this.holdings
      .map((card: Card) => card.name)
      .reduce((acc, next) => acc + next);
  }

  announceCards(): void {
    console.log(`My hand: ${this.reviewCards()}, sum: ${this.getSum()}`)
  }
}

export default AbstractPlayer;