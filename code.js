// DECLARE FUNCTIONS FIRST THEN CREATE GRID

/* BLACK PEN

onmouse down set isDrawing to true 
true = background changes
Then if isDrawing is true and mouse goes over box change the background of that box
Then when the mouse goes up set isDrawing to false and background will no longer change
false = no background changing

*/
function blackPen() {

    let isDrawing = false;
    let boxes = document.querySelectorAll(".box");

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("mousedown", (e) => {
        e.target.style.backgroundColor = "black";
        isDrawing = true; });
        boxes[i].addEventListener("mouseover", (e) => {
            if (isDrawing == true) {
            e.target.style.backgroundColor = "black";
            }
        });
        boxes[i].addEventListener("mouseup", () => isDrawing = false );
    }
}

// Add 'click' event listener to black pen button, when pressed black pen is activated
const black_pen = document.querySelector('#black_pen');
black_pen.addEventListener("click", () => blackPen());

// load the black pen when the user loads the web page
window.onload = blackPen();

/* RAINBOW PEN

Same as Black pen however when changing a box background color a random color is chosen from the randomColor function

*/
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

// Add 'click' event listener to Rainbow pen button, when pressed Rainbow Pen is activated
const rainbow_pen = document.querySelector('#rainbow_pen');
rainbow_pen.addEventListener("click", () => rainbowPen());

/* CLEAR ALL

Select all the boxes and set their background to white, there by erasing all drawings made

*/
function clearAll() {

    let boxes = document.querySelectorAll(".box");
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].style.backgroundColor = "white";
    }
}

// Add 'click' event listener to Clear All button, when pressed everythomg os erased
const clear = document.querySelector('.clear');
clear.addEventListener("click", () => clearAll());


/* ERASER

Same as Black pen however the box background color is changed to 'white' giving the sense of erasing drawing

*/
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
// Add 'click' event listener to Eraser button, when pressed eraser is activated
const eraser = document.querySelector('.eraser');
eraser.addEventListener("click", () => erase());


// CREATE INITIAL GRID 

// Selecting container from html to hold grid and boxes
const container = document.querySelector('#container');

//creating initial grid
const initGrid = document.createElement('div');

// giving inital grid id of 'grid' and class of 'grid'
initGrid.class = 'grid'; 
initGrid.id = 'grid';

// appending grid to container
container.appendChild(initGrid);

// obtaining initial value dimensions for grid from the slider i.e. 15
const initSliderValue = document.getElementById("dimensions").value;

// getting the element gridSize and inserting sliderValue to show use the dimensions of the grid eg '15 x 15'
const gridSize = document.getElementById('gridSize');
gridSize.textContent = `${initSliderValue} x ${initSliderValue}`

// Creating layout of grid with initial number of columns as initSiderValue i.e. 15
initGrid.setAttribute('style', `display: grid; grid-template-columns: repeat(${initSliderValue} , 1fr);`); 

/* Creating individual boxes inside of grid layout, assuming grid has approximate width and height of 400px, therefore each box 
has a width of 400/sliderValue - 2 (subtract 2 to take into account border thickness)  */
for(let i=0; i<(initSliderValue*initSliderValue); i++) {
    const initBox = document.createElement('div');
    initBox.classList.add('box'); 
    initBox.setAttribute('style', `border: 1px solid #dddddd; width: ${Math.round(400/initSliderValue) - 2}px ; height: ${Math.round(400/initSliderValue) - 2}px;`);
    initGrid.appendChild(initBox);
}


// EDIT GRID USING SLIDER

// Select the slider
const slider = document.getElementById("dimensions");

// when the slider changes, change the dimensions of the grid accordingly
slider.addEventListener('change', (e) => {

    // Select the current grid
    const currentGrid = document.getElementById("grid");

    // delete all children elements inside the current grid, i.e. delete all boxes that make up the grid
    while (currentGrid.hasChildNodes()) {
        currentGrid.removeChild(currentGrid.firstChild);
    }
    
    // Create a new grid using the current slider value i.e. new dimensions of grid
    sliderValue = e.target.value;

    // create grid with new slider value number of columns, break them up evenly (1fr)
    grid.setAttribute('style', `display: grid; grid-template-columns: repeat(${sliderValue} , 1fr); `); 
    
    // Create new boxes for grid
    for(let i=0; i<(sliderValue*sliderValue); i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    const boxDimensions = (400/sliderValue - 2).toFixed(7); // assume width and height of grid is approximately 400px, calculate box width and height to 7 decimals.
    box.setAttribute('style', `border: 1px solid #dddddd; padding:0; margin:0; 1px solid black; width: ${boxDimensions}px ; height: ${boxDimensions}px;`);
    grid.appendChild(box);
    }

    // update the dimesions of grid for the user to see i.e. 'AA x AA'
    gridSize.textContent = `${sliderValue} x ${sliderValue}`
  
});