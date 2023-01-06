console.log("\n1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.");
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log('\nages', ages);

console.log("\n1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array.");
ages[ages.length-1] -= ages[0];
console.log('\nages', ages);

console.log("\n1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. ");
ages.push(55);
console.log('\nages', ages);
ages[ages.length-1] -= ages[0];
console.log('ages', ages);

console.log("\n1c.	Use a loop to iterate through the array and calculate the average age. ");
let ageTotal = 0;
for (let age of ages) 
    ageTotal += age;
console.log('\nageTotal', ageTotal);
let averageAge = ageTotal/ages.length;
console.log('averageAge', averageAge);

console.log("\n2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.");
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', "Bob"];
console.log("\nnames", names);

console.log("\n2a.	Use a loop to iterate through the array and calculate the average number of letters per name. ");
let lettersTotal = 0;
for (let name of names)
    lettersTotal+= name.length;
console.log("\nlettersTotal", lettersTotal);
let averageLettersPerName = lettersTotal/names.length;
console.log("averageLettersPerName", averageLettersPerName);

console.log("\n2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. ");
let allNames = "";
for (let name of names)
    allNames = allNames.concat(name + " ");
allNames = allNames.trim();
console.log("\nallNames", allNames);

console.log("\n3.	How do you access the last element of any array?");
console.log("\nnames[names.length-1]", names[names.length-1]);

console.log("\n4.	How do you access the first element of any array?");
console.log("\nnames[0]", names[0]);

console.log("\n5.	Create a new array called nameLengths. Write a loop to iterate over the previously");
console.log("\tcreated names array and add the length of each name to the nameLengths array.");
let nameLengths = [];
for (let name of names) 
    nameLengths.push(name.length);
console.log("\nnames", names);
console.log("nameLengths", nameLengths);

console.log("\n6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. ");
let nameLengthsSum = 0;
for (let nameLength of nameLengths)
    nameLengthsSum += nameLength;
console.log("\nnameLengthsSum", nameLengthsSum);

console.log("\n7.	Write a function that takes two parameters, word and n, as arguments and returns the ");
console.log("\tword concatenated to itself n number of times. ");    
function repeater(word, n) {
    let repeatWord = "";
    for (let i = 0; i < n; i++)
        repeatWord += word;
    return repeatWord;
}
console.log("\nrepeater('Hello', 5)", repeater('Hello', 5));

console.log("\n8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.");
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log("\nfullName('John', 'Smith')", fullName('John', 'Smith'));

console.log("\n9.	Write a function that takes an array of numbers and returns true if the sum of all the ");
console.log("\tnumbers in the array is greater than 100.");
function sumGreaterThan100(arrayOfNumbers) {
    let sum = 0;
    for (let number of arrayOfNumbers)
        sum += number;
    console.log("sum", sum);
    if (sum > 100) 
        return true;
    else
        return false;
}

console.log("\nTest 1: nameLengths", nameLengths);
console.log("sumGreaterThan100(nameLengths)", sumGreaterThan100(nameLengths));

nameLengths.push(100);
console.log("\nTest 2: nameLengths", nameLengths);
console.log("sumGreaterThan100(nameLengths)", sumGreaterThan100(nameLengths));

nameLengths.pop();
nameLengths.push(77);
console.log("\nTest 3: nameLengths", nameLengths);
console.log("sumGreaterThan100(nameLengths)", sumGreaterThan100(nameLengths));

console.log("\n10.	Write a function that takes an array of numbers and returns the average of all the ");
console.log("\telements in the array.");
function average(arrayOfNumbers) {
    let total = 0;
    for (let number of arrayOfNumbers)
        total += number;
    return total/arrayOfNumbers.length;
}

console.log("\naverage([1, 2, 3])", average([1, 2, 3]));

console.log("\n11.	Write a function that takes two arrays of numbers and returns true if the average of the");
console.log("\telements in the first array is greater than the average of the elements in the second array.\n\n");
function firstAverageGreater(arrayOfNumbers1, arrayOfNumbers2) {
    return average(arrayOfNumbers1) > average(arrayOfNumbers2);
}

console.log("firstAverageGreater([1, 2, 3], [4, 5, 6])", firstAverageGreater([1, 2, 3], [4, 5, 6]));
console.log("firstAverageGreater([4, 5, 6], [1, 2, 3])", firstAverageGreater([4, 5, 6], [1, 2, 3]));
console.log("firstAverageGreater([1, 2, 3], [1, 2, 3])", firstAverageGreater([1, 2, 3], [1, 2, 3]));

console.log("\n12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number ");
console.log("\tmoneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.\n\n");
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.5)
        return true;
    else
        return false;
}
console.log("willBuyDrink(true, 10.5)", willBuyDrink(true, 10.5));
console.log("willBuyDrink(true, 11)", willBuyDrink(true, 11));
console.log("willBuyDrink(true, 10)", willBuyDrink(true, 10));
console.log("willBuyDrink(false, 11)", willBuyDrink(false, 11));
console.log("willBuyDrink(false, 10)", willBuyDrink(false, 10));

console.log("\n13.	Create a function of your own that solves a problem.");
console.log("\tIn comments, write what the function does and why you created it.\n\n");

// Function that takes 2 arrays of numbers and returns true if the average of the numbers
// in the second array is larger than the average of the numbers in the first array.
// I wrote this function to test the use of nested functions.
function secondAverageGreater(arrayOfNumbers1, arrayOfNumbers2) {
    function nestedAverage(arrayOfNumbers) {
        let total = 0;
        for (let number of arrayOfNumbers)
            total += number;
        return total/arrayOfNumbers.length;
    }
    return nestedAverage(arrayOfNumbers2) > nestedAverage(arrayOfNumbers1);
}
console.log("secondAverageGreater([1, 2, 3], [4, 5, 6])", secondAverageGreater([1, 2, 3], [4, 5, 6]));

