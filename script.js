// Objeto para armazenar as notas salvas
let notasSalvas = {};

// Função chamada quando a matéria é alterada
function aoSelecionarMateria(materiaSelecionada) {
    // Verifica se já existe uma nota para a matéria selecionada
    if (notasSalvas[materiaSelecionada]) {
        // Se existe, preenche o campo de nota com a nota salva
        document.getElementById('campoNota').value = notasSalvas[materiaSelecionada];
    } else {
        // Se não existe, limpa o campo de nota
        document.getElementById('campoNota').value = '';
    }
}

// Função para salvar a nota
function salvarNota(materiaSelecionada) {
    const nota = document.getElementById('campoNota').value;
    // Salva a nota no objeto
    notasSalvas[materiaSelecionada] = nota;
}

// Evento de alteração da matéria (pode ser select, por exemplo)
document.getElementById('materiaSelect').addEventListener('change', function() {
    const materiaSelecionada = this.value;
    aoSelecionarMateria(materiaSelecionada);
});

// Evento de salvar nota (pode ser um botão)
document.getElementById('salvarNotaBtn').addEventListener('click', function() {
    const materiaSelecionada = document.getElementById('materiaSelect').value;
    salvarNota(materiaSelecionada);
});
