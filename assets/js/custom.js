(function($) {

  function updateDivPosition() {
    var windowWidth = $(window).width();
    var containerWidth = $('.container').outerWidth();
    var value = (windowWidth - containerWidth) / 2;
    var value02 = (windowWidth - containerWidth) / 2 + 15;

    $('.leftSpace').css('left', value + 'px'); 
    $('.variable-width').css('padding-left', value02 + 'px'); 
  }

 

  $(document).ready(function() {       
    $('#nav-icon1').click(function() {
      $(this).toggleClass('open');
      $('.header-menus').slideToggle(300);
    });

    updateDivPosition();
    $('.variable-width').slick({
      infinite: true,
      slidesToShow: 1,
      speed: 300,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 3000, 
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });


    $(window).scroll(function() {
      if ($(this).scrollTop() > 150){  
        $('.header').addClass("sticky");
      }
      else{
        $('.header').removeClass("sticky");
      }
    });

    $(window).on('resize' , function () {
      updateDivPosition();
    });
  });
  
})(jQuery);


//# sourceMappingURL=custom.js.map

//# sourceMappingURL=custom.js.map
