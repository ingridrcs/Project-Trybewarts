// Função para capturar o email no input.
function getEmail() {
  const email = document.querySelector('#email-login').value;
  return email;
}

// Função para capturar a senha no input.
function getPassword() {
  const password = document.querySelector('#password').value;
  return password;
}

// Função para validar o login.
// ref.: https://stackoverflow.com/questions/13831601/disabling-and-enabling-a-html-input-button
function validateLogin(email, password) {
  if (email === 'tryber@teste.com' && password === '123456') {
    return true;
  }
  return false;
}

// Função para emitir alertas conforme resposta da validação.
function alertLogin() {
  if (validateLogin(getEmail(), getPassword())) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

// Função que adiciona o Event Listener ao botão de entrar.
function putEventLogin() {
  const buttonLogin = document.querySelector('#login');
  buttonLogin.addEventListener('click', alertLogin);
}

// ----
// Função que valida se marcou o checkbox.
function validateCheck() {
  const agreement = document.querySelector('#agreement');
  if (agreement.checked) {
    return true;
  }
  return false;
}

// Função que habilita ou desabilita o botão de enviar conforme marcação do checkbox.
function checkSubmit() {
  const button = document.querySelector('#submit-btn');
  if (validateCheck()) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

// Função que adiciona o Event Listener ao botão de enviar.
function putEventSubmit() {
  const checkAgreement = document.querySelector('#agreement');
  checkAgreement.addEventListener('click', checkSubmit);
}

// ----
// Função que caputa a quantidade de caracteres inseridos na text area.
function getTextChars() {
  const textArea = document.querySelector('#textarea').value;
  return textArea.length;
}

// Função que insere no elemento #counter a quantidade de caracteres restantes (max. 500).
function countDownChar() {
  const textChars = getTextChars();
  document.querySelector('#counter').innerText = (500 - textChars);
}

// Função que adiciona o Event Listener à text area conforme a pessoa digite.
function countCharsTextArea() {
  const textArea = document.querySelector('#textarea');
  textArea.addEventListener('keyup', countDownChar);
}

// Chamar as funções
putEventLogin();
putEventSubmit();
countCharsTextArea();
