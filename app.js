const square = document.querySelectorAll('.square'); //this is an array
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');


let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole'); //remove all incidences of mole from all squares to begin with.
    })
    let randomPosition = square[Math.floor(Math.random()*9)]; //returns a num from 0-8 and sets it to the array index of square and puts that in a randomPosition var 
    randomPosition.classList.add('mole'); //add the classlist of mole to ranPos var. which adds it to a grid square

    //assign the id of the randomPosition to the hitPosition for use later. 
    hitPosition = randomPosition.id; //I presume randomPosition is going to be an obj at some point?
}

square.forEach(id=> { //for each square
    id.addEventListener('mouseup', () => { //add an event listener for a mouseup (click) event
        if(id.id === hitPosition){ //if that square's id is the same as where the mole is then...
            result += 1; //add a point.
            score.textContent = result; //shows the score in the browser
        }
    })
})


//function to move the mole every so often.

function moveMole(){
    let timerId = null;
    timerId = setInterval(randomSquare, 400); //calls a function at specified intervals in milliseconds. //so the moveMole func is called every 1000ms
}

moveMole();

function countDown(){ //minuses 1 from currentTime which is actually set via the 60 on html. in the timeleft id.
    currentTime--;
    timeLeft.textContent = currentTime; //keeps updating the current time via the html.

    if(currentTime === 0){
        clearInterval(timerId); //clearInterval is a js method that clears a timer set with setInterval.
        alert(`GAME OVER! YOUR FINAL SCORE IS ${result}!`)
    }
}

let timerId = setInterval(countDown, 1000); //counts down every second (1000ms)

