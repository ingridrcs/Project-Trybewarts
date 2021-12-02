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

// Chamar as funções
btnLogin();
