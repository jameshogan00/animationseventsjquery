$(document).ready(function() {
  $("#nights").on("keyup", function() {
    var nights = +$(this).val();
    var dailyPrice = +$(this).closest(".tour").data("daily-price");
    $("#total").text(nights * dailyPrice);
    $("#nights-count").text($(this).val());
  });


  $(".see-photo").on("click", function(event) {
    event.stopPropagation();
    event.preventDefault();
    $(this).closest(".holidays").find(".photo").slideToggle();
  });
 

 $(".box").on("mouseenter", function() {
    $(this).addClass("highlight");
    $(this).find(".example").animate({"margin-top": "60px","opacity": "1"}, "fast");
  });
  $(".box").on("mouseleave", function() {
    $(this).removeClass("highlight");
    $(this).find(".example").animate({"margin-top": "120px","opacity": "0"}, "fast");
  });

});



		






