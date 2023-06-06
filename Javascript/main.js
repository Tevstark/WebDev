let soup = "Chicken noodle soup";
let isBanned = true;

let soupAccess = isBanned ? 
"Sorry no soup for you." 
: soup
? `Yes, we have ${soup}`
: "No, we dont";

console.log(soupAccess)
