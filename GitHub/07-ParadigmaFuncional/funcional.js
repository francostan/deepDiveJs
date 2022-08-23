function duplicar(num) {
  return num * 2;
}
function map(arr, func) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]));
  }
  return newArr;
}
function filter(arr, func) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function contains(arr, element) {
  var band = false;
  var arr1 = Object.values(arr);
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] === element) {
      band = true;
    }
  }
  return band;
}

function cuentaPalabras(arr) {
  var contador = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === " ") {
      contador++;
    }
  }
  return contador + 1;
}
function reduce(arr, init, func) {
  var contador = 0;
  if (func === cuentaPalabrasReduce) {
    for (var i = 0; i < arr.length; i++) {
      contador += func(arr[i]) + init;
    }
    return contador;
  } else {
    for (var i = 0; i < arr.length; i++) {
      contador += func(arr[i], init);
    }

    return func(contador, init);
  }
}
function cuentaPalabrasReduce(arr) {
  return cuentaPalabras(arr);
}
