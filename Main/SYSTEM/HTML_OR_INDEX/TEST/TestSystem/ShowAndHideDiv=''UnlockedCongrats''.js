var clickCount = 0;

function handleClick() {
  clickCount++;
  if (clickCount === 50) {
    var messageElement = document.getElementById("UnlockedCongrats");
    messageElement.style.display = "block";

    setTimeout(function() {
      messageElement.style.display = "none";
    }, 3000); // 3000 milliseconds = 3 seconds
  }
}