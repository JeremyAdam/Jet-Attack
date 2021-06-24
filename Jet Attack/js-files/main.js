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
let enemyOneHurt = document.getElementById("imageElNine"); // Load Enemy Type One Hit
let enemyTwoHurt = document.getElementById("imageElTen"); // Load Enemy Type Two Hit
let enemyThreeHurt = document.getElementById("imageElEleven"); // Load Enemy Type Three Hit
let enemyFourHurt = document.getElementById("imageElTwelve"); // Load Enemy Type Four Hit
let playerJetHurt = document.getElementById("imageElThirteen"); // Load Player Hit
let cloudOne = document.getElementById("imageElFourteen"); // Cloud Varaint One
let cloudTwo = document.getElementById("imageElFifteen"); // Cloud Varaint Two
let cloudThree = document.getElementById("imageElSixteen"); // Cloud Varaint Three
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
let player = {
    x: 50,
    y: 250,
    w: 100,
    h: 50,
    xSpeed: 0,              // Player x Speed
    ySpeed: 0,              // Player y Speed
    hp: 0,                  // Player Hitpoints
    inv: 0,                 // Invincibility Timer
    invCol: "black",        // Invincibility Bar Colour
    score: 0,               // Players Score for that Round
    hit: false,             // Player was hit in General
    bulletHit: false,       // Player is hit by a Bullet
    missleHit: false,       // Player is hit by a Missle
    canHit: true,           // If Bullet can hit the Player
    canMissleHit: true,     // If Missle can hit the Player
    aC: 0,                  // Bullet Attack Cooldown
    aCT: 0,                 // Bullet Attack Cooldown Timer
    mAC: 0,                 // Missle Attack Cooldown
    mACT: 0,                // Missle Attack Cooldown Timer
    stage: 0,               // Stage of Explosion
    draw: true,             // If Jet Image Is to be Drawn
    bD: 0,                  // Sets Player Bullet Damage
    mD: 0,                  // Sets Player Missle Damage
    maxhP: 0,               // Sets Player Max Health
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
let warningMenu = false;
let enemyHealthMult = 1;
// Mouse
let mouseX, mouseY;
let mouseIsPressed = false;
let mouseIsUp = true;
// Updgrade Menu
let menuOpened = false;
let slotOneOpened = false;
let slotTwoOpened = false;
let slotThreeOpened = false;
let slotFourOpened = false;
let slotFiveOpened = false;
let slotSixOpened = false;
let slotSevenOpened = false;
// Upgrade Costs
let upgradeBulletCost = 0;
let upgradeMissleCost = 0;
let upgradeHealthCost = 0;
let upgradeCooldownCost = 0;
let upgradeSpeedCost = 0;
let upgradeDeathCost = 0;
let upgradeBonusCost = 0;
// Death Money
let blueDrop = 0;
let purpleDrop = 0;
let yellowDrop = 0;
let redDrop = 0;
// Bonus Money
let smallDrop = 0;
let normalDrop = 0;
let mediumDrop = 0;
let bigDrop = 0;
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
    upgradeMenuData();              

    // All Functions for Warning Menu
    drawWarningData();              

    // Test Localstorage for null
    testNull();                     

    // Other Functions
    gameStarted();                  
    gameEnds();                     
    starting();                     
    start();                        

    // Reload Main Function
    requestAnimationFrame(main);  
} 