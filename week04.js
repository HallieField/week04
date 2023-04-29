//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93]

//1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array.
//In order to do so, we will subtract 3 from 93 by using using a function. We can pass the array we created as a parameter for the 
//function. We use array.length to find the last element of the array and subtract 1 from it, then return the difference between the last
//and first element in the aray. We then call the returnDiff function with the array1 as the parameter. Finally, we console.log the difference.
function returnDiff(ages) {
    let num = ages.length - 1;
    return ages[num] - ages[0];
}

let difference = returnDiff(ages);
console.log(difference);

//1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//To do so, we will use the push method. 
ages.push(33)

//1c.	Use a loop to iterate through the array and calculate the average age. 
// In order to calculate the average of this array, we will use a for loop to iterate
// through the array. When we console.log, we get 29.2 as the average. 
let average = 0;
for (let i = 0; i < ages.length; i++) {
    average += ages[i];
}
console.log(average / ages.length)

//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]

//2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
// In order to calculate the average number of letters per name, we can use a for loop. We define a variable called letters and set it equal to 0. 
// Then using the length property, we add up the number of letters in each name. We then divide that by the number of names in the array. Finally, we can 
// console.log the result. 
let letters = 0;
for (let i = 0; i < names.length; i++) {
    letters += names[i].length;
}
console.log(letters / names.length)

//2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
// A for loop is again the method I chose to for this. I declared the variable spaces and set it equal to an empty string so that we can concatenate the names
// then iterated the names through a for loop. 
let spaces = " "
for (let i = 0; i < names.length; i++) {
    spaces += names[i] + " ";
}
console.log(spaces)

//3.	How do you access the last element of any array?
// The last element of an array can be accessed in a couple of different ways. First, if you know how many elements are inside the array, you could simply 
// input the index of the last element in square brackets. 
console.log(names[5])

//or, if you don't know how many elements are in the array, you can assume that the last element has and index equal 
//to the total amount of elements in the array minus 1. 

console.log(names[names.length - 1]);

//4.	How do you access the first element of any array?
// Arrays are 0 based so the easiest way to access the first element of an array is to use
console.log(names[0])

//5.	Create a new array called nameLengths. 
//Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array
// First, we create the new array nameLengths and set it equal to an empty array. Then, using a for loop, we iterate through
// the array and then push the results into the new array. 
let nameLengths = []
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths)

//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
// First we create the variable sum and set it equal to 0. Then, we create a for loop where we iterate through the nameLengths
// array and we use the += operater to add the name lengths together. 
let sum = 0
for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}
console.log(sum);

//7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
//(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
// For this function, I started by setting the variable result equal to an empty string, then used a for loop to iterate "n" times.
// The word is then concatenated to the result using the += operator. I passed in the values "Hola" and 3, which output HolaHolaHola.
function greeting(word, n) {
    let result = " ";
    for (let i = 0; i < n; i++){
        result += word;
    }
    return result;
}
console.log(greeting("Hola", 3))

//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.
// We start by creating the function fullName and give it two parameters, firstName and lastName. We then return the sum of the
// two paramters and add an empty string in the middle so they are properly spaced. 
function fullName(firstName, lastName) {
    return firstName + " " + lastName
}
console.log(fullName("Michael", "Scott"))

//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
// For this function, we pass in the parameter numbers. We then create a for loop that will iterate over the numbers array using the +=
// operator. Finally, we return false because the sum was not greater than 100. 
function isGreater(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum > 100;
}
console.log(isGreater([5, 8, 33]));

//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
// First we define the function averages with the parameter (numbers). The we set theSum equal to 0 and use this to find the sum of all the
// numbers in the array. Then we use a for loop to iterate through the numbers array. Then we return the value of the average. 
function averages(numbers) {
    let theSum = 0
    for (let i = 0; i < numbers.length; i++) {
        theSum += numbers[i];
    }
    let median = sum / numbers.length;
    return median 
}
console.log(averages([3, 6, 9, 12]));

//11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array 
// is greater than the average of the elements in the second array.
//First we define two arrays. Next, we declare the function anotherAverageArray with two parameters array2 and array3. We then creat two variables,
// sum1 and sum2 set to 0. Next we use two seperate for loops that will iterate through the arrays to find the sum of the arrays. Then, 
// we divide the sums of the arrays by the lengths. Finally, we return true if average of the first array is greater than the average of the second array. 
// In this case, the result was false. 
let array2 = [2, 4, 6, 8]
let array3 = [3, 6, 9, 12]

function anotherAverageArray(array2, array3) {
    let sum1 = 0, sum2 = 0;
    for (let i = 0; i < array2.length; i++) {
        sum1 += array2[i];
    }
    for (let i = 0; i < array3.length; i++) {
        sum2 += array3[i];
    }
    let avg2 = sum1 / array2.length;
    let avg3 = sum2 / array3.length; 
    return avg2 > avg3;
}
console.log(anotherAverageArray(array2, array3));

//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
// and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
// First, we create the function willBuyDrink with the parameters isHotOutside and moneyInPocket. Then we use and if statement
// that states that if it is hot outside and we more money than 10.50, return true; if not return false. I passed in the parameters
// that it is hot outside and we have $20, therefore, true - we will buy a drink. 
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}
console.log(willBuyDrink(true, 20))

//13.	Create a function of your own that solves a problem.   In comments, write what the function does and why you created it.
// In this function, we are determining if for once, Stanley Hudson is happy. There are very few things that make Stanley happy and one of those things is 
// pretzel day. So if it's pretzel day and the line is short, then we will return true. If not, return false. Luckily for Stanley, it IS pretzel day and the line is pretty short.
function isStanleyHappy(pretzelDay, lineIsShort) {
    if (pretzelDay && lineIsShort) {
        return true;
    } else {
        return false; 
    }
}
console.log(isStanleyHappy(true, true))