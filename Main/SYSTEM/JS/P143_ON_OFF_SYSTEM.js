var box = document.getElementById("box");
var ngyu_P143 = document.getElementById("NGYU");
var blackscreen = document.getElementById("blackscreen");
var var_X = document.getElementsByClassName("ifButton1")[0]; // Select the first element with the class name
var myButton = document.getElementById("myButton");
var isOn = true;

function toggleDiv() {
  if (isOn) {
    box.style.display = "none";
    blackscreen.style.display = "block";
    var_X.style.display = "none";
    ngyu_P143.style.display = "none";
    myButton.classList.remove("on");
    myButton.classList.add("off");
  } else {
    box.style.display = "block";
    blackscreen.style.display = "none";
    var_X.style.display = "none";
    ngyu_P143.style.display = "none";
    myButton.classList.remove("off");
    myButton.classList.add("on");
  }

  isOn = !isOn;
}

const button = document.getElementById("myButton");

button.onclick = function() {
  const currentColor = button.style.color;
  const newColor = currentColor === "green" ? "darkred" : "green";
  button.style.color = newColor;
  const currentText = button.textContent;
  button.textContent = currentText === "OFF" ? "ON" : "OFF";
};

myButton.addEventListener("click", toggleDiv);
