$(function () {
    $(".carousel").carousel({ interval: 2000 });
    $("#carouselButton").on("click",function () {
      //here were checking if this button, when its clicked, is a pause button.
      if ($("#carouselButton").children("i").hasClass("fa-pause")) {
        $(".carousel").carousel("pause");
        $("#carouselButton").children("i").removeClass("fa-pause");
        $("#carouselButton").children("i").addClass("fa-play");
      } else {
        $(".carousel").carousel("cycle"); //here were causing the carousel to cycle again.
        $("#carouselButton").children("i").removeClass("fa-play"); // here we are removing the play button using the jquery .children & .removeClass methods.
        $("#carouselButton").children("i").addClass("fa-pause"); // here we are replacing the removed play button w/ the pause icon; using the jquery .children & .addClass methods.
      }
    });
  });

  $(function() {
    $("#loginButton").on("click",function(){
      $("#loginModal").modal("show");
    });

  });


  $(function() {
    $("#reserveButton").on("click",function(){
      $("#reserveModal").modal("show");
    });

  });

