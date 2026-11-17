let indiceServico = 0;

function moverServicos(direcao) {
    const wrapper = document.getElementById('servicosWrapper');
    const cards = document.querySelectorAll('.card-servico');
    const totalCards = cards.length;
    
    const cardsVisiveis = 3; // Mostra 3 por vez
    const maxIndice = totalCards - cardsVisiveis;

    indiceServico += direcao;
    if (indiceServico < 0) indiceServico = 0;
    if (indiceServico > maxIndice) indiceServico = maxIndice;

    // Largura do card (280px) + gap (30px)
    const larguraMovimento = 380 + 35; 
    
    wrapper.style.transform = `translateX(${-indiceServico * larguraMovimento}px)`;
}