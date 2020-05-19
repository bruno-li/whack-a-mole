const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;

//random select square in the grid
const randomSquare = () => {
	//make sure there is no element with the class mole
	square.forEach((className) => {
		className.classList.remove('mole');
	});
	// choose a random square in our grid
	let randomPosition = square[Math.floor(Math.random() * 9)];
	randomPosition.classList.add('mole');
	// assign the id of the randomPosition to hitPosition
};

square.forEach((id) => {
	id.addEventListener('mouseup', () => {
		if (id.id === hitPosition) {
			result = result + 1;
			score.textContent = result;
		}
	});
});

//move the mole in the grid every second
const moveMole = () => {
	let timerId = null;
	timerId = setInterval(randomSquare, 1000);
};

moveMole();
