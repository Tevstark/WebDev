// const getProperCase =  (name) => {
//     let result = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//     return result
// }
// console.log(getProperCase("hOt wHeelS"));

function multiplesOf3and5(number) {
    let i = 0
    let sum = 0
    while (i < number) {
        if (newNum = i % 3 == 0 || i % 5 == 0) sum += i;
            i++;            
        }
    return sum;
    }


console.log(multiplesOf3and5(10));