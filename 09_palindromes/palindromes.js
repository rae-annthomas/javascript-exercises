const palindromes = function (str) { //hello World!
  let newStr = str.toLowerCase().replace(/[^\w]/g, "").split("")
  let strReverse = newStr.slice().reverse()
  let j = 0
    for (let i=0; i<=newStr.length ; i++){
       if (newStr[i] === strReverse[j]){
     }else{
    return false
    }  
    j++
}
return true
}


// Do not edit below this line
module.exports = palindromes;
