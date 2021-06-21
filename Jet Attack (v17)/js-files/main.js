let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 600;
// HTML Elements
let backgroundImage = document.getElementById("imageElZero"); // Load Player
let playerJetImage = document.getElementById("imageElFive"); // Load Player
let enemyOneJetImage = document.getElementById("imageElOne"); // Load Enemy Type One
let enemyTwoJetImage = document.getElementById("imageElTwo"); // Load Enemy Type Two
let enemyThreeJetImage = document.getElementById("imageElThree"); // Load Enemy Type Three
let enemyFourJetImage = document.getElementById("imageElFour"); // Load Enemy Type Four
let playerMissle = document.getElementById("imageElSix"); // Load Missle From Player
let enemyMissle = document.getElementById("imageElSeven"); // Load Missle From Enemy
let missleImage = document.getElementById("imageElEight"); // Load Missle Image For Bar
let enemyOneHurt = document.getElementById("imageElNine");
let enemyTwoHurt = document.getElementById("imageElTen");
let enemyThreeHurt = document.getElementById("imageElEleven");
let enemyFourHurt = document.getElementById("imageElTwelve");
let playerJetHurt = document.getElementById("imageElThirteen");
let cloudOne = document.getElementById("imageElFourteen");
let cloudTwo = document.getElementById("imageElFifteen");
let cloudThree = document.getElementById("imageElSixteen");
// Key Event Stuff
document.addEventListener("keydown", keyDown); // Player Movement
document.addEventListener("keyup", keyUp); // Player Movement
// Event Listeners & Handlers
document.addEventListener("mousedown", mouseDown);
document.addEventListener("mouseup", mouseUp);
document.addEventListener("mousemove", mouseMove);
// Arrays
let pB = []; // Player Bullets
let pM = []; // Player Missles
let eB = []; // Enemy Bullets
let eM = []; // Enemy Missles
let eA = []; // Array for Enemies
let cA = []; // Array for Clouds
// Spawn some Clouds
for (c = 0; c < randomInt(20, 30); c++) {
    cA.push(drawNewCloud());
}
// Global Variables
let player = { // Element for Player
    x: 50,
    y: 250,
    w: 100,
    h: 50,
    xSpeed: 1.5,
    ySpeed: 1.75,
    hp: 100,
    inv: 0,
    invCol: "black",
    score: 0,
    hit: false,
    bulletHit: false,
    missleHit: false,
    canHit: true,
    canMissleHit: true,
    aC: 4,
    aCT: 0,
    mAC: .3,
    mACT: 0,
    stage: 0,
    draw: true,
}
let timer = {
    w: 1000,
}
let enemySpawnTimer = {
    w: 1000,
    s: 2,
}
// Other Elements
// Keys
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let drawInfo = false;
let drawInfoEnemy = false;
// Bullets
let shooting = false;
let canShoot = true;
// Missles
let shootingMissles = false;
let canShootMissles = true;
// Other
let enemiesKilled = 0;
let gameStart = false;
let gameOn = false;
let gameEnded = false;
let openTimes = 0;
let showstart = true;
let bestScore = 0;
let hideClouds = false;
// Mouse
let mouseX, mouseY;
let mouseIsPressed = false;
let mouseIsUp = true;
// Updgrades
let menuOpened = false;
let upgradeBulletCost = 0;
let upgradeMissleCost = 0;
// Function for Local
setLocalData();
// Main Draw Loop
requestAnimationFrame(main);
function main () {
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, 0, cnv.width, cnv.height, "fill");

    // Drawing Important Items
    drawBackground();
    drawTopBar();

    // All Functions for Clouds
    cloudData();

    // All Functions for Enemies
    enemyData();

    // All Functions for Player
    playerData();
    // All Function for Upgrades
    upgradedata();
    // Other Functions
    gameStarted();
    gameEnds();
    countdown();
    start();
    // All Functions for Local Storage
    localStorageData();
    // Reload Main Function
    requestAnimationFrame(main);  
} 