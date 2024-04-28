const g = 9.80665;
const G = 6.67430*Math.pow(10,-11);

function velocity1() {
    var v = document.getElementById("velocity1").value;
    var x = document.getElementById("displacement1").value;
    var t = document.getElementById("time1").value;

    if (v != "" && x != "" && t != "") {
        alert("Make sure exactly two fields are inputted for this.")
    } else if (v != "" && x != "") {
        document.getElementById("time1").value = (x/v).toPrecision(6);
    } else if (v != "" && t != "") {
        document.getElementById("displacement1").value = (v*t).toPrecision(6);
    } else if (x != "" && t != "") {
        document.getElementById("velocity1").value = (x/t).toPrecision(6);
    } else {
        alert("Make sure exactly two fields are inputted for this.")
    }
}

//unrelated displacement
function kinematic1() {
var v = document.getElementById("velocity2").value;
var vi = document.getElementById("iVelocity1").value;
var a = document.getElementById("acceleration1").value;
var t = document.getElementById("time2").value;

if ((v - vi)*a < 0) {alert("Impossible situation. Change in velocity and acceleration never have opposite signs.");}

if (v != "" && vi != "" && a != "" && t != "") {
    alert("Make sure exactly three fields are inputted for this.")
} else if (v != "" && vi != "" && a != "") { //missing t
    document.getElementById("time2").value = ((v-vi)/a).toPrecision(6);
} else if (v != "" && vi != "" && t != "") { //missing a
    document.getElementById("acceleration1").value = ((v-vi)/t).toPrecision(6);
} else if (v != "" && a != "" && t != "") { //missing vi
    document.getElementById("iVelocity1").value = (v - (a*t)).toPrecision(6);
} else if (vi != "" && a != "" && t != "") { //missing v
    document.getElementById("velocity2").value = (vi + (a*t)).toPrecision(6);
} else {
    alert("Make sure exactly three fields are inputted for this.")
}
}

//unrelated final velocity
function kinematic2() {
    var x = document.getElementById("position1").value;
    var xi = document.getElementById("iPosition1").value;
    var vi = document.getElementById("iVelocity2").value;
    var a = document.getElementById("acceleration2").value;
    var t = document.getElementById("time3").value;
    
    if (x != "" && xi != "" && vi != "" && a != "" && t != "") {
        alert("Make sure exactly four fields are inputted for this.")
    } else if (xi != "" && vi != "" && a != "" && t != "") { //missing x
        document.getElementById("position1").value = (xi + (v*t) + (a*Math.pow(t,2)/2)).toPrecision(6);
    } else if (x != "" && vi != "" && a != "" && t != "") { //missing xi
        document.getElementById("iPosition1").value = (x - (v*t) - (a*Math.pow(t,2)/2)).toPrecision(6);
    } else if (x != "" && xi != "" && a != "" && t != "") { //missing vi
        document.getElementById("iVelocity2").value = ((x - xi - (a*Math.pow(t,2)/2))/t).toPrecision(6);
    } else if (x != "" && xi != "" && vi != "" && t != "") { //missing a
        document.getElementById("acceleration2").value = ((x - xi - (vi*t))*(2/Math.pow(t,2))).toPrecision(6);
    } else if (x != "" && xi != "" && vi != "" && a != "") { //missing t

        //quadratic formula
        var discriminant = Math.pow(vi,2) + 2*a*(x-xi);
        if (discriminant < 0) {alert("Impossible situation (discriminant is negative). Check that all values and signs are correct.");}
        var root1 = (vi + Math.sqrt(discriminant))/-a;
        var root2 = (vi - Math.sqrt(discriminant))/-a;
        if (root1 >= 0) {
            document.getElementById("time3").value = (root1).toPrecision(6);
        } else {document.getElementById("time3").value = (root2).toPrecision(6);}
        
    } else {
        alert("Make sure exactly four fields are inputted for this.");
    }
    }

