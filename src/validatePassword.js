export function validatePassword() {
  const password = document.querySelector('#password');
  const error = document.querySelector('.password-error');
  const checkPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
  let valid = false;
  // Check if password and error exist
  if (!password || !error) return;

  const getValid = () => valid;

  const checkValidity = () => {
    if (password.validity.valueMissing) {
      password.setCustomValidity('Enter a password.');
      error.textContent = 'Enter a password.';
      valid = false;
    } else if (!checkPass.test(password.value)) {
      password.setCustomValidity('Enter a valid password.');
      error.textContent = 'Enter a valid password.';
      valid = false;
    } else {
      password.setCustomValidity('');
      error.textContent = '';
      valid = true;
    }
  };
  // Display green check mark
  const validReq = (element) => {
    element.textContent = '✔';
    element.classList.remove('error');
    element.classList.add('validReq');
  };
  // Display red 'X'
  const invalidReq = (element) => {
    element.textContent = '✘';
    element.classList.remove('validReq');
    element.classList.add('error');
  };
  // Use red 'X' or a green check mark next to the list item requirement
  // to indicate if it's fulfilled or not
  const checkRequirements = () => {
    const requirements = {
      uppercase: [/[A-Z]/, document.querySelector('.uppercase')],
      lowercase: [/[a-z]/, document.querySelector('.lowercase')],
      number: [/\d/, document.querySelector('.number')],
      minimal: [/^.{8,}$/, document.querySelector('.minimalRequired')],
    };
    // Loop over requirements object and check if the value meets them
    for (const key in requirements) {
      if (requirements[key][0].test(password.value)) {
        validReq(requirements[key][1]);
      } else {
        invalidReq(requirements[key][1]);
      }
    }
  };

  password.addEventListener('input', () => {
    checkRequirements();
    checkValidity();
  });

  password.addEventListener('focus', () => checkValidity());

  password.addEventListener('blur', () => {
    if (password.validity.valueMissing) {
      error.textContent = '';
    }
  });

  return { getValid };
}
// Validates if the confirm password input matches with the password input
export function validateConfirmPassword() {
  const confirmPassword = document.querySelector('#confirm-password');
  const password = document.querySelector('#password');
  const error = document.querySelector('.confirm-password-error');
  let valid = false;
  // Check if passwords and error exist
  if (!confirmPassword || !password || !error) return;

  const getValid = () => valid;

  const checkValidity = () => {
    if (confirmPassword.validity.valueMissing) {
      confirmPassword.setCustomValidity('Confirm your password.');
      error.textContent = 'Confirm your password.';
      valid = false;
    } else if (confirmPassword.value !== password.value) {
      confirmPassword.setCustomValidity('Passwords need to match.');
      error.textContent = 'Passwords need to match.';
      valid = false;
    } else {
      confirmPassword.setCustomValidity('');
      error.textContent = '';
      valid = true;
    }
  };

  confirmPassword.addEventListener('input', () => checkValidity());
  confirmPassword.addEventListener('focus', () => checkValidity());

  confirmPassword.addEventListener('blur', () => {
    if (confirmPassword.validity.valueMissing) {
      error.textContent = '';
    }
  });

  return { getValid };
}
