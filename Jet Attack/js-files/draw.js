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
    drawText(670, 28, "15px", "tomato", "Killed: " + enemiesKilled);
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
            if (mouseX >= 20 && mouseX <= 320 && mouseY >= 67 && mouseY <= 395) {
                // Background
                rect(20, 117, 300, 278, "slategray", "fill");
                rect(130, 117, 190, 278, "lightsteelblue", "fill");
                rect(20, 117, 300, 278, "white", "stroke");
                rect(130, 117, 1, 278, "white", "fill");
                // Draw bars Seperating Titles
                for(let y = 155; y < 381; y += 40) {
                    rect(20, y, 110, 1, "white", "fill");
                }
                drawLevel();
                // Shop
                // Bullet Damage
                // Title
                drawText(25, 130, "10px", "gold", "Bullet Damage");
                // Level Bar
                rect(25, 140, 100, 10, "white", "stroke");
                for (let x  = 25; x < 100; x += 33.33) {
                    rect(x, 140, 1, 10, "white", "fill");
                }
                // Missle Damage
                // Title
                drawText(25, 170, "10px", "orange", "Missle Damage");
                // Level Bar
                rect(25, 180, 100, 10, "white", "stroke");
                for (let x  = 25; x < 100; x += 33.33) {
                    rect(x, 180, 1, 10, "white", "fill");
                }
                // Cooldowns
                // Title
                drawText(25, 210, "10px", "lightcyan", "Weapon Cooldowns");
                // Level Bar
                rect(25, 220, 100, 10, "white", "stroke");
                for (let x  = 25; x < 100; x += 33.33) {
                    rect(x, 220, 1, 10, "white", "fill");
                }
                // Max health
                // Title            
                drawText(25, 250, "10px", "lightgreen", "Max Health");
                // Level Bar
                rect(25, 260, 100, 10, "white", "stroke");
                for (let x  = 40; x < 115; x += 16.66) {
                    rect(x, 260, 1, 10, "white", "fill");
                }
                // Movement Speed
                // Title
                drawText(25, 290, "10px", "aqua", "Movement Speed");
                // Level Bar
                rect(25, 300, 100, 10, "white", "stroke");
                for (let x  = 25; x < 100; x += 33.33) {
                    rect(x, 300, 1, 10, "white", "fill");
                }
                // Death Money
                // Title
                drawText(25, 330, "10px", "goldenrod", "Death Money");
                // Level Bar
                rect(25, 340, 100, 10, "white", "stroke");
                rect(75, 340, 1, 10, "white", "fill");
                // Bonus Money
                // Title
                drawText(25, 370, "10px", "goldenrod", "Bonus Money");
                // Level Bar;
                rect(25, 380, 100, 10, "white", "stroke");
                for (let x  = 25; x < 100; x += 33.33) {
                    rect(x, 380, 1, 10, "white", "fill");
                }
            } else {
                menuOpened = false;
            }
        }
    }
}
function upgradeMenuFunctionality () {
    if (menuOpened) {
        // Bullet
        if (slotOneOpened == false) {
            if (mouseX >= 20 && mouseX <= 130 && mouseY >= 117 && mouseY <= 157) {
                slotOneOpened = true;
            }
        } else {
            if (mouseX >= 130 && mouseX <= 320 && mouseY >= 117 && mouseY <= 395 || mouseX >= 20 && mouseX <= 130 && mouseY >= 117 && mouseY <= 157) {
                drawBulletMenu();
            } else {
                slotOneOpened = false;
            }
        }
        // Missle
        if (slotTwoOpened == false) {
            if (mouseX >= 20 && mouseX <= 130 && mouseY >= 157 && mouseY <= 197) {
                slotTwoOpened = true;
            }
        } else {
            if (mouseX >= 130 && mouseX <= 320 && mouseY >= 117 && mouseY <= 395 || mouseX >= 20 && mouseX <= 130 && mouseY >= 157 && mouseY <= 197) {
                drawMissleMenu();
            } else {
                slotTwoOpened = false;
            }
        }
        // Cooldown
        if (slotThreeOpened == false) {
            if (mouseX >= 20 && mouseX <= 130 && mouseY >= 197 && mouseY <= 237) {
                slotThreeOpened = true;
            }
        } else {
            if (mouseX >= 130 && mouseX <= 320 && mouseY >= 117 && mouseY <= 395 || mouseX >= 20 && mouseX <= 130 && mouseY >= 197 && mouseY <= 237) {
                drawCooldownMenu();
            } else {
                slotThreeOpened = false;
            }
        }
        if (slotFourOpened == false) {
            if (mouseX >= 20 && mouseX <= 130 && mouseY >= 238 && mouseY <= 277) {
                slotFourOpened = true;
            }
        } else {
            if (mouseX >= 130 && mouseX <= 320 && mouseY >= 117 && mouseY <= 395 || mouseX >= 20 && mouseX <= 130 && mouseY >= 237 && mouseY <= 277) {
                drawHealthMenu();
            } else {
                slotFourOpened = false;
            }
        }
        if (slotFiveOpened == false) {
            if (mouseX >= 20 && mouseX <= 130 && mouseY >= 277 && mouseY <= 317) {
                slotFiveOpened = true;
            }
        } else {
            if (mouseX >= 130 && mouseX <= 320 && mouseY >= 117 && mouseY <= 395 || mouseX >= 20 && mouseX <= 130 && mouseY >= 277 && mouseY <= 317) {
                drawSpeedMenu();
            } else {
                slotFiveOpened = false;
            }
        }
        if (slotSixOpened == false) {
            if (mouseX >= 20 && mouseX <= 130 && mouseY >= 317 && mouseY <= 357) {
                slotSixOpened = true;
            }
        } else {
            if (mouseX >= 130 && mouseX <= 320 && mouseY >= 117 && mouseY <= 395 || mouseX >= 20 && mouseX <= 130 && mouseY >= 317 && mouseY <= 357) {
                drawDeathMenu();
            } else {
                slotSixOpened = false;
            }
        }
        if (slotSevenOpened == false) {
            if (mouseX >= 20 && mouseX <= 130 && mouseY >= 357 && mouseY <= 397) {
                slotSevenOpened = true;
            }
        } else {
            if (mouseX >= 130 && mouseX <= 320 && mouseY >= 117 && mouseY <= 395 || mouseX >= 20 && mouseX <= 130 && mouseY >= 357 && mouseY <= 397) {
                drawBonusMenu();
            } else {
                slotSevenOpened = false;
            }
        }
    }
}
function drawBulletMenu () {
    // background
    rect(131, 117, 189, 278, "lightsteelblue", "fill");
    // Title
    drawText(160, 140, "20px", "gold", "Bullet Damage");
    // Info
    drawText(160, 170, "10px", "white", "This will upgrade the damage"); // Line 1
    drawText(160, 185, "10px", "white", "of every single bullet you shoot."); // Line 2
    if (localStorage.bL == 1) {
        drawText(160,  365, "10px", "white", "Damage: " + player.bD + "  >>>  1.5");
    } else if (localStorage.bL == 2) {
        drawText(160,  365, "10px", "white", "Damage: " + player.bD + "  >>>  2");
    } else {
        drawText(180,  365, "10px", "white", "Damage: " + player.bD);
    }
    if (localStorage.bL <= 2) {
        drawText(190, 335, "10px", "yellow", "Cost: " + upgradeBulletCost)
    } else {
        drawText(190, 335, "10px", "yellow", "MAX")
    }
    // Button
    rect(265, 340, 50, 50, "white", "stroke");
}
function drawMissleMenu () {
    // background
    rect(131, 117, 189, 278, "lightsteelblue", "fill");
    // Title
    drawText(160, 140, "20px", "orange", "Missle Damage");
    // Info
    drawText(160, 170, "10px", "white", "This will upgrade the damage"); // Line 1
    drawText(160, 185, "10px", "white", "of every single missle you shoot."); // Line 2
    if (localStorage.mL == 1) {
        drawText(160,  365, "10px", "white", "Damage: " + player.mD + "  >>>  3.5");
    } else if (localStorage.mL == 2) {
        drawText(160,  365, "10px", "white", "Damage: " + player.mD + "  >>>  4");
    } else {
        drawText(180,  365, "10px", "white", "Damage: " + player.mD);
    }
    if (localStorage.mL <= 2) {
        drawText(190, 335, "10px", "yellow", "Cost: " + upgradeMissleCost)
    } else {
        drawText(190, 335, "10px", "yellow", "MAX")
    }
    // Button
    rect(265, 340, 50, 50, "white", "stroke");
}
function drawCooldownMenu () {
    // background
    rect(131, 117, 189, 278, "lightsteelblue", "fill");
    // Title
    drawText(135, 140, "20px", "lightcyan", "Weapon Cooldowns");
    // Info
    drawText(160, 170, "10px", "white", "This will upgrade the speed"); // Line 1
    drawText(160, 185, "10px", "white", "of which your weapons shoot."); // Line 2
    if (localStorage.cL == 1) {
        drawText(135,  355, "9px", "white", "Bullet Cooldown: " + player.aC + "  >>>  4.5");
        drawText(135,  375, "9px", "white", "Missle Cooldown: " + player.mAC + "  >>>  0.5");
    } else if (localStorage.cL == 2) {
        drawText(140,  355, "9px", "white", "Bullet Cooldown: " + player.aC + "  >>>  5");
        drawText(135,  375, "9px", "white", "Missle Cooldown: " + player.mAC + "  >>>  0.7");
    } else {
        drawText(160,  355, "9px", "white", "Bullet Cooldown: " + player.aC);
        drawText(160,  375, "9px", "white", "Missle Cooldown: " + player.mAC);
    }
    if (localStorage.cL <= 2) {
        drawText(190, 335, "10px", "yellow", "Cost: " + upgradeCooldownCost)
    } else {
        drawText(190, 335, "10px", "yellow", "MAX")
    }
    // Button
    rect(265, 340, 50, 50, "white", "stroke");
}
function drawHealthMenu () {
    // background
    rect(131, 117, 189, 278, "lightsteelblue", "fill");
    // Title
    drawText(175, 140, "20px", "lightgreen", "Max Health");
    // Info
    drawText(160, 170, "10px", "white", "This will upgrade the max"); // Line 1
    drawText(160, 185, "10px", "white", "amount of health you can have."); // Line 2
    if (localStorage.hL == 1) {
        drawText(140,  365, "10px", "white", "Max Health: " + player.maxhP + "  >>>  110");
    } else if (localStorage.hL == 2) {
        drawText(140,  365, "10px", "white", "Max Health: " + player.maxhP + "  >>>  120");
    } else if (localStorage.hL == 3) {
        drawText(140,  365, "10px", "white", "Max Health: " + player.maxhP + "  >>>  130");
    } else if (localStorage.hL == 4) {
        drawText(140,  365, "10px", "white", "Max Health: " + player.maxhP + "  >>>  140");
    } else if (localStorage.hL == 5) {
        drawText(140,  365, "10px", "white", "Max Health: " + player.maxhP + "  >>>  150");
    } else {
        drawText(180,  365, "10px", "white", "Max Health: " + player.maxhP);
    }
    if (localStorage.hL <= 5) {
        drawText(190, 335, "10px", "yellow", "Cost: " + upgradeHealthCost)
    } else {
        drawText(190, 335, "10px", "yellow", "MAX")
    }
    // Button
    rect(265, 340, 50, 50, "white", "stroke");
    // Button
    rect(265, 340, 50, 50, "white", "stroke");
}
function drawSpeedMenu () {
    // background
    rect(131, 117, 189, 278, "lightsteelblue", "fill");
    // Title
    drawText(145, 140, "20px", "aqua", "Movement Speed");
    // Info
    drawText(160, 170, "10px", "white", "This will upgrade how fast"); // Line 1
    drawText(160, 185, "10px", "white", "you jet can move ."); // Line 2
    if (localStorage.msL == 1) {
        drawText(133,  355, "9px", "white", "Horizontal Speed: " + player.xSpeed + "  >>>  1.75");
        drawText(140,  375, "9px", "white", "Vertical Speed: " + player.ySpeed + "  >>>  2");
    } else if (localStorage.msL == 2) {
        drawText(140,  355, "9px", "white", "Horizontal Speed: " + player.xSpeed + "  >>>  2");
        drawText(135,  375, "9px", "white", "Vertical Speed: " + player.ySpeed + "  >>>  2.25");
    } else {
        drawText(160,  355, "9px", "white", "Horizontal Speed: " + player.xSpeed);
        drawText(160,  375, "9px", "white", "Vertical Speed: " + player.ySpeed);
    }
    if (localStorage.msL <= 2) {
        drawText(190, 335, "10px", "yellow", "Cost: " + upgradeSpeedCost)
    } else {
        drawText(190, 335, "10px", "yellow", "MAX")
    }
    // Button
    rect(265, 340, 50, 50, "white", "stroke");
    // Button
    rect(265, 340, 50, 50, "white", "stroke");
}
function drawDeathMenu () {
    // background
    rect(131, 117, 189, 278, "lightsteelblue", "fill");
    // Title
    drawText(160, 140, "20px", "goldenrod", "Death Money");
    // Info
    drawText(160, 170, "10px", "white", "This upgrade will increase"); // Line 1
    drawText(160, 185, "10px", "white", "the amount of money"); // Line 2
    drawText(160, 200, "10px", "white", "enemies will drop once killed."); // Line 2
    if (localStorage.dmL == 1) {
        drawText(160,  350, "9px", "white", "Blue: " + blueDrop + " >>> 30");
        drawText(160,  362, "9px", "white", "Purple: " + purpleDrop + " >>> 35");
        drawText(160,  374, "9px", "white", "Yellow: " + yellowDrop + " >>> 35");
        drawText(160,  386, "9px", "white", "Red: " + redDrop + " >>> 40");
    } else {
        drawText(185,  350, "9px", "white", "Blue: " + blueDrop);
        drawText(185,  362, "9px", "white", "Purple: " + purpleDrop);
        drawText(185,  374, "9px", "white", "Yellow: " + yellowDrop);
        drawText(185,  386, "9px", "white", "Red: " + redDrop);
    }
    if (localStorage.dmL <= 1) {
        drawText(190, 335, "10px", "yellow", "Cost: " + upgradeDeathCost)
    } else {
        drawText(190, 335, "10px", "yellow", "MAX")
    }
    // Button
    rect(265, 340, 50, 50, "white", "stroke");
}
function drawBonusMenu () {
    // background
    rect(131, 117, 189, 278, "lightsteelblue", "fill");
    // Title
    drawText(160, 140, "20px", "goldenrod", "Bonus Money");
    // Info
    drawText(160, 170, "10px", "white", "This upgrade will increase"); // Line 1
    drawText(160, 185, "10px", "white", "the amount of money"); // Line 2
    drawText(160, 200, "10px", "white", "given once you get killed."); // Line 2
    if (localStorage.bmL == 1) {
        drawText(160,  350, "9px", "white", "50%: 50 >>> 75");
        drawText(160,  362, "9px", "white", "30%: 75 >>> 100");
        drawText(160,  374, "9px", "white", "20%: 100 >>> 125");
        drawText(160,  386, "9px", "white", "10%: 150 >>> 175");
    } else if (localStorage.bmL == 2) {
        drawText(160,  350, "9px", "white", "50%: 75 >>> 150");
        drawText(160,  362, "9px", "white", "30%: 100 >>> 200");
        drawText(160,  374, "9px", "white", "20%: 125 >>> 250");
        drawText(160,  386, "9px", "white", "10%: 175 >>> 300");
    } else {
        drawText(180,  350, "9px", "white", "50%: 150");
        drawText(180,  362, "9px", "white", "30%: 200");
        drawText(180,  374, "9px", "white", "20%: 250");
        drawText(180,  386, "9px", "white", "10%: 300");
    }
    if (localStorage.bmL <= 2) {
        drawText(190, 335, "10px", "yellow", "Cost: " + upgradeBonusCost)
    } else {
        drawText(190, 335, "10px", "yellow", "MAX")
    }
    // Button
    rect(265, 340, 50, 50, "white", "stroke");
}
function upgradeMenuData () {
    // Draw Menu
    drawUpgradeMenu();
    // Menu Function
    upgradeMenuFunctionality();
    // Data for Local
    upgradedata();
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
            rect(355, 320, 75, 25, "tomato", "fill");
            drawText(375, 338, "15px", "white", "YES");
            if (mouseIsPressed) {
                warningMenu = false;
                localStorage.clear();
            }
        }
        // No Button
        if (mouseX >= 520 && mouseX <= 595 && mouseY >= 320 && mouseY <= 345) {
            rect(520, 320, 75, 25, "tomato", "fill");
            drawText(546, 338, "15px", "white", "NO");
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