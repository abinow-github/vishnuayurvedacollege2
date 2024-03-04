/////////preloader function
var load = document.getElementById("preloader");
let header = document.getElementById("header");
let banner = document.getElementById("banner");
function isFullyLoaded() {
    return header && banner;
}
window.onload = function () {
    if (isFullyLoaded()) {
        setTimeout(function () {
            load.style.display = "none";
            banner.classList.add('reveal');
        }, 300);
    }
};

      

///////////banner scroll y animation 
window.addEventListener('scroll', function () {
    var banner = document.getElementById('banner');

    // Check if the scroll position is equal to or greater than 100vh
    if (window.scrollY >= window.innerHeight) {
        banner.classList.remove('reveal');
    } else {
        banner.classList.add('reveal');
    }
  });



///////////quick contact scroll y animation 
function handleScroll() {
    var bannerr = document.getElementById('quick-cont');
    if (window.scrollY >= 60) {
        bannerr.classList.add('reveal');
        window.removeEventListener('scroll', handleScroll);
    }
}
window.addEventListener('scroll', handleScroll);

  function showcnctdiv() {
    var bannerrr = document.getElementById('quick-cont');
    var icon = document.getElementById('quick-cont-icon');
    var isRevealed = bannerrr.classList.contains('reveal');
    if (isRevealed) {
        bannerrr.classList.remove('reveal');
    } else {
        bannerrr.classList.add('reveal');
    }
}




//////image slider
$(document).ready(function(){
    for (var i=1; i <= $('.slider__slide').length; i++){
        $('.slider__indicators').append('<div class="slider__indicator" data-slide="'+i+'"></div>')
    }
    setTimeout(function(){
        $('.slider__wrap').addClass('slider__wrap--hacked');
    }, 1000);

    // Auto slider functionality
    var intervalId;

    function startAutoSlider() {
        intervalId = setInterval(function() {
            var currentSlide = Number($('.slider__slide--active').data('slide'));
            var totalSlides = $('.slider__slide').length;
            currentSlide++;
            if (currentSlide > totalSlides) {
                currentSlide = 1;
            }
            goToSlide(currentSlide);
        }, 5000); // Adjust the interval time (in milliseconds) as needed
    }

    function stopAutoSlider() {
        clearInterval(intervalId);
    }

    // Start auto slider on page load
    startAutoSlider();

    // Pause auto slider when user interacts with the slider
    $('.slider__next, .go-to-next, .slider__indicator').on('click', function(){
        stopAutoSlider();
    });
});

function goToSlide(number){
    $('.slider__slide').removeClass('slider__slide--active');
    $('.slider__slide[data-slide='+number+']').addClass('slider__slide--active');
}

$('.slider__next, .go-to-next').on('click', function(){
    var currentSlide = Number($('.slider__slide--active').data('slide'));
    var totalSlides = $('.slider__slide').length;
    currentSlide++
    if (currentSlide > totalSlides){
        currentSlide = 1;
    }
    goToSlide(currentSlide);
});

$('.slider__indicator').on('click', function() {
    var slideNumber = $(this).data('slide');
    goToSlide(slideNumber);
});


//////news slider
$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
  });

  //////speciality slider
$(document).ready(function(){
    $('.speciality-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
  });




//////////////////social media icons
  $(document).ready(function() {
    // Cache the navbar element
    var $navbar = $('#social-i');

    // Set the scroll threshold to 90vh
    var scrollThreshold = 0.7 * window.innerHeight;

    // Event listener for scroll
    $(window).scroll(function() {
      // Check if scroll position is beyond the threshold
      if ($(this).scrollTop() > scrollThreshold) {
        // Add the 'scrolled' class to the navbar
        $navbar.addClass('scrolled');
      } else {
        // Remove the 'scrolled' class from the navbar
        $navbar.removeClass('scrolled');
      }
    });
  });




  /////calling ,mail, whatsapp function  (1=college-call , 2=hospital-call , 3=whatsapp , 4=mail)

  function contact(a){
    let value=a
    
    if(value=="1"){
        window.location.href = 'tel:7994030042';
    }else if(value=="2"){
        window.location.href = 'tel:8129180045';
    }
    else if(value=="3"){
        window.location.href = 'https://wa.me/7994030042';
    }
    else if(value=="4"){
        window.location.href = 'mailto:vishnuayurvedacollege@yahoo.in';
    }
  }