(function () {
  // debounce helper
  function debounce(fn, delay) {
    let t;
    return function (...args) {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  // normalize (remove acentos, lower)
  function norm(str) {
    if (!str) return '';
    return String(str).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('search-input');
    const clearBtn = document.getElementById('search-clear');
    const countEl = document.getElementById('search-count');
    const grid = document.querySelector('.noticias-grid');
    const pagination = document.querySelector('.paginacao');
    const categoryButtons = Array.from(document.querySelectorAll('.category-btn'));

    if (!grid) return;
    if (typeof dados_noticias === 'undefined' || !Array.isArray(dados_noticias)) {
      console.warn('searchNoticias: dados_noticias não encontrado');
      return;
    }

    // detecta página (mesma lógica do injetor)
    const isPage2 = window.location.pathname && window.location.pathname.toLowerCase().includes('noticias2');
    const defaultRange = isPage2 ? { start: 13, end: 21 } : { start: 1, end: 12 };

    // transforma/corrige o formato de categorias de cada notícia (compatibilidade)
    const noticiasIndex = dados_noticias.map(n => {
      const copy = Object.assign({}, n);
      // se existe categoria (string), converte para array
      if (Array.isArray(copy.categorias)) {
        // ok
      } else if (typeof copy.categoria === 'string' && copy.categoria.trim() !== '') {
        copy.categorias = [copy.categoria.trim()];
      } else {
        // garante array vazio
        copy.categorias = Array.isArray(copy.categorias) ? copy.categorias : [];
      }
      // normalização para filtro rápido (cache)
      copy.__normTitulo = norm(copy.titulo || '');
      copy.__normCategorias = (copy.categorias || []).map(c => norm(c));
      return copy;
    });

    function cardHTML(noticia) {
      const imgSrc = noticia.imagem && noticia.imagem.trim() ? noticia.imagem : 'Imagem_FrontPage/Imagem-teste.jpg';
      const titulo = escapeHtml(noticia.titulo || '');
      const resumo = escapeHtml(noticia.resumo || '');
      return `
        <article class="card-noticia">
          <img src="${imgSrc}" alt="${titulo}" class="card-imagem">
          <div class="card-content">
            <h2 class="card-titulo">${titulo}</h2>
            <p class="card-descricao">${resumo}</p>
            <a href="templateNoticia.html?id=${encodeURIComponent(noticia.id)}" class="card-link">Leia mais</a>
          </div>
        </article>
      `;
    }

    function renderGrid(noticias) {
      grid.innerHTML = '';
      if (!noticias || noticias.length === 0) {
        grid.innerHTML = `<p style="text-align:center; width:100%; grid-column:1/-1; color: #666; padding: 30px 0;">Nenhuma notícia encontrada.</p>`;
        return;
      }
      grid.innerHTML = noticias.map(cardHTML).join('\n');
    }

    // retorna notícias padrão para a página atual (intervalo)
    function defaultNoticias() {
      return noticiasIndex.filter(n => Number.isFinite(n.id) && n.id !== 0 && n.id >= defaultRange.start && n.id <= defaultRange.end);
    }

    // busca por texto (título OU categoria), em todo o conjunto (padrão)
    function searchQueryText(q) {
      const term = norm(q || '');
      if (!term) return defaultNoticias();
      return noticiasIndex.filter(n => {
        if (!n) return false;
        // título ou qualquer categoria que contenha o termo
        if (n.__normTitulo.includes(term)) return true;
        return n.__normCategorias.some(cat => cat.includes(term));
      });
    }

    // busca por múltiplas categorias selecionadas (array de chaves normalizadas)
    // lógica: OR -> retorna notícia que tenha ATÉ UMA das categorias selecionadas
    function searchByCategoriesArray(selectedCatsNormalized) {
      if (!selectedCatsNormalized || !selectedCatsNormalized.length) return defaultNoticias();
      return noticiasIndex.filter(n => {
        // se notícia tem alguma categoria que aparece em selectedCatsNormalized -> incluir
        return n.__normCategorias.some(cat => selectedCatsNormalized.includes(cat));
      });
    }

    // atualiza contador e paginação (esconde paginação se filtro ativo)
    function updateMeta(resultsCount, queryEmpty) {
      if (countEl) {
        countEl.textContent = resultsCount === 0 ? '0 resultados' : `${resultsCount} resultado(s)`;
      }
      if (pagination) {
        pagination.style.display = queryEmpty ? '' : 'none';
      }
    }

    // limpa estado active em botões
    function clearCategoryActive() {
      categoryButtons.forEach(b => b.classList.remove('active'));
    }

    // retorna array de categorias selecionadas (normalizadas)
    function getSelectedCategories() {
      return categoryButtons
        .filter(b => b.classList.contains('active'))
        .map(b => norm(b.dataset.cat || ''))
        .filter(Boolean);
    }

    // ---- Handlers ----
    const onInputChange = debounce(function () {
      const q = input.value || '';
      // quando o usuário digita, limpamos os botões (comportamento solicitado)
      clearCategoryActive();

      const results = searchQueryText(q);
      renderGrid(results);
      updateMeta(results.length, q.trim() === '');
    }, 200);

    input.addEventListener('input', onInputChange, { passive: true });

    // limpar campo
    clearBtn && clearBtn.addEventListener('click', () => {
      input.value = '';
      clearCategoryActive();
      const defaults = defaultNoticias();
      renderGrid(defaults);
      updateMeta(defaults.length, true);
      input.focus();
    });

    // botões de categoria -> agora multi-seletor
    categoryButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        // toggle this button
        this.classList.toggle('active');

        // limpar input quando clicar categorias
        if (input) input.value = '';

        const selected = getSelectedCategories();

        if (!selected.length) {
          // nenhum selecionado -> volta ao padrão
          const defaults = defaultNoticias();
          renderGrid(defaults);
          updateMeta(defaults.length, true);
        } else {
          // filtra por qualquer categoria selecionada (OR)
          const results = searchByCategoriesArray(selected);
          renderGrid(results);
          updateMeta(results.length, false);
        }
      }, { passive: true });
    });

    // inicializa: se já existe conteúdo no grid (injetor rodou), conta, senão popula com padrão
    const initialHasCards = grid && grid.children && grid.children.length > 0;
    if (!initialHasCards) {
      const defaults = defaultNoticias();
      renderGrid(defaults);
      updateMeta(defaults.length, true);
    } else {
      updateMeta(grid.children.length, true);
    }
  });
})();