var newArr = [1,21,3,14,5,60,7,6];

function findSum(arr, value){

  console.log(`Your Array is; \n`);
  console.log(arr);
  console.log(`\nYour Value is; \n${value}\n`);
    
  var isAdd = false;
  
  for (var i=0; i<=arr.length; i++){
    var a = arr[i];
    for (var j=0; (j !== i) && (j<=arr.length); j++){
      var b = arr[j];
        if ((a+b) === value) {
          var num1 = a;
          var num2 = b;
          isAdd = true;
          break;
        }
    }
  }
  console.log(`Your Solution is; \n\n${isAdd}\n`);
  if(isAdd){
    arr.splice(0, arr.length, num1, num2);
    console.log(arr);
  }
}

findSum(newArr, 63);