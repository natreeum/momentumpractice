const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greetingH1 = document.querySelector('#greeting');
const greetContainer = document.querySelector('#greetContainer');
const logoutButton = document.querySelector('#logout');

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add('hide');
  greetingH1.innerHTML = username;
  // greetingH1.classList.remove('hide');
  greetContainer.classList.remove('hide');
  window.localStorage.setItem('username', username);
}

function logoutClick() {
  window.localStorage.removeItem('username');
  window.location.reload();
}

const getLocal = window.localStorage.getItem('username');
if (getLocal) {
  loginForm.classList.add('hide');
  greetingH1.innerHTML = getLocal;
  // greetingH1.classList.remove('hide');
  greetContainer.classList.remove('hide');
}

loginForm.addEventListener('submit', onLoginSubmit);
logoutButton.addEventListener('click', logoutClick);
