let professores = [];
let sugestoes = [];

// TROCAR TELA
function trocarTela(tela) {
    let telas = ['home', 'dashboard', 'professores', 'participacao'];

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

// DASHBOARD
function atualizarDashboard() {
    document.getElementById("totalProfessores").innerText = professores.length;
}
