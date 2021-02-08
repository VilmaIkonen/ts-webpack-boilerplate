class CardSelectionService {
  private getOneOrZero(): number {
    return Math.floor(Math.random() * 2);
  }

  decide() {
    return Boolean(this.getOneOrZero);
  } 
}

export default CardSelectionService;