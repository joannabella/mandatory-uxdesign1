const Mds = {
  textField: function(element) {
    element.addEventListener('click', function(event) {
      if (element.classList.contains('mds-textfield__input--disabled')) {

      }
    });
    element.addEventListener('blur', function() {
      if (element.value) {
        element.classList.add('mds-textfield__input--active')
      } else {
        element.classList.remove('mds-textfield__input--active');
      }
    });
  },
  switch: function(element) {

  },
  checkbox: function(element) {

  },
  radioButton: function(element) {

  },
};
