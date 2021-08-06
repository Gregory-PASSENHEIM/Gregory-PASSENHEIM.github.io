$(function() { var logo = document.querySelector("#sticky-wrapper > header > div > div > div.col-6.col-xl-2 > div"); $(window).scroll(function() {
var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      if(!logo.hasClass("sml-logo")) {
        logo.hide();
        logo.removeClass('before-logo').addClass("sml-logo").fadeIn( "slow");
      }s
    } else {
      if(!logo.hasClass("before-logo")) {
        logo.hide();
        logo.removeClass("sml-logo").addClass('before-logo').fadeIn( "slow");
      }
    }

});
});