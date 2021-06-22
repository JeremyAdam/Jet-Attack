//
// Other Functions
//
// Test for Key Down
function keyDown (event) {
    // console.log(event.keyCode);
    if (event.keyCode == 65) { // A Key - Player Movement
        rightPressed = true;
    } else if (event.keyCode == 68) { // D Key - Player Movement
        leftPressed = true;
    } else if (event.keyCode == 87) { // W Key - Player Movement
        upPressed = true;
    } else if (event.keyCode == 83) { // S Key - Player Movement
        downPressed = true;
    } else if (event.keyCode == 74) { // J Key - Player Bullets
        shooting = true;
    } else if (event.keyCode == 75) { // K Key - Player Missles
        shootingMissles = true;
    } else if (event.keyCode == 82) { // R Key - Start/Restart Game
        if (showstart) {
            showstart = false;
            gameStart = true;
        }
    } else if (event.keyCode == 56) { // 8 Key - Hide Clouds
        hideCloud();
    } else if (event.keyCode == 57) { // 9 Key - Clear Best
        warningMenu = true;
    }
}
// Test for Key Up
function keyUp (event) {
    if (event.keyCode == 65) { // A Key - Player Movement
        rightPressed = false;
    } else if (event.keyCode == 68) { // D Key - Player Movement
        leftPressed = false;    
    } else if (event.keyCode == 87) { // W Key - Player Movement
        upPressed = false;
    } else if (event.keyCode == 83) { // S Key - Player Movement
        downPressed = false;
    } else if (event.keyCode == 74) { // J Key - Player Bullets
        shooting = false;
    } else if (event.keyCode == 75) { // K Key - Player Missles
        shootingMissles = false;
    }
}
// Random Number Generator
function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}
// Return a Random Decimal Between low and high
function randomDec(low, high) {
    return Math.random() * (high - low) + low;
 }
// Function for Drawing Rectangles
function rect (x, y, w, h, color, mode) {
    if (mode === "fill") {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);
    } else if (mode === "stroke") {
        ctx.strokeStyle = color;
        ctx.strokeRect(x, y, w, h)
    }
}
// Function for Drawing Circles
function circle(x, y, r , color, mode) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    if (mode === "fill") {
        ctx.fillStyle = color;
        ctx.fill();
    } else if (mode === "stroke") {
        ctx.strokeStyle = color;
        ctx.stroke();
    }
}
// Function For Drawing Text
function drawText (x, y, size, colour, message) {
    ctx.font = size + " Arial";
    ctx.fillStyle = colour;
    ctx.fillText(message, x, y);
}
function drawNewCloud () {
    return {
        x: randomInt(0, 1000),
        y: randomInt(50, 450),
        w: 100,
        h: 50,
        speed: randomDec(1, 3),
        type: randomInt(1, 4),
    }
}
function mouseDown () {
    mouseIsPressed = true;
    mouseIsUp = false;
}
function mouseMove () {
    // Get Rectangle Info About Canvas Location
    let cnvRect = cnv.getBoundingClientRect(); 
    // Calc Mouse Coordinates Using Mouse Event and Canvas Location Info
    mouseX = Math.round(event.clientX - cnvRect.left);
    mouseY = Math.round(event.clientY - cnvRect.top);
}
function mouseUp () {
    mouseIsUp = true;
    mouseIsPressed = false;
}
//
//
// Cloud Functions
//
//
function drawCloud () {
    for (let c = 0; c < cA.length; c++) {
        if (cA[c].type == 1) {
            cA[c].w = 100;
            cA[c].h = 100;
            ctx.drawImage(cloudOne, cA[c].x, cA[c].y, cA[c].w, cA[c].h);
        } else if (cA[c].type == 2) {
            ctx.drawImage(cloudTwo, cA[c].x, cA[c].y, cA[c].w, cA[c].h);
            cA[c].w = 200;
            cA[c].h = 100;
        } else {
            ctx.drawImage(cloudThree, cA[c].x, cA[c].y, cA[c].w, cA[c].h);
            cA[c].w = 100;
            cA[c].h = 50;
        }
    }
}
function cloudMovement() {
    for (let c = 0; c < cA.length; c++) {
        cA[c].x -= cA[c].speed;
    }
}
function cloudTeleport () {
    for (let c = 0; c < cA.length; c++) {
        if (cA[c].x <= -200) {
            cA[c].speed = randomDec(1, 3);
            cA[c].y = randomInt(50, 450);
            cA[c].x = 1100;
        }
    }
}
function hideCloud () {
    if (hideClouds) {
        hideClouds = false;

     } else if (hideClouds == false) {
        hideClouds = true;
    }
}
function cloudData () {
    if (hideClouds == false) {
        // Draw Clouds
        drawCloud();
        // Move Clouds
        cloudMovement();
        // Teleport Clouds
        cloudTeleport();
    }
}
//
//
// Game Start/End Functions
//
//
function starting () {
    if (gameStart) {
        openTimes++;
        player.stage = 0;
        player.hp = player.maxhP;
        player.inv = 0;
        player.bulletHit = false;
        player.missleHit = false;
        player.canHit = true
        player.hit = false;
        player.aCT = 0;
        player.mACT = 0;
        showstart = false;
        gameEnded = false;
        player.x = 50;
        player.y = 250;
        player.draw = true;
        gameOn = true;
        timer.w = 1000;
        gameStart = false;
        enemiesKilled = 0;
    }
}
function gameStarted () {
    if (gameOn) {
        // Determines The Type of Enemy That Spawns
        enemySpawnTimer.w -= enemySpawnTimer.s;
        if (enemiesKilled <= 5) {
            if (enemySpawnTimer.w < 0) {
                eA.push(drawNewEnemy(1));
                enemySpawnTimer.w = 1000;
            }
        } else if (enemiesKilled <= 10) {
            if (enemySpawnTimer.w < 0) {
                eA.push(drawNewEnemy(randomInt(1, 3)));
                enemySpawnTimer.w = 1000;
            }
        } else if (enemiesKilled <= 15) {
            if (enemySpawnTimer.w < 0) {
                eA.push(drawNewEnemy(randomInt(1, 4)));
                enemySpawnTimer.w = 1000;
            }
        } else {
            if (enemySpawnTimer.w < 0) {
                eA.push(drawNewEnemy(randomInt(1, 5)));
                enemySpawnTimer.w = 1000;
            }
        }
    }
}
function gameEnds () {
    // Shows Best Score
    if (localStorage.best == null) {
        bestScore = 0;
    } else {
        bestScore = localStorage.best;
    }
    if (gameEnded) {
        // Apply best Score
        if (player.score > bestScore) {
            localStorage.setItem("best", player.score);
        }
        // Reset Values
        enemySpawnTimer.w = 1000;
        enemySpawnTimer.s = 5;
        player.score = 0;
        // Clear Arrays
        pB.pop();
        pM.pop();
        eB.pop();
        eM.pop();
        eA.pop();
        gameOn = false;
        if (eA.length == 0 && eM.length == 0 && eB.length == 0 && pM.length == 0 && pB.length == 0) {
            let temp = randomInt(1, 11);
            if (temp <= 5) {
                localStorage.money = Number(localStorage.money)+50;
            } else if (temp <= 7) {
                localStorage.money = Number(localStorage.money)+75;
            } else if (temp <= 9) {
                localStorage.money = Number(localStorage.money)+100;
            } else {
                localStorage.money = Number(localStorage.money)+150;
            }
            gameEnded = false;
            showstart = true;
        }

    }
}