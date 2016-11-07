/* 
 * Brandon Ho
 */

window.onload = init;

function init()
{
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.font = "12px Arial";
    ctx.fillText("Welcome to the main page!", 20, 40);
    ctx.fillText("To create a new project, press Create project", 20, 70);    
    ctx.fillText("To open a previously made project, press Open", 20, 85);
    
    ctx.font = "24px Arial";
    ctx.fillText("Know it all!", 375, 50);
    ctx.font = "12px Arial";
    ctx.fillText("Settings goes to a listing of additional options.", 375, 70);
    ctx.fillText("Search allows you to search your archive", 375, 85);
    ctx.fillText("Next Slide is used for making additional slides.", 375, 100);
    ctx.fillText("Quit is used to exit current projects.", 375, 115);





}

