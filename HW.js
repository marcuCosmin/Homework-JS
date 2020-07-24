console.log('Displaying in the console all the numbers from 1 to 20:')

console.log('');

// The minimum number of elements in the array is 4, while the maximum is 24 (The last 5 elements are not included in the calculations!) //
// The elements' values are randomized from 0 to 99 //

array = [];

array[Math.floor(Math.random() * 20 + 8)] = Math.floor(Math.random() * 100); 

array[array.length - 5] = 1;

while (array[array.length - 5] <= 40) {

    while (array[array.length - 5] <= 20) {

        console.log(array[array.length - 5]);

        array[array.length - 5]++;
    }

    if (array[array.length - 5] == 21) {

        console.log('');

        console.log('Displaying in the console all the odd numbers from 1 to 20:');

        console.log('');
    }

    if (array[array.length - 5] % 2 !== 0) {

        console.log(array[array.length - 5] - 20);
    }

    array[array.length - 5]++;
}

console.log('');

console.log('The array exercises:');

console.log('');

// Randomizing the length of the array, by giving the last element a random value between 0 and 99 //

console.log('The length of the array is ' + (array.length - 4) + ' elements!');

console.log('');

// The last 4 elements of the array are used in the iteration below //

array[array.length - 4] = 0; // This one is used as a counter for the indexes //

array[array.length - 3] = 0; // This one is used to store the sum of the elements //

array[array.length - 1] = 0; // This one is used as the counter for how many times the value 74 appears in the array //

while (array[array.length - 4] < (array.length - 4)) {

    // Randomizing the value of each element //

    array[array[array.length - 4]] = Math.floor(Math.random() * 100);

    // Checking if any element's value is equal to 74 //

    if (array[array[array.length - 4]] == 74) {

        array[array.length - 1] = array[array.length - 1] + 1;
    }

    if (array[array.length - 4] == 0) {

        // Assuming that the first element has the biggest value in the array //

        array[array.length - 2] = array[array[array.length - 4]]; 
    }

    // Displaying in the console the value of each element in the array //

    console.log('The element of the array ocuppying the position ' + array[array.length - 4] + ' is equal to ' + array[array[array.length - 4]] + '!');

    // Comparing the upcoming element's value with the biggest value so far // 

    if (array[array.length - 2] < array[array[array.length - 4]]) {

        array[array.length - 2] = array[array[array.length - 4]];
    }

    // Summing all of the elements' values and storing the result in one of the last 4 elements //

    array[array.length - 3] = array[array.length - 3] + array[array[array.length - 4]];

    array[array.length - 4]++;
}

console.log('');

console.log('The sum of all of the elements in the array is ' + array[array.length - 3] + '!');

console.log('');

console.log('The biggest value in the array is ' + array[array.length - 2]);

console.log('');

if (array[array.length - 1] == 1) {

    console.log('The value 74 appears 1 time in the array!');

} else {

    
    console.log('The value 74 appears ' + array[array.length - 1] + ' times in the array!');
}



