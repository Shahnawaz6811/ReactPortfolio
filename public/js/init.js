/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

//  jQuery(document).ready(function($) {

// /*----------------------------------------------------*/
// /* FitText Settings
// ------------------------------------------------------ */

//     setTimeout(function() {
// 	   $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
// 	 }, 100);

// /*----------------------------------------------------*/
// /* Smooth Scrolling
// ------------------------------------------------------ */

//    $('.smoothscroll').on('click',function (e) {
// 	    e.preventDefault();

// 	    var target = this.hash,
// 	    $target = $(target);

// 	    $('html, body').stop().animate({
// 	        'scrollTop': $target.offset().top
// 	    }, 800, 'swing', function () {
// 	        window.location.hash = target;
// 	    });
// 	});

// /*----------------------------------------------------*/
// /* Highlight the current section in the navigation bar
// ------------------------------------------------------*/
jQuery(document).ready(function ($) {
  var sections = $("section");
  var navigation_links = $(".main_nav a");
  console.log("links: ", sections);

  sections.waypoint({
    handler: function (event, direction) {
      var active_section;

      active_section = $(this);
      if (direction === "up") active_section = active_section.prev();
      console.log("acitve: ", active_section);
      var active_link = $(
        '.main_nav a[href="#' + active_section.attr("id") + '"]'
      );
      navigation_links.parent().removeClass("current");
      active_link.parent().addClass("current");
    },
    offset: "35%",
  });
});

// /*----------------------------------------------------*/
// /*	Make sure that #header-background-image height is
// /* equal to the browser height.
// ------------------------------------------------------ */

//    $('header').css({ 'height': $(window).height() });
//    $(window).on('resize', function() {

//         $('header').css({ 'height': $(window).height() });
//         $('body').css({ 'width': $(window).width() })
//    });

// /*----------------------------------------------------*/
/*	Fade In/Out Primary Navigation
------------------------------------------------------*/

$(window).on("scroll", function () {
  var h = $("header").height();
  var y = $(window).scrollTop();
  var nav = $(".main_nav");

  if (y > h * 0.01 && y < h && $(window).outerWidth() > 768) {
    nav.fadeOut("fast");
  } else {
    if (y < h * 0.01) {
      nav.removeClass("opaque").fadeIn("fast");
    } else {
      nav.addClass("opaque").fadeIn("fast");
    }
  }
});



// /*----------------------------------------------------*/
// /*	Modal Popup
// ------------------------------------------------------*/

//     $('.item-wrap a').magnificPopup({

//        type:'inline',
//        fixedContentPos: false,
//        removalDelay: 200,
//        showCloseBtn: false,
//        mainClass: 'mfp-fade'

//     });

//     $(document).on('click', '.popup-modal-dismiss', function (e) {
//     		e.preventDefault();
//     		$.magnificPopup.close();
//     });

// /*----------------------------------------------------*/
// /*	Flexslider
// /*----------------------------------------------------*/
//    $('.flexslider').flexslider({
//       namespace: "flex-",
//       controlsContainer: ".flex-container",
//       animation: 'slide',
//       controlNav: true,
//       directionNav: false,
//       smoothHeight: true,
//       slideshowSpeed: 7000,
//       animationSpeed: 600,
//       randomize: false,
//    });

// /*----------------------------------------------------*/
// /*	contact form
// ------------------------------------------------------*/

//    $('form#contactForm button.submit').click(function() {

//       $('#image-loader').fadeIn();

//       var contactName = $('#contactForm #contactName').val();
//       var contactEmail = $('#contactForm #contactEmail').val();
//       var contactSubject = $('#contactForm #contactSubject').val();
//       var contactMessage = $('#contactForm #contactMessage').val();

//       var data = 'contactName=' + contactName + '&contactEmail=' + contactEmail +
//                '&contactSubject=' + contactSubject + '&contactMessage=' + contactMessage;

//       $.ajax({

// 	      type: "POST",
// 	      url: "inc/sendEmail.php",
// 	      data: data,
// 	      success: function(msg) {

//             // Message was sent
//             if (msg == 'OK') {
//                $('#image-loader').fadeOut();
//                $('#message-warning').hide();
//                $('#contactForm').fadeOut();
//                $('#message-success').fadeIn();
//             }
//             // There was an error
//             else {
//                $('#image-loader').fadeOut();
//                $('#message-warning').html(msg);
// 	            $('#message-warning').fadeIn();
//             }

// 	      }

//       });
//       return false;
//    });

// });

/*----------------------------------------------------*/
/* Quote Loop
------------------------------------------------------ */

function fade($ele) {
  $ele
    .fadeIn(1000)
    .delay(3000)
    .fadeOut(1000, function () {
      var $next = $(this).next(".quote");
      fade($next.length > 0 ? $next : $(this).parent().children().first());
    });
}
fade($(".quoteLoop > .quote").first());

/*----------------------------------------------------*/
/* Navigation
------------------------------------------------------ */

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    console.log("scroll");

    $(".main_nav").addClass("sticky");
  } else {
    $(".main_nav").removeClass("sticky");
  }
});
// Mobile Navigation

// Mobile Navigation
$(".mobile-toggle").click(function () {
  if ($(".main_nav").hasClass("open-nav")) {
    $(".main_nav").removeClass("open-nav");
    $(".main_nav").removeClass("sticky");
  } else {
    $(".main_nav").addClass("open-nav");
  }
});

$(".main_nav a").click(function () {
  console.log("click");
  if ($(".main_nav").hasClass("open-nav")) {
    $(".navigation").removeClass("open-nav");
    $(".main_nav").removeClass("open-nav");
    $(".main_nav").removeClass("opaque");
    $(".main_nav").removeClass("sticky");
  }
});

/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

jQuery(document).ready(function ($) {
  $(".smoothscroll").on("click", function (e) {
    e.preventDefault();

    var target = this.hash,
      $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        800,
        "swing",
        function () {
          window.location.hash = target;
        }
      );
  });
});
