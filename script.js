//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let candidatos = [];

/* Adiciona um amigo à lista */
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome.length > 0) {
        amigos.push(nome);
        input.value = "";
        atualizarLista();
        candidatos = [...amigos]; // Atualiza candidatos sempre que adicionar
        document.getElementById("resultado").innerHTML = "";
    }
}

/* Atualiza a lista de amigos na tela */
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

/* Sorteia um nome, exibe e remove da lista */
function sortearAmigo() {
    if (candidatos.length === 0) {
        document.getElementById("resultado").innerHTML = "Adicione nomes para sortear!";
        return;
    }
    if (candidatos.length === 1) {
        document.getElementById("resultado").innerHTML = `Só resta um nome: ${candidatos[0]}`;
        return;
    }

    // Sorteia um nome
    const i = Math.floor(Math.random() * candidatos.length);
    const sorteado = candidatos[i];
    candidatos.splice(i, 1);

    document.getElementById("resultado").innerHTML = sorteado;
}

/* Limpa a lista de amigos e o resultado */
function reiniciarJogo() {
    amigos = [];
    candidatos = [];
    atualizarLista();
    document.getElementById("resultado").textContent = "";
}