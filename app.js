let amigos = [];

function adicionarAmigo() {
  let nomeAmigo = document.querySelector("#amigo").value;

  // Verifica se o campo está vazio
  if (nomeAmigo == "") {
    alert("Digite o nome do amigo");
    return;
  }

  // Verifica se o amigo já foi adicionado
  if (amigos.includes(nomeAmigo)) {
    alert("Amigo já adicionado");
  } else {
    // Adiciona o amigo na lista de amigos
    amigos.push(nomeAmigo);

    // Adiciona o amigo na lista
    let li = document.createElement("li");
    li.textContent = nomeAmigo;
    document.querySelector("#listaAmigos").appendChild(li);
  }

  // Limpa o campo de texto e coloca o foco nele
  document.querySelector("#amigo").value = "";
  document.querySelector("#amigo").focus();
}

function sortearAmigo() {
  if (amigos.length <= 1) {
    alert("Adicione mais de 01 amigo antes de sortear");
    return;
  }

  let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
  const li = document.createElement("li");
  let msg = "O amigo secreto sorteado foi: " + amigoSorteado;
  li.textContent = msg;
	document.querySelector("#resultado").appendChild(li);


  // Limpa a lista de amigos
  amigos = [];
  document.querySelector("#listaAmigos").innerHTML = "";

	// Esconde o botão sortear
	document.querySelector("#sortear").style.display = "none";
	// Habilita o botão novo sorteio
	document.querySelector("#novo-sorteio").style.display = "flex";
}

function reiniciarJogo(){
	document.querySelector("#resultado").innerHTML = "";
	document.querySelector("#sortear").style.display = "flex";
	document.querySelector("#novo-sorteio").style.display = "none";
	document.querySelector("#amigo").focus();
}
