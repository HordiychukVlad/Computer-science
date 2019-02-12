var swap = function(array, firstIndex, secondIndex) {
    var temp =array[secondIndex];
	array[secondIndex] = array[firstIndex];
	array[firstIndex] = temp;
	return array;
};

var testArray = [7, 9, 4];
swap(testArray, 0, 1);

console.log(testArray);