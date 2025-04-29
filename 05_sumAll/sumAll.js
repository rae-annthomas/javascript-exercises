const sumAll = function(num1, num2) {
    let total = 0;
   while (Number.isInteger(num1) && Number.isInteger(num2)){
     if (num1 > 0 && num2 > 0){
       let higherNum = Math.max(num1,num2);
       let lowerNum= Math.min(num1,num2);
       for(i=lowerNum ; i<= higherNum ; i++){
        total += i
       }
       return total;
     } else 
        return 'ERROR'

   }
   return 'ERROR'
}
   


   


// Do not edit below this line
module.exports = sumAll;
