// eslint-disable-next-line no-unused-vars
import html from './index.html';
import './style.css';
import validateEmail from './validateEmail';
import validateZIPCode from './validateZIPCode';
import { validatePassword, validateConfirmPassword } from './validatePassword';
import validateForm from './validateForm';

document.addEventListener('DOMContentLoaded', () => {
  validateEmail();
  validateZIPCode();
  validatePassword();
  validateConfirmPassword();
  validateForm();
});
