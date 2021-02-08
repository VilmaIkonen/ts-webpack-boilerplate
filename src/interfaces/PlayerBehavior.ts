import Card from '../classes/Card';

interface PlayerBehavior {
  requestCard: () => boolean,

  receiveCard: (card: Card) => void
}

export default PlayerBehavior;