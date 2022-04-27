
// Creating container to hold grid and boxes
const container = document.querySelector('#container');

// Create grid
const grid = document.createElement('div');
grid.classList.add('grid'); 
grid.setAttribute('style', 'display: grid; width:400px ; height: 400px; grid-template-columns: repeat(15 , 1fr);'); 



/*
class="slider" 
*/
let slider = document.getElementById("dimensions");
console.log(slider.value);




// rid-template-columns: repeat(30, ${x}px);');
/*
Set up intial grid
- event listener for mousever is made 
- if amouse passes over box its bckground is changed to orange
*/

for(let i=0; i<225; i++) {
    let box = document.createElement('div');

    box.classList.add('box'); 
    box.setAttribute('style', 'border: 1px solid black; width: 24.67px ; height: 24.67px;');
    grid.appendChild(box);
}
container.appendChild(grid);

/* Orange Pen 
- Set up function for orange ped
- Orange pen is initially loaded on window loading
*/

const orange_pen = document.querySelector('#orange_pen');
orange_pen.addEventListener("click", () => orangePen());

window.onload = orangePen();

/* orangePen

onmouse down set variable to true 
true = background changes

mouseover if variable is true continue to change background

on mouse up set variable to false
false = no background changing


function(e) {
            e.target.style.backgroundColor = "orange";
        }

*/





function orangePen() {

    let isDrawing = false;
    let boxes = document.querySelectorAll(".box");

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("mousedown", (e) => {
        e.target.style.backgroundColor = "orange";
        isDrawing = true; });
        boxes[i].addEventListener("mouseover", (e) => {
            if (isDrawing == true) {
            e.target.style.backgroundColor = "orange";
            }
        });
        boxes[i].addEventListener("mouseup", () => isDrawing = false );
    }


}


/*
Clear All
- Clear all button is selected
- event listener for click is made 
- on click select all the boxes  and loop thorugh each box and set its background to white
*/
const clear = document.querySelector('.clear');
clear.addEventListener("click", () => clearAll());

function clearAll() {

    let boxes = document.querySelectorAll(".box");
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].style.backgroundColor = "white";
    }
}    


/*
Eraser
- eraser button is selected
- event listener for click is made 
- on click select all the boxes  and whenever a mouse runs over the box set its background to white
*/

const eraser = document.querySelector('.eraser');
eraser.addEventListener("click", () => erase());

function erase() {

    let isDrawing = false;
    let boxes = document.querySelectorAll(".box");

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("mousedown", (e) => {
        e.target.style.backgroundColor = "white";
        isDrawing = true; });
        boxes[i].addEventListener("mouseover", (e) => {
            if (isDrawing == true) {
            e.target.style.backgroundColor = "white";
            }
        });
        boxes[i].addEventListener("mouseup", () => isDrawing = false );
    }


}




