//
// Draw Functions
//
function drawBackground () {
    ctx.drawImage(backgroundImage, 0, 0, cnv.width, cnv.height);
    if (gameOn) {
        drawText()
    }
}
// Draws the Bar and Info on Top
function drawTopBar () {
    // Background
    rect(0, 0, cnv.width, 50, "black", "fill");
    rect(0, 48, cnv.width, 2, "white", "fill");
    // Player Score
    drawText(450, 18, "15px", "white", "Score: " + player.score);
    drawText(450, 38, "15px", "white", "Best Score: " + bestScore);
    // Player Money
    drawText(250, 28, "15px", "gold", "Money: " + localStorage.money);
    // Amount of Enemies
    drawText(680, 28, "15px", "tomato", "[ " + eA.length + " ]");
    // Health Bar Border
    rect(9, 4, player.maxhP + 2, 17, "white", "stroke");
    rect(10, 5, player.hp, 15, "lime", "fill");
    for (let x = 20; x < player.maxhP + 10; x += 10) {
        rect(x, 5, 1, 15, "white", "fill");
        if (x < 20) {
            x = 20;
        }
    }
    if (player.hp < 0) {
        player.hp = 0;
    }
    // Invincebility Timer
    rect(10, 27, player.inv, 15, player.invCol, "fill");
    rect(9, 26, 102, 17, "white", "stroke");
    drawText(12, 38, "10px", "white", "Invincibility");
    // Attack Cooldowns
    // Bullet
    rect(840, 5, player.aCT, 15, "gold", "fill");
    rect(840, 4, 151, 17, "white", "stroke");
    drawText(842, 16, "10px", "white", "Bullet Cooldown");
    // Missle
    rect(840, 27, player.mACT, 15, "orange", "fill");
    rect(840, 26, 151, 17, "white", "stroke");
    drawText(842, 38, "10px", "white", "Missle Cooldown");
}
function start () {
    if (showstart) {
        if (openTimes == 0) {
            // Show the Start Screen
            rect(780, 452, 200, 50, "black", "fill");
            rect(780, 452, 200, 50, "white", "stroke");
            drawText(820, 480, "15px", "white", "Press [ R ] to start.")
        } else {
            // Show the Restart Screen
            rect(780, 452, 200, 50, "black", "fill");
            rect(780, 452, 200, 50, "white", "stroke");
            drawText(810, 480, "15px", "white", "Press [ R ] to restart.")
        }
        // Key Info Box
        rect(780, 67, 200, 190, "black", "fill");
        rect(780, 67, 200, 190, "white", "stroke");
        // Title
        drawText(845, 90, "15px", "skyblue", "KeyBinds");
        // Info
        drawText(788, 120, "15px", "white", "[ W ] [ A ] [ S ] [ D ] to move.");
        drawText(788, 150, "15px", "white", "[ J ] to shoot bullets.");
        drawText(788, 180, "15px", "white", "[ K ] to shoot Missles.");
        drawText(788, 210, "15px", "white", "[ 8 ] to hide clouds.");
        drawText(788, 240, "15px", "white", "[ 9 ] to clear all data.");
        // Other Info Box
        rect(780, 275, 200, 160, "black", "fill");
        rect(780, 275, 200, 160, "white", "stroke");
        // Title
        drawText(845, 300, "15px", "tomato", "Cool Info");
        // Info
        drawText(788, 330, "15px", "white", "Total Kills: " + localStorage.getItem("kills"));
        drawText(788, 360, "15px", "white", "Total Deaths: " + localStorage.getItem("deaths"));
        drawText(788, 390, "15px", "white", "Total Bullets: " + localStorage.getItem("bullets"));
        drawText(788, 420, "15px", "white", "Total Missles: " + localStorage.getItem("missles"));
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
                rect(20, 117, 300, 150, "SlateGray", "fill");
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
                drawText(113, 163, "10px", "white", "Damage: " + player.bD);
                if (localStorage.bL <= 2) {
                    drawText(108, 130, "10px", "yellow", "Cost: " + upgradeBulletCost);
                } else {
                    drawText(108, 130, "10px", "yellow", "MAX");
                }
                // Upgrade Missles
                // Boxes
                rect(30, 207, 50, 50, "white", "stroke");
                rect(85, 207, 15, 50, "white", "stroke");
                // Bars
                for (let y = 222; y < 247; y += 18) {
                    rect(85, y, 15, 1, "white", "fill");
                }
                drawText(30, 200, "10px", "orange", "Missle Damage");
                drawText(113, 233, "10px", "white", "Damage: " + player.mD);
                if (localStorage.mL <= 2) {
                    drawText(108, 200, "10px", "yellow", "Cost: " + upgradeMissleCost);
                } else {
                    drawText(108, 200, "10px", "yellow", "MAX");
                }
                // Upgrade Health
                // Boxes
                rect(180, 207, 50, 50, "white", "stroke");
                rect(235, 207, 15, 50, "white", "stroke");
                // Bars
                for (let y = 215; y < 250; y += 8.3) {
                    rect(235, y, 15, 1, "white", "fill");
                }
                drawText(180, 200, "10px", "lightgreen", "Max Health");
                drawText(260, 233, "10px", "white", "Health: " + player.maxhP);
                if (localStorage.hL <= 5) {
                    drawText(258, 200, "10px", "yellow", "Cost: " + upgradeHealthCost);
                } else {
                    drawText(258, 200, "10px", "yellow", "MAX");
                }
                // Upgrade Cooldown
                // Boxes
                rect(180, 137, 50, 50, "white", "stroke");
                rect(235, 137, 15, 50, "white", "stroke");
                // Bars
                for (let y = 152; y < 177; y += 18) {
                    rect(235, y, 15, 1, "white", "fill");
                }
                drawText(180, 130, "10px", "gainsboro", "Cooldowns");
                drawText(260, 153, "10px", "white", "Bullet: " + player.aC);
                drawText(260, 173, "10px", "white", "Missle: " + player.mAC);
                if (localStorage.cL <= 2) {
                    drawText(258, 130, "10px", "yellow", "Cost: " + upgradeCooldownCost);
                } else {
                    drawText(258, 130, "10px", "yellow", "MAX");
                }
            } else {
                menuOpened = false;
            }
        }
    }
}
function drawWariningMenu () {
    if (showstart) {
        if (warningMenu) {
            // Background
            rect(350, 250, 250, 100, "black", "fill");
            rect(350, 250, 250, 100, "white", "stroke");
            // Warning
            drawText(390, 270, "15px", "tomato", "Are you sure you want to"); // Line 1
            drawText(420, 290, "15px", "tomato", "reset your data?"); // Line 2
            // Yes Button
            rect(355, 320, 75, 25, "white", "stroke");
            drawText(375, 338, "15px", "white", "YES");
            // No Button
            rect(520, 320, 75, 25, "white", "stroke");
            drawText(546, 338, "15px", "white", "NO");
        }
    }
}
function warningMenuFunctionality() {
    if (warningMenu) {
        // Yes Button
        if (mouseX >= 355 && mouseX <= 430 && mouseY >= 320 && mouseY <= 345) {
            rect(355, 320, 75, 25, "tomato", "stroke");
            if (mouseIsPressed) {
                warningMenu = false;
                localStorage.clear();
            }
        }
        // No Button
        if (mouseX >= 520 && mouseX <= 595 && mouseY >= 320 && mouseY <= 345) {
            rect(520, 320, 75, 25, "tomato", "stroke");
            if (mouseIsPressed) {
                warningMenu = false;
            }
        }
    }
}
function drawWarningData() {
    // Draw the Menu
    drawWariningMenu();
    // Menu Functionality
    warningMenuFunctionality();
}