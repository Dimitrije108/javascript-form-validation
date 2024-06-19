import validateEmail from './validateEmail';
import validateZIPCode from './validateZIPCode';
import { validatePassword, validateConfirmPassword } from './validatePassword';

export default function validateForm() {
  const form = document.querySelector('form');
  const formMessage = document.querySelector('.submit-text');
  const inputFields = [
    validateEmail(),
    validateZIPCode(),
    validatePassword(),
    validateConfirmPassword(),
  ];
  let inputValues = [];

  const clearInputs = () => {
    inputValues = [];
  };

  const checkInputs = () => {
    if (inputValues.includes(false)) {
      formMessage.textContent =
        'There are empty required field/s or invalid field/s present';
      formMessage.classList.remove('validReq');
      formMessage.classList.add('error');
    } else {
      formMessage.textContent =
        'Your form was submitted successfully. High five! 🙌';
      formMessage.classList.remove('error');
      formMessage.classList.add('validReq');
    }
  };

  const addValidation = () => {
    inputFields.forEach((input) => {
      inputValues.push(input.getValid());
    });
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addValidation();
    checkInputs();
    clearInputs();
  });

  return { addValidation };
}
