let array = [32,45,63,36,24,11,0,21];

//array.map((valores,index) => console.log(`En el indice ${index} esta el valor ${valores}`));

function burbuja(arr) {
  let size = arr.length;
  for(let i = 0; i < size -1; i++){   
    for(let j = 0; j < arr[i]- 1; j++){
      if(arr[j] > arr[j+1]){
        let tmp = arr[j];
        arr[j] = arr[j +1];
        arr[j + 1 ] = tmp;
      }
    }  
  }
  return arr 
}

console.log(burbuja(array));
