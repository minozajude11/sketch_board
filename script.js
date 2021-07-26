const grid = document.querySelector('.grid');
let gridSize = document.getElementById('size');
const color = document.querySelector('.grid');
const red = document.querySelector('#red');
const orange = document.querySelector('#orange');
const yellow = document.querySelector('#yellow');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const violet = document.querySelector('#violet');
const black = document.querySelector('#black');
const white = document.querySelector('#white');
const rainbow = document.querySelector('#rainbow');
const colorSelected = document.getElementById('current-color');
const spanText = document.getElementById('pixel-size');
spanText.innerText = "Input Grid Size";

function createGrid(gridWidth){
	let gridArea = gridWidth * gridWidth;
	for(i = 0; i < gridArea; i++){
		const div = document.createElement('div');
		div.classList.add('square');
		grid.appendChild(div);
	}
}
	
function updateGrid(){
	let gridWidth = gridSize.value;
	let gridArea = gridWidth * gridWidth;

	grid.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridWidth}, 1fr)`;

	let gridPixels = grid.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    createGrid(gridWidth);
    spanText.innerText = gridSize.value + " by " + gridSize.value;
}

	red.addEventListener('click', function(event){
		color.addEventListener('mouseover', function(event){
		event.target.style.backgroundColor = `#ff0000`;
	});
	colorSelected.innerText = "Color selected: Red";
	});


	orange.addEventListener('click', function(event){
		color.addEventListener('mouseover', function(event){
		event.target.style.backgroundColor = `#ff8000`;
	});
	colorSelected.innerText = "Color selected: Orange";
	});

	yellow.addEventListener('click', function(event){
		color.addEventListener('mouseover', function(event){
		event.target.style.backgroundColor = `#ffff00`;
	});
	colorSelected.innerText = "Color selected: Yellow";
	});

	green.addEventListener('click', function(event){
		color.addEventListener('mouseover', function(event){
		event.target.style.backgroundColor = `#00ff00`;
	});
	colorSelected.innerText = "Color selected: Green";
	});

	blue.addEventListener('click', function(event){
		color.addEventListener('mouseover', function(event){
		event.target.style.backgroundColor = `#0000ff`;
	});
	colorSelected.innerText = "Color selected: Blue";
	});

	violet.addEventListener('click', function(event){
		color.addEventListener('mouseover', function(event){
		event.target.style.backgroundColor = `#ff00ff`;
	});
	colorSelected.innerText = "Color selected: Fuchsia";
	});

	black.addEventListener('click', function(event){
		color.addEventListener('mouseover', function(event){
		event.target.style.backgroundColor = `#000`;
	});
	colorSelected.innerText = "Color selected: Black";
	});

	white.addEventListener('click', function(event){
		color.addEventListener('mouseover', function(event){
		event.target.style.backgroundColor = `#fff`;
	});
	colorSelected.innerText = "You've Selected an Eraser";
	});

	rainbow.addEventListener('click', function(event){
		color.addEventListener('mouseover', function(event){
		event.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
	});
	colorSelected.innerText = "You've Selected a Rainbow Paintbrush";
	});


createGrid(16);
gridSize.addEventListener('mouseup', updateGrid);
gridSize.addEventListener('touchmove', updateGrid);
