const convertToCelsius = function(fahrenheit) {
    let c = 0;
    c = (fahrenheit - 32) * 5/9
    if (!(c % 1 == 0)){
       c= Number(c.toFixed(1));
       return c
    }else 
      return c
};

const convertToFahrenheit = function(c) {
  let f = 0;
  f= (c * 9/5 ) + 32 
  if (!(f % 1 == 0)){
    f= Number(f.toFixed(1));
       return f
  }else 
    return f
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
}