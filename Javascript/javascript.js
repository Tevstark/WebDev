const time = new Date().getHours();
console.log(time)

if (time < 10) {
    console.log("Good Morning Sir");
} else if (time < 18){
    console.log("Good Day Sir");
} else {
    console.log("Good Evening Sir")
}

