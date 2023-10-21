// create a function which converts the temperature from farenheit to celcius.

function convertFarToCel(currentTemp) {
  let newTemp = ((currentTemp - 32) * 5) / 9;

  return newTemp;
}
console.log(convertFarToCel(64));
console.log(convertFarToCel(32));
