// main js file

var module = require('./modules/module');

// Add a little good UX for HTML5 validation.
jQuery(function($) {
  /**
   * Checks an input's validity and flags its .form-group accordingly.
   */
  var flagValidity = function() {
    var $form_group = $(this).closest('.form-group');

    if (!$form_group.length) return;

    $form_group.removeClass('missing-required has-error');
    if ($(this).is('[required]') && !$(this).val()) {
      $form_group.addClass('missing-required');
    } else {
      if (Boolean(this.checkValidity)) {
        if (!this.checkValidity()) {
          $form_group.addClass('has-error');
        }
      }
    }
  };

  $('.form-control').change(flagValidity);
});
