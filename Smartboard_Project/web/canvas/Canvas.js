/* 
 * Brandon Ho
 */

window.onload = init;

function init() {


    var mousePos;
    var prevX = 0;
    var currX = 0;
    var prevY = 0;
    var currY = 0;
    var flag = false;
    flagB = false;
    
    window.onmousemove = handleMouseMove; //create handler so when mouse is moved new data is recieved
    window.onmousedown = handleMouseDown;
    window.onmouseup = handleMouseUp;
    //setInterval(getMousePosition, 100); //create interval for mouse location to update

    function handleMouseMove(e) {

        mousePos = {
            x: e.clientX, //x and y coordinates of mouse are gotten
            y: e.clientY
        };
        getMousePosition();
        draw(e);
    }

    function handleMouseDown(e) {
        
        document.getElementById("Next").disabled = false;
        
        flag = true;

    }

    function handleMouseUp(e) {
        flag = false;
       

    }

    function getMousePosition() {
        prevX = currX;
        prevY = currY;

        var x = mousePos.x; // put in variables
        var y = mousePos.y;

        currX = x - 275;
        currY = y - 50;

    }

    function draw(e) {
        if (flag === true) {
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            //var x = e.clientX;
            //var y = e.clientY;
            ctx.beginPath();
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(currX, currY);
            ctx.stroke();
            ctx.closePath();
        }
    }
}


