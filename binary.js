
function binarySearch (_array, targetValue) 
{
    let min = 0;
    let max = _array.length - 1;
    let middle = Math.floor((min + max) / 2);
  
    while (_array[middle] !== targetValue && min < max)
    {
      if (targetValue < _array[middle]) 
      {
        max = middle - 1;
      } 
      else
      {
        min = middle + 1;
      }
      middle = Math.floor((min + max) / 2);
    }
    return (_array[middle] !== targetValue) ? -1 : middle;
}
  
  const array = [1, 15, 34, 39, 44, 45, 69, 77, 88, 99];
  console.log(binarySearch(array, 99));