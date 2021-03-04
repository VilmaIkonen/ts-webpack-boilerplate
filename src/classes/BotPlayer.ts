import AbstractPlayer from './AbstractPlayer';
import CardSelectionService from './services/CardSelectionService';
import Card from './Card';

class BotPlayer extends AbstractPlayer {
  requestCard(): boolean {
    const cardSelectionService = new CardSelectionService();
    return cardSelectionService.decide();
  }  

}

export default BotPlayer;