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
        showstart = false;
        gameStart = true;
    } else if (event.keyCode == 56) { // 8 Key - Hide Clouds
        hideCloud();
    } else if (event.keyCode == 57) { // 9 Key - Clear Best
        localStorage.clear();
    } else if (event.keyCode == 48) { // 0 Key - Lower Player hp
        localStorage.money = Number(localStorage.money)+100;
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
        speed: randomDec(2, 5),
        type: randomInt(1, 4),
    }
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
            cA[c].speed = randomDec(2, 5);
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
function countdown () {
    if (gameStart) {
        openTimes++;
        player.stage = 0;
        player.hp = 100;
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
        // Show Restart
        showstart = true;
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
    }
}
function setLocalData () {
    // Got Help With Some Code But Only In This Function From W3Schools
    if(typeof(Storage) == "undefined") { // This I Needed Help With
        if (localStorage.kills > 0) {
            localStorage.setItem("kills", "0");
        } else {
            localStorage.kills = 0;
        }
        if (localStorage.deaths > 0) {
            localStorage.setItem("deaths", "0");
        } else {
            localStorage.deaths = 0;
        }
        if (localStorage.bullets > 0) {
            localStorage.setItem("bullets", "0");
        } else {
            localStorage.bullets = 0;
        }
        if (localStorage.missles > 0) {
            localStorage.setItem("missles", "0");
        } else {
            localStorage.missles = 0;
        }
        if (localStorage.bD == 0) {
            localStorage.setItem("bD", "0");
        } else {
           localStorage.bD = 0; 
        }
        if (localStorage.mD > 0) {
            localStorage.setItem("mD", "0");
        } else {
            localStorage.mD = 0;
        }
        // Player Bullet Cost
        if (localStorage.bC > 0) {
            localStorage.setItem("bC", "0");
        } else {
            localStorage.bC = 0;
        }
        // Player Missle Cost
        if (localStorage.mC > 0) {
            localStorage.setItem("mC", "0");
        } else {
            localStorage.mC = 0;
        }
        // Player Bullet Level
        if (localStorage.bL > 0) {
            localStorage.setItem("bL", "0");
        } else {
            localStorage.bL = 0;
        }
        // Player Missle Level
        if (localStorage.mL > 0) {
            localStorage.setItem("mL", "0");
        } else {
            localStorage.mL = 0;
        }
        // Money
        if (localStorage.money > 0) {
            localStorage.setItem("money", "0");
        } else {
            localStorage.money = 0;
        }
    }
}
function testNull () {
    // Local Storage
    if (localStorage.kills == null) {
        localStorage.kills = 0;
    }
    if (localStorage.deaths == null) {
        localStorage.deaths = 0;
    }
    if (localStorage.bullets == null) {
        localStorage.bullets = 0;
    }
    if (localStorage.missles == null) {
        localStorage.missles = 0;
    }
    // Bullets
    if (localStorage.bD == null) {
        localStorage.bD = 1;
    }
    if (localStorage.bC == null) {
        localStorage.bC = 0;
    }
    if (localStorage.bL == null) {
        localStorage.bL = 1;
    }
    // Missles
    if (localStorage.mD == null) {
        localStorage.mD = 3;
    }
    if (localStorage.mC == null) {
        localStorage.mC = 0;
    }
    if (localStorage.mL == null) {
        localStorage.mL = 1;
    }
    // Money
    if (localStorage.money == null) {
        localStorage.money = 0;
    }
}
function localStorageData () {
    // Test for Null
    testNull();
}
function mouseDown () {
    if (mouseIsPressed) {
        mouseIsPressed = false;
    }
}
function mouseMove () {
    // Get Rectangle Info About Canvas Location
    let cnvRect = cnv.getBoundingClientRect(); 
    // Calc Mouse Coordinates Using Mouse Event and Canvas Location Info
    mouseX = Math.round(event.clientX - cnvRect.left);
    mouseY = Math.round(event.clientY - cnvRect.top);
}
function mouseUp () {
    if (mouseIsPressed == false) {
        mouseIsPressed = true;
    }
}
function drawUpgradeMenu () {
    if (showstart) {
        rect(20, 67, 300, 50, "black", "fill");
        rect(20, 67, 300, 50, "white", "stroke");
        drawText(115, 100, "25px", "white", "Upgrades")
        if (menuOpened == false) {
            if (mouseX >= 20 && mouseX <= 320 && mouseY >= 67 && mouseY <= 117) {
                menuOpened = true;
            }
        } else {
            if (mouseX >= 20 && mouseX <= 320 && mouseY >= 67 && mouseY <= 267) {
                // Background
                rect(20, 117, 300, 150, "black", "fill");
                rect(20, 117, 300, 150, "white", "stroke");
                drawLevel();
                // Shop
                // Upgrade Bullets
                // Boxes
                rect(30, 137, 50, 50, "white", "stroke");
                rect(85, 137, 15, 50, "white", "stroke");
                // Bars
                for (let y = 152; y < 177; y += 18) {
                    rect(85, y, 15, 1, "white", "fill");
                }
                drawText(30, 130, "10px", "gold", "Bullet Damage");
                if (localStorage.bL <= 2) {
                    drawText(108, 130, "10px", "yellow", "Cost: " + localStorage.bC);
                }
                // Upgrade Missles
                // Boxes
                rect(30, 207, 50, 50, "white", "stroke");
                rect(85, 207, 15, 50, "white", "stroke");
                // Bars
                rect(85, 230, 15, 1, "white", "fill");
                drawText(30, 200, "10px", "orange", "Missle Damage");
                if (localStorage.mL <= 1) {
                drawText(108, 200, "10px", "yellow", "Cost: " + localStorage.mC);
                }
            } else {
                menuOpened = false;
            }
        }
    }
}
function upgradeButtons () {
        if (menuOpened) {
            // Bullet Button
            if (mouseX >= 30 && mouseX <= 80 && mouseY >= 137 && mouseY <= 187) {
                rect(30, 137, 50, 50, "white", "fill");
                if (mouseIsPressed) {
                    mouseIsPressed = false;
                    if (localStorage.money >= localStorage.bC) {
                        localStorage.money = Number(localStorage.money)-localStorage.bC;
                        localStorage.bL = Number(localStorage.bL)+1;
                    }
                }
            }
            // Missle Button
            if (mouseX >= 30 && mouseX <= 80 && mouseY >= 207 && mouseY <= 257) {
                rect(30, 207, 50, 50, "white", "fill");
                if (mouseIsPressed) {
                    mouseIsPressed = false;
                    if (localStorage.money >= localStorage.mC) {
                        localStorage.money = Number(localStorage.money)-localStorage.mC;
                        localStorage.mL = Number(localStorage.mL)+1;
                    }
                }
            }
        }
}
function drawLevel () {
    if (showstart) {
        if (menuOpened) {
            // Bullets Levels
            if (localStorage.bL == 1) {
                rect(86, 171, 13, 15, "gold", "fill");
            } else if (localStorage.bL == 2) {
                rect(86, 153, 13, 33, "gold", "fill");
            } else {
                rect(86, 138, 13, 48, "gold", "fill");
            }
            // Missles Levels
            if (localStorage.mL == 1) {
                rect(86, 230, 13, 26, "gold", "fill");
            } else {
                rect(86, 208, 13, 48, "gold", "fill");
            }
        }
    }
}
function upgradeBullets () {
    // Calculate Damage
    if (localStorage.bL == 1) {
        localStorage.bD = 1;
    } else if (localStorage.bL == 2) {
        localStorage.bD = 1.5
    } else if (localStorage.bL == 3) {
        localStorage.bD = 2;
    }
    if (localStorage.bL == 1) {
        localStorage.bC = 300;
    } else if (localStorage.bL == 2) {
        localStorage.bC = 600
    }
}
function upgradeMissles () {
    // Calculate Damage
    if (localStorage.mL == 1) {
        localStorage.mD = 3;
    } else if (localStorage.mL == 2) {
        localStorage.mD = 4
    }
    if (localStorage.mL == 1) {
        localStorage.mC = 500;
    }
}
function upgradedata () {
    // Draw Menu
    drawUpgradeMenu();
    // Upgrade Bullets
    upgradeBullets();
    // Upgrade Missles
    upgradeMissles();
    // Upgrade Buttons
    upgradeButtons();
}