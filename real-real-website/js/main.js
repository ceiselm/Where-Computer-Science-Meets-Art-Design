$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});// JavaScript Document
//
//function toggleVisibility() {
//  var x = document.getElementById("imagemap");
//  if (x.style.display === "none") {
//    x.style.display = "block";
//  } else {
//    x.style.display = "none";
//  }
//}

$(document).ready(function toggleImage(){
	$('.hide').show();
  $('#toggleimage').change(function(){
	$('.hide').toggle();
  });        
});
