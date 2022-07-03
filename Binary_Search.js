//  Binary Search in Sorted array Implementation

function binarySearch(sortedArray, key){
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            
            return ("Key with "+key+" is found in the index "+middle)
        } else if (sortedArray[middle] < key) {
            
            start = middle + 1;
        } else {
            
            end = middle - 1;
        }
    }
	
    return ("Key with "+key+" is not found in the array");
}


console.log(binarySearch([10,20,30,40,50,60,70,80,90],90))
