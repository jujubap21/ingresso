function comprar() {
    let quantidade = parseInt(document.getElementById('qtd').value);
    let tipo = document.getElementById('tipo-ingresso');
    
    if (tipo.value == 'pista') {
        comprarPista(quantidade);
    } else if (tipo.value == 'superior') {
        comprarSuperior(quantidade);
    } else if (tipo.value == 'inferior') {
        comprarInferior(quantidade);
    }
}

function comprarPista(quantidade) {
    let pista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidade > pista) {
        alert('Quantida indisponível para pista!');
    } else {
        pista = pista - quantidade;
        document.getElementById('qtd-pista').textContent = pista;
    }
}

function comprarSuperior(quantidade) {
    let superior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidade > superior) {
        alert('Quantida indisponível para cadeira superior!');
    } else {
        superior = superior - quantidade;
        document.getElementById('qtd-superior').textContent = superior;
    }
}

function comprarInferior(quantidade) {
    let inferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidade > inferior) {
        alert('Quantida indisponível para cadeira inferior!');
    } else {
        inferior = inferior - quantidade;
        document.getElementById('qtd-inferior').textContent = inferior;
    }
}
