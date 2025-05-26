(function($) {

  function updateDivPosition() {
    var windowWidth = $(window).width();
    var containerWidth = $('.container').outerWidth();
    var value02 = (windowWidth - containerWidth) / 2 + 15;
    $('.cases-slider').css('padding-left', value02 + 'px'); 
  }

  $(document).ready(function() {    
    
    $('.menu-item-has-children').each(function() {
        $(this).append('<span class="dropdown"></span>');     
    });
    
    $('#hamburger').click(function() {
      $(this).toggleClass('open');
      $('.header-menus').slideToggle(300);
    });

    $('.menu-item-has-children > .dropdown').on('click', function(e) {
      if ($(window).width() < 991) {
        e.preventDefault();
        const $clickedDropdown = $(this);
        const $currentSubmenu = $clickedDropdown.siblings('.sub-menu');
        const $parentItem = $clickedDropdown.parent();
        $parentItem.siblings('.menu-item-has-children').each(function() {
          $(this).find('> .sub-menu').slideUp();
          $(this).find('> .dropdown').removeClass('active');
        });
        $currentSubmenu.slideToggle();
        $clickedDropdown.toggleClass('active');
      }
    });
    
    let infiniteActivated = false;
    let firstAutoplayDone = false;
    $('.variable-width').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 2,
      speed: 300,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 6000,
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

    $('.variable-width').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      if (!infiniteActivated && !firstAutoplayDone) {
        firstAutoplayDone = true;
        setTimeout(() => {
          activateInfinite(nextSlide);
        }, 100); 
      }
    });

    function activateInfinite(currentSlide) {
      infiniteActivated = true;
      $('.variable-width').slick('unslick');
      $('.variable-width').slick({
        infinite: true,
        initialSlide: currentSlide,
        slidesToShow: 1,
        slidesToScroll: 2,
        speed: 300,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 6000,
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
    }


    updateDivPosition();    
    $(window).on('resize' , function () {
      updateDivPosition();
    });
  });
  
})(jQuery);



//# sourceMappingURL=custom.js.map
