//
// Player Functions
//
// Draws the Player's Plane
function drawPlayer () {
    // Draw Player Artwork
    if (player.draw) {
        if (player.hit) {
            ctx.drawImage(playerJetHurt, player.x, player.y, player.w, player.h);
        } else {
            ctx.drawImage(playerJetImage, player.x, player.y, player.w, player.h);
        }
    }
}
// Player Collision Detection For Canvas
function playerCollisionDetection () {
    // Left Wall
    if (player.x <= 0) {
        player.x += player.xSpeed;
    }
    // Middle of Canvas
    if (player.x + player.w > cnv.width - cnv.width / 2) {
        player.x -= player.xSpeed;
    }
    // Top wall
    if (player.y < 50) {
        player.y += player.ySpeed;
    }
    // Bottom Wall
    if (player.y + player.h > cnv.height - 50) {
        player.y -= player.ySpeed;
    }
}
// Move the Player Around
function movePlayer () {
    if (gameOn) {
        if (player.hp > 0) {
            // Move Right and Left
            if (rightPressed) {
                player.x -= player.xSpeed;
            } else if (leftPressed) {
                player.x += player.xSpeed;
            }
            // Move Player Up and Down
            if (upPressed) {
                player.y -= player.ySpeed;
            } else if (downPressed) {
                player.y += player.ySpeed;
            }
        }
    }
}
function drawNewBullet () {
    return {
        x: player.x + 55,
        y: player.y + 40,
        w: 8,
        h: 4,
        speed: 10,          // Speed of Bullets
    }
}
function drawNewPlayerMissle () {
    return {
        x: player.x + 20,
        y: player.y + 25,
        w: 30,
        h: 10,
        s: 1,             // Speed of Missle
        a: .05,              // Aceleration for Missles
        ex: false,          // Explode True/False
        stage: 0,           // Stage of Explosion
        draw: true          // Hide Missle When Exploding
    }
}
function movePlayerBullet () {
    for (let b = 0; b < pB.length; b++) {
        pB[b].x += pB[b].speed;
    }
}
function drawBullets () {
    for (let b = 0; b < pB.length; b++) {
        // Create Bullets Rectangles
        rect(pB[b].x, pB[b].y, pB[b].w, pB[b].h, "yellow", "fill");
    }
}
function playerBulletEnemyCollision () {
    for(let b = 0; b < pB.length; b++) {
        for (let i = 0; i < eA.length; i++) {
            if (pB[b].x + pB[b].w >= eA[i].x && pB[b].x <= eA[i].x + eA[i].w && pB[b].y + pB[b].h >= eA[i].y && pB[b].y <= eA[i].y + eA[i].h) {
                if (eA[i].hit == false) {
                    pB[b].y = cnv.height;
                }
                eA[i].bulletHit = true;
                eA[i].hit = true;
            }                
        }
        // Test if Bullet Goes Off Screen
        if (pB[b].x > cnv.width) {
            pB.splice(b, 1);
        }
    }
}
function playerBulletAttackSpeed () {
    // Sets Attack Speed To Shooting Bullets
    if (shooting) {
        if (canShoot) {
            localStorage.bullets = Number(localStorage.bullets)+1;
            pB.push(drawNewBullet());
            if (player.aCT <= 0) {
                player.aCT = 150;
            }
            canShoot = false;
        }
    }
    if (player.aCT > 0) {
        player.aCT -= player.aC;
    } else if (player.aCT == 0) {
        canShoot = true;
    } else if (player.aCT < 0) {
        player.aCT = 0;
    }
}
function playerMissleTest (r) {
    for (let m = 0; m < pM.length; m++) {
        for (let i = 0; i < eA.length; i++) {
            if (eA[i].x + eA[i].w >= pM[m].x - r && eA[i].x <= pM[m].x + r && eA[i].y + eA[i].h >= pM[m].y - r && eA[i].y <= pM[m].y + r) {
                eA[i].missleHit = true;
                eA[i].hit = true;
            }
        }
    }
}
function drawPlayerMissles () {
    for (let m = 0; m < pM.length; m++) {
        // Draw Player's Missles
        if (pM[m].draw == true) {
            ctx.drawImage(playerMissle, pM[m].x, pM[m].y, pM[m].w, pM[m].h);
        }
    }
}
function movePlayerMissles () {
    for (let m = 0; m < pM.length; m++) {
        // Move Missle
        pM[m].x += pM[m].s;
        pM[m].s += pM[m].a
    }
}
function playerMisslesExplode () {
    for (let m = 0; m < pM.length; m++) {
        if (pM[m].ex) {
            pM[m].s = 0;
            pM[m].a = 0;
            pM[m].draw = false;
            if (pM[m].stage <= 4) {
                pM[m].stage += 1;
                circle(pM[m].x + 10, pM[m].y, 40, "white", "fill");
                playerMissleTest(40)
            } else if (pM[m].stage <= 8) {
                circle(pM[m].x + 10, pM[m].y, 50, "yellow", "fill");
                pM[m].stage++;
                playerMissleTest(50)
            } else if (pM[m].stage <= 12) {
                circle(pM[m].x + 10, pM[m].y, 60, "orange", "fill");
                pM[m].stage++;
                playerMissleTest(60)
            } else if (pM[m].stage <= 16) {
                circle(pM[m].x + 10, pM[m].y, 70, "red", "fill");
                pM[m].stage++;
                playerMissleTest(70)
            } else if (pM[m].stage <= 20) {
                circle(pM[m].x + 10, pM[m].y, 80, "red", "fill");
                pM[m].stage++;
                playerMissleTest(80)
            } else {
                pM[m].y = cnv.height + 500;
                pM[m].s += 10;
            }
        }
    }
}
function playerMissleAttackSpeed () {
    // Sets Attack Speed to Shooting Missles
    if (shootingMissles) {
        if (canShootMissles) {
            localStorage.missles = Number(localStorage.missles)+1;
            pM.push(drawNewPlayerMissle());
            if (player.mACT <= 0) {
                player.mACT += 150;
            }
            canShootMissles = false;
        }
    }
    if (player.mACT > 0) {
        player.mACT -= player.mAC;
    } else if (player.mACT == 0) {
        canShootMissles = true;
    } else if (player.mACT < 0) {
        player.mACT = 0;
    }
}
function playerMissleEnemyCollision () {
    for (let m = 0; m < pM.length; m++) {
        // Collision Detection for Missle
        for (let i = 0; i < eA.length; i++) {
            if (pM[m].x + pM[m].w / 2 >= eA[i].x + eA[i].w / 2 && pM[m].x + pM[m].w / 2 >= eA[i].x + eA[i].w / 2 - 2) {
                pM[m].ex = true;
            }
        }
        // Test if Missle Goes Off Screen
        if (pM[m].x >= cnv.width) {
            pM.splice(m, 1);
        }
    }
}
function playerHit () {
    if (player.bulletHit) {
        if (player.hit) {
            if (player.canHit) {
                player.inv = 100;
                player.hp -= 5;
                player.canHit = false;
            }
            if (player.hp > 0) {
                player.invCol = "white"
                player.inv -= .25;
            }
            if (player.inv <= 0) {
                player.invCol = "black"
                player.inv = 100;
                player.hit = false;
                player.canHit = true;
                player.bulletHit = false;
            }
        }
    } else if (player.missleHit) {
        if (player.hit) {
            if (player.canMissleHit) {
                player.inv = 100;
                player.hp -= 10;
                player.canMissleHit = false;
            }
            if (player.hp > 0) {
                player.invCol = "white"
                player.inv -= .25;
            }
            if (player.inv <= 0) {
                player.invCol = "black"
                player.inv = 100;
                player.hit = false;
                player.canMissleHit = true;
                player.missleHit = false;
            }
        }
    }
}
function playerExplode () {
    // Make Enemy Explode
    if (gameOn) {
        if (player.hp <= 0) {
            if (player.stage <= 10) {
                player.stage += 1;
                circle(player.x + player.w / 2, player.y + player.w / 3, 30, "white", "fill");
            } else if (player.stage <= 20) {
                circle(player.x + player.w / 2, player.y + player.w / 3, 40, "yellow", "fill");
                player.stage++;
            } else if (player.stage <= 30) {
                circle(player.x + player.w / 2, player.y + player.w / 3, 50, "orange", "fill");
                player.stage++;
            } else if (player.stage <= 40) {
                circle(player.x + player.w / 2, player.y + player.w / 3, 55, "red", "fill");
                player.stage++;
            } else if (player.stage < 45) {
                circle(player.x + player.w / 2, player.y + player.w / 3, 55, "red", "fill");
                player.draw = false;
                player.stage++;
            } else if (player.stage < 46) {
                localStorage.deaths = Number(localStorage.deaths)+1;
                gameEnded = true;
                player.stage++;
            }
        }
    }
}
function playerData () {
    // Missle Data
    playerMissleData();
    // Draw Player
    drawPlayer();
    // Player Collision Detection
    playerCollisionDetection();
    // Move the Player Around
    movePlayer();
    // Player Is Hit
    playerHit();
    // Bullet Data
    playerBulletData();
    // Makes Player Explode
    playerExplode();
}
function playerBulletData () {
    // Draw Bullets
    drawBullets();
    // Move Bullets
    movePlayerBullet();
    // Collision Detection for Bullets
    playerBulletEnemyCollision();
    // Gets Attack Speed for Bullets
    playerBulletAttackSpeed();
}
function playerMissleData () {
    // Draw Missles
    drawPlayerMissles();
    // Move Missles
    movePlayerMissles();
    // Explode Missles
    playerMisslesExplode();
    // Collision Detection for Missles
    playerMissleEnemyCollision();
    // Gets Attack Speed for Missles
    playerMissleAttackSpeed();
}