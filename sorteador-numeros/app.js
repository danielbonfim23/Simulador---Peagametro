let isChecked;

function checkboxAtivo() {
            let checkbox = document.getElementById('repeticao_on');
            isChecked = checkbox.checked; // true se o checkbox está marcado, false se não está

}

function sortear() {
    let quantidadeNumeros = parseInt(document.getElementById('quantidade').value);
    let numeroMinimo = parseInt(document.getElementById('de').value);
    let numeroMaximo = parseInt(document.getElementById('ate').value);
    let numerosSorteados;
    let listaDeNumerosSorteados = [];
    document.getElementById('btn-reiniciar').className = 'container__botao';

    if (isChecked == '1') {
        for (let vezesRepeticao = 0; vezesRepeticao < quantidadeNumeros; vezesRepeticao++) {
            listaDeNumerosSorteados.push(parseInt(Math.random() * (numeroMaximo - numeroMinimo) + numeroMinimo));        
            
        }
        
    } else {
        for (let vezesRepeticao = 0; vezesRepeticao < quantidadeNumeros; vezesRepeticao++) {
            numerosSorteados = (parseInt(Math.random() * (numeroMaximo - numeroMinimo) + numeroMinimo));            
           
            if (listaDeNumerosSorteados.includes(numerosSorteados)) {
                return sortear();
                
            } else {
                listaDeNumerosSorteados.push(numerosSorteados);
            }
        }
    }

    
    let textoNaTela = document.getElementById('textonastela');
    textoNaTela.innerHTML = 'Números sorteados:' + listaDeNumerosSorteados;
    
}

function reiniciar() {
    quantidadeNumeros = document.getElementById('quantidade');
    quantidadeNumeros.value = '';
    numeroMaximo = document.getElementById('ate');
    numeroMaximo.value = '';
    numeroMinimo = document.getElementById('de');
    numeroMinimo.value = '';
    let textoNaTela = document.getElementById('textonastela');
    textoNaTela.innerHTML = 'Números sorteados: nenhum até agora';
    let repeticao = '';
 }