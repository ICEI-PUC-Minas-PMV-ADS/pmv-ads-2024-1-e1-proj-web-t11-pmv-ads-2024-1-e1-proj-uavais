var menuItem = document.querySelectorAll("#item-menu")

function selectLink(){
  menuItem.forEach((item)=>
    item.classList.remove("ativo")
  )
  this.classList.add("ativo")
}

menuItem.forEach((item)=>
  item.addEventListener("click", selectLink)
)

//Expandir o menu

var btnExp = document.querySelector("#btn-exp")
var menuSide = document.querySelector("#botoes")

btnExp.addEventListener("click", function(){
  menuSide.classList.toggle("expandir")
})


//Aparecer content

let tabs = document.querySelectorAll("#item-menu a");
let tabContents = document.querySelectorAll(".contents div")

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContents[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});

let userLogado = JSON.parse(localStorage.getItem("userLogado")) 
let logado = document.querySelector(".nome-user")

logado.innerHTML = "" + userLogado.nome


if(localStorage.getItem("token") == null){
  alert("Você precisa estar logado para acessar essa página.")
  window.location.href = "logar.html"
}

function sair(){
  localStorage.removeItem("token")
  window.location.href = "logar.html"
}


let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
  nextImage();
}, 4000)

function nextImage(){
  count++
  if(count>4){
    count = 1;
  }
  document.getElementById("radio"+count).checked = true;
}

