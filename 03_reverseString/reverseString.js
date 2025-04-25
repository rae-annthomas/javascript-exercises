const reverseString = function(string) {
 let stringSplit= string.split("") // h e l l o
  let len = stringSplit.length  // 5  
  let newReverseString = '';
 for(i = len-1 ; i >= 0 ; i--){    // [i=4]  
    newReverseString += stringSplit[i]   
 } 
 return newReverseString
};

// Do not edit below this line
module.exports = reverseString;