//unrelated time
function kinematic3() {
    var v = document.getElementById("velocity3").value;
    var vi = document.getElementById("iVelocity3").value;
    var a = document.getElementById("acceleration3").value;
    var x = document.getElementById("position2").value;
    var xi = document.getElementById("iPosition2").value;

    if (v != "" && vi != "" && a != "" && x != "" && xi != "") {
        alert("Make sure exactly four fields are inputted for this.");
    } else if (vi != "" && a != "" && x != "" && xi != "") {//missing v
        var radicand = Math.pow(vi,2) + 2*a*(x - xi);
        if (radicand < 0) {alert("Impossible Situation. Check that all values and signs are correct.")} else {
        document.getElementById("velocity3").value = Math.sqrt(radicand).toPrecision(6);
        }
    } else if (v != "" && a != "" && x != "" && xi != "") { //missing vi
        var radicand = Math.pow(vi,2) - 2*a*(x - xi);
        if (radicand < 0) {alert("Impossible Situation. Check that all values and signs are correct.")} else {
        document.getElementById("iVelocity3").value = Math.sqrt(Math.pow(v,2) - 2*a*(x - xi)).toPrecision(6);
        }
    } else if (v != "" && vi != "" && x != "" && xi != "") { //missing a
        document.getElementById("acceleration3").value = ((Math.pow(v,2) - Math.pow(vi,2))/(2*(x - xi))).toPrecision(6);
    } else if (v != "" && vi != "" && a != "" && xi != "") { //missing x
        document.getElementById("position2").value = (xi + (Math.pow(v,2) - Math.pow(vi,2))/(2*a)).toPrecision(6);
    } else if (v != "" && vi != "" && a != "" && x != "") { //missing xi
        document.getElementById("iPosition2").value = (x - ((Math.pow(v,2) - Math.pow(vi,2))/(2*a))).toPrecision(6);
    } else {
        alert("Make sure exactly four fields are inputted for this.");
    }
}

//unrelated acceleration
function kinematic4() {
    var x = document.getElementById("position3").value;
    var xi = document.getElementById("iPosition3").value;
    var v = document.getElementById("velocity4").value;
    var vi = document.getElementById("iVelocity4").value;
    var t = document.getElementById("time4").value;

    if (x != "" && xi != "" && v != "" && vi != "" && t != "") {
        alert("Make sure exactly four fields are inputted for this.");
    } else if (xi != "" && v != "" && vi != "" && t != "") {//missing x
        document.getElementById("position3").value = (xi + (v + vi)*t/2).toPrecision(6);
    } else if (x != "" &&  v != "" && vi != "" && t != "") { //missing xi
        document.getElementById("iPosition3").value = (x - (v + vi)*t/2).toPrecision(6);
    } else if (x != "" && xi != "" && vi != "" && t != "") { //missing v
        document.getElementById("velocity4").value = ((2/t)*(x - xi) - vi).toPrecision(6);
    } else if (x != "" && xi != "" && v != "" && t != "") { //missing vi
        document.getElementById("iVelocity4").value = ((2/t)*(x - xi) - v).toPrecision(6);
    } else if (v != "" && vi != "" && a != "" && x != "") { //missing t
        document.getElementById("time4").value = ((2/(v + vi))*(x - xi)).toPrecision(6);
    } else {
        alert("Make sure exactly four fields are inputted for this.");
    }
}

