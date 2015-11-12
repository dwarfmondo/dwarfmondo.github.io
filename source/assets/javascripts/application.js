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
  };

})();
