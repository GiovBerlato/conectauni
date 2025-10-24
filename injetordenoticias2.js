document.addEventListener("DOMContentLoaded", () => {

    // NOTICIAS DA PÁGINA noticias2.html (PÁGINA 2)
    const noticias_grid = document.querySelector(".noticias-grid");
    
    // Filtra notícias para a página 2 (IDs 13-21)
    const noticiasPagina2 = dados_noticias.filter(noticia => 
        noticia.id !== 0 && noticia.id > 12 && noticia.id <= 21
    );

    for (const noticia of noticiasPagina2) {
        let cardHTMLPagNoticias = `
            <article class="card-noticia">
                <img src="${noticia.imagem}" alt="Imagem da Notícia" class="card-imagem">
                <div class="card-content">
                    <h2 class="card-titulo">${noticia.titulo}</h2>
                    <p class="card-descricao">${noticia.resumo}</p>
                    <a href="templateNoticia.html?id=${noticia.id}" class="card-link">Leia mais</a>
                </div>
            </article>
        `;
        noticias_grid.innerHTML += cardHTMLPagNoticias;
    }

});