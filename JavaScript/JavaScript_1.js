function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch (Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
            break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
            break;
        case "Green":
            Color_Output = "Green" + Color_String;
            break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
            break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
            break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
            break;
        default:
            Color_Output = "Please enter a color exactly as written on the above list";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(95,50,5,90,60,100);
grd.addColorStop(0,"yellow");
grd.addColorStop(1,"black");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0,0,600,300);

var d = document.getElementById("canvas2");
var dtx = d.getContext("2d");

var hrd = dtx.createLinearGradient(0, 0, 420, 0);
hrd.addColorStop(0, "red");
hrd.addColorStop(1, "yellow");

dtx.fillStyle = hrd;
dtx.fillRect(0, 0, 600, 300);