import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  message: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);

const formData = {};

refs.form.addEventListener(
  'input',
  throttle(evt => {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 500)
);
function onFormSubmit(evt) {
  evt.preventDefault();
  evt.target.reset();
  localStorage.removeItem('feedback-form-state');
}

populateTextarea();
function populateTextarea() {
  const savedForm = localStorage.getItem('feedback-form-state');
  const data = JSON.parse(savedForm);

  if (savedForm) {
    refs.input.value = data.email;
    refs.message.value = data.message;
  }
}
