function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++){
        for (let j = i; j > 0; j--){
        if (arr[j] < arr[j - 1]){
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
        } else {
            break;
        }
        }
    }
   return arr;
}

console.log(insertionSort([2, 3, 4, 5, 1, 5, 3, 12, 20]))