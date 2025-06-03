const add = function(a,b) {
	let sum = a+b
  return sum
};

const subtract = function(a,b) {
	let subtract =  a-b
  return subtract
};

const sum = function(arr) {
	let total = arr.reduce((acc , currentValue) => acc + currentValue, 0)
  return total
};

const multiply = function(arr) {
 let product = arr.reduce((acc, num) => acc * num)
 return product
};

const power = function(a,b) {
	let result = Math.pow(a,b)
  return result;
};

const factorial = function(num){ // num=4  , 1 2 3 4
  let product = 1;
  for (let i = 2; i<=num; i++){
    product *= i
    }
    return product
  }

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
