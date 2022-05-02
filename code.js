

// Creating container to hold grid and boxes
const container = document.querySelector('#container');

const grid = document.createElement('div');

grid.class = 'grid'; 
grid.id = 'grid';

container.appendChild(grid);

const gridSize = document.getElementById('gridSize');

// Create Initial Grid

let sliderValue = document.getElementById("dimensions").value;

gridSize.textContent = `${sliderValue} x ${sliderValue}`

grid.setAttribute('style', `display: grid; width:400px ; height: 400px; grid-template-columns: repeat(${sliderValue} , 1fr);`); 

for(let i=0; i<(sliderValue*sliderValue); i++) {
    let box = document.createElement('div');

    box.classList.add('box'); 
    box.setAttribute('style', `border: 1px solid #dddddd; width: ${Math.round(400/sliderValue) - 2}px ; height: ${Math.round(400/sliderValue) - 2}px;`);
    grid.appendChild(box);
}

// Edit grid using slider

let slider = document.getElementById("dimensions");

slider.addEventListener('change', (e) => {

    //remove current grid
    let g = document.getElementById("grid");

    while (g.hasChildNodes()) {
        g.removeChild(g.firstChild);
    }
    
    //create new grid
    sliderValue = e.target.value;

    console.log(sliderValue);

    gridColumn = 400/sliderValue - 1;
    gridColumn = gridColumn.toFixed(7);

    grid.setAttribute('style', `display: grid; grid-template-columns: repeat(${sliderValue} , 1fr); `); 

    for(let i=0; i<(sliderValue*sliderValue); i++) {
    let box = document.createElement('div');

    box.classList.add('box');
    let boxDimensions = 400/sliderValue - 2;
    boxDimensions = boxDimensions.toFixed(7); 
    box.setAttribute('style', `border: 1px solid #dddddd; padding:0; margin:0; 1px solid black; width: ${boxDimensions}px ; height: ${boxDimensions}px;`);
    grid.appendChild(box);
    }

    gridSize.textContent = `${sliderValue} x ${sliderValue}`

        
});


// window.onload = createGrid();











// rid-template-columns: repeat(30, ${x}px);');
/*
Set up intial grid
- event listener for mousever is made 
- if a mouse passes over box its bckground is changed to orange
*/



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


/* Rainbow Pen
- randomly choose colours

*/

const rainbow_pen = document.querySelector('#rainbow_pen');
rainbow_pen.addEventListener("click", () => rainbowPen());

function randomColor() {
    
    let random_color = Math.floor(Math.random()*16777215).toString(16);
    return random_color;
}

function rainbowPen() {

    let isDrawing = false;
    let boxes = document.querySelectorAll(".box");

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("mousedown", (e) => {
        e.target.style.backgroundColor = `#${randomColor()}`;
        isDrawing = true; });
        boxes[i].addEventListener("mouseover", (e) => {
            if (isDrawing == true) {
            e.target.style.backgroundColor = `#${randomColor()}`;
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




