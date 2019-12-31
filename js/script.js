let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let startButton = document.getElementById("start");
let beachDoorPath = "file:///home/mike/Documents/RobotChore/img/beach.svg";
let spaceDoorPath = "file:///home/mike/Documents/RobotChore/img/space.svg";
let botDoorPath = "file:///home/mike/Documents/RobotChore/img/robot.svg";
let closedDoorPath = "file:///home/mike/Documents/RobotChore/img/closed_door.svg";
let numClosedDoors = 3;
let currentlyPlaying = true;
let openDoor1, openDoor2, openDoor3;


const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
      openDoor1 = botDoorPath;
      openDoor2 = spaceDoorPath;
      openDoor3 = beachDoorPath;
    } else if (choreDoor === 1) {
      openDoor2 = botDoorPath;
      openDoor1 = spaceDoorPath;
      openDoor3 = beachDoorPath;
    } else {
      openDoor3 = botDoorPath;
      openDoor2 = spaceDoorPath;
      openDoor1 = beachDoorPath;
    }
};

function playDoor(door) {
  numClosedDoors--;
  console.log(numClosedDoors);
  if (numClosedDoors === 0) {
    console.log("Winner");
    gameOver('win');
  } else if (isBot(door)) {
    console.log("Loser");
    gameOver();
  }
};

function isBot(door) {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
};

function isClicked(door) {
  if (door.src === closedDoorPath) {
    return (false);
  } else {
    return (true);
  }
};

doorImage1.onclick = () => {
  if (!isClicked(doorImage1) && currentlyPlaying) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
};

doorImage2.onclick = () => {
  if (!isClicked(doorImage2) && currentlyPlaying) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
};

doorImage3.onclick = () => {
  if (!isClicked(doorImage3) && currentlyPlaying) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
};

function startRound() {
  numClosedDoors = 3;
  currentlyPlaying = true;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  openDoor1 = null;
  openDoor2 = null;
  openDoor3 = null;
  startButton.innerHTML = "Good luck!";
  randomChoreDoorGenerator()
};

startButton.onclick = () => {
  if (!currentlyPlaying){
    startRound();
  }
};

function gameOver(status) {
  if (status === 'win') {
    startButton.innerHTML = "You win! Play again?";
  } else {
    startButton.innerHTML = "Game Over! Play again?";
  }
  currentlyPlaying = false;
};

randomChoreDoorGenerator();