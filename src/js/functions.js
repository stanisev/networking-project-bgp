$(document).ready(function() {
  $(".answer").hide();

  $("#btn-show").click(function() {
    $(".answer").show();
  });

  $("#btn-hide").click(function() {
    $(".answer").hide();
  });
});
