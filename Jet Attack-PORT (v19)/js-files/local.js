function testNull () {
    // Local Storage
    // Cool Info
    if (localStorage.kills == null) {
        localStorage.kills = 0;        // Total Kills
    }
    if (localStorage.deaths == null) {
        localStorage.deaths = 0;       // Total Deaths
    }
    if (localStorage.bullets == null) {
        localStorage.bullets = 0;      // Total Bullets
    }
    if (localStorage.missles == null) {
        localStorage.missles = 0;      // Total Missles
    }
    // Levels
    if (localStorage.bL == null) {
        localStorage.bL = 1;      // Bullet Level
    }
    if (localStorage.mL == null) {
        localStorage.mL = 1;      // Missle Level
    }
    if (localStorage.hL == null) {
        localStorage.hL = 1;      // Health Level
    }
    if (localStorage.cL == null) {
        localStorage.cL = 1;      // Cooldown Level
    }
    // Money
    if (localStorage.money == null) {
        localStorage.money = 0;      // Player Money
    }
}
function upgradeButtons () {
    if (menuOpened) {
        // Bullet Button
        if (mouseX >= 30 && mouseX <= 80 && mouseY >= 137 && mouseY <= 187) {
            rect(30, 137, 50, 50, "white", "fill");
            if (mouseIsPressed && mouseIsUp == false) {
                mouseIsPressed = false;
                if (localStorage.money >= upgradeBulletCost) {
                    if (localStorage.bL <= 2) {
                        localStorage.money = Number(localStorage.money)-upgradeBulletCost;
                        localStorage.bL = Number(localStorage.bL)+1;
                    }
                }
            }
        }
        // Missle Button
        if (mouseX >= 30 && mouseX <= 80 && mouseY >= 207 && mouseY <= 257) {
            rect(30, 207, 50, 50, "white", "fill");
            if (mouseIsPressed && mouseIsUp == false) {
                mouseIsPressed = false;
                if (localStorage.money >= upgradeMissleCost) {
                    if (localStorage.mL <= 2) {
                        localStorage.money = Number(localStorage.money)-upgradeMissleCost;
                        localStorage.mL = Number(localStorage.mL)+1;
                    }
                }
            }
        }
        // Health Button
        if (mouseX >= 180 && mouseX <= 230 && mouseY >= 207 && mouseY <= 257) {
            rect(180, 207, 50, 50, "white", "fill");
            if (mouseIsPressed && mouseIsUp == false) {
                mouseIsPressed = false;
                if (localStorage.money >= upgradeHealthCost) {
                    if (localStorage.hL <= 5) {
                        localStorage.money = Number(localStorage.money)-upgradeHealthCost;
                        localStorage.hL = Number(localStorage.hL)+1;
                    }
                }
            }
        }
        // Cooldown Button
        if (mouseX >= 180 && mouseX <= 230 && mouseY >= 137 && mouseY <= 187) {
            rect(180, 137, 50, 50, "white", "fill");
            if (mouseIsPressed && mouseIsUp == false) {
                mouseIsPressed = false;
                if (localStorage.money >= upgradeCooldownCost) {
                    if (localStorage.cL <= 2) {
                        localStorage.money = Number(localStorage.money)-upgradeCooldownCost;
                        localStorage.cL = Number(localStorage.cL)+1;
                    }
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
                rect(86, 240, 13, 16, "orange", "fill");
            } else if (localStorage.mL == 2) {
                rect(86, 222, 13, 34, "orange", "fill");
            } else {
                rect(86, 208, 13, 48, "orange", "fill");
            }
            // Health Levels
            if (localStorage.hL == 1) {
                rect(236, 248, 13, 8, "lightgreen", "fill");
            } else if (localStorage.hL == 2) {
                rect(236, 239.5, 13, 16.5, "lightgreen", "fill");
            } else if (localStorage.hL == 3) {
                rect(236, 231.5, 13, 24.5, "lightgreen", "fill");
            } else if (localStorage.hL == 4) {
                rect(236, 222.5, 13, 33.5, "lightgreen", "fill");
            } else if (localStorage.hL == 5) {
                rect(236, 215.5, 13, 40.5, "lightgreen", "fill");
            } else {
                rect(236, 208, 13, 48, "lightgreen", "fill");
            }
            // Cooldown Levels
            if (localStorage.cL == 1) {
                rect(236, 171, 13, 15, "gainsboro", "fill");
            } else if (localStorage.cL == 2) {
                rect(236, 153, 13, 33, "gainsboro", "fill");
            } else {
                rect(236, 138, 13, 48, "gainsboro", "fill");
            }
        }
    }
}
function upgradeBullets () {
    // Calculate Damage
    if (localStorage.bL == 1) {
        player.bD = 1;
    } else if (localStorage.bL == 2) {
        player.bD = 1.5
    } else if (localStorage.bL == 3) {
        player.bD = 2;
    }
    // Calculate Cost
    if (localStorage.bL == 1) {
        upgradeBulletCost = 500;
    } else if (localStorage.bL == 2) {
        upgradeBulletCost = 1500
    }
}
function upgradeMissles () {
    // Calculate Damage
    if (localStorage.mL == 1) {
        player.mD = 3;
    } else if (localStorage.mL == 2) {
        player.mD = 3.5;
    }
    else if (localStorage.mL == 3) {
        player.mD = 4;
    }
    // Calculate Cost
    if (localStorage.mL == 1) {
        upgradeMissleCost = 1000;
    } else if (localStorage.mL == 2) {
        upgradeMissleCost = 2000;
    }
}
function upgradeHealth () {
    // Calculate Health
    if (localStorage.hL == 1) {
        player.maxhP = 100;
    } else if (localStorage.hL == 2) {
        player.maxhP = 110;
    } else if (localStorage.hL == 3) {
        player.maxhP = 120;
    } else if (localStorage.hL == 4) {
        player.maxhP = 130;
    } else if (localStorage.hL == 5) {
        player.maxhP = 140;
    } else if (localStorage.hL == 6) {
        player.maxhP = 150;
    }
    // Calculate Cost
    if (localStorage.hL == 1) {
        upgradeHealthCost = 250;
    } else if (localStorage.hL == 2) {
        upgradeHealthCost = 500;
    } else if (localStorage.hL == 3) {
        upgradeHealthCost = 750;
    } else if (localStorage.hL == 4) {
        upgradeHealthCost = 1000;
    } else if (localStorage.hL == 5) {
        upgradeHealthCost = 1250;
    }
}
function upgradeCooldown () {
    // Caluclate Cooldown
    if (localStorage.cL == 1) {
        player.aC = 4;
        player.mAC = .3;
    } else if (localStorage.cL == 2) {
        player.aC = 4.5;
        player.mAC = .5;
    } else if (localStorage.cL == 3) {
        player.aC = 5;
        player.mAC = .7;
    }
    // Calculate Cost
    if (localStorage.cL == 1) {
        upgradeCooldownCost = 500;
    } else if (localStorage.cL == 2) {
        upgradeCooldownCost = 750;
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
    // Upgrade Health
    upgradeHealth();
    // Upgrade Cooldowns
    upgradeCooldown();
}