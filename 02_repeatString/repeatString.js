const repeatString = function(string, num) {
   let result = ''; 
     if(num > 0){    
         for(i=1 ; i <= num ; i++){
             result = result +string     
        }
          return result
    }else if(num === 0 ){
        return result
    }else
     return 'ERROR';
     };


// Do not edit below this line
module.exports = repeatString;
