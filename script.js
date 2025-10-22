// Carrega o cabeçalho do header.html para todos os outros arquivos HTML.
fetch('header.html')
.then(response => response.text())
.then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
    document.querySelector('header').style.visibility = 'visible'; // Torna o header visível

    // Adiciona funcionalidade ao menu sanduíche.
    const menuSanduiche = document.querySelector('.menu-sanduiche');
    const menuOffScreen = document.querySelector('.menu-off-screen');

    // Só adiciona o listener se o menu existir nesta página
    if (menuSanduiche && menuOffScreen) {
        menuSanduiche.addEventListener('click', () => {
            menuSanduiche.classList.toggle('active');
            menuOffScreen.classList.toggle('active');
        });
    }
});

// Carrega o rodapé do rodape.html
fetch('rodape.html')
.then(response => response.text())
.then(data => {
    document.getElementById('rodape-placeholder').innerHTML = data;
    document.querySelector('footer').style.visibility = 'visible'; // Torna o footer visível
});