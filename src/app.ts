let username:unknown;
username = "Peerawat";

// as string = Type Assertions
//------แบบแรก---------------
// console.log((username as string).toUpperCase());


//------แบบที่สอง-----------------
console.log((<string>username).toUpperCase());