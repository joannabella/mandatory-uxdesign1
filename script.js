Mds.textField(document.querySelector('.mds-textfield__input'));

let textfield = document.querySelector('.mds-textfield__input');
let mySwitch = document.querySelector('.mds-switch__input');
let checkbox = document.querySelector('.mds-checkbox__input');
let radioButton = document.querySelectorAll('.mds-radio__input');

let disableButton = document.querySelector('.mds-disableButton');
disableButton.addEventListener('click', function(event) {

  textfield.classList.add('mds-textfield__input--disabled');
  textfield.setAttribute('disabled', true);

  mySwitch.classList.add('mds-switch__input--disabled');
  mySwitch.setAttribute('disabled', true);

  checkbox.classList.add('mds-checkbox__input--disabled');
  checkbox.setAttribute('disabled', true);

  for (let radio of radioButton) {
    radio.classList.add('mds-radio__input--disabled');
    radio.setAttribute('disabled', true);
  }
});

let enableButton = document.querySelector('.mds-enableButton');
enableButton.addEventListener('click', function(event) {

  textfield.classList.remove('mds-textfield__input--disabled');
  textfield.removeAttribute('disabled');

  mySwitch.classList.remove('mds-switch__input--disabled');
  mySwitch.removeAttribute('disabled');

  checkbox.classList.remove('mds-checkbox__input--disabled');
  checkbox.removeAttribute('disabled');

  for (let radio of radioButton) {
    radio.classList.remove('mds-radio__input--disabled');
    radio.removeAttribute('disabled');
  }
});
