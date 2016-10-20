import $ from 'jquery';

import './app/pw-toggle';
import './app/form-validation';
import './app/form-field-format';
import './app/idv-finance-helper';

import './misc/pw-strength';

import './mockup/financial-form'

// Swap in any query string values
var decode = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); };
var queryString = location.search.substring(1); 
var keyValues = queryString.split('&'); 

for(var i in keyValues) { 
  var key = keyValues[i].split('=');
  if (key.length > 1) {
    var k = decode(key[0]);
    var v = decode(key[1]);
    var el = document.getElementById(k);
    if(el){
      el.innerHTML = v;
    }
  }
} 
