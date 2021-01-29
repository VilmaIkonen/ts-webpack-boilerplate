import Convertable from '../Interfaces/Convertable'

class ComputerOne implements Convertable {

  x: number;

  constructor(a: number) {
    this.x = a;
  }

  convert(j: number): number {
    return this.x + j;
  }

}

export default ComputerOne;