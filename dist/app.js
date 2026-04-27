"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let amount = 31;
let result;
let total;
if (amount % 2 == 0) {
    result = "Even";
}
else {
    result = "Odd";
}
console.log(result);
// Ternary
console.log((amount % 2 == 0) ? `the number${amount} is Even` : `the number${amount} is odd`);
total = (amount % 2 == 0) ? "เลขคู่" : "เลขคี่";
console.log(total);
//# sourceMappingURL=app.js.map