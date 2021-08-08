$(document).ready(function () {
    $(".benefitButton").click(function(event){
      $(event.target).next().slideToggle();
    });
});

function myFunction() {
  var x = document.getElementById("menuPullout");
  if (x.style.display === "block") {
    x.style.display = "none";
    $("body").css("overflow", "auto")
  } else {
    x.style.display = "block";
    $("body").css("overflow", "hidden")
  }
}