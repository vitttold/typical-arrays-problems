
exports.min = function min (array) {
  let a = 0;
  
  if (arguments.length < 1 || array.length === 0) {
    return 0;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] < a) {
     a = array[i];
     }
    }
return a
 
}

exports.max = function max (array) {
  let a = 0;
  
  if (arguments.length < 1 || array.length === 0) {
    return 0;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] > a) {
     a = array[i];
     }
    }
return a
 }

exports.avg = function avg (array) {

  let sum = 0;

  if (arguments.length < 1 || array.length === 0) {
    return 0;
  }
    for (let i = 0; i < array.length; i++) {
      sum = array[i] + sum;
    }
return sum/array.length
}
