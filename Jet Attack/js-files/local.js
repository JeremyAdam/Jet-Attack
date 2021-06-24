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
    if (localStorage.msL == null) {
        localStorage.msL = 1;      // Movement Speed Level
    }
    if (localStorage.dmL == null) {
        localStorage.dmL = 1;      // Death Money Level
    }
    if (localStorage.bmL == null) {
        localStorage.bmL = 1;      // Bonus Money Level
    }
    // Money
    if (localStorage.money == null) {
        localStorage.money = 0;      // Player Money
    }
}
function upgradeButtons () {
    if (menuOpened) {
        // Bullet Button
        if (slotOneOpened) {
            if (mouseX >= 265 && mouseX <= 315 && mouseY >= 340 && mouseY <= 390) {
                buttonHighlight(upgradeBulletCost);
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
        }
        // Missle Button
        if (slotTwoOpened) {
            if (mouseX >= 265 && mouseX <= 315 && mouseY >= 340 && mouseY <= 390) {
                buttonHighlight(upgradeMissleCost);
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
        }
        if (slotThreeOpened) {
            // Cooldown Button
            if (mouseX >= 265 && mouseX <= 315 && mouseY >= 340 && mouseY <= 390) {
                buttonHighlight(upgradeCooldownCost);
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
        if (slotFourOpened) {
            // Health Button
            if (mouseX >= 265 && mouseX <= 315 && mouseY >= 340 && mouseY <= 390) {
                buttonHighlight(upgradeHealthCost);
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
        }
        if (slotFiveOpened) {
            // Speed Button
            if (mouseX >= 265 && mouseX <= 315 && mouseY >= 340 && mouseY <= 390) {
                buttonHighlight(upgradeSpeedCost);
                if (mouseIsPressed && mouseIsUp == false) {
                    mouseIsPressed = false;
                    if (localStorage.money >= upgradeSpeedCost) {
                        if (localStorage.msL <= 2) {
                            localStorage.money = Number(localStorage.money)-upgradeSpeedCost;
                            localStorage.msL = Number(localStorage.msL)+1;
                        }
                    }
                }
            }
        }
        if (slotSixOpened) {
            // Death Button
            if (mouseX >= 265 && mouseX <= 315 && mouseY >= 340 && mouseY <= 390) {
                buttonHighlight(upgradeDeathCost);
                if (mouseIsPressed && mouseIsUp == false) {
                    mouseIsPressed = false;
                    if (localStorage.money >= upgradeDeathCost) {
                        if (localStorage.dmL <= 2) {
                            localStorage.money = Number(localStorage.money)-upgradeDeathCost;
                            localStorage.dmL = Number(localStorage.dmL)+1;
                        }
                    }
                }
            }
        }
        if (slotSevenOpened) {
            // Bonus Button
            if (mouseX >= 265 && mouseX <= 315 && mouseY >= 340 && mouseY <= 390) {
                buttonHighlight(upgradeBonusCost)
                if (mouseIsPressed && mouseIsUp == false) {
                    mouseIsPressed = false;
                    if (localStorage.money >= upgradeBonusCost) {
                        if (localStorage.bmL <= 2) {
                            localStorage.money = Number(localStorage.money)-upgradeBonusCost  ;
                            localStorage.bmL = Number(localStorage.bmL)+1;
                        }
                    }
                }
            }
        }
    }
}
function buttonHighlight (cost) {
    if (localStorage.money >= cost) {
        rect(265, 340, 50, 50, "lightgreen", "fill");
    } else {
        rect(265, 340, 50, 50, "tomato", "fill");
    }
    rect(265, 340, 50, 50, "white", "stroke");
}
function drawLevel () {
    if (showstart) {
        if (menuOpened) {
            // Bullet Levels
            if (localStorage.bL == 1) {
                rect(26, 141, 33.33, 8, "gold", "fill");
            } else if (localStorage.bL == 2) {
                rect(26, 141, 66.66, 8, "gold", "fill");
            } else {
                rect(26, 141, 99, 8, "gold", "fill");
            }
            // Missle Levels
            if (localStorage.mL == 1) {
                rect(26, 181, 33.33, 8, "orange", "fill");
            } else if (localStorage.mL == 2) {
                rect(26, 181, 66.66, 8, "orange", "fill");
            } else {
                rect(26, 181, 99, 8, "orange", "fill");
            }
            // Cooldown Levels
            if (localStorage.cL == 1) {
                rect(26, 221, 33.33, 8, "lightcyan", "fill");
            } else if (localStorage.cL == 2) {
                rect(26, 221, 66.66, 8, "lightcyan", "fill");
            } else {
                rect(26, 221, 99, 8, "lightcyan", "fill");
            }
            // Cooldown Levels
            if (localStorage.hL == 1) {
                rect(26, 261, 15, 8, "lightgreen", "fill");
            } else if (localStorage.hL == 2) {
                rect(26, 261, 31, 8, "lightgreen", "fill");
            } else if (localStorage.hL == 3) {
                rect(26, 261, 47, 8, "lightgreen", "fill");
            } else if (localStorage.hL == 4) {
                rect(26, 261, 64, 8, "lightgreen", "fill");
            } else if (localStorage.hL == 5) {
                rect(26, 261, 81, 8, "lightgreen", "fill");
            } else {
                rect(26, 261, 99, 8, "lightgreen", "fill");
            }
            // Speed Levels
            if (localStorage.msL == 1) {
                rect(26, 301, 33.33, 8, "aqua", "fill");
            } else if (localStorage.msL == 2) {
                rect(26, 301, 66.66, 8, "aqua", "fill");
            } else {
                rect(26, 301, 99, 8, "aqua", "fill");
            }
            // Death Levels
            if (localStorage.dmL == 1) {
                rect(26, 341, 50, 8, "goldenrod", "fill");
            } else {
                rect(26, 341, 99, 8, "goldenrod", "fill");
            }
            // Bonus Levels
            if (localStorage.bmL == 1) {
                rect(26, 381, 33.33, 8, "goldenrod", "fill");
            } else if (localStorage.bmL == 2) {
                rect(26, 381, 66.66, 8, "goldenrod", "fill");
            } else {
                rect(26, 381, 99, 8, "goldenrod", "fill");
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
function upgradeSpeed () {
    // Calcualte Speed
    if (localStorage.msL == 1) {
        player.xSpeed = 1.5;
        player.ySpeed = 1.75;
    } else if (localStorage.msL == 2) {
        player.xSpeed = 1.75;
        player.ySpeed = 2;
    } else if (localStorage.msL == 3) {
        player.xSpeed = 2;
        player.ySpeed = 2.25;
    }
    //Caluclate Cost
    if (localStorage.msL == 1) {
        upgradeSpeedCost = 500;
    } else if (localStorage.msL == 2) {
        upgradeSpeedCost = 750;
    }
}
function upgradeDeathMoney () {
    // Calculate Money
    if (localStorage.dmL == 1) {
        blueDrop = 15;
        purpleDrop = 20;
        yellowDrop = 20;
        redDrop = 25;
    } else if (localStorage.dmL == 2) {
        blueDrop = 30;
        purpleDrop = 35;
        yellowDrop = 35;
        redDrop = 40; 
    }
    //Caluclate Cost
    if (localStorage.dmL == 1) {
        upgradeDeathCost = 1000;
    }
}
function upgradeBonusMoney () {
    // Calculate Money
    if (localStorage.bmL == 1) {
        smallDrop = 50;
        normalDrop = 75;
        mediumDrop = 100;
        bigDrop = 150;
    } else if (localStorage.bmL == 2) {
        smallDrop = 75;
        normalDrop = 100;
        mediumDrop = 125;
        bigDrop = 175;
    } else if (localStorage.bmL == 3) {
        smallDrop = 150;
        normalDrop = 200;
        mediumDrop = 250;
        bigDrop = 300;
    }
    //Caluclate Cost
    if (localStorage.bmL == 1) {
        upgradeBonusCost = 500;
    } else if (localStorage.bmL == 2) {
        upgradeBonusCost = 1000;
    }
}
function upgradedata () {
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
    // Upgrade Speed
    upgradeSpeed();
    // Upgrade Death Money
    upgradeDeathMoney();
    // Upgrade Bonus Money
    upgradeBonusMoney();
}