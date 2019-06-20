"use strict";

(function () {
  var fields = document.querySelectorAll('.field-num');

  if (fields.length) {
    Array.prototype.forEach.call(fields, function (field) {
      var input = field.querySelector('.field-num__input');
      var valueMin = input.getAttribute('min') ? +input.getAttribute('min') : -Infinity;
      var valueMax = input.getAttribute('max') ? +input.getAttribute('max') : Infinity;
      var valueStep = input.getAttribute('step') ? +input.getAttribute('step') : 1;
      field.addEventListener('click', function (event) {
        if (event.target.classList.contains('field-num__btn') && !input.getAttribute('disabled')) {
          var num = parseInt(input.value);
          if (isNaN(num)) num = 0;

          if (event.target.classList.contains('field-num__btn--plus')) {
            if (num < valueMax) input.value = num + valueStep;
          }

          if (event.target.classList.contains('field-num__btn--minus')) {
            if (num > valueMin) input.value = num - valueStep;
          }
        }
      });
    });
  }
})();
