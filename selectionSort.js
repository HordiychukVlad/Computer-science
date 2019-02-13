var swap = function(array, firstIndex, secondIndex) {
    var temp =array[secondIndex];
	array[secondIndex] = array[firstIndex];
	array[firstIndex] = temp;
	return array;
};

var indexOfMinimum = function(array) {
    let minIndex=0;
    let minValue=array[0];
    for(let i=1; i<array.length;i++)
    {
     if(array[minIndex]>array[i])
     {
         minIndex=i;
         minValue=array[i];
     }
    }
     return minIndex;
 };
 var selectionSort = function(array) {
    var temp;
    for(var i=0; i<array.length;i++)
    {
        temp=indexOfMinimum(array,i);
        swap(array,temp,i);
    }  
    };
    
    var array = [22, 11, 99, 88, 9, 7, 42];
    selectionSort(array);
    console.log("Array after sorting:  " + array);