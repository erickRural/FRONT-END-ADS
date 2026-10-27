function executar (evento {
    event.preventDefault();
    
limparForm();

    const nome = document.querySelector("#nome").Value;
    const erroNome = document.querySelector("#erro-nome")
    if (nome === "") {
        erronopme.textContent = "NOme não pode estar vazio!";
        erroNome.classList.add("erro");
        erroNome.classList.remove("oculto");
    }

    const idade = document.querySelector("idade").value;
    const erroIdade = document.querySelector("#erro-idade");
    if (idade === "") {
        erroIdade.textContent = "Idade não pode estar vazio!";
        erroIdade.classList.add("erro");
        erroIdade.classList.remove("oculto");
    } else if (Number(idade) < 18) {
        erroIdade.textContent = "É necessario ter 18 anos!";
        erroIdade.classList.add("erro");
        erroIdade.classList.remove("oculto");
    }
}

  // DESAFIO VALIDAR O EMAUL COM REGEX
  const termos = document.querySelector("#termos");
  const erroTermos = document.querySelector("#erro-termos");
  if (termos.checked === false) {
    erroTermos.textContent = "É preciso aceitar os termos"
    erroTermos.classList.add("erro");
    erroTermos.classlist.remove("oculto");
  }

 // () => {} arrow function ==>
function limparForm() {
    document.querySelectorAll(".erro").forEach(item) => {
        item.classlist.remove("erro");
        item.classList.add("oculto"); 
    }
}