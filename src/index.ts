import ComputerOne from './Components/Computers/ComputerOne';
import ComputerTwo from './Components/Computers/ComputerTwo';


let computerOne: ComputerOne = new ComputerOne(1);
let computerTwo = new ComputerTwo(computerOne);
computerTwo.printConversion(3);