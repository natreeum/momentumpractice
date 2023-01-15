const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#loginform input');

function onLoginSubmit(event) {
  event.preventDefault();
}

loginForm.addEventListener('submit', onLoginSubmit);
