
// Carrega o head do head.html para todas os outros arquivos HTML.
fetch('head.html')
.then(response => response.text())
.then(data => {
    document.getElementById('head-placeholder').innerHTML = data;
});

// Carrega o cabeçalho do header.html para todas os outros arquivos HTML.
fetch('header.html')
.then(response => response.text())
.then(data => {
    document.getElementById('header-placeholder').innerHTML = data;


    // Adiciona funcionalidade ao menu sanduíche.
    const menuSanduiche = document.querySelector('.menu-sanduiche');
    const menuOffScreen = document.querySelector('.menu-off-screen');

    menuSanduiche.addEventListener('click', () => {
    menuSanduiche.classList.toggle('active');
    menuOffScreen.classList.toggle('active');
});
});