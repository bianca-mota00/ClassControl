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

    let telas = [
        "home",
        "dashboard",
        "professores",
        "participacao",
        "planejamento",
        "relatorios"
    ];

    telas.forEach(t => {
        let elemento = document.getElementById(t);

        if (elemento) {
            elemento.style.display = "none";
        }
    });

    let telaSelecionada = document.getElementById(tela);

    if (telaSelecionada) {
        telaSelecionada.style.display = "block";
    }

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

    professores.forEach((p, index) => {

        lista.innerHTML += `
            <div>
                ${p}
                <button onclick="removerProfessor(${index})">
                    Excluir
                </button>
            </div>
        `;
    });

    atualizarDashboard();
}

function removerProfessor(index) {

    professores.splice(index, 1);

    mostrarProfessores();
}

// SUGESTÕES
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

    sugestoes.forEach((s, index) => {

        lista.innerHTML += `
            <div>
                ${s}
                <button onclick="removerSugestao(${index})">
                    Excluir
                </button>
            </div>
        `;
    });

    atualizarDashboard();
}

function removerSugestao(index) {

    sugestoes.splice(index, 1);

    mostrarSugestoes();
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

    planos.forEach((p, index) => {

        lista.innerHTML += `
            <div>
                <strong>${p.tema}</strong><br>
                Objetivo: ${p.objetivo}<br>
                Conteúdo: ${p.conteudo}<br><br>

                <button onclick="removerPlano(${index})">
                    Excluir
                </button>
            </div>
        `;
    });

    atualizarDashboard();
}

function removerPlano(index) {

    planos.splice(index, 1);

    mostrarPlanos();
}

// DASHBOARD
function atualizarDashboard() {

    let professoresEl = document.getElementById("totalProfessores");
    let sugestoesEl = document.getElementById("totalSugestoes");
    let planosEl = document.getElementById("totalPlanos");

    if (professoresEl) {
        professoresEl.innerText = professores.length;
    }

    if (sugestoesEl) {
        sugestoesEl.innerText = sugestoes.length;
    }

    if (planosEl) {
        planosEl.innerText = planos.length;
    }
}
