let abas = []
let abaSelecionada

const abaCards = {
    btn: document.getElementById('btn-cards'),
    aba: document.getElementById('aba-cards'),
}
const abaExplicacao = {
    btn: document.getElementById('btn-explicacao'),
    aba: document.getElementById('aba-explicacao')
}

//Adicionar abas no vetor para serem utilizados
abas.push(abaCards)
abas.push(abaExplicacao)

function ativarAba(aba) {
    abaSelecionada = aba
    aba.btn.classList.add('seletor-btn-ativo')
    aba.aba.classList.add('aba-selecionada')
}
function desativarAba(aba) {
    aba.btn.classList.remove('seletor-btn-ativo')
    aba.aba.classList.remove('aba-selecionada')
}
function selecionarAba(aba) {
    desativarAba(abaSelecionada)
    ativarAba(aba)
    
}

//Selecionar uma aba por padrão para o código não quebrar
ativarAba(abaCards)


//Executar o código somente quando a página carregar
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function () {
            card.classList.toggle('is-flipped');
        });
    });

    //Criar funcionalidade para cada item na lista aba.
    abas.forEach(item => {
        item.btn.addEventListener('click', function() {
            selecionarAba(item)
        })
    })
});