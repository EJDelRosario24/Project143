function goBack() {
  window.history.back();
}

document.addEventListener("click", function(event) {
  if (event.target.id === "BackButtonIMG") {
    goBack();
  }
});




document.addEventListener("DOMContentLoaded", function() {
  var w83 = true; // Declare and initialize the variable

  var div0 = document.getElementById("startup-button");
  var div1 = document.getElementById("myButtonDiv1");
  var div2 = document.getElementById("myButtonDiv2");
  var div3 = document.getElementById("myButtonDiv3");
  var div4 = document.getElementById("myButtonDiv4");

  {
    if (w83) {
      div0.style.display = "block";
      var div0 = document.getElementById("startup-button");
      var div1 = document.getElementById("myButtonDiv1");
      var div2 = document.getElementById("myButtonDiv2");
      var div3 = document.getElementById("myButtonDiv3");
      var div4 = document.getElementById("myButtonDiv4");
    
      div1.style.display = "none";
      div2.style.display = "none";
      div3.style.display = "none";
      div4.style.display = "none";
    }

    w83 = !w83; // Toggle the value of w83
  }


});

