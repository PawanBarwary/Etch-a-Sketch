const main = document.querySelector('main');
const clearButton = document.querySelector('.clear');
const resolutionButton = document.querySelector('.resolution');
const root = document.querySelector(':root');
const colors = document.querySelectorAll('.color');
const resolutionRange = document.querySelector('#resolution');
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

const createGrid = (size) => {
  root.style.setProperty('--grid-size', size);
  container = document.createElement('div');
  container.classList.add('canvas');
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
  createGrid(resolutionRange.value);
}

console.log(resolutionRange);
resolutionRange.addEventListener('change', changeResolution);
clearButton.addEventListener('click', clearGrid);


createGrid(70);


