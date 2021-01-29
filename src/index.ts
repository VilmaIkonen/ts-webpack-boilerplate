import ComputerOne from './Components/ComputerOne';
import ComputerTwo from './Components/ComputerTwo';


let computerOne: ComputerOne = new ComputerOne(1);
let computerTwo = new ComputerTwo(computerOne);
computerTwo.printConversion(3);