// const square = document.querySelectorAll('.square');
// const mole = document.querySelectorAll('.mole');
// const timeLeft = document.querySelector('#time-left');
// let score = document.querySelector('#score');

const gridModule = (function() {
	const square = document.querySelectorAll('.square');
	const mole = document.querySelectorAll('.mole');
	const timeLeft = document.querySelector('#time-left');
	let score = document.querySelector('#score');
	return { square, mole, timeLeft, score };
})();
console.log(gridModule);

let result = 0;
let currentTime = gridModule.timeLeft.textContent;

//random select square in the grid
const randomSquare = () => {
	//make sure there is no element with the class mole
	gridModule.square.forEach((className) => {
		className.classList.remove('mole');
	});
	// choose a random square in our grid
	let randomPosition = gridModule.square[Math.floor(Math.random() * 9)];
	randomPosition.classList.add('mole');
	// assign the id of the randomPosition to hitPosition
	hitPosition = randomPosition.id;
};

gridModule.square.forEach((id) => {
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

//countdown function
const countDown = () => {
	currentTime--;
	gridModule.timeLeft.textContent = currentTime;

	if (currentTime === 0) {
		clearInterval(timerId);
		alert(`Game Over! You final score is ${result}`);
	}
};

let timerId = setInterval(countDown, 1000);

moveMole();
