// alert(location.href)
// if (confirm("Go to Wikipedia?")){
//     function openNewTab(url){
//         window.open(url, "_blank");
//     }

//     openNewTab("http://en.wikipedia.org")
// }


// // Accessing a button element
// const myButton = document.getElementById('my-Button');

// // Adding a click event listener
// myButton.addEventListener('click', function() {
//     alert('Button Clicked!');
// });


let headingOne = document.createElement("h1");
headingOne.textContent = "This is my first text.";
document.body.appendChild(headingOne);


// Accessing a button element
const myButton = document.getElementById('my-Button');

// Adding a click event listener
myButton.addEventListener('click', function() {
    document.body.style.background = 'black'
    document.body.style.color = 'white';
    console.log('Button Clicked!')

});

let list = [
    'Ubuntu',
    'Kali',
    'Arch',
    'Mint'
];

let olElement = document.createElement('ol');

list.forEach(function(text){

    let li = document.createElement('li');
    li.innerHTML = `${text}`;

    olElement.appendChild(li);
});
