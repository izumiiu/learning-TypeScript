
let options:number;
let balance:number;

balance = 500;
options = 4;

switch(options){
    case 1:
        console.log(`Your balance is ${balance}`);
        break;
    case 2: 
        console.log(`how much you wan tot deposit`);
        break;
    case 3:
        console.log(`You widthdraw`);
        break;
    default:
        console.log("invalid option");
        break;
}