const main = document.querySelector('main');
const clearButton = document.querySelector('.clear');
const resolutionButton = document.querySelector('.resolution');
const root = document.querySelector(':root');
const colors = document.querySelectorAll('.color');
let currentColor = 'black';
let container;


const onHover = (div) => {
  div.style.backgroundColor = currentColor;
};

const changePenColor = (colorButton) => {
  currentColor = colorButton.classList[1];
};

colors.forEach(colorButton => {
  colorButton.addEventListener('click', () => changePenColor(colorButton) );
});

const validateInput = (input) => {
  if(typeof input != 'number') {
    alert("You can only input numbers!");
    return;
  } else {
    if (input > 150) {
      alert("Your grid needs to be under 150 squares wide");
      return;
    }
    return true;
  }
};

const createGrid = (size) => {
  if (validateInput(size) !== true) { 
    const grid = parseInt(prompt("What size of grid would you like?"));
    createGrid(grid);
    return;
  }
  root.style.setProperty('--grid-size', size);
  container = document.createElement('div');
  container.classList.add('container');
  for(let i = 0; i<size**2; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    div.addEventListener('mouseover', () => onHover(div) );
    container.appendChild(div);
    }
  main.appendChild(container);
};

const clearGrid = () => {
  const divs = document.querySelectorAll('.grid-item');
  divs.forEach( child => child.style.backgroundColor = "white" );
};

const changeResolution = () => {
  main.removeChild(container);
  const grid = parseInt(prompt("What resolution would you like? \nExample: for 100 X 100 squares you would enter '100')"));
  createGrid(grid);
}

clearButton.addEventListener('click', clearGrid);
resolutionButton.addEventListener('click', changeResolution);

createGrid(70);