//unrelated initial velocity
function kinematic5() {
    var x = document.getElementById("position4").value;
    var xi = document.getElementById("iPosition4").value;
    var v = document.getElementById("velocity5").value;
    var a = document.getElementById("acceleration4").value;
    var t = document.getElementById("time5").value;
    
    if (x != "" && xi != "" && v != "" && a != "" && t != "") {
        alert("Make sure exactly four fields are inputted for this.")
    } else if (xi != "" && v != "" && a != "" && t != "") { //missing x
        document.getElementById("position4").value = (xi + (v*t) - (a*Math.pow(t,2)/2)).toPrecision(6);
    } else if (x != "" && v != "" && a != "" && t != "") { //missing xi
        document.getElementById("iPosition4").value = (x - (v*t) + (a*Math.pow(t,2)/2)).toPrecision(6);
    } else if (x != "" && xi != "" && a != "" && t != "") { //missing v
        document.getElementById("velocity5").value = ((x - xi + (a*Math.pow(t,2)/2))/t).toPrecision(6);
    } else if (x != "" && xi != "" && v != "" && t != "") { //missing a
        document.getElementById("acceleration4").value = ((x - xi - (v*t))*(-2/Math.pow(t,2))).toPrecision(6);
    } else if (x != "" && xi != "" && v != "" && a != "") { //missing t

        //quadratic formula
        var discriminant = Math.pow(v,2) - 2*a*(x-xi);
        if (discriminant < 0) {alert("Impossible situation (discriminant is negative). Check that all values and signs are correct.");}
        var root1 = (v + Math.sqrt(discriminant))/a;
        var root2 = (v - Math.sqrt(discriminant))/a;
        if (root1 >= 0) {
            document.getElementById("time5").value = (root1).toPrecision(6);
        } else {document.getElementById("time5").value = (root2).toPrecision(6);}
        
    } else {
        alert("Make sure exactly four fields are inputted for this.");
    }
    }

function horizontalRange() {
    var r = document.getElementById("range").value;
    var vi = document.getElementById("iVelocity5").value;
    var a = document.getElementById("angle1").value;

    if (r != "" && vi != "" && a != "") {
        alert("Make sure only two fields are inputted for this.");
    } else if (vi != "" && a != "")  {
        if (a <= 0 || a >= 180) {
            document.getElementById("range").value = 0;
        } else {
        document.getElementById("range").value = (Math.pow(vi,2)*Math.sin(toRadians(2*a))/g).toPrecision(6);
        }
        
    } else if (r != "" && a != "") {
        if (a <= 0 || a >= 180) {
            alert("Impossible situation. Given the angle inputted, the projectile should have a range of zero.")
        } else {
        document.getElementById("iVelocity5").value = (Math.sqrt(r*g/Math.sin(toRadians(2*a)))).toPrecision(6);
        }
    } else if (r != "" && vi != "") {
        document.getElementById("angle1").value = (toDegrees(Math.asin(r*g/Math.pow(vi,2)))/2).toPrecision(6);
    }
}

function maxHeight() {

}

function totalTime() {

}

function changeTime(tTotal, tUp, tDown) {
    var timeTotal = document.getElementById("totalTime");
    var timeUp = document.getElementById("timeUp");
    var timeDown = document.getElementById("timeDown");

    if (timeTotal )

    if (digits(tTotal) > 5 || digits(tUp) > 5 || digits(tDown) > 5) {
        sigfigs = 3;
    } else {
        sigfigs = 6;
    }


    if (tTotal != 0 && tTotal != "") {
        timeUp.value = (tTotal/2).toPrecision(sigfigs);
        timeDown.value = (tTotal/2).toPrecision(sigfigs);
    } else if (tUp != 0 && tUp != "") {
        timeTotal.value = (tUp*2).toPrecision(sigfigs);
        timeDown.value = tUp;
    } else if (tDown != 0 && tDown != ""){
        timeTotal.value = (tDown*2).toPrecision(sigfigs);
        timeUp.value = tDown;
    }
}
function force1() {
    var f = document.getElementById("force1").value;
    var m = document.getElementById("mass1").value;
    var a = document.getElementById("acceleration7").value;

    if (f != "" && m != "" && a != "") {
        alert("Make sure only two fields are inputted for this.");
    } else if (f != "" && m != "") {
        document.getElementById("acceleration7").value = (f/m).toPrecision(6);
    } else if (f != "" && a != "") {
        document.getElementById("mass1").value = (f/a).toPrecision(6);
    } else if (m != "" && a != "") {
        document.getElementById("force1").value = (m*a).toPrecision(6);
    } else {
        alert("Make sure only two fields are inputted for this.")
    }
    console.log(f + " " + m + " " + a);
    console.log(f == "");
}

function toRadians(degrees) {
    return degrees*Math.PI/180;
}

function toDegrees(radians) {
    return radians*180/Math.PI;
}

function digits(number) {
    return (number + '').replace('.', '').length;
}
