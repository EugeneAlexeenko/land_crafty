$(function() {

	// Custom JS
  $(document).ready(function() {
    $('.top-slider').unslider({
      animation: 'fade',
      infinite: true,
      autoplay: true,
      arrows: false,
      speed: 2000,
      delay: 5000
    });
  })

  // paragraph overflow protection
  var size = 150,
      infoContent = $('.info-content__text'),
      infoContentText = infoContent.text();

  if(infoContentText.length > size){
    infoContent.text(infoContentText.slice(0, size) + " ...");
  }


});

