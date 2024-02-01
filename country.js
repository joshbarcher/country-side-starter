//the drawing context, canvas size, and day/night setting
let ctx;
let canvasWidth, canvasHeight;
let dayTime = true;

//this function runs on page load (DO NOT EDIT!)
window.onload = function() {
    //select the canvas
    const canvas = document.getElementById('myCanvas');

    //get the context and canvas size to draw with
    ctx = canvas.getContext('2d');
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;

    //draws the scene (this is handled by each student...)
    drawScene();

    //this flips the day/night cycle
    const button = document.querySelector('#switch');
    button.onclick = function() {
        dayTime = !dayTime;
        drawScene();
    }
}

/*
    Draws a house from a rectangle and 
    polygon in the countryside depicted.
*/
function drawHouse() {
    //Draw house...

    //Draw roof...

    //Draw door...

}

/*
    Draws a pond from three ellipses
    in the countryside depicted.
*/
function drawPond() {
    
}

/*
    Draws the ground, sky, and moon/sun
    depending on the day/night cycle.
*/
function drawBackground() {
    
}

/*
    Draws random stars (circles) in the sky
    when the night cycle is toggled.
*/
function drawStars() {
    
}

/*
    Draws a line of trees on the horizon
    using a loop and the drawTree() function.
*/
function drawTreeLine() {
    
}

/*
    Draws a single tree at the position
    provided.
*/
function drawTree(x, y) {

    //Draw trunk...

    //Draw three leaves using drawLeaf()...

}

/*
    Draws three broad leaves (circles) at the top
    of a tree at the position provided.
*/
function drawLeaf(x, y) {
    
}

/*
    Begins all drawing of element on the canvas.
    drawScene() should call the functions above.
*/
function drawScene(){
    
}