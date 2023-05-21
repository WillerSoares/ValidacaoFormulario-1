// ---------- Adicionar E Remover Popup ---------- //
function togglePopup(input, label) {
  // Mostrar popup de campo obrigatório
  input.addEventListener('focus', () => {
    label.classList.add('required-popup');
  });
  // Ocultar popup de campo obrigatório
  input.addEventListener('blur', () => {
    label.classList.remove('required-popup');
  });
}


// ---------- VALIDAÇÃO USERNAME ---------- //
const usernameInput = document.getElementById("username");
const usernameLabel = document.querySelector('label[for="username"]');
const usernameHelper = document.getElementById("username-helper");

// ---------- Validar Valor Do Input Username---------- //
usernameInput.addEventListener('input', (event) => {
  const value = event.target.value;

  if (value.length <= 3) {
    usernameInput.classList.remove('correct');
    usernameInput.classList.add('error');
    usernameHelper.innerText = '*O username precisa ter 3 ou mais caracteres!';
    usernameHelper.classList.add('visible');
    inputsCorretos.username = false;
  } else {
    usernameInput.classList.remove('error');
    usernameInput.classList.add('correct');
    usernameHelper.classList.remove('visible');
    inputsCorretos.username = true;
  }
})

togglePopup(usernameInput, usernameLabel)


// ---------- VALIDAÇÃO E-MAIL ---------- //
const emailInput = document.getElementById("email");
const emailLabel = document.querySelector('label[for="email"]');
const emailHelper = document.getElementById("email-helper");

// ---------- Validar Valor Do Input Email ---------- //
emailInput.addEventListener('input', (e) => {
  const value = e.target.value;

  if (value.includes('@') && value.includes('.com')) {
    emailInput.classList.add('correct');
    emailHelper.classList.remove('visible');
    inputsCorretos.email = true;
  } else {
    emailInput.classList.remove('correct');
    emailInput.classList.add('error');
    emailHelper.innerText = '*O Email precisa ter um "@" e um ".com" !';
    emailHelper.classList.add('visible');
    inputsCorretos.email = false;
  }
})

togglePopup(emailInput, emailLabel)


// ---------- VALIDAÇÃO Idade ---------- //
const idadeInput = document.getElementById("idade");
const idadeLabel = document.querySelector('label[for="idade"]');
const idadeHelper = document.getElementById("idade-helper");

// ---------- Validar Valor Do Input Idade ---------- //
idadeInput.addEventListener('input', (e) => {
  const value = e.target.value;

  if (value <= 15) {
    idadeInput.classList.remove('correct');
    idadeInput.classList.add('error');
    idadeHelper.innerText = '*Você precisa ter 16 anos ou mais!';
    idadeHelper.classList.add('visible');
    inputsCorretos.idade = false;
  } else {
    idadeInput.classList.remove('error');
    idadeInput.classList.add('correct');
    idadeHelper.classList.remove('visible');
    inputsCorretos.idade = true;
  }
})

togglePopup(idadeInput, idadeLabel)


// ---------- VALIDAÇÃO SENHA ---------- //
const senhaInput = document.getElementById("senha");
const senhaLabel = document.querySelector('label[for="senha"]');
const senhaHelper = document.getElementById("senha-helper");

// ---------- Validar Valor Do Input Senha ---------- //
senhaInput.addEventListener('input', (e) => {
  const value = e.target.value;

  if (value.length <= 5) {
    senhaInput.classList.remove('correct');
    senhaInput.classList.add('error');
    senhaHelper.innerText = '*Sua senha precisa ter 6 ou mais caracteres!';
    senhaHelper.classList.add('visible');
    inputsCorretos.senha = false;
  } else {
    senhaInput.classList.remove('error');
    senhaInput.classList.add('correct');
    senhaHelper.classList.remove('visible');
    inputsCorretos.senha = true;
  }
})

togglePopup(senhaInput, senhaLabel)


// ---------- VALIDAÇÃO Confirmar SENHA ---------- //
const confirmaSenhaInput = document.getElementById("confirma-senha");
const confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
const confirmaSenhaHelper = document.getElementById("confirma-senha-helper");

// ---------- Validar Valor Do Input Confirmar Senha ---------- //
confirmaSenhaInput.addEventListener('input', (e) => {
  const value = e.target.value;

  if (value == senhaInput.value) {
    confirmaSenhaInput.classList.remove('error');
    confirmaSenhaInput.classList.add('correct');
    confirmaSenhaHelper.classList.remove('visible');
    inputsCorretos.confirmaSenha = true;
  } else {
    confirmaSenhaInput.classList.remove('correct');
    confirmaSenhaInput.classList.add('error');
    confirmaSenhaHelper.innerText = '*As Duas Senhas Precisam Ser Iguais!'
    confirmaSenhaHelper.classList.add('visible');
    inputsCorretos.confirmaSenha = false;
  }
})

togglePopup(confirmaSenhaInput, confirmaSenhaLabel)


// ---------- EVITAR ENVIO DO FORMULÁRIO ---------- //
let btnSubimit = document.querySelector('button[type="submit"]')
let inputsCorretos = {
  username: false,
  email: false,
  idade: false,
  senha: false,
  confirmaSenha: false
}

btnSubimit.addEventListener("click", (e) => {

  if (
    inputsCorretos.username == false ||
    inputsCorretos.email == false ||
    inputsCorretos.senha == false ||
    inputsCorretos.email == false ||
    inputsCorretos.confirmaSenha == false) {
    e.preventDefault()
    alert('Os campos obrigatórios precisam ser preenchidos corretamente!')
  } else {
    alert("Formulário enviado com Sucesso.")
  }
})
