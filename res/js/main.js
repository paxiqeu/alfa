
/**
ctx.fillStyle = "orange";
ctx.fillRect(115,250,80,150);

ctx.strokeStyle = "blue";
ctx.strokeRect(225,250,80,150);

ctx.fillStyle = "pink";
ctx.fillRect(115,450,80,150);

ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(50,100);
ctx.lineTo(100,100);
ctx.lineTo(50,50);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(270, 520, 50, 0, Math.PI * 2);
ctx.fillStyle = 'yellow';
ctx.fill();

ctx.beginPath();
ctx.arc(250, 515, 10, 0, Math.PI * 2);
ctx.arc(285, 515, 10, 0, Math.PI * 2);

ctx.fillStyle = 'black';
ctx.fill();



ctx.fillStyle = "black"
ctx.fillRect(240,535,60,5);

ctx.fillStyle = "black"
ctx.fillRect(240,500,20,5);
ctx.fillRect(275,495,20,5);
 */

const canvas= document.getElementById("canvas");
const ctx = canvas.getContext("2d");
 let image = new Image();
image.src = "./res/img/image.png";
let x = 0;
let y = 0;
let xVelocity = 0.5;
let yVelocity = 0.5;
let imageWidth = 460;
let imageHeight = 400;

canvas.addEventListener("resize", () =>{
    resizeCanvas();
});

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.onload = () => {
resizeCanvas();
setInterval(() => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    x+= xVelocity;
    y+= yVelocity;
    if (y + imageHeight >= canvas.height || y <= 0) {
        yVelocity *= -1;
    }
        if (x + imageWidth >= canvas.width || x <= 0){
            xVelocity *= -1;
        }

    ctx.drawImage(image, x, y, imageWidth, imageHeight );
},1);
}
