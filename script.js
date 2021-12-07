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

// Função que adiciona o Event Listener ao checkbox.
function putEventCheck() {
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

/* REQUISITO 21 */
// GET
function getNewName() {
  const name = document.querySelector('#input-name').value;
  return name;
}

function getNewSurname() {
  const surname = document.querySelector('#input-lastname').value;
  return surname;
}

function getNewEmail() {
  const email = document.querySelector('#input-email').value;
  return email;
}

function getNewHouse() {
  const house = document.querySelector('#house').value;
  return house;
}

// ref.: https://www.javatpoint.com/how-to-check-a-radio-button-using-javascript
function getNewFamily() {
  const family = document.querySelector('input[name="family"]:checked').value;
  return family;
}

function getNewContent() {
  const contentArray = document.querySelectorAll('.subject:checked');
  const content = [];
  for (let index = 0; index < contentArray.length; index += 1) {
    content[index] = contentArray[index].value;
  }
  return content.join(', ');
}

function getNewEvaluation() {
  const evaluation = document.querySelector('input[name="rate"]:checked').value;
  return evaluation;
}

function getNewComment() {
  const comment = document.querySelector('#textarea').value;
  return comment;
}

// Constructor
function constructorNewUser() {
  const user = {
    name: getNewName(),
    surname: getNewSurname(),
    email: getNewEmail(),
    house: getNewHouse(),
    family: getNewFamily(),
    content: getNewContent(),
    evaluation: getNewEvaluation(),
    comment: getNewComment(),
  };
  return user;
}

// Set
// ref.: https://www.javascripttutorial.net/dom/manipulating/replace-a-dom-element/
function setNewName(name, surname) {
  const inputName = document.querySelector('#input-name');
  const inputSurname = document.querySelector('#input-lastname');
  inputSurname.remove();
  const paragraph = document.createElement('p');
  inputName.nextElementSibling.remove();
  inputName.parentNode.nextElementSibling.remove();
  paragraph.innerText = `Nome: ${name} ${surname}`;
  inputName.parentNode.replaceChild(paragraph, inputName);
}

function setNewEmail(email) {
  const inputEmail = document.querySelector('#input-email');
  const paragraph = document.createElement('p');
  inputEmail.nextElementSibling.remove();
  paragraph.innerText = `Email: ${email}`;
  inputEmail.parentNode.replaceChild(paragraph, inputEmail);
}

function setNewHouse(house) {
  const selectHouse = document.querySelector('#house');
  const paragraph = document.createElement('p');
  selectHouse.nextElementSibling.remove();
  paragraph.innerText = `Casa: ${house}`;
  selectHouse.parentNode.replaceChild(paragraph, selectHouse);
}

function setNewFamily(family) {
  const divFamily = document.querySelector('#family');
  const paragraph = document.createElement('p');
  paragraph.innerText = `Família: ${family}`;
  divFamily.replaceChild(paragraph, divFamily.firstChild);
  for (let index = 1; divFamily.children.length > 1;) {
    divFamily.children[index].remove();
  }
}

function setNewContent(content) {
  const divContent = document.querySelector('#content');
  const paragraph = document.createElement('p');
  paragraph.innerText = `Matérias: ${content}`;
  divContent.replaceChild(paragraph, divContent.firstChild);
  for (let index = 1; divContent.children.length > 1;) {
    divContent.children[index].remove();
  }
}

function setNewEvaluation(evaluation) {
  const divEvaluation = document.querySelector('#evaluation');
  const paragraph = document.createElement('p');
  paragraph.innerText = `Avaliação: ${evaluation}`;
  divEvaluation.replaceChild(paragraph, divEvaluation.firstChild);
  for (let index = 1; divEvaluation.children.length > 1;) {
    divEvaluation.children[index].remove();
  }
}

function setNewComment(comment) {
  const divComments = document.querySelector('#comments');
  const paragraph = document.createElement('p');
  paragraph.innerText = `Observações: ${comment}`;
  divComments.replaceChild(paragraph, divComments.firstChild);
  for (let index = 1; divComments.children.length > 1;) {
    divComments.children[index].remove();
  }
}

function setNewUser(user) {
  setNewName(user.name, user.surname);
  setNewEmail(user.email);
  setNewHouse(user.house);
  setNewFamily(user.family);
  setNewContent(user.content);
  setNewEvaluation(user.evaluation);
  setNewComment(user.comment);
}

function printNewUser(event) {
  event.preventDefault();
  const user = constructorNewUser();
  setNewUser(user);
  event.preventDefault();
}

function putEventSubmitBtn() {
  const submitBtn = document.querySelector('#submit-btn');
  submitBtn.addEventListener('click', printNewUser);
}

// Chamar as funções
putEventLogin();
putEventCheck();
putEventSubmitBtn();
countCharsTextArea();
