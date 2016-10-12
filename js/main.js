import $ from 'jquery';

// import './app/pw-toggle';
// import './app/pw-strength';
import './app/form-validation';
import './app/form-field-format';
import './app/idv-finance-helper';


import { TextField } from 'field-kit';

const inputs = document.querySelectorAll("[class*='floating-container'] input");

for (let i = 0; i < inputs.length; i++) {
  const parent = inputs[i].parentNode;
  const label = parent.querySelector('label');
  const input = new TextField(inputs[i]);

  input.setFocusedPlaceholder('');
  input.setUnfocusedPlaceholder(label.textContent);

  input.setDelegate({
    textFieldDidEndEditing: function(input) {
      if(input.value() == ''){
        inputs[i].classList.add('empty');
      } else {
        inputs[i].classList.remove('empty');
      }
    }
  });

}
