// script.js - versão segura para modo escuro, load do header/rodape e outras funcionalidades

(function () {
  const THEME_KEY = 'site-theme';
  const root = document.documentElement;

  /* =========================
     Funções de tema
     ========================= */
  function applyTheme(theme) {
    if (theme === 'dark') root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
    syncButtonIcon(theme);
  }

  function getSavedTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (e) {
      return null;
    }
  }

  function saveTheme(theme) {
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
  }

  function syncButtonIcon(theme) {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.textContent = (theme === 'dark') ? '☀️' : '🌙';
    btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  }

  /* =========================
     Setup do toggle (após header ser injetado)
     ========================= */
  function setupThemeToggleAfterHeader() {
    // encontra (ou cria) botão no header de forma não-destrutiva
    const header = document.querySelector('header') || document.querySelector('.site-header');
    let btn = document.getElementById('theme-toggle');

    // se existir botão dentro do header (injetado), preferimos ele
    if (!btn && header) {
      btn = header.querySelector('#theme-toggle');
    }

    // se ainda não existir, criamos um fallback simples e inserimos no header
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'theme-toggle';
      btn.type = 'button';
      btn.className = 'theme-btn';
      btn.setAttribute('aria-label', 'Alternar modo escuro');
      btn.title = 'Alternar modo escuro';
      // estilo inline mínimo para garantir posicionamento se não houver CSS correspondente
      btn.style.position = 'absolute';
      btn.style.right = '1.2rem';
      btn.style.top = '1rem';
      btn.style.background = 'none';
      btn.style.border = 'none';
      btn.style.cursor = 'pointer';

      // tenta inserir no container .header-right se existir, senão no próprio header
      const container = header ? header.querySelector('.header-right') : null;
      if (container) container.appendChild(btn);
      else if (header) {
        header.appendChild(btn);
        header.style.position = header.style.position || 'relative';
      } else {
        // fallback absoluto (na falta de header, insere no body)
        document.body.insertBefore(btn, document.body.firstChild);
      }
    }

    // evita adicionar múltiplos listeners ao mesmo botão
    if (btn && !btn.dataset.themeListenerAttached) {
      btn.addEventListener('click', () => {
        const currentIsDark = root.getAttribute('data-theme') === 'dark';
        const next = currentIsDark ? 'light' : 'dark';
        applyTheme(next);
        saveTheme(next);
      }, { passive: true });
      btn.dataset.themeListenerAttached = '1';
    }

    // sincroniza o ícone conforme tema atual (caso já tenha sido aplicado pelo inline script)
    const saved = getSavedTheme();
    if (saved === 'dark') applyTheme('dark');
    else applyTheme('light');
  }

  /* =========================
     Menu sanduíche (preservando sua lógica)
     ========================= */
  function setupMenuSanduiche() {
    const sandBtn = document.getElementById('menu-sanduiche-btn') || document.querySelector('.menu-sanduiche');
    const menu = document.getElementById('menu-off-screen') || document.querySelector('.menu-off-screen');

    if (!sandBtn || !menu) return;

    // evita múltiplos listeners
    if (!sandBtn.dataset.menuListenerAttached) {
      sandBtn.addEventListener('click', function () {
        sandBtn.classList.toggle('active');
        const isActive = menu.classList.toggle('active');
        menu.setAttribute('aria-hidden', isActive ? 'false' : 'true');
      }, { passive: true });
      sandBtn.dataset.menuListenerAttached = '1';
    }
  }

  /* =========================
     Carregamento do header e footer com fetch (como você já fazia)
     ========================= */
  function loadHeaderAndFooter() {
    // Header
    fetch('header.html')
      .then(response => {
        if (!response.ok) throw new Error('Falha ao carregar header');
        return response.text();
      })
      .then(data => {
        const holder = document.getElementById('header-placeholder');
        if (holder) holder.innerHTML = data;
        // deixa header visível (você fazia isso)
        const headerEl = document.querySelector('header');
        if (headerEl) headerEl.style.visibility = 'visible';

        // Após injetar o header, inicialize o toggle e o menu
        setupThemeToggleAfterHeader();
        setupMenuSanduiche();
      })
      .catch(err => {
        console.warn('Não foi possível carregar header:', err);
        // mesmo se falhar, tentamos inicializar toggle (para fallback)
        setupThemeToggleAfterHeader();
        setupMenuSanduiche();
      });

    // Footer
    fetch('rodape.html')
      .then(response => {
        if (!response.ok) throw new Error('Falha ao carregar rodape');
        return response.text();
      })
      .then(data => {
        const holder = document.getElementById('rodape-placeholder');
        if (holder) holder.innerHTML = data;
        const footerEl = document.querySelector('footer');
        if (footerEl) footerEl.style.visibility = 'visible';
      })
      .catch(err => {
        console.warn('Não foi possível carregar rodape:', err);
      });
  }

  /* =========================
     Inicialização principal (após DOM pronto)
     ========================= */
  document.addEventListener('DOMContentLoaded', function () {
    const saved = getSavedTheme();
    if (saved === 'dark') applyTheme('dark');
    else if (saved === 'light') applyTheme('light');

    loadHeaderAndFooter();

    setTimeout(() => {
      setupThemeToggleAfterHeader();
      setupMenuSanduiche();
    }, 50);

    window.onload = function() {
      var boxtitulo = document.querySelector(".introducao-titulo h1");
      var boxintroducao = document.querySelector(".introducao-titulo p");
      var textotitulo = "Bem vindo(a) ao Conecta Uni!";
      var textointroducao = `
      No Conecta Uni, você fica ligado em tudo que acontece nas grandes faculdades do Brasil!

      Aqui noticiamos esportes, acontecimentos engraçados, anúncios importantes e até mesmo oportunidades de bolsas! Não perca nada, junte-se conosco e se mantenha atualizado!
      `

      if (boxtitulo && boxintroducao) {
          if (localStorage.getItem("jaVisitou") == null) {
            for (var i = 0, l = textotitulo.length; i < l; i++) {
              setTimeout(function(i) {
                  boxtitulo.textContent = textotitulo.substring(0, i + 1);
              }.bind(this, i), i * 120);
            }

            //calcula o tempo levado para a escrita do titulo
            var duracaoTitulo = textotitulo.length * 120;

            for (var i = 0, l = textointroducao.length; i < l; i++) {
              setTimeout(function(i) {
                boxintroducao.textContent = textointroducao.substring(0, i+1);
              }.bind(this, i), duracaoTitulo + (i *20)); // espera o titulo ser escrito, para depois escrever a introdução
            }

            var duracaoIntroducao = textointroducao.length * 120;
            setTimeout(function() {
              localStorage.setItem("jaVisitou", "true"); // a animação só deve acontecer na primeira visita ao site.
            }, duracaoTitulo + duracaoIntroducao);
          } else {
            boxtitulo.textContent = textotitulo;
            boxintroducao.textContent = textointroducao;
          }
      } else {
          console.error("Elemento 'introducao-titulo' não foi encontrado.");
      }
    };
  });

})();