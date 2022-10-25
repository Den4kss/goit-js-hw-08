import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  message: document.querySelector('textarea'),
};
let formData = {};
let savedForm = localStorage.getItem('feedback-form-state');

if (savedForm) {
  const data = JSON.parse(savedForm);
  populateTextarea(data);
}

function populateTextarea(data) {
  const { email, message } = data;
  if (data.hasOwnProperty('email')) {
    refs.input.value = email;
    formData.email = email;
  }
  if (data.hasOwnProperty('message')) {
    refs.message.value = message;
    formData.message = message;
  }
}
refs.form.addEventListener(
  'input',
  throttle(function (event) {
    const atrName = event.target.getAttribute('name');

    if (atrName === 'email') {
      formData.email = event.target.value;
    }

    if (atrName === 'message') {
      formData.message = event.target.value;
    }

    savedForm = JSON.stringify(formData);
    localStorage.setItem('feedback-form-state', savedForm);
  }, 500)
);

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  localStorage.clear();
  refs.input.value = '';
  refs.message.value = '';
  formData = {};
}
refs.form.addEventListener('submit', onFormSubmit);
