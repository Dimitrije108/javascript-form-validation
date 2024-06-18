export default function validateEmail() {
  const email = document.querySelector('#email');
  const error = document.querySelector('.email-error');
  // Check if email and error exist
  if (!email || !error) return;
  // Display email error message depending on the error present
  const emailError = () => {
    if (email.validity.valueMissing) {
      error.textContent = 'Enter an email address.';
    } else if (email.validity.typeMismatch) {
      error.textContent = 'Entered value needs to be an email address.';
    } else if (email.validity.tooShort) {
      error.textContent = `Email address needs to be at least ${email.minLength} characters long.`;
    }
  };
  // Check if email value is valid
  const checkEmail = () => {
    if (!email.validity.valid) {
      return emailError();
    }
    error.textContent = '';
  };

  email.addEventListener('input', () => checkEmail());
  email.addEventListener('focus', () => checkEmail());

  email.addEventListener('blur', () => {
    if (email.validity.valueMissing) {
      error.textContent = '';
    }
  });
}
