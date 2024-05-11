let nome = document.querySelector("#input")
let labelNome= document.querySelector("#placeholder1")
let validNome = false

let email = document.querySelector("#input2")
let labelEmail= document.querySelector("#placeholder2")
let validEmail = false

let senha = document.querySelector("#input3")
let labelSenha= document.querySelector("#placeholder3")
let validSenha = false

let confirmSenha = document.querySelector("#input4")
let labelConfirmSenha= document.querySelector("#placeholder4")
let validConfirmSenha = false

let msgError = document.querySelector(".msgError")
let msgSucess = document.querySelector(".msgSucess")


nome.addEventListener('keyup', () =>{
  if(nome.value.length <= 4){
    labelNome.setAttribute("style", "color: red")
    validNome = false
  }else{
    labelNome.setAttribute("style", "color: green")
    validNome = true
  }
})

email.addEventListener('keyup', () =>{
  if(!isEmailValid(email.value)){
    labelEmail.setAttribute("style", "color: red")
    validEmail = false
  }else{
    labelEmail.setAttribute("style", "color: green")
    validEmail = true
  }
})

senha.addEventListener('keyup', () =>{
  if(senha.value.length <= 6){
    labelSenha.setAttribute("style", "color: red")
    validSenha = false
  }else{
    labelSenha.setAttribute("style", "color: green")
    validSenha = true
  }
})

confirmSenha.addEventListener('keyup', () =>{
  if(confirmSenha.value !== senha.value){
    labelConfirmSenha.setAttribute("style", "color: red")
    validConfirmSenha = false
  }else{
    labelConfirmSenha.setAttribute("style", "color: green")
    validConfirmSenha = true
  }
})

function cadastrar(){

const form = document.querySelector('.preencher')
form.addEventListener('submit', e => {
  e.preventDefault()
})

if (validNome && validEmail && validSenha && validConfirmSenha){
  let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]")

  listaUser.push(
    {
      nomeCad: nome.value,
      emailCad: email.value,
      senhaCad: senha.value
    }
  )

  localStorage.setItem('listaUser', JSON.stringify(listaUser))

  msgSucess.setAttribute("style", "display: inline")
  msgSucess.innerHTML = "<strong>Cadastrando usuário...</strong>"
  msgError.innerHTML = ""
  msgError.setAttribute("style", "display: none")


  setTimeout(() =>{
    window.location.href = "logar.html"
  }, 2000)


} else{
  msgError.setAttribute("style", "display: inline")
  msgError.innerHTML = "<strong>Preencha todos os campos corretamente.</strong>"
  msgSucess.innerHTML = ""
  msgSucess.setAttribute("style", "display: none")
}

}


function isEmailValid(email){

//Cria uma regex para validar email
const emailRegex = new RegExp(
    /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/
  );

  if(emailRegex.test(email)) {
    return true;
  }

  return false;

}