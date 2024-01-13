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


// let headingOne = document.createElement("h1");
// headingOne.textContent = "This is my first text.";
// document.body.appendChild(headingOne);


// // Accessing a button element
// const myButton = document.getElementById('my-Button');

// // Adding a click event listener
// myButton.addEventListener('click', function() {
//     document.body.style.background = 'black'
//     document.body.style.color = 'white';
//     console.log('Button Clicked!')

// });

// let list = [
//     'Ubuntu',
//     'Kali',
//     'Arch',
//     'Mint'
// ];

// let olElement = document.createElement('ol');

// list.forEach(function(text){

//     let li = document.createElement('li');
//     li.innerHTML = `${text}`;

//     olElement.appendChild(li);
// });


let p1 = document.createElement('p');
p1.textContent = "Hey I'm red!";
p1.style.color = 'red';
document.body.appendChild(p1);

let heading1 = document.createElement('h1');
heading1.textContent = "I'm a blue h3!";
heading1.style.color = 'blue';
document.body.insertBefore(heading1, p1);

let div1 = document.createElement('div');
div1.setAttribute('style', 'border: solid 1px black; background: pink; color: black; width: 15rem; height: 15rem;');
document.body.appendChild(div1);

let h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
div1.appendChild(h1);

let p2 = document.createElement('p');
p2.textContent = "ME TOO!";
div1.appendChild(p2);

let container = document.createElement('div');
container.setAttribute("style", "width: 30rem; height: 30rem; border: solid 1px black; background: aqua; display: flex; justify-content: center; align-items: center;");
document.body.appendChild(container);
container.appendChild(div1);




