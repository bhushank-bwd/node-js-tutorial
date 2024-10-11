// console.log("Hello from sum.js");
let a = 5;
c = 545;
console.log(c);
function sum(a, b) {
  console.log(a + b);
}
// console.log(module.exports); // {}
// module.exports = { sum };
// module.exports = { sum: sum };
module.exports.sum = sum;
