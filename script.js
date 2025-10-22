// script.js - versão segura para modo escuro + load do header/rodape
// Substitua TODO o conteúdo do seu script.js por este bloco (faça backup antes)

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
    // 1) Primeiro, aplica o tema salvo (inline script já tentou isso, mas garantimos sincronia)
    const saved = getSavedTheme();
    if (saved === 'dark') applyTheme('dark');
    else if (saved === 'light') applyTheme('light');
    // NOTE: se saved for null, não forçamos nada — inline script manteve claro por padrão.

    // 2) Carrega header e footer (e inicializa toggle ao final da injeção)
    loadHeaderAndFooter();

    // 3) Caso você tenha páginas sem header injetado, garante setup do toggle também
    // (setupThemeToggleAfterHeader vai criar fallback button se necessário)
    // chamamos com leve timeout para permitir que, se o header já estiver no HTML, tudo funcione.
    setTimeout(() => {
      setupThemeToggleAfterHeader();
      setupMenuSanduiche();
    }, 50);
  });

})();