import AbstractPlayer from './AbstractPlayer';
import CardSelectionService from './services/CardSelectionService';
import Card from './Card';

class BotPlayer extends AbstractPlayer {

  private botsDeck: Card [] = [];
  private noMore: number;

  constructor(noMore: number) {
    super(name);
    this.noMore = noMore;
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
    if (this.botsDeck.length < this.noMore && card !== undefined) {
        this.botsDeck.push(card);
    }
  }

  reviewCards(): Card[] {
    return this.botsDeck;
  }
}

export default BotPlayer;