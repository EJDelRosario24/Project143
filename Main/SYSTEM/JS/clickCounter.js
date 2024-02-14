 // JavaScript code goes here
 var clickCounter = 0;
 var button3 = document.getElementById("myButton-3");
 var clickCounterDiv = document.getElementById("clickCounter");
 var UC = document.getElementById("UnlockedCongrats");
 var lockedButton = document.getElementById("myButton3");
 var unlockedButton = document.getElementById("unlocked");
 var isCounterClosed = false;
 var timeoutID;

 function updateClickCounter() {
   clickCounter++;
   clickCounterDiv.textContent = "(" + clickCounter + "/" + 50 + ")";

   if (clickCounter === 50) {
     lockedButton.style.display = "none";
     unlockedButton.style.display = "block";
   }
   
   if (clickCounter === 50) {
     clickCounterDiv.style.display = "none";
     isCounterClosed = true;
   }
  
   if (clickCounter === 50) {
     UC.style.display = "blocked";
   }
 }

 function handleClick() {
   clearTimeout(timeoutID); // Reset the timeout

   if (isCounterClosed) return;

   for (let clickCounter = 0; clickCounter <= 50; clickCounter++) {
     if (clickCounter === 0) {
       clickCounterDiv.style.display = "block";
     }

     // Repeat the code for each clickCounter value
     if (clickCounter === 1) {
       clickCounterDiv.style.display = "block";
     }

     if (clickCounter === 2) {
       clickCounterDiv.style.display = "block";
     }

     // ...

     if (clickCounter === 50) {
       clickCounterDiv.style.display = "block";
     }
   }

   updateClickCounter();

   timeoutID = setTimeout(function() {
     clickCounterDiv.style.display = "none";
     isCounterClosed = false; // Reset the counter closed flag
   }, 3000);
 }