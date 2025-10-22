

// SCRIPT QUE CRIA UMA PÁGINA PARA CADA NOTÍCIA.



document.addEventListener("DOMContentLoaded", () => {

    const urlParams = new URLSearchParams(window.location.search);
    const noticiaId = parseInt(urlParams.get('id'));

    if (!noticiaId || typeof dados_noticias === 'undefined') {
        console.error("ID da notícia não encontrado ou dados indisponíveis.");
        document.body.innerHTML = "<h1>Erro: Notícia não encontrada.</h1>";
        return;
    }

    const noticia = dados_noticias.find(n => n.id === noticiaId);

    if (!noticia) {
        console.error(`Notícia com ID ${noticiaId} não encontrada.`);
        document.body.innerHTML = "<h1>Erro: Notícia não encontrada.</h1>";
        return;
    }

    document.title = noticia.titulo;

    document.getElementById("noticia-titulo").innerHTML = `<strong>${noticia.titulo}</strong>`;
    document.getElementById("noticia-data").textContent = noticia.data;
    
    const imgNoticia = document.getElementById("noticia-imagem");
    imgNoticia.src = noticia.imagem;
    imgNoticia.alt = noticia.titulo;

    document.getElementById("noticia-corpo").innerHTML = noticia.conteudo;
    document.getElementById("autor-nome").innerHTML = `<strong>${noticia.autor}</strong>`;
    
    const autorImg = document.getElementById("autor-imagem");
    if (noticia.autorImagem) {
         autorImg.src = noticia.autorImagem;
    } else {
         autorImg.src = "Imagem_FrontPage/Imagem-teste.jpg";
    }
    autorImg.alt = noticia.autor;

    const audioPlayer = document.getElementById("noticia-audio");
    const audioSource = audioPlayer.querySelector("source");
    const audioSecao = document.getElementById("audio-secao");

    if (noticia.audio && noticia.audio.trim() !== "") {
        audioSource.src = noticia.audio;
        audioPlayer.load();
    } else {
        if (audioSecao) {
            audioSecao.style.display = "none";
        }
    }
});