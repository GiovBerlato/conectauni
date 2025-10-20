
/*

        SCRIPT PARA INJETAR AS NOTICIAS EM dados_noticias.js PARA TODOS OS ELEMENTOS NECESSÁRIOS.

*/

document.addEventListener("DOMContentLoaded", () => {

    // COMPLETA AS NOTICIAS DA FRONTPAGE.

    const noticiasAcima = document.querySelector(".imagens-lado-a-lado");
    const noticiasAbaixo = document.querySelector(".imagens-abaixo-lado-a-lado");

    if (noticiasAcima && noticiasAbaixo && typeof dados_noticias !== 'undefined') {

        // Verifica se os cards existem

        const noticia1 = dados_noticias.find(a => a.id === 1);
        const noticia2 = dados_noticias.find(a => a.id === 2);
        const noticia3 = dados_noticias.find(a => a.id === 3);
        const noticia4 = dados_noticias.find(a => a.id === 4);

        // Função para gerar os cards dinamicamente
        function criarCardHTMLFrontPage(noticia, imgClass = 'img-esquerda') {

            return `
                <a href="${noticia.link}" class="imagem-com-texto">
                    <img src="${noticia.imagem}" alt="${noticia.titulo}" class="${imgClass}">
                    <p class="legenda-imagem">${noticia.titulo}</p>
                    <p class="legenda-imagem2">${noticia.resumo}</p>
                </a>
            `;
        }

        if (noticia1) noticiasAcima.innerHTML += criarCardHTMLFrontPage(noticia1, 'img-esquerda');
        if (noticia2) noticiasAcima.innerHTML += criarCardHTMLFrontPage(noticia2, 'img-direita');
        if (noticia3) noticiasAbaixo.innerHTML += criarCardHTMLFrontPage(noticia3, 'img-esquerda');
        if (noticia4) noticiasAbaixo.innerHTML += criarCardHTMLFrontPage(noticia4, 'img-direita');

    } else {
        console.error("Erro: Não foi possível encontrar os containers ou o array de artigos.");
    }






    // NOTICIAS DA PÁGINA noticias.html.

    for (const noticia of dados_noticias) {

        //Pula a notícia exemplo.
        if (noticia.id == 0) {
            continue;
        }
        
        const noticias_grid = document.querySelector(".noticias-grid");

        let cardHTMLPagNoticias = `
            <article class="card-noticia">
                <img src="${noticia.imagem}" alt="Imagem da Notícia" class="card-imagem">
                <div class="card-content">
                    <h2 class="card-titulo">${noticia.titulo}</h2>
                    <p class="card-descricao">${noticia.resumo}</p>
                    <a href="${noticia.link}" class="card-link">Leia mais</a>
                </div>
            </article>
        `

        noticias_grid.innerHTML += cardHTMLPagNoticias;
    }
});