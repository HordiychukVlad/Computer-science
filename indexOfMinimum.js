var indexOfMinimum = function(array) {
    let minIndex=0;
    let minValue=array[0];
    for(let i=1; i<array.length-1;i++)
    {
     if(array[minIndex]>array[i])
     {
         minIndex=i;
         minValue=array[i];
     }
    }
     return minIndex;
 };
 
 var testArray = [-99, -5, 4, -5, 1, 123];
 var result=indexOfMinimum(testArray);
 
 console.log(result);