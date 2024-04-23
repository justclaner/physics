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
        document.getElementById("acceleration2").value = ((x - xi - (a*Math.pow(t,2)/2))*(2/Math.pow(t,2))).toPrecision(6);
    } else if (x != "" && xi != "" && vi != "" && a != "") { //missing t

        //quadratic formula
        var discriminant = Math.pow(vi,2) + 2*a*(x-xi);
        var root1 = (-vi + Math.sqrt(discriminant))/a;
        var root2 = (-vi - Math.sqrt(discriminant))/a;
        if (root1 >= 0) {
            document.getElementById("time3").value = (root1).toPrecision(6);
        } else {document.getElementById("time3").value = (root2).toPrecision(6);}
        
    } else {
        alert("Make sure exactly four fields are inputted for this.")
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
        document.getElementById("velocity3").value = Math.sqrt(Math.pow(vi,2) + 2*a*(x - xi)).toPrecision(6);
    } else if (v != "" && a != "" && x != "" && xi != "") { //missing vi
        document.getElementById("iVelocity3").value = Math.sqrt(Math.pow(v,2) - 2*a*(x - xi)).toPrecision(6);
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

function force1() {
    var f = document.getElementById("force1").value;
    var m = document.getElementById("mass1").value;
    var a = document.getElementById("acceleration7").value;

    if (f != "" && m != "" && a != "") {
        alert("Make sure only two fields are inputted for this.")
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