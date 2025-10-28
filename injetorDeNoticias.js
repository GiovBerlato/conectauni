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

  if (typeof dados_noticias === 'undefined' || !Array.isArray(dados_noticias)) {
    console.warn('dados_noticias não encontrado ou inválido — injetor de notícias abortado.');
    return;
  }

  const FEATURE_IMAGE_STYLE = 'crop';

  /* ===========================
     1) FRONT PAGE — Cards principais (topo / abaixo)
     =========================== */
  (function injectFrontPageCards() {
    const noticiasAcima = document.querySelector(".imagens-lado-a-lado");
    const noticiasAbaixo = document.querySelector(".imagens-abaixo-lado-a-lado");
    if (!noticiasAcima || !noticiasAbaixo) return;

    const noticia1 = dados_noticias.find(a => a.id === 2);
    const noticia2 = dados_noticias.find(a => a.id === 3);
    const noticia3 = dados_noticias.find(a => a.id === 4);
    const noticia4 = dados_noticias.find(a => a.id === 5);

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
     2) FRONT PAGE — Notícia de destaque (mantendo o modelo atual),
     agora com classe configurável para imagem
     =========================== */
  (function preencherNoticiaDestaque() {
    // localizar container: prioriza #noticia-destaque, senão o div com style margin-top:80px, senão parent do #titulo-limitado
    const byId = document.getElementById('noticia-destaque');
    const byStyle = document.querySelector('div[style*="margin-top: 80px;"]');
    const tituloEl = document.getElementById('titulo-limitado');
    const byTituloParent = tituloEl ? tituloEl.closest('div') : null;
    const destaqueContainer = byId || byStyle || byTituloParent;

    if (!destaqueContainer) return;

    const destaqueId = (typeof noticiaDestaqueId !== 'undefined') ? Number(noticiaDestaqueId) : 1;
    const destaque = dados_noticias.find(n => n.id === destaqueId) || dados_noticias.find(n => n.id === 1);
    if (!destaque) return;

    const imagemPrincipal = destaque.imagem && destaque.imagem.trim() ? destaque.imagem : 'Imagem_FrontPage/Imagem-teste.jpg';
    const autorImagem = destaque.autorImagem && destaque.autorImagem.trim() ? destaque.autorImagem : 'Imagem_FrontPage/Imagem-teste.jpg';
    const autorNome = escapeHtml(destaque.autor || '');
    const titulo = escapeHtml(destaque.titulo || '');
    const resumo = escapeHtml(destaque.resumo || '');
    const styleKey = (FEATURE_IMAGE_STYLE === 'full' || FEATURE_IMAGE_STYLE === 'crop') ? FEATURE_IMAGE_STYLE : 'lateral';
    const imagemClass = `destaque-imagem destaque-imagem--${styleKey}`;

    // limpar container e montar elementos com DOM (mais seguro)
    destaqueContainer.innerHTML = '';
    const wrapper = document.createElement('div');
    wrapper.className = 'destaque-wrapper';

    // link + imagem
    const link = document.createElement('a');
    link.href = `templateNoticia.html?id=${encodeURIComponent(destaque.id)}`;
    link.style.display = 'block';
    link.style.textDecoration = 'none';
    link.style.color = 'inherit';

    const img = document.createElement('img');
    img.src = imagemPrincipal;
    img.alt = titulo;
    img.className = imagemClass;

    link.appendChild(img);
    wrapper.appendChild(link);

    // meta (autor)
    const meta = document.createElement('div');
    meta.className = 'destaque-meta';

    const autorImgEl = document.createElement('img');
    autorImgEl.src = autorImagem;
    autorImgEl.alt = autorNome;
    autorImgEl.className = 'img-circular';

    const autorTextWrap = document.createElement('div');
    autorTextWrap.style.display = 'flex';
    autorTextWrap.style.flexDirection = 'column';
    autorTextWrap.style.gap = '2px';

    const escritoPor = document.createElement('div');
    escritoPor.textContent = 'Escrito por:';
    escritoPor.style.fontSize = '0.9rem';
    escritoPor.style.color = 'grey';

    const autorNomeEl = document.createElement('div');
    autorNomeEl.innerHTML = `${autorNome}`;
    autorNomeEl.style.fontWeight = '600';
    autorNomeEl.style.fontSize = '0.95rem';

    autorTextWrap.appendChild(escritoPor);
    autorTextWrap.appendChild(autorNomeEl);

    meta.appendChild(autorImgEl);
    meta.appendChild(autorTextWrap);

    wrapper.appendChild(meta);

    // título + resumo (mantendo ids usados em seu CSS)
    const h1 = document.createElement('h1');
    h1.id = 'titulo-limitado';
    h1.innerHTML = `<strong>${titulo}</strong>`;

    const pResumo = document.createElement('p');
    pResumo.id = 'titulo-limitado2';
    pResumo.innerHTML = `<strong>${resumo}</strong>`;

    wrapper.appendChild(h1);
    wrapper.appendChild(pResumo);

    // separador
    const hr = document.createElement('hr');
    hr.style.cssText = 'margin: 30px auto; border: none; border-top: 4px solid #ffffff; border-radius: 2px; width: 90%; max-width: 950px;';

    wrapper.appendChild(hr);

    destaqueContainer.appendChild(wrapper);
  })();

  /* ===========================
     3) Grid de notícias (noticias.html / noticias2.html)
     =========================== */
  (function injectNoticiasGrid() {
    const noticias_grid = document.querySelector(".noticias-grid");
    if (!noticias_grid) return;

    const isPage2 = window.location.pathname && window.location.pathname.toLowerCase().includes('noticias2');
    const startId = isPage2 ? 13 : 1;
    const endId = isPage2 ? 21 : 12;

    const noticiasPagina = dados_noticias.filter(noticia =>
      Number.isFinite(noticia.id) && noticia.id !== 0 && noticia.id >= startId && noticia.id <= endId
    );
    if (!noticiasPagina.length) return;

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