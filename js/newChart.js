/**
 * Created by Administrator on 2016/12/14.
 */
var chart = document.getElementById("fanChart"),
    canv = chart.getContext("2d"),
    cnJiJin = {
        name: "币基金",
        percent: 0.15,
        color: "yellow"
    },
    cnZC = {
        name: "ZC",
        percent: 0.10,
        color:"pink"
    },
    cnLiCai = {
        name: "币理财",
        percent: 0.25,
        color:"green"
    },
    cnWaKuang = {
        name: "币挖矿",
        percent: 0.25,
        color: "blue"
    },
    cnShouYi = {
        name: "币收益",
        percent: 0.05,
        color: "red"
    },
    cnZX = {
        name: "ZX",
        percent: 0.20,
        color: "brown"
    }
    projects = [cnJiJin, cnLiCai, cnWaKuang, cnShouYi,cnZC,cnZX],
    projClr = [],
    circleX = 300,
    circleY = 200,
    circleR = 180,
    tmpClr = "cyan",
    draw = {
        default: function () {
            for (var c = 0; c < projects.length; c ++) {
                projClr[c] = projects[c].color;
            }
        },
        init: function () {
            var start = [],
                end = [];
            start[0] = 0;
            end[0] = (start[0] + projects[0].percent) * 2 * Math.PI;
            projects[0].start = start[0];
            projects[0].end = end[0];
            for (var x = 1; x < projects.length; x ++) {
                start[x] = end[x - 1];
                end[x] = start[x] + projects[x].percent * 2 * Math.PI;
                projects[x].start = start[x];
                projects[x].end = end[x];
            }

            for (x in projects) {
                canv.beginPath();
                canv.moveTo(circleX,circleY);
                canv.fillStyle = projClr[x];
                canv.arc(circleX,circleY,circleR,projects[x].start,projects[x].end);
                canv.fill();
            }
            chart.onmousemove = function (event) {
                var disX = event.offsetX - circleX,
                    disY = event.offsetY - circleY,
                    disZ = Math.sqrt(Math.abs(disX * disX) + Math.abs(disY * disY));
                if (disZ < circleR) {
                    chart.parentNode.style.background = "wheat";
                    chart.style.cursor = "pointer";
                    var moveAngle = draw.angle(disX,disY);
                    draw.part(moveAngle);
                } else {
                    draw.default();
                    draw.init();
                    chart.style.cursor = "auto";
                    chart.parentNode.style.background = "white";
                }
            }
        },
        angle: function(disX, disY) {
            var atan = Math.atan(Math.abs(disY / disX)),
                resAng;
            if (disX > 0 && disY > 0) {
                resAng = atan;
            } else {
                if (disX > 0 && disY < 0) {
                    resAng = 2 * Math.PI - atan;
                } else {
                    if (disX < 0 && disY < 0) {
                        resAng = atan +  Math.PI;
                    } else {
                        if (disX < 0 && disY > 0) {
                            resAng = Math.PI - atan;
                        }
                    }
                }
            }
            return resAng;
        },
        part: function (angle) {
            for (var p = 0; p < projects.length; p ++) {
                if (angle >= projects[p].start && angle <= projects[p].end) {
                    projClr[p] = tmpClr;
                    draw.init();
                } else {
                    projClr[p] = projects[p].color;
                    draw.init();
                }
            }
        },
        cnTuLi: function () {
            for (var tl = 0; tl < projects.length; tl ++) {
                canv.beginPath();
                canv.rect(600,150 + tl * 30,10,10);
                canv.fillStyle = projects[tl].color;
                canv.fill();
                canv.beginPath();
                canv.fillStyle = "black";
                canv.font = "20px '楷体'";
                canv.fillText(projects[tl].name + " : " + (projects[tl].percent * 100 + "%"),620,160 + tl * 30, 90);
            }
        }
    };
draw.default();
draw.init();
draw.cnTuLi();

