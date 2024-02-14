var RR = document.getElementById("NGYU");
var blackscreenRR = document.getElementById("blackscreen");
var myButtonRR = document.getElementById("myButton4");
var ossdr = document.getElementById("box");
var ossdr2 = document.getElementById("Webdisplay");

var videoRR = document.getElementById("NGYU"); // Make sure to assign the correct video element ID

var isOn = true;

myButtonRR.addEventListener("click", function() {
  if (isOn) {
    RR.style.display = "none";
    blackscreenRR.style.display = "block";
    ossdr.style.display = "none";
    ossdr2.style.display = "none";
    myButtonRR.classList.remove("on");
    myButtonRR.classList.add("off");
  } else {
    RR.style.display = "block";
    blackscreenRR.style.display = "none";
    ossdr.style.display = "none";
    ossdr2.style.display = "none";
    myButtonRR.classList.remove("off");
    myButtonRR.classList.add("on");
  }

  isOn = !isOn;
});

const buttonrr = document.getElementById("myButton4"); // Corrected ID assignment

buttonrr.onclick = function() {
  const currentColor = buttonrr.style.color;
  const newColor = currentColor === "darkred" ? "green" : "darkred";
  buttonrr.style.color = newColor;
  const currentText = buttonrr.textContent;
  buttonrr.textContent = currentText === "OFF" ? "ON" : "OFF";
};

var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      videoRR.play(); // Play the video when it becomes visible
    } else {
      videoRR.pause(); // Pause the video when it is not visible
    }
  });
});

observer.observe(videoRR); // Start observing the video element

