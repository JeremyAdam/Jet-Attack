//
// Enemy Functions
//
function drawNewEnemy (type) {
    return {
        x: 1050,
        y: randomInt(50, 500),
        w: 100,
        h: 50,
        type: type,                 // Type of Enemy
        xSpeed: 2,                  // x Coord Speed
        ySpeed: 2,                  // y Coord Speed
        stop: randomInt(600, 800),  // x Stop Coord
        stopStop: false,            // Stop the Stop Coord
        stopLeft: false,            // Stop at Left Wall
        stopRight: false,           // Stop at Right Wall
        moveL: false,               // Move Plane Left
        moveR: false,               // Move Plane Right
        moveU: false,               // Move Plane Up
        moveD: false,               // Move Plane Down
        moving: false,              // Tests if Plane is Moving
        moveTimer: randomInt(100, 300),// Move L/R Timer
        hp: 2,                      // Hitpoints
        inv: 100,                   // Invincibility Timer
        hit: false,                 // If Enemy Hit True/False
        canHit: true,               // If a Enemy Can Be Hit by Bullet
        bulletHit: false,           // Test if Hit by Bullet
        missleHit: false,           // Test if Hit by Missle
        canHitMissle: true,         // If Enemy Can Be Hit by Missle
        firstSpawned: true,         // Tests if Enemy is First Spawned
        stage: 0,                   // Stage of Explosion
        draw: true,                 // Draw Explosion
        shooting: false,            // Tests if Enemy is Shooting
        shootingMissles: false,     // Tests if Enemy is Shooting Missles
        canshoot: true,             // Makes it So Enemies Can Shoot
        canShootMissles: true,      // Tests if Enemies Can Shoot
        aCT: 100,                   // Attack Speed Timer For Enemy Bullets
        aC: 1,                      // Attack Speed For Enemy Bullets
        mACT: randomInt(400, 700),  // Attack Speed Timer For Enemy Missles
        mAC: 1,                     // Attack Speed For Enemy Missles
        warning: 100,               // The Warning Before the Missle
    }
}
function drawEnemyType (type, img, imgHurt) {
    for (let i = 0; i < eA.length; i++) {
        if (eA[i].draw) {
            if (eA[i].type == type) {
                if (eA[i].canHit == false || eA[i].canHitMissle == false) {
                    ctx.drawImage(imgHurt, eA[i].x, eA[i].y, eA[i].w, eA[i].h)
                } else {
                    ctx.drawImage(img, eA[i].x, eA[i].y, eA[i].w, eA[i].h)
                }
            }
        }
    }
}
function firstSpawnedValues () {
    for (let i = 0; i < eA.length; i++) {
        if (eA[i].firstSpawned) {
            let tempOne = randomInt(1, 3);
            if (tempOne == 1) {
                eA[i].moveU = true;
            } else if (tempOne == 2) {
                eA[i].moveD = true;
            }
            if (eA[i].type == 1) {
                eA[i].ySpeed = randomDec(2, 2.5);
                eA[i].xSpeed = 6;
                eA[i].hp = 2;
                eA[i].aC = .5;
                eA[i].mAC = 0;
            } else if (eA[i].type == 2) {
                eA[i].ySpeed = randomDec(3, 3.5);
                eA[i].xSpeed = 7;
                eA[i].hp = 5;
                eA[i].aC = 1.5;
                eA[i].mAC = 0;
            } else if (eA[i].type == 3) {
                eA[i].ySpeed = randomDec(4, 4.5);
                eA[i].xSpeed = 9;
                eA[i].hp = 4;
                eA[i].aC = 0;
                eA[i].mAC = 2.5;
            } else if (eA[i].type == 4) {
                eA[i].ySpeed = randomDec(3.5, 4);
                eA[i].xSpeed = 7.5;
                eA[i].hp = 7;
                eA[i].aC = 2;
                eA[i].mAC = 1;
            }
            eA[i].firstSpawned = false;
        }
    }
}
function enemyHit () {
    for (let i = 0; i < eA.length; i++) {
        // Enemy Hit and Invincibility Timer for Bullets
        if (eA[i].bulletHit) {
            if (eA[i].hit) {
                if (eA[i].canHit) {
                    eA[i].inv = 100;
                    eA[i].hp -= localStorage.bD;
                    eA[i].canHit = false;
                }
                if (eA[i].hp > 0) {
                    eA[i].inv -= 2;
                }
                if (eA[i].inv <= 0) {
                    eA[i].inv = 100;
                    eA[i].hit = false;
                    eA[i].canHit = true;
                    eA[i].bulletHit = false;
                }
            }
        }
        // Enemy Hit and Invincibility Timer for Missles
        if (eA[i].missleHit) {
            if (eA[i].hit) {
                if (eA[i].canHitMissle) {
                    eA[i].inv = 50;
                    eA[i].hp -= localStorage.mD;
                    eA[i].canHitMissle = false;
                }
                if (eA[i].hp > 0) {
                    eA[i].inv -= 2;
                }
                if (eA[i].inv <= 0) {
                    eA[i].inv = 50;
                    eA[i].hit = false;
                    eA[i].canHitMissle = true;
                    eA[i].missleHit = false;
                }
            }
        }
    }
}
function enemyExplode () {
    for (let i = 0; i < eA.length; i++) {
        // Make Enemy Explode
        if (eA[i].hp <= 0) {
            eA[i].moveU = false;
            eA[i].moveD = false;
            eA[i].moveL = false;
            eA[i].moveR = false;
            if (eA[i].stage <= 10) {
                eA[i].stage += 1;
                circle(eA[i].x + eA[i].w / 2, eA[i].y + eA[i].w / 3, 30, "white", "fill");
            } else if (eA[i].stage <= 20) {
                circle(eA[i].x + eA[i].w / 2, eA[i].y + eA[i].w / 3, 40, "yellow", "fill");
                eA[i].stage++;
            } else if (eA[i].stage <= 30) {
                circle(eA[i].x + eA[i].w / 2, eA[i].y + eA[i].w / 3, 50, "orange", "fill");
                eA[i].stage++;
            } else if (eA[i].stage <= 40) {
                circle(eA[i].x + eA[i].w / 2, eA[i].y + eA[i].w / 3, 55, "red", "fill");
                eA[i].stage++;
            } else if (eA[i].stage < 45) {
                circle(eA[i].x + eA[i].w / 2, eA[i].y + eA[i].w / 3, 55, "red", "fill");
                eA[i].draw = false;
                eA[i].stage++;
            } else if (eA[i].stage < 46) {
                eA[i].stage++;
                enemiesKilled++;
                localStorage.kills = Number(localStorage.kills)+1;
                enemySpawnTimer.s += .1;
                if (testEnemyType(1)) {
                    player.score += 1000
                    localStorage.money = Number(localStorage.money)+5;
                } else if (testEnemyType(2)) {
                    player.score += 5000
                    localStorage.money = Number(localStorage.money)+10;
                } else if (testEnemyType(3)) {
                    player.score += 4000
                    localStorage.money = Number(localStorage.money)+10;
                } else {
                    player.score += 6000
                    localStorage.money = Number(localStorage.money)+15;
                }
                eA.splice(i, 1);
            }
        }
    }
}
function stopEnemy () {
    for (let i = 0; i < eA.length; i++) {
        // Stop Enemy at a Random x Cord
        if (eA[i].stopStop == false) {
            if (eA[i].x > eA[i].stop) {
                eA[i].x -= eA[i].xSpeed;
            } else {
                eA[i].moveL = false;
                eA[i].moveR = false;
                eA[i].xSpeed = 2;
                eA[i].stopStop = true;
                eA[i].shooting = true;
            }
        }

    }
}
function moveEnemy () {
    for (let i = 0; i < eA.length; i++) {
        if (eA[i].shootingMissles == false) {
            if (eA[i].stopStop) {
                if (eA[i].moveR) {
                    eA[i].moving = true;
                    eA[i].x += eA[i].xSpeed;
                } else {
                    eA[i].moving = false;
                }
                if (eA[i].moveL) {
                    eA[i].moving = true;
                    eA[i].x -= eA[i].xSpeed;
                } else {
                    eA[i].moving = false;
                }
                if (eA[i].moving == false) {
                    if (eA[i].moveU) {
                        eA[i].y -= eA[i].ySpeed;
                    }
                    if (eA[i].moveD) {
                        eA[i].y += eA[i].ySpeed;
                    }
                }
            }
        }
    }
}
function enemyCollisionDetection () {
    for (let i = 0; i < eA.length; i++) {
        // y Coord Movement
        if (eA[i].y <= 50) {
            eA[i].moveU = false;
            eA[i].moveD = true;
        } else if(eA[i].y + eA[i].h >= cnv.height - eA[i].h) {
            eA[i].moveU = true;
            eA[i].moveD = false;
        }
        // x Coord Movement
        if (eA[i].x <= eA[i].stop - 100) {
            eA[i].moveL = false;
            eA[i].stopLeft = true;
            eA[i].stopRight = false;
        } else if (eA[i].x + eA[i].w >= eA[i].stop + 200) {
            eA[i].moveR = false;
            eA[i].stopLeft = false;
            eA[i].stopRight = true;
        } else {
            eA[i].moving = true;
        }
    }
}
function enemyMoveTimer () {
    for (let i = 0; i < eA.length; i++) {
        if (eA[i].moveTimer > 0) {
            eA[i].moveTimer -= .5;
        } else {
            let tempTwo = randomInt(1, 3);
            if (tempTwo == 1 ) {
                if (eA[i].stopLeft == false) {
                    eA[i].moveL = true;
                    eA[i].moveR = false;
                } else {
                    eA[i].moveL = false;
                    eA[i].moveR = true;
                }
            } else if (tempTwo == 2) {
                if (eA[i].stopRight == false) {
                    eA[i].moveL = false;
                    eA[i].moveR = true;
                } else {
                    eA[i].moveL = true;
                    eA[i].moveR = false;
                }
            }
            eA[i].moveTimer = randomInt(100, 300);
        }
    }
}
function testEnemyType (typeNum) {
    for (let i = 0; i < eA.length; i++) {
        if (eA[i].type == typeNum) {
            return true;
        }
    }
}
function drawEnemyBullet () {
    for (let d = 0; d < eB.length; d++) {
        // Create Bullets Rectangles
        rect(eB[d].x, eB[d].y, eB[d].w, eB[d].h, "red", "fill");
    }
}
function moveEnemyBullet () {
    for (let d = 0; d < eB.length; d++) {
        eB[d].x -= eB[d].speed;
    }
}
function enemyBulletAttackSpeed () {
    for (let i = 0; i < eA.length; i++) {
        // Sets Attack Speed To Shooting Bullets
        if (eA[i].shooting) {
            if (eA[i].canShoot) {
                eB.push({
                    x: eA[i].x + 40,
                    y: eA[i].y + 40,
                    w: 8,
                    h: 4,
                    speed: 5
                });
                if (eA[i].aCT <= 0) {
                    eA[i].aCT += 100;
                }
                eA[i].canShoot = false;
            }
        }
        if (eA[i].aCT > 0) {
            eA[i].aCT -= eA[i].aC;
        } else if (eA[i].aCT == 0) {
            eA[i].canShoot = true;
        } else if (eA[i].aCT < 0) {
            eA[i].aCT = 0;
        }
    }
}
function enemyBulletPlayerCollision () {
    for (let d = 0; d < eB.length; d++) {
        if (eB[d].x + eB[d].w >= player.x && eB[d].x <= player.x + player.w && eB[d].y + eB[d].h >= player.y && eB[d].y <= player.y + player.h) {
            if (player.hit == false) {
                eB[d].y = cnv.height;
            }
            player.hit = true;
            player.bulletHit = true;
        }       
        // Test if Bullet Goes Off Screen
        if (eB[d].x + eB[d].w < 0) {
            eB.splice(d, 1);
        }         
    }
}
function enemyMissleTest (r) {
    for (let n = 0; n < eM.length; n++) {
        if (player.x + player.w >= eM[n].x - r && player.x <= eM[n].x + r && player.y + player.h >= eM[n].y - r && player.y <= eM[n].y + r) {
            player.missleHit = true;
            player.hit = true;
        }
    }
}
function moveEnemyMissles () {
    for (let n = 0; n < eM.length; n++) {
        // Move Missle
        eM[n].x -= eM[n].s;
        eM[n].s += eM[n].a
    }
}
function enemyMisslesExplode () {
    for (let n = 0; n < eM.length; n++) {
        if (eM[n].ex) {
            eM[n].s = 0;
            eM[n].a = 0;
            eM[n].draw = false;
            if (eM[n].stage <= 4) {
                eM[n].stage += 1;
                circle(eM[n].x + 10, eM[n].y, 20, "white", "fill");
                enemyMissleTest(20)
            } else if (eM[n].stage <= 8) {
                circle(eM[n].x + 10, eM[n].y, 30, "yellow", "fill");
                eM[n].stage++;
                enemyMissleTest(30)
            } else if (eM[n].stage <= 12) {
                circle(eM[n].x + 10, eM[n].y, 40, "orange", "fill");
                eM[n].stage++;
                enemyMissleTest(40)
            } else if (eM[n].stage <= 16) {
                circle(eM[n].x + 10, eM[n].y, 50, "red", "fill");
                eM[n].stage++;
                enemyMissleTest(50)
            } else if (eM[n].stage <= 20) {
                circle(eM[n].x + 10, eM[n].y, 60, "red", "fill");
                eM[n].stage++;
                enemyMissleTest(60)
            } else {
                eM[n].y = cnv.height + 500;
                eM[n].s += 10;
            }
        }
    }
}
function drawEnemyMissles () {
    for (let n = 0; n < eM.length; n++) {
        // Draw Enemies Missles
        if (eM[n].draw == true) {
            ctx.drawImage(enemyMissle, eM[n].x, eM[n].y, eM[n].w, eM[n].h);
        }
    }
}
function enemyMisslePlayerCollision () {
    for (let n = 0; n < eM.length; n++) {
        // Collision Detection for Missle
        for (let i = 0; i < eA.length; i++) {
            if (eM[n].x <= player.x + player.w / 2) {
                eM[n].ex = true;
            }
        }
        // Test if Missle Goes Off Screen
        if (eM[n].x + eM[n].w <= 0) {
            eM.splice(n, 1);
        }
    }
}
function enemyMissleAttackSpeed () {
    for (let i = 0; i < eA.length; i++) {
        // Sets Attack Speed to Shooting Missles
        if (eA[i].type == 3 || eA[i].type == 4) {
            if (eA[i].shooting) {
                if (eA[i].mACT <= 0) {
                    if (eA[i].canShootMissles) {
                        eA[i].shootingMissles = true;
                        if (eA[i].warning <= 0) {
                            eA[i].warning = 102;
                            eM.push(
                                {
                                    x: eA[i].x + 15,
                                    y: eA[i].y + 25,
                                    w: 30,
                                    h: 10,
                                    s: 2.5,             // Speed of Missle
                                    a: .2,              // Aceleration for Missles
                                    ex: false,          // Explode True/False
                                    stage: 0,           // Stage of Explosion
                                    draw: true          // Hide Missle When Exploding
                                }
                            );
                            if (eA[i].mACT <= 0) {
                                eA[i].mACT = randomInt(400, 700);
                            }
                            eA[i].canShootMissles = false;
                            eA[i].shootingMissles = false;
                        }
                    }
                }
            }
            if (eA[i].mACT > 0) {
                eA[i].mACT -= eA[i].mAC;
            } else if (eA[i].mACT == 0) {
                eA[i].canShootMissles = true;
            } else if (eA[i].mACT < 0) {
                eA[i].mACT = 0;
            }   
        }
    }
}
function drawWarning () {
    for (let i = 0; i < eA.length; i++) {
        if (eA[i].shootingMissles) {
            if (eA[i].warning > 0) {
                eA[i].warning -= 2;
                for (let x = eA[i].x - 60; x > -10; x -= 10) {
                    rect(x, eA[i].y + eA[i].h / 2, 15, 1, "red", "fill");
                    drawText(eA[i].x - 40, eA[i].y + 30, "25px", "red", "[ ! ]")
                }
            }
        }
    }
}
function enemyData () {
    // Set Certain Values When Enemy Spawns
    firstSpawnedValues();
    // Stop Enemy at Random x Coord
    stopEnemy();
    // Enemy Collision
    enemyCollisionDetection();
    // Move Enemy 
    moveEnemy();
    // Move Timer
    enemyMoveTimer();
    // Draw Enemy if Hurt and What Type
    drawEnemyType(1, enemyOneJetImage, enemyOneHurt);
    drawEnemyType(2, enemyTwoJetImage, enemyTwoHurt);
    drawEnemyType(3, enemyThreeJetImage, enemyThreeHurt);
    drawEnemyType(4, enemyFourJetImage, enemyFourHurt);
    // Detects if Enemy is Hit
    enemyHit();
    // Enemy Bullet Data
    enemyBulletData();
    // Enemy Missle Data
    enemyMissleData();
    // Explodes Enemy
    enemyExplode();
}
function enemyBulletData () {
    // Draw Bullets
    drawEnemyBullet();
    // Move Bullets
    moveEnemyBullet();
    // Collision Detection for Bullets
    enemyBulletPlayerCollision();
    // Gets Attack Speed for Bullets
    enemyBulletAttackSpeed();
}
function enemyMissleData () {
    // Draw Missles
    drawEnemyMissles();
    // Move Missles
    moveEnemyMissles();
    // Explode Missles
    enemyMisslesExplode();
    // Collision Detection for Missles
    enemyMisslePlayerCollision();
    // Gets Attack Speed for Missles
    enemyMissleAttackSpeed();
    // Draw Warning
    drawWarning();
}