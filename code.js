

const container = document.querySelector('#container');

const grid = document.createElement('div');
grid.classList.add('grid'); 




grid.setAttribute('style', 'display: grid; grid-template-columns: repeat(4, 32px);');    




for(let i=0; i<16; i++) {
    var box = document.createElement('div');
    box.classList.add('box'); 
    box.setAttribute('style', 'border: 1px solid black; width: 30px ; height: 30px ;');
    grid.appendChild(box);
}



// place grid inside of #container
//grid.appendChild(element);
container.appendChild(grid);

