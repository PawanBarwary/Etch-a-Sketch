const body = document.querySelector('body');
const button = document.querySelector('button');
let container;
const createGrid = (size) => {
  container = document.createElement('div');
  for(let i = 0; i<size; i++) {
    let row = document.createElement('div');
    for(let j = 0; j<size; j++) {
      let div = document.createElement('div');
      row.appendChild(div);
      div.classList.add('grid-item');
      div.addEventListener('mouseover', (event) => div.classList.add('hover'));
      row.classList.add('row');
    }
  container.appendChild(row);
  }
  body.appendChild(container);
};

const clearGrid = () => {
  body.removeChild(container);
  const grid = parseInt(prompt("how big grid fam?"));
  createGrid(grid);
};

button.addEventListener('click', clearGrid);

createGrid(70);


