var mouseEvent = "empty"; 
var lastPositionX, lastPositionY;
canvas = document.getElementById('canvas');
tx = canvas.getContext("2d");
color = "black"; 
width = 1;
canvas.addEventListener("mousedown", myMouseDown);
function MyMouseDown(e){
color = document.getElementById("color").value;
widthLine = document.getElementById("width").value;
mouseEvent="mouseDown";}
canvas.addEventListener("mousemove", myMouseMove);
function MyMouseMove(e){
PositionMouseX = e.clientX - canvas.offsetLeft;
PositionMouseY = e.clientY - canvas.offsetTop;
if (mouseEvent == "mouseDown")
ctx.beginPath();
ctx.strokeStyle = color; 
ctx.lineWidth = width;
console.log("Last position of x and y coordinates = ");
console.log("x = " + lastPositionX + "y = " + lastPositionY); 
ctx.moveTo(lastPositionX, lastPositionY);
console.log("Current position of x and y coordinates = "); 
console.log("x = " + PositionMouseX + "y = " + PositionMouseY); c
tx.lineTo(PositionMouseX, PositionMouseY);
ctx.stroke();}
lastPositionX = PositionMouseX; 
lastPositionY = PositionMouseY;
canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e)  {mouseEvent = "mouseUP";}
canvas.addEventListener("mouseleave", myMouseLeave); function myMouseLeave(e) { mouseEvent = "mouseleave";}
function clearArea() { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }

