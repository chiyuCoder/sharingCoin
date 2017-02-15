/**
 * Created by Administrator on 2016/11/8.
 */
var fanChart = document.getElementById("fanChart"),
    canvas = fanChart.getContext("2d");
/*
//canvas.moveTo(280,300);
canvas.moveTo(280,200);
//canvas.lineTo(380,200);
canvas.arc(280,200,100,0,0.5*Math.PI);
canvas.fillStyle = "red";
canvas.fill();
*/

var circleX = 280,
    circleY = 200,
    circleR = 150;
function fund(startTheta,addTheta,clr) {
    var endTheta = startTheta + addTheta,
        text = addTheta.toString(),
        textPX = circleX + (circleR * Math.sin(endTheta * 2 * Math.PI) + circleR * Math.sin(startTheta * 2 * Math.PI)) / 2,
        textPY = circleY + (circleR * Math.cos(startTheta * 2 * Math.PI) + circleR * Math.cos(endTheta * 2 * Math.PI)) / 2;
    canvas.beginPath();
    canvas.fillStyle = clr;
    canvas.moveTo(circleX,circleY);
    canvas.arc(circleX,circleY,circleR,startTheta * 2 * Math.PI,endTheta * 2 * Math.PI);
    canvas.fill();
}
fund(0.60,0.40,"red");
fund(0,0.15,"yellow");
fund(0.15,0.1,"blue");
fund(0.25,0.35,"grey")
//图例--
function createMapSignFrame() {
    canvas.beginPath();
    canvas.strokeStyle = "cyan";
    canvas.strokeRect(600,100,100,105);
    canvas.stroke();
}
createMapSignFrame();
function createMapSign(signx,signy,signc,signt) {
    canvas.beginPath();
    canvas.fillStyle = signc;
    canvas.font = "16px Arial";
    canvas.fillRect(signx,signy,20,20);
    canvas.fillText(signt,signx + 30,signy + 15);
}
createMapSign(605,105,"red","币基金");
createMapSign(605,128,"yellow","币挖矿");
createMapSign(605,153,"blue","币理财");
createMapSign(605,174,"grey","理财收益");
