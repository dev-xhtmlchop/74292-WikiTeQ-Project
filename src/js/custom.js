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


