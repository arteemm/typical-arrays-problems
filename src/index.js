
exports.min = function min (array) {
    
   if (array && array.length !== 0){
    array.sort(function(x, y) { return x - y});
    return array[0];
        
   }else { 
    return 0;
   }
}

exports.max = function max (array) {

    if (array && array.length !== 0){
    array.sort(function(x, y) { return x - y});
    return array[array.length-1]; 
   } else { 
    return 0;
    }
  
}

exports.avg = function avg (array) {

    if (array && array.length !== 0){
        let sum = 0;
        for (let i = 0; i <= array.length-1; i++){
            sum += array[i];
        } 

          return (sum / array.length);
    } else {
  return 0;
}
}
