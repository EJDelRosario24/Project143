function toggleWebdisplay() {
  var Webdisplay = document.getElementById("Webdisplay");
  var blackscreen = document.getElementById("blackscreen");
  var myButtonWD = document.getElementById("myButton2");

  var OSD = document.getElementsByClassName("ifButton2")[0]; // Select the first element with the class name
  var xngyu = document.getElementById("NGYU");


  if (Webdisplay.style.display === "block") {
    Webdisplay.style.display = "none";
    blackscreen.style.display = "block";
    OSD.style.display = "none";
    xngyu.style.display = "none";
    myButtonWD.classList.remove("on");
    myButtonWD.classList.add("off");
  } else {
    Webdisplay.style.display = "block";
    blackscreen.style.display = "none";
    OSD.style.display = "none";
    xngyu.style.display = "none";
    myButtonWD.classList.remove("off");
    myButtonWD.classList.add("on");
  }
}

var Webdisplay = document.getElementById("Webdisplay");
document.body.appendChild(Webdisplay);

var myButton_2 = document.getElementById("myButton2");
myButton_2.addEventListener("click", toggleWebdisplay);

function changeButtonState() {
  var button = document.getElementById("myButton2");
  var currentColor = button.style.color;
  var newColor = currentColor === "green" ? "darkred" : "green";
  button.style.color = newColor;
  button.textContent = currentColor === "green" ? "ON" : "OFF";
}

myButton_2.addEventListener("click", changeButtonState);

