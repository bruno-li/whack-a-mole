const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;

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
	hitPosition = randomPosition.id;
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
	timerId = setInterval(randomSquare, 500);
};

//countdown function
const countDown = () => {
	currentTime--;
	timeLeft.textContent = currentTime;

	if (currentTime === 0) {
		clearInterval(timerId);
		alert(`Game Over! You final score is ${result}`);
	}
};

let timerId = setInterval(countDown, 1000);
moveMole();
