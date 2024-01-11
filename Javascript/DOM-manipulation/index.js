// alert(location.href)
// if (confirm("Go to Wikipedia?")){
//     function openNewTab(url){
//         window.open(url, "_blank");
//     }

//     openNewTab("http://en.wikipedia.org")
// }

let changeCardColor = document.getElementById("card-prototype")
changeCardColor.style.color= "green";

let changeTheme = document.getElementsByTagName("button")

changeTheme.style.background= "black";

const parent = document.getElementById('parent').lastElementChild
console.log(parent) //<p>i am the last child</p>

const parent2 = document.getElementById('parent').children[3]
console.log(parent2) //<h1>hello world</h1>

const secondchild = document.getElementById('secondchild')
console.log(secondchild) //<p id="secondchild">i am the second child</p>

console.log(secondchild.parentNode) //<div id="parent">...</div>

console.log(secondchild.nextElementSibling) //<h4>i am alive</h4>

console.log(secondchild.previousElementSibling) //<div id="firstchild">i am a first child</div>

// Accessing a button element
const myButton = document.getElementById('myButton');

// Adding a click event listener
myButton.addEventListener('click', function() {
    alert('Button Clicked!');
});