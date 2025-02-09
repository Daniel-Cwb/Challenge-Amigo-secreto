//
// Daniel Fialho - Email: daniel.fialho90@gmail.com
//

let amigos = []

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const lista = document.getElementById("listaAmigos");

    if (input.value.trim() !== "") {
        amigos.push(input.value.trim());

        // Limpa o campo de entrada
        input.value = "";
        atualizarListaAmigos();
    }
}

// Função responsavel por atualizar a lista na tela
function atualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");

    // Limpando a lista antes de adicionar novos elementos
    lista.innerHTML = "";

    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        resultado.innerHTML = "<li>Por Favor!!! Adicione amigos antes de sortear!</li>";
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length); // Gera índice aleatório
    const amigoSorteado = amigos[indiceSorteado]; // Obtém o nome sorteado

    resultado.innerHTML = `<li>Seu amigo secreto é: <strong>${amigoSorteado}</strong></li>`;
}


function reiniciarJogo() {
    amigos = [];

    // Limpa a lista de amigos na interface
    document.getElementById("listaAmigos").innerHTML = ""; 

    // Limpa o resultado do sorteio
    document.getElementById("resultado").innerHTML = ""; 
}
