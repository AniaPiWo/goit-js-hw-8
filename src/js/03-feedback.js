import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const reloadBtn = document.querySelector('#reload');
const resetBtn = document.querySelector('#reset');

function handleSubmit(event) {
  event.preventDefault();
  const email = input.value;
  const message = textarea.value;
  const formData = { email, message };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  console.log(formData);
}
form.addEventListener('input', throttle(handleSubmit, 500));

const savedData = localStorage.getItem('feedback-form-state');
console.log(savedData);

if (savedData) {
  const parsedData = JSON.parse(savedData);
  input.value = parsedData.email;
  textarea.value = parsedData.message;
}

reloadBtn.addEventListener('click', () => {
  location.reload();
});

resetBtn.addEventListener('click', () => {
  localStorage.removeItem('feedback-form-state');
  form.reset();
});
