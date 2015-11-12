(function() {
  "use strict";

  if (!window.App)
    window.App = {};

  App.start = function() {
    $(document).foundation({
      tooltip: {
        touch_close_text: '',
        disable_for_touch: true
      },
      equalizer: {
        equalize_on_stack: true
      }
    });

    $('body').on('click', 'a[href="#top"]', function(ev) {
      $('body').animate({scrollTop: 0}, 'slow');
      return false;
    });
  };

})();
