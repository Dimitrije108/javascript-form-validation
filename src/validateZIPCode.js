export default function validateZIPCode() {
  const zipCode = document.querySelector('#zip');
  const error = document.querySelector('.zip-error');
  let country = document.querySelector('#country');
  let valid = false;

  if (!zipCode || !error) return;

  const countryZipCodes = {
    serbia: [
      /^\d{5}$/,
      'Serbia ZIPs must have exactly 5 digits: e.g. D-12345 or 12345',
    ],
    greece: [
      /^\d{3}\s{0,1}\d{2}$/,
      'Greece ZIPs must start with exactly 3 digits. After the 3 digits, there can be either no whitespace or exactly one whitespace character. Finally, there must be exactly 2 digits, e.g. D-123 45 or 123 45.',
    ],
    france: [
      /^\d{4}$/,
      'France ZIPs must have exactly 4 digits: e.g. D-1234 or 1234',
    ],
    germany: [
      /^\d{3}$/,
      'Germany ZIPs must have exactly 3 digits: e.g. D-123 or 123',
    ],
  };

  const checkValidity = () => {
    const selected = countryZipCodes[country.value];
    if (zipCode.validity.valueMissing) {
      zipCode.setCustomValidity('Enter a ZIP Code.');
      error.textContent = 'Enter a ZIP Code.';
      valid = false;
    } else if (!selected[0].test(zipCode.value)) {
      zipCode.setCustomValidity(selected[1]);
      error.textContent = selected[1];
      valid = false;
    } else {
      zipCode.setCustomValidity('');
      error.textContent = '';
      valid = true;
    }
  };

  zipCode.addEventListener('input', () => checkValidity());
  zipCode.addEventListener('focus', () => checkValidity());
  country.addEventListener('input', () => checkValidity());

  zipCode.addEventListener('blur', () => {
    if (zipCode.validity.valueMissing) {
      error.textContent = '';
    }
  });

  return valid;
}
