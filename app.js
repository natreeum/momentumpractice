const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#loginform input');

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(event);
  console.log('hi');
}

loginForm.addEventListener('submit', onLoginSubmit);
