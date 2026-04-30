let professores = [];
let sugestoes = [];
let planos = [];

let usuarioLogado = "";

// LOGIN
function fazerLogin() {
    let user = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if (user === "" || senha === "") {
        alert("Preencha todos os campos!");
        return;
    }

    usuarioLogado = user;

    document.getElementById("usuarioLogadoTexto").innerText =
        "Logado como: " + user;

    document.getElementById("login").style.display = "none";
    document.getElementById("sistema").style.display = "block";
}

// LOGOUT
function logout() {
    usuarioLogado = "";

    document.getElementById("login").style.display = "block";
    document.getElementById("sistema").style.display = "none";

    document.getElementById("usuario").value = "";
    document.getElementById("senha").value = "";
}

// TROCAR TELA
function trocarTela(tela) {
    let telas = ['home', 'dashboard', 'professores', 'participacao', 'planejamento'];

    telas.forEach(t => {
        document.getElementById(t).style.display = 'none';
    });

    document.getElementById(tela).style.display = 'block';

    atualizarDashboard();
}

// PROFESSORES
function addProfessor() {
    let nome = document.getElementById("nomeProfessor").value;

    if (!nome) return;

    professores.push(nome);

    document.getElementById("nomeProfessor").value = "";

    mostrarProfessores();
}

function mostrarProfessores() {
    let lista = document.getElementById("listaProfessores");
    lista.innerHTML = "";

    professores.forEach(p => {
        lista.innerHTML += `<div>${p}</div>`;
    });
}

// PARTICIPAÇÃO
function addSugestao() {
    let texto = document.getElementById("textoSugestao").value;

    if (!texto) return;

    sugestoes.push(texto);

    document.getElementById("textoSugestao").value = "";

    mostrarSugestoes();
}

function mostrarSugestoes() {
    let lista = document.getElementById("listaSugestoes");
    lista.innerHTML = "";

    sugestoes.forEach(s => {
        lista.innerHTML += `<div>${s}</div>`;
    });
}

// PLANEJAMENTO
function addPlano() {
    let tema = document.getElementById("tema").value;
    let objetivo = document.getElementById("objetivo").value;
    let conteudo = document.getElementById("conteudo").value;

    if (!tema || !objetivo || !conteudo) return;

    planos.push({
        tema,
        objetivo,
        conteudo
    });

    document.getElementById("tema").value = "";
    document.getElementById("objetivo").value = "";
    document.getElementById("conteudo").value = "";

    mostrarPlanos();
}

function mostrarPlanos() {
    let lista = document.getElementById("listaPlanos");
    lista.innerHTML = "";

    planos.forEach(p => {
        lista.innerHTML += `
            <div>
                <strong>${p.tema}</strong><br>
                Objetivo: ${p.objetivo}<br>
                Conteúdo: ${p.conteudo}<br><br>
            </div>
        `;
    });
}

// DASHBOARD
function atualizarDashboard() {
    document.getElementById("totalProfessores").innerText = professores.length;
    document.getElementById("totalSugestoes").innerText = sugestoes.length;
    document.getElementById("totalPlanos").innerText = planos.length;
}