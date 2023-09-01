canvas = document.getElementById("myCanvas");
color = "red";

mouseX = e.clientX
mouseY = e.clientY



function myMousedowm(e)
{
    color = documente.getElementById("color").value;
    console.log(color);

    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;

    console.log("X ="+ mouseX + ",Y ="+mouseY);
    circle(mouseX , mouseY)
}

function circle(mouseX, mouseY)
{
ctx.begingPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200,200, 40 , 0 , 2*Math.PI);
ctx.stroke();
}