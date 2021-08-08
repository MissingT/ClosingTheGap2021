function myFunction() {
    var x = document.getElementById("menuPullout");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  $(document).ready(function(){
    $("#studentIcon").click(function(){
      $("#studentInfo").slideToggle();
    });
  });

  $(document).ready(function(){
    $("#teacherIcon").click(function(){
      $("#teacherInfo").slideToggle();
    });
  });

  $(document).ready(function(){
    $("#communityIcon").click(function(){
      $("#communityInfo").slideToggle();
    });
  });