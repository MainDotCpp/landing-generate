(function ($) {
  $(() => {
    const display = function () {
      if ($(this).scrollTop() > 150) { // scroll��
        $('.Bnr').fadeIn()
      }
      else {
        $('.Bnr').fadeOut()
      }
    }
    $(window).on('scroll', display)
    // click
    $('.Bnr p.close a').click(() => {
      $('.Bnr').fadeOut()
      $(window).off('scroll', display)
    })
  })
})(jQuery)
