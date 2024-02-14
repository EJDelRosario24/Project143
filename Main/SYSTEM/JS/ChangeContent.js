



function togglePanel() {
    var panel = document.getElementById("selectionPanel");
    panel.classList.toggle("hidden");
  }
  function hideOtherButtons() {
    var otherButtons = document.querySelectorAll("#myButton_2, #myButton3, #myButton4");
    otherButtons.forEach(button => {
      button.classList.add("hidden");
    });
  }
  

  function changeDisplay(option) {
    var currentDiv = document.querySelector(".option:not(.hidden)");
    if (currentDiv) {
      currentDiv.classList.add("hidden");
    }
    
    var selectedDiv = document.getElementsByClassName(option)[0];
    if (selectedDiv) {
      selectedDiv.classList.remove("hidden");
    }
  }






  
  var button1 = document.getElementById("myButton_1");
  var button2 = document.getElementById("myButton_2");
  var button3 = document.getElementById("myButton_3");
  var button4 = document.getElementById("myButton_4");

  var div0 = document.getElementById("startup-button");
  var div1 = document.getElementById("myButtonDiv1");
  var div2 = document.getElementById("myButtonDiv2");
  var div3 = document.getElementById("myButtonDiv3");
  var div4 = document.getElementById("myButtonDiv4");
  

  button1.addEventListener("click", function() {
    div0.style.display = "none";
      
      div1.style.display = "block";
      div2.style.display = "none";
      div3.style.display = "none";
      div4.style.display = "none";
  });

  button2.addEventListener("click", function() {
   div0.style.display = "none";

      div1.style.display = "none";
      div2.style.display = "block";
      div3.style.display = "none";
      div4.style.display = "none";
  });

  button3.addEventListener("click", function() {
    div0.style.display = "none";
      
      div1.style.display = "none";
      div2.style.display = "none";
      div3.style.display = "block";
      div4.style.display = "none";
  });

  button4.addEventListener("click", function() {
    div0.style.display = "none";
      
      div1.style.display = "none";
      div2.style.display = "none";
      div3.style.display = "none";
      div4.style.display = "block";
      
  });

  var button_4 = document.getElementById("myButton4");
  var div0x = document.getElementById("mB_4");
  var div00x = document.getElementById("mB4CPB");
  
  button_4.addEventListener("click", function() {
    div0x.style.display = "none";
      div00x.style.display = "none";
  });
  



