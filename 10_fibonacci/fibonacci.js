const fibonacci = function(n) {
    let num = Number(n)
if (num >= 0){
    let rootFive = Math.sqrt(5)
    let formulaPart1 = (1 + rootFive) / 2 
    let a = Math.pow(formulaPart1 , num)

    let formulaPart2 = (1 - rootFive) / 2 
    let b = Math.pow(formulaPart2 , num)

    let fullFormula = (1/rootFive) * (a - b)
    return Math.floor(fullFormula)
}else{
   return "OOPS"
}


};

// Do not edit below this line
module.exports = fibonacci;
