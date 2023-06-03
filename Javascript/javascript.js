const time = new Date().getHours();
console.log(time)

if (time < 10) {
    console.log("Good Morning Sir");
} else if (time < 18){
    console.log("Good Day Sir");
} else {
    console.log("Good Evening Sir")
}

let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case  6:
        day = "Saturday";
        break;
}

console.log(`Today is ${day} `);