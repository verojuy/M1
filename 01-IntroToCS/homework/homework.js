'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let sum = 0;
  for( let i = 0 ; i< num.length; i++){
    sum = sum +num [i]*2**(num.length-1-i);

  }
  return sum;
<<<<<<< HEAD
=======

>>>>>>> 1f3b20d2739af4b095ed499299c15a8e6c1a0385

}

function DecimalABinario(num) {
  // tu codigo aca
<<<<<<< HEAD
=======
  
>>>>>>> 1f3b20d2739af4b095ed499299c15a8e6c1a0385
  let str =  "";
  while( num>0){
    let resto = num%2;
    str = resto + str;
    num = Math.floor(num/2);
  }
  return str;

}




<<<<<<< HEAD
=======


>>>>>>> 1f3b20d2739af4b095ed499299c15a8e6c1a0385
module.exports = {
  BinarioADecimal,
  DecimalABinario,
}