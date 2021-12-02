function getEmail() {
  const email = document.querySelector('#email-login').value;
  return email;
}

function getPassword() {
  const password = document.querySelector('#password').value;
  return password;
}

function validateLogin(email, password) {
  if (email === 'tryber@teste.com' && password === '123456') {
    return true;
  }
  return false;
}

function alertLogin() {
  if (validateLogin(getEmail(), getPassword()) === true) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function btnLogin() {
  const buttonLogin = document.querySelector('#login');
  buttonLogin.addEventListener('click', alertLogin);
}

// ----

function validateCheck() {
  const agreement = document.querySelector('#agreement');
  if (agreement.checked) {
    return true;
  }
  return false;
}

function submit() {
  const button = document.querySelector('#submit-btn');
  if (validateCheck() === true) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

function checkSubmit() {
  const checkAgreement = document.querySelector('#agreement');
  checkAgreement.addEventListener('click', submit);
}

// ----

function getTextChars() {
  const textArea = document.querySelector('#textarea').value;
  return textArea.length;
}

function countChar() {
  const textChars = getTextChars();
  document.querySelector('#counter').innerText = (500 - textChars);
}

function charsCount() {
  const textArea = document.querySelector('#textarea');
  textArea.addEventListener('keyup', countChar);
}

// Chamar as funções
btnLogin();
checkSubmit();
charsCount();
