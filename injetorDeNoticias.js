/* injetorDeNoticias.js
   Injeta cards e notícas nas páginas (FrontPage, noticias.html, noticias2.html)
   - Requer que `dados_noticias` (array) exista no escopo global (dados_noticias.js)
   - Opcional: definir `noticiaDestaqueId` em dados_noticias.js para controlar o destaque
*/

document.addEventListener("DOMContentLoaded", () => {
  // helper
  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Safety: ensure dados_noticias exists
  if (typeof dados_noticias === 'undefined' || !Array.isArray(dados_noticias)) {
    console.warn('dados_noticias não encontrado ou inválido — injetor de notícias abortado.');
    return;
  }

  /* ===========================
     1) FRONT PAGE — Cards principais (topo / abaixo)
     =========================== */
  (function injectFrontPageCards() {
    const noticiasAcima = document.querySelector(".imagens-lado-a-lado");
    const noticiasAbaixo = document.querySelector(".imagens-abaixo-lado-a-lado");

    if (!noticiasAcima || !noticiasAbaixo) {
      // página pode não ter esses containers (ex: templateNoticia), então apenas retorna
      return;
    }

    // busca notícias específicas por id (se não existir, ignora)
    const noticia1 = dados_noticias.find(a => a.id === 1);
    const noticia2 = dados_noticias.find(a => a.id === 2);
    const noticia3 = dados_noticias.find(a => a.id === 3);
    const noticia4 = dados_noticias.find(a => a.id === 4);

    function criarCardHTMLFrontPage(noticia, imgClass = 'img-esquerda') {
      const imgSrc = noticia.imagem && noticia.imagem.trim() ? noticia.imagem : 'Imagem_FrontPage/Imagem-teste.jpg';
      const titulo = escapeHtml(noticia.titulo);
      const resumo = escapeHtml(noticia.resumo || '');
      return `
        <a href="templateNoticia.html?id=${encodeURIComponent(noticia.id)}" class="imagem-com-texto" style="text-decoration:none;color:inherit;">
          <img src="${imgSrc}" alt="${titulo}" class="${imgClass}">
          <p class="legenda-imagem">${titulo}</p>
          <p class="legenda-imagem2">${resumo}</p>
        </a>
      `;
    }

    if (noticia1) noticiasAcima.innerHTML += criarCardHTMLFrontPage(noticia1, 'img-esquerda');
    if (noticia2) noticiasAcima.innerHTML += criarCardHTMLFrontPage(noticia2, 'img-direita');
    if (noticia3) noticiasAbaixo.innerHTML += criarCardHTMLFrontPage(noticia3, 'img-esquerda');
    if (noticia4) noticiasAbaixo.innerHTML += criarCardHTMLFrontPage(noticia4, 'img-direita');
  })();

  /* ===========================
     2) FRONT PAGE — Notícia de destaque (mantendo o modelo atual)
     =========================== */
  (function preencherNoticiaDestaque() {
    // localizar container: prioriza #noticia-destaque, senão o div com style margin-top:80px, senão parent do #titulo-limitado
    const byId = document.getElementById('noticia-destaque');
    const byStyle = document.querySelector('div[style*="margin-top: 80px;"]');
    const tituloEl = document.getElementById('titulo-limitado');
    const byTituloParent = tituloEl ? tituloEl.closest('div') : null;
    const destaqueContainer = byId || byStyle || byTituloParent;

    if (!destaqueContainer) {
      // não encontrou container de destaque — OK, pode ser outra página
      return;
    }

    // id do destaque (se definido globalmente em dados_noticias.js). fallback = 1
    const destaqueId = (typeof noticiaDestaqueId !== 'undefined') ? Number(noticiaDestaqueId) : 1;
    const destaque = dados_noticias.find(n => n.id === destaqueId) || dados_noticias.find(n => n.id === 1);

    if (!destaque) {
      console.warn('Não há notícia de destaque disponível.');
      return;
    }

    const imagemPrincipal = destaque.imagem && destaque.imagem.trim() ? destaque.imagem : 'Imagem_FrontPage/Imagem-teste.jpg';
    const autorImagem = destaque.autorImagem && destaque.autorImagem.trim() ? destaque.autorImagem : 'Imagem_FrontPage/Imagem-teste.jpg';
    const autorNome = escapeHtml(destaque.autor || '');
    const titulo = escapeHtml(destaque.titulo || '');
    const resumo = escapeHtml(destaque.resumo || '');

    // monta HTML preservando o layout atual da sua FrontPage
    destaqueContainer.innerHTML = `
      <a href="templateNoticia.html?id=${encodeURIComponent(destaque.id)}" style="display:block; text-decoration: none; color: inherit;">
        <img src="${imagemPrincipal}"
             alt="${titulo}"
             style="display: block; margin-left: auto; margin-right: auto; width: 34%; border-radius: 0;">
      </a>

      <img src="${autorImagem}"
           alt="${autorNome}"
           class="img-circular"
           style="margin-left: 585px; margin-top: 0.3vw;">

      <p style="text-align: center; font-size: 1vw; margin-top: -49px; margin-right: 41vw; font-size: 17px; color: grey; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">
        Escrito por:
      </p>
      <p style="text-align: center; font-size: 1vw; margin-top: -12px; margin-right: 39.3vw; font-size: 17px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">
        ${autorNome}
      </p>

      <h1 id="titulo-limitado">${titulo}</h1>
      <p id="titulo-limitado2"><strong>${resumo}</strong></p>

      <hr style="margin: 30px auto; border: none; border-top: 4px solid #ffffff; border-radius: 2px; width: 950px;">
    `;
  })();

 
  (function injectNoticiasGrid() {
    const noticias_grid = document.querySelector(".noticias-grid");
    if (!noticias_grid) return;

    const isPage2 = window.location.pathname && window.location.pathname.toLowerCase().includes('noticias2');
    const startId = isPage2 ? 13 : 1;
    const endId = isPage2 ? 21 : 12;

    const noticiasPagina = dados_noticias.filter(noticia =>
      Number.isFinite(noticia.id) && noticia.id !== 0 && noticia.id >= startId && noticia.id <= endId
    );

    if (!noticiasPagina.length) {
      // Se não houver notícias no intervalo, mostra aviso no console e não quebra a página
      console.info(`Nenhuma notícia para mostrar no grid (intervalo ${startId}-${endId}).`);
      return;
    }

    // monta cards
    for (const noticia of noticiasPagina) {
      const imgSrc = noticia.imagem && noticia.imagem.trim() ? noticia.imagem : 'Imagem_FrontPage/Imagem-teste.jpg';
      const titulo = escapeHtml(noticia.titulo || '');
      const resumo = escapeHtml(noticia.resumo || '');
      const cardHTMLPagNoticias = `
        <article class="card-noticia">
          <img src="${imgSrc}" alt="${titulo}" class="card-imagem">
          <div class="card-content">
            <h2 class="card-titulo">${titulo}</h2>
            <p class="card-descricao">${resumo}</p>
            <a href="templateNoticia.html?id=${encodeURIComponent(noticia.id)}" class="card-link">Leia mais</a>
          </div>
        </article>
      `;
      noticias_grid.innerHTML += cardHTMLPagNoticias;
    }
  })();

}); 