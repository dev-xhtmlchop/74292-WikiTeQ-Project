(function($) {

  function updateDivPosition() {
    var windowWidth = $(window).width();
    var containerWidth = $('.container').outerWidth();
    var value02 = (windowWidth - containerWidth) / 2 + 15;

    $('.cases-slider').css('padding-left', value02 + 'px'); 
  }

  $(document).ready(function() {       
    $('#hamburger').click(function() {
      $(this).toggleClass('open');
      $('.header-menus').slideToggle(300);
    });

    
    $('.variable-width').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 2,
      speed: 300,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 50000, 
      dots: true,
      responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
      }
    }
  ]
    });

    updateDivPosition();
    $(window).on('resize' , function () {
      updateDivPosition();
    });
  });
  
})(jQuery);


//# sourceMappingURL=custom.js.map
