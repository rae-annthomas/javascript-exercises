const removeFromArray = function(array,...rest) { //rest parameter
  let newArray = [];
  array.forEach((element) => {
      if(!rest.includes(element)){
      newArray.push(element)
      }
   })
  return newArray
}


// Do not edit below this line
module.exports = removeFromArray; //[1,2,3,4],3

