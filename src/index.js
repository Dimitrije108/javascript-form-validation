// eslint-disable-next-line no-unused-vars
import html from './index.html';
import './style.css';
import validateEmail from './validateEmail';
import { validatePassword, validateConfirmPassword } from './validatePassword';

document.addEventListener('DOMContentLoaded', () => {
  validateEmail();
  validatePassword();
  validateConfirmPassword();
});
