function setLocalData () {
    // Got Help With Some Code But Only In This Function
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
        // Player Bullet Level
        if (localStorage.bL > 0) {
            localStorage.setItem("bL", "0");
        } else {
            localStorage.bL = 1;
        }
        // Player Missle Level
        if (localStorage.mL > 0) {
            localStorage.setItem("mL", "0");
        } else {
            localStorage.mL = 1;
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
    if (localStorage.bL == null) {
        localStorage.bL = 1;
    }
    // Missles
    if (localStorage.mD == null) {
        localStorage.mD = 3;
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
function upgradeButtons () {
    if (menuOpened) {
        // Bullet Button
        if (mouseX >= 30 && mouseX <= 80 && mouseY >= 137 && mouseY <= 187) {
            rect(30, 137, 50, 50, "white", "fill");
            if (mouseIsPressed) {
                mouseIsPressed = false;
                if (localStorage.money >= upgradeBulletCost) {
                    localStorage.money = Number(localStorage.money)-upgradeBulletCost;
                    localStorage.bL = Number(localStorage.bL)+1;
                }
            }
        }
        // Missle Button
        if (mouseX >= 30 && mouseX <= 80 && mouseY >= 207 && mouseY <= 257) {
            rect(30, 207, 50, 50, "white", "fill");
            if (mouseIsPressed) {
                mouseIsPressed = false;
                if (localStorage.money >= upgradeMissleCost) {
                    localStorage.money = Number(localStorage.money)-upgradeMissleCost;
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
    upgradeBulletCost = 500;
} else if (localStorage.bL == 2) {
    upgradeBulletCost = 1500
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
    upgradeMissleCost = 1000;
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