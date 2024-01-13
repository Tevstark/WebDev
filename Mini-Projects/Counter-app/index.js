// document.body.style.cssText = 'background:grey; display: flex; flex direction: column; align-items: center; justify-content: center; width: 100vw; height: 100vh;';



let add = document.querySelector('#add');
let counterEl = document.querySelector('#counter');
let subtract = document.querySelector('#subtract');

// add.style.cssText = "color: white; background: black; width: 30px; height: 30px; border: 1px solid black; display: flex; justify-content: center; align-items: center; margin: 20px;"

// subtract.style.cssText = "color: white; background: black; width: 30px; height: 30px; border: 1px solid black; display: flex; justify-content: center; align-items: center; margin: 20px;"

let counter = 0;
add.addEventListener('click', () => {
    counter++;
    counterEl.textContent = counter;
});

subtract.addEventListener('click', () => {
    counter--;
    counterEl.textContent = counter;
});