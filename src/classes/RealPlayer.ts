import AbstractPlayer from './AbstractPlayer'
import Card from './Card'

class RealPlayer extends AbstractPlayer {
  requestCard(): boolean {
    return confirm(`Your sum is currently ${this.getSum()}. Would you like another card?`)
  }
}

export default RealPlayer;
