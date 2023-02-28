'use strict'
const userName = document.querySelector('#name-output');
const formInput = document.querySelector('#name-input');



formInput.addEventListener('input', (event) => {
    userName.textContent = event.target.value === '' ? 'Anonymous' : event.target.value;
  });