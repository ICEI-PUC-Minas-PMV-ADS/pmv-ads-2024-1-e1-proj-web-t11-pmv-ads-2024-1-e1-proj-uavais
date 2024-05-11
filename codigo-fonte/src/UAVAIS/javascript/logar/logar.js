function entrar(){
  let email = document.querySelector("#input2")
  let emailLabel = document.querySelector("#placeholder2")


  let senha = document.querySelector("#input3")
  let senhaLabel = document.querySelector("#placeholder3")

  let msgError = document.querySelector(".msgError")
  let listaUser = []

  let userValid = {
    nome: "",
    email: "",
    senha: ""
  }

  listaUser = JSON.parse(localStorage.getItem("listaUser"))

  listaUser.forEach((item) =>{
    if(email.value == item.emailCad && senha.value == item.senhaCad){
      userValid = {

        nome: item.nomeCad,
        email: item.emailCad,
        senha: item.senhaCad
      }

    }
  })

 if(email.value == userValid.email && email.value !== "" && senha.value == userValid.senha && senha.value !== ""){
  window.location.href = "index.html"

  let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substr(2)
  localStorage.setItem("token", token)

  localStorage.setItem("userLogado", JSON.stringify(userValid))

 }else{
  emailLabel.setAttribute("style", "color: red")
  email.setAttribute("style", "border-color: red")
  senhaLabel.setAttribute("style", "color: red")
  senha.setAttribute("style", "border-color: red")
  msgError.setAttribute("style", "display:inline")
  msgError.innerHTML = "Usuário ou senha incorretos."
  email.focus()
 }

}