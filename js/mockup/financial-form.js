import 'classlist.js';
import { TextField } from 'field-kit';

const fields = document.querySelectorAll("[class*='floating-container'] input");

if (fields.length !== 0) {
  fields.forEach(function(f) {
    const field = new TextField(f);

    field.setDelegate({
      textFieldDidEndEditing: function(field) {
        if(field.value() != ''){
          f.classList.add('active');
        } else {
          f.classList.remove('active');
        }
      },
      textFieldDidBeginEditing: function(field) {
        fields.forEach(function(f) {
          if(f != document.activeElement) {
            f.classList.remove('active');
          }
        });  
      },
      textDidChange: function(field) {
        fields.forEach(function(f) {
          if(f != document.activeElement) {
            f.value = '';
          }
        });  
      }
    });
  });
}
