$(document).ready(function () {

  // // Load steps on Phone of Record page in steps
  // $('#two_factor_setup_form_phone').keyup(function() {
  //   var value = this.value;
  //   var phone = new RegExp('^(\\+?0?1\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}$');

  //   if (phone.test(value)) {
  //     $('#js-phone2fa-questions').slideDown('slow');
  //   }
  // });

  var $radios = $('#js-phone2fa-questions [type=radio]');

  $radios.change(function() {
    var total = 0;
    var pass = 0;

    $radios.each(function(){
      if ($(this).hasClass('js-pass')) {
        if ($(this).is(':checked')) {
          $('#' + this.name + '-fail').slideUp('slow');
          pass++;
        }
        total++;
      } else {
        if ($(this).is(':checked')) {
          $('#' + this.name + '-fail').slideDown('slow');
        }
      }
    });

    if (pass >= total) {
      $('#js-phone2fa-submit').show('slow');
    } else {
      $('#js-phone2fa-submit').hide('slow');
    }

  });
});
