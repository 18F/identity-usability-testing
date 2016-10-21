import $ from 'jquery';

import './app/pw-toggle';
import './app/form-validation';
import './app/form-field-format';
import './app/idv-finance-helper';

import './misc/pw-strength';

import './mockup/financial-form'


$(document).ready(function () {
  if (sessionStorage) {
    // Save form data to sessionStorage on submit
    $('form').submit(function() {
      var $inputs = $('.field', this);

      $inputs.each(function(){
        if (this.type !== 'password' && this.id !== 'code') {
          sessionStorage[$(this).attr('id')] = $(this).val();
          console.log('Saved ' + $(this).attr('id') + ' = ' + $(this).val());
        }
      });
    });

    // Retrieve matching data from sessionStorage on load
    $.each(sessionStorage, function(key, value){
      $('span#' + key).html(value);
      $('input#' + key).not('.ignore').val(value);
      console.log('Retrieved ' + key + ': ' + value);

      if ((key.indexOf('financial') !== -1) && (value !== '')) {
        $('input#' + key).addClass('active');
        $('span#' + key + '_label').removeClass('hide');
      }

      if ((key === 'profile_address2') && (value === '')) {
        $('span#' + key).addClass('hide');
      }      
    });
  } else {
    alert('Warning: HTML5 storage not available; data will not propagate between pages')
  }
});
