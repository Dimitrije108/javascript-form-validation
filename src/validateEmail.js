export default function validateEmail() {
  const email = document.querySelector('#email');
  const error = document.querySelector('.email-error');
  let valid = false;
  // Check if email and error exist
  if (!email || !error) return;

  const getValid = () => valid;
  // Display email error message depending on the error present
  const displayError = () => {
    if (email.validity.valueMissing) {
      error.textContent = 'Enter an email address.';
    } else if (email.validity.typeMismatch) {
      error.textContent = 'Entered value needs to be an email address.';
    } else if (email.validity.tooShort) {
      error.textContent = `Email address needs to be at least ${email.minLength} characters long.`;
    }
  };
  // Check if email value is valid
  const checkValidity = () => {
    if (!email.validity.valid) {
      displayError();
      valid = false;
    }
    error.textContent = '';
    valid = true;
  };

  email.addEventListener('input', () => checkValidity());
  email.addEventListener('focus', () => checkValidity());

  email.addEventListener('blur', () => {
    if (email.validity.valueMissing) {
      error.textContent = '';
    }
  });

  return { getValid };
}
