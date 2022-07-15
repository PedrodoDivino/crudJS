let count = 0;
let input = document.getElementById("task");

let btn = document.getElementById("btn");

let main = document.getElementById("list-area");

// pegando os dados e atribuindo em variaveis para poder trabalhar com eles.

function addTask() {
  // pegar o valor digitado no input
  let valorInput = input.value;
  // (validações)  Se nao for vazio nem nulo nem undefined
  if (valorInput !== "" && valorInput != null && valorInput != undefined) {
    ++count;
    let novoItem = `<div class="item" id="${count}">
<div onclick="checkTask(${count})" class="item-icon">
    <i id="icon${count}" class="mdi mdi-circle-outline"></i>
</div>
<div class="item-name" onclick="checkTask(${count})">
    ${valorInput}
</div>
<div class="item-button">
    <button class="delete" onclick="del(${count})">Del
<i class="mdi mdi-delete"></i>
    </button>
</div>
</div>`;
    // adicionar novo intem no main
    main.innerHTML += novoItem;

    //zerar o formulario
    input.value = "";
    input.focus();
  }
}
function checkTask(id) {
  const item = document.getElementById(id);
  let classe = item.getAttribute("class");
  console.log(classe);
  if (classe == "item") {
    item.classList.add("clicado");

    let icon = document.getElementById("icon_" + id);
    icon.classList.remove("mdi-circle-outline");
    icon.classList.add("mdi-check-circle");
    item.parentNode.appendChild(item);
  }

  // função para deletar itens
}
function del(id) {
  const task = document.getElementById(id);
  task.remove();
}

// função para quando teclar a tecla "enter" ele adicionar uma nova task também
input.addEventListener("keyup", function (e) {
  // pego meu input, faço um "escutador" de eventos, e seleciono a propriedade keyup.
  // dentro dela faço uma função que recebe um "e" que é um evento.
  if (e.key === "Enter") {
    // (validação), se o meu "escutador" de enventos receber a Enter
    e.preventDefault();
    // e.preventDefault para nao atualizar a pagina, quando der enter.
    btn.click();
    // eu chammo  o meu clique, e assim quando eu apertar o enter, ele adiiona uma nova task
  }
});
