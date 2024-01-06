// const testObj = [{
//     "hat": "ballcap",
//     "shirt": "jersey",
//     "shoes": "Airforces",
// },
// {
//     "name": "John",
//     "machine": "Mac",
//     "work": "Cyber Security"
// },
// {
//     "name": "Jane",
//     "machine": "Windows",
//     "work": [
//         "Software Developer",
//         "Cloud Security",
//         "DevOps"
//     ]
// }
// ];

    


// const myShoe = testObj.type;

// const myArray = [[9, 10, 11], [12, 13, 14], [15, 16, 17, 18]];
// total = 1;
// for (var i = 0; i < myArray.length; i++) {
//     for (var j = 0; j < myArray[i].length; j++) {
//         total *= myArray[i][j];
//     }
// }


// function squareSum(numbers) {
//     let sum = 0
//     let i = 0;
//     while (i < numbers.length) { 
//         sum += (numbers[i] * numbers[i]) 
//         i++;
//         }
//     return sum;
    
// }


// function makeNegative(number) {
//     if (number < 0) {
//         return number
//     } else if (number > 0 ) {
//         return number * -1
//     }
//     else {
//         return 0
//     }
// }


// function removeChar(str) {
//     newStr = str.slice(1, -1);
//     return newStr
// }

// function fakeBin(x) {
    
    
//     for (let i = 0; i < x.length; i++) { 
//         var newStr = "";
//         if (Number(x[i]) <= 4) {
//             newStr += "0";
//         } else if (Number(x[i]) >=5) {
//             newStr += "1";
//         }
        
//     }
//     return newStr;
// }

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
      
//     }
//   }

// console.log();

// function ask(question, yes, no) { 
//     if (confirm(question)) yes()
//     else no();
// }

// function showOk() {
//     alert("You agreed.");
// }

// function showCancel() {
//     alert("You canceled the execution.");
// }

// ask("Do you agree?", showOk, showCancel)

// function add7(num) { 
//     return num + 7
// };

// console.log(add7(9))


// function multiply(num1, num2) {
//     return num1 * num2
// }

// console.log(multiply(8, 9))

// function capitalize(string) {
//     newString = string.replace(string[0], string[0].toUpperCase())
//     spliceVal = string.slice(0)
// }

// capitalize("woRlD")

// function fizzBuzz(answer) {
//     answer = parseInt(answer)
//     i = 1

//     for (let i = 1; i <= answer; i++){
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("Fizz Buzz")
//         } else if (i % 3 === 0) { 
//             console.log("Fizz")
//         } else if (i % 5 === 0) {
//             console.log("Buzz")
//         } else {
//             console.log(i)
//         }

//     };
// }


// fizzBuzz(20) 

const myNick = ["Spongebob", "Big Time Rush", "Henry Danger"]
const myDisney = ["Doc Mcstuffins", "Miles from Tomorrow", "Mickey Mouse"]
const mySeries = ["Breaking Bad", "Peaky Blinders", "The Blacklist"]
const myMovies = ["Tenet", "Winter Soldier", "Avengers: Endgame"]


const myKidsTV = [myNick, myDisney]
// console.log(myKidsTV)
const myTV = [mySeries, myMovies]
// console.log(myTV)

const watchChannels = [myTV, myKidsTV]
console.log(watchChannels[1][1][2])