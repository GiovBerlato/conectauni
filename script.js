(function () {
  const THEME_KEY = 'site-theme';
  const root = document.documentElement;
  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function applyTheme(theme) {
    if (theme === 'dark') root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
    syncButtonIcon(theme);
  }
  function getSavedTheme() {
    try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
  }
  function saveTheme(theme) {
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
  }
  function syncButtonIcon(theme) {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  }

  function fadeAndApply(nextTheme) {
    if (reducedMotion) {
      applyTheme(nextTheme);
      saveTheme(nextTheme);
      return;
    }
    const direction = (nextTheme === 'dark') ? 'to-dark' : 'to-light';
    root.setAttribute('data-fade', direction);
    root.classList.add('theme-fading');
    // timings chosen for a clean, not-too-slow transition
    const FADE_IN_MS = 140;
    const FADE_OUT_MS = 220;
    setTimeout(() => {
      applyTheme(nextTheme);
      saveTheme(nextTheme);
      setTimeout(() => {
        root.classList.remove('theme-fading');
        root.removeAttribute('data-fade');
      }, FADE_OUT_MS);
    }, FADE_IN_MS);
  }

  function ensureThemeButtonAndBind() {
    const header = document.querySelector('header') || document.querySelector('.site-header');
    let btn = document.getElementById('theme-toggle');

    if (!btn && header) btn = header.querySelector('#theme-toggle');

    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'theme-toggle';
      btn.type = 'button';
      btn.className = 'theme-btn';
      btn.setAttribute('aria-label', 'Alternar modo escuro');
      btn.title = 'Alternar modo escuro';
      btn.style.position = 'absolute';
      btn.style.right = '1.2rem';
      btn.style.top = '1rem';
      btn.style.background = 'none';
      btn.style.border = 'none';
      btn.style.cursor = 'pointer';
      const container = header ? header.querySelector('.header-right') : null;
      if (container) container.appendChild(btn);
      else if (header) {
        header.appendChild(btn);
        header.style.position = header.style.position || 'relative';
      } else {
        document.body.insertBefore(btn, document.body.firstChild);
      }
    }

    if (!btn.dataset.themeListenerAttached) {
      btn.addEventListener('click', () => {
        const currentIsDark = root.getAttribute('data-theme') === 'dark';
        const next = currentIsDark ? 'light' : 'dark';
        fadeAndApply(next);
      }, { passive: true });
      btn.dataset.themeListenerAttached = '1';
    }

    // sync icon with saved/initial theme
    const saved = getSavedTheme();
    if (saved === 'dark') applyTheme('dark');
    else if (saved === 'light') applyTheme('light');
    else applyTheme(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
  }

  /* -------------------------
     Menu sanduíche (preserva sua lógica)
     ------------------------- */
  function setupMenuSanduiche() {
    const sandBtn = document.getElementById('menu-sanduiche-btn') || document.querySelector('.menu-sanduiche');
    const menu = document.getElementById('menu-off-screen') || document.querySelector('.menu-off-screen');
    if (!sandBtn || !menu) return;
    if (!sandBtn.dataset.menuListenerAttached) {
      sandBtn.addEventListener('click', function () {
        sandBtn.classList.toggle('active');
        const isActive = menu.classList.toggle('active');
        menu.setAttribute('aria-hidden', isActive ? 'false' : 'true');
      }, { passive: true });
      sandBtn.dataset.menuListenerAttached = '1';
    }
  }

  /* -------------------------
     Load header/footer (with post-injection init)
     ------------------------- */
  function loadHeaderAndFooter() {
    fetch('header.html')
      .then(r => r.ok ? r.text() : Promise.reject(r.statusText))
      .then(html => {
        const holder = document.getElementById('header-placeholder');
        if (holder) holder.innerHTML = html;
        const headerEl = document.querySelector('header');
        if (headerEl) headerEl.style.visibility = 'visible';
        ensureThemeButtonAndBind();
        setupMenuSanduiche();
      })
      .catch(err => {
        console.warn('Falha ao carregar header:', err);
        ensureThemeButtonAndBind();
        setupMenuSanduiche();
      });

    fetch('rodape.html')
      .then(r => r.ok ? r.text() : Promise.reject(r.statusText))
      .then(html => {
        const holder = document.getElementById('rodape-placeholder');
        if (holder) holder.innerHTML = html;
        const footerEl = document.querySelector('footer');
        if (footerEl) footerEl.style.visibility = 'visible';
        injectNoticiasRodape();
      })
      .catch(err => console.warn('Falha ao carregar rodape:', err));
  }

  function setupIntroTyping() {
    window.addEventListener('load', function () {
      const boxtitulo = document.querySelector(".introducao-titulo h1");
      const boxintroducao = document.querySelector(".introducao-titulo p");
      const textotitulo = "Bem vindo(a) ao Conecta Uni!";
      const textointroducao = `
      No Conecta Uni, você fica ligado em tudo que acontece nas grandes faculdades do Brasil!

      Aqui noticiamos esportes, acontecimentos engraçados, anúncios importantes e até mesmo oportunidades de bolsas! Não perca nada, junte-se conosco e se mantenha atualizado!
      `;
      if (!boxtitulo || !boxintroducao) return;

      if (localStorage.getItem("jaVisitou") == null) {
        // typing title
        for (let i = 0; i < textotitulo.length; i++) {
          setTimeout(((i) => {
            boxtitulo.textContent = textotitulo.substring(0, i + 1);
          }).bind(null, i), i * 120);
        }

        const duracaoTitulo = textotitulo.length * 120;

        for (let i = 0; i < textointroducao.length; i++) {
          setTimeout(((i) => {
            boxintroducao.textContent = textointroducao.substring(0, i + 1);
          }).bind(null, i), duracaoTitulo + (i * 20));
        }

        const duracaoIntroducao = textointroducao.length * 20 + duracaoTitulo;
        setTimeout(() => {
          localStorage.setItem("jaVisitou", "true");
        }, duracaoIntroducao + 200);
      } else {
        boxtitulo.textContent = textotitulo;
        boxintroducao.textContent = textointroducao;
      }
    });
  }

  /* -------------------------
     Paginação / helpers
     ------------------------- */
  function mudarPaginaEvento(ev, numero) {
    if (ev && ev.currentTarget) {
      document.querySelectorAll('.pagina').forEach(pag => pag.classList.remove('ativa'));
      ev.currentTarget.classList.add('ativa');
    }
    carregarNoticiasPagina(numero);
  }

  function carregarNoticiasPagina(pagina) {
    const noticiasPorPagina = 6;
    const inicio = (pagina - 1) * noticiasPorPagina;
    const fim = inicio + noticiasPorPagina;
    console.log(`Carregando notícias da página ${pagina}: itens ${inicio} a ${fim}`);
  }

  /* -------------------------
     Init
     ------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    const saved = getSavedTheme();
    if (saved === 'dark') applyTheme('dark');
    else if (saved === 'light') applyTheme('light');

    loadHeaderAndFooter();
    setupIntroTyping();

    // fallback: se header já estiver, garante bind
    setTimeout(() => {
      ensureThemeButtonAndBind();
      setupMenuSanduiche();
    }, 60);
  });

  window.mudarPagina = function(numero) {
    const ev = window.event;
    mudarPaginaEvento(ev, numero);
  };

  window.carregarNoticiasPagina = carregarNoticiasPagina;


  //injetar noticias no rodape
  function criarCardRodape(noticia) {
    if (!noticia) return '';

    const linkNoticia = `templateNoticia.html?id=${encodeURIComponent(noticia.id)}`;
    const altText = noticia.titulo || 'Imagem da notícia';
    const imgSrc = (noticia.imagem && noticia.imagem.trim()) ? noticia.imagem.trim() : 'Imagem_FrontPage/Imagem-teste.jpg';
    const data = noticia.data || '';
    const titulo = noticia.titulo || 'Notícia sem título';

    return `
      <a href="${linkNoticia}" class="rodape-noticia-item">
          <img src="${imgSrc}" alt="${altText}">
          <div class="rodape-noticia-texto">
              <strong>${titulo}</strong>
              <span>${data}</span>
          </div>
      </a>
    `;
  }

/**
 * Injeta as notícias selecionadas no rodapé.
 */
  function injectNoticiasRodape() {
    const colunaNoticias = document.querySelector(".rodape-noticias");

    if (colunaNoticias && typeof dados_noticias !== 'undefined') {
      const noticia1 = dados_noticias.find(noticia => noticia.id == 1);
      const noticia2 = dados_noticias.find(noticia => noticia.id == 11);

      let htmlParaInjetar = '';
      if (noticia1) {
        htmlParaInjetar += criarCardRodape(noticia1);
      }
      if (noticia2) {
        htmlParaInjetar += criarCardRodape(noticia2);
      }
      colunaNoticias.innerHTML += htmlParaInjetar;
    } else if (!colunaNoticias) {
        console.warn('Injetor Rodapé: Seletor ".rodape-noticias" não foi encontrado.');
    }
  }
})();