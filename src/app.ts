//any $ unknown

let fname:any = "Peerawat";
fname = 10;
fname = true;

function formatNumber(num:number){
    return num.toFixed(2);
}
let amount = 50.12345;
// formatNumber(amount);

console.log(formatNumber(amount));

let money:unknown = "50.12345";
money = 50.12345;

if(typeof money === "number"){
    console.log(formatNumber(money));
}
else{
    console.log("type of money is not a number");
}





