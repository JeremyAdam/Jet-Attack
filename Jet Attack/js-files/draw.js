//
// Draw Functions
//
function drawBackground () {
    ctx.drawImage(backgroundImage, 0, 0, cnv.width, cnv.height);
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
    // Health Bar Border
    rect(9, 4, 100 + 2, 17, "white", "stroke");
    rect(10, 5, player.hp, 15, "lime", "fill");
    for (let x = 20; x < 110; x += 10) {
        rect(x, 5, 1, 15, "white", "fill");
        if (x < 20) {
            x = 20;
        }
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
