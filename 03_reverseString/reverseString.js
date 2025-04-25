const reverseString = function(string) {
 let stringSplit= string.split("") 
  let len = stringSplit.length  
  let newReverseString = '';
 for(i = len-1 ; i >= 0 ; i--){     
    newReverseString += stringSplit[i]   
 } 
 return newReverseString
};

// Do not edit below this line
module.exports = reverseString;
