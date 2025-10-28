// carregadorPaginaNoticias.js
document.addEventListener("DOMContentLoaded", () => {
    // Helper para segurança
    function escapeHtml(str) {
        if (str === null || str === undefined) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // Verifica se dados_noticias existe
    if (typeof dados_noticias === 'undefined' || !Array.isArray(dados_noticias)) {
        console.error('dados_noticias não encontrado');
        document.getElementById('noticia-titulo').innerHTML = '<strong>Erro ao carregar notícia</strong>';
        return;
    }

    // Pega o ID da URL
    const urlParams = new URLSearchParams(window.location.search);
    const noticiaId = urlParams.get('id');
    
    if (!noticiaId) {
        document.getElementById('noticia-titulo').innerHTML = '<strong>Notícia não encontrada</strong>';
        return;
    }

    // Encontra a notícia
    const noticia = dados_noticias.find(n => n.id == noticiaId);
    
    if (!noticia) {
        document.getElementById('noticia-titulo').innerHTML = '<strong>Notícia não encontrada</strong>';
        return;
    }

    // PREENCHE OS DADOS DA NOTÍCIA

    // 1. Título
    document.getElementById('noticia-titulo').innerHTML = `<strong>${escapeHtml(noticia.titulo)}</strong>`;

    // 2. Data
    if (noticia.data) {
        document.getElementById('noticia-data').textContent = escapeHtml(noticia.data);
    } else {
        document.getElementById('noticia-data').style.display = 'none';
    }

    // 3. IMAGEM COM LEGENDA
    const imagemElement = document.getElementById('noticia-imagem');
    if (noticia.imagem && noticia.imagem.trim()) {
        imagemElement.src = noticia.imagem;
        imagemElement.alt = escapeHtml(noticia.titulo);
        
        // ADICIONA LEGENDA SE EXISTIR
        if (noticia.legenda && noticia.legenda.trim()) {
            // Cria container para imagem + legenda
            const container = document.createElement('div');
            container.className = 'imagem-com-legenda';
            
            // Cria a legenda
            const legenda = document.createElement('p');
            legenda.className = 'legenda-foto';
            legenda.textContent = noticia.legenda;
            
            // Limpa o container e adiciona imagem + legenda
            container.innerHTML = '';
            container.appendChild(imagemElement.cloneNode(true));
            container.appendChild(legenda);
            
            // Substitui a imagem original pelo container completo
            imagemElement.parentNode.replaceChild(container, imagemElement);
        }
    } else {
        imagemElement.style.display = 'none';
    }

    // 4. Conteúdo
    if (noticia.conteudo && noticia.conteudo.trim()) {
        document.getElementById('noticia-corpo').innerHTML = noticia.conteudo;
    }

    // 5. ÁUDIO COM LEGENDA
const audioElement = document.getElementById('noticia-audio');
const audioSecao = document.getElementById('audio-secao');

if (noticia.audio && noticia.audio.trim()) {
    audioElement.querySelector('source').src = noticia.audio;
    audioElement.load();
    
    // ADICIONA LEGENDA SE EXISTIR
    if (noticia.legendaAudio && noticia.legendaAudio.trim()) {
        const container = document.createElement('div');
        container.className = 'audio-com-legenda';
        
        const legenda = document.createElement('p');
        legenda.className = 'legenda-audio';
        legenda.textContent = noticia.legendaAudio;
        
        // Adiciona o áudio e a legenda no container
        container.appendChild(audioElement.cloneNode(true));
        container.appendChild(legenda);
        
        // Substitui o áudio original pelo container completo
        audioElement.parentNode.replaceChild(container, audioElement);
    }
} else {
    audioSecao.style.display = 'none';
}
// 6. VÍDEO COM LEGENDA
const videoElement = document.getElementById('noticia-video');
const videoSecao = document.getElementById('video-secao');

if (noticia.video && noticia.video.trim()) {
    videoElement.querySelector('source').src = noticia.video;
    videoElement.load();
    
    // ADICIONA LEGENDA SE EXISTIR
    if (noticia.legendaVideo && noticia.legendaVideo.trim()) {
        const container = document.createElement('div');
        container.className = 'video-com-legenda';
        
        const legenda = document.createElement('p');
        legenda.className = 'legenda-video';
        legenda.textContent = noticia.legendaVideo;
        
        // LIMPA o container e adiciona vídeo + legenda
        container.innerHTML = '';
        container.appendChild(videoElement.cloneNode(true));
        container.appendChild(legenda);
        
        // Substitui o vídeo original pelo container completo
        videoElement.parentNode.replaceChild(container, videoElement);
    }
} else {
    videoSecao.style.display = 'none';
}

  // 6. AUTOR COM FOTO
const autorElement = document.getElementById('autor-nome');
const autorImagemElement = document.getElementById('autor-imagem');
const autorSecao = document.querySelector('.noticia-secao-header');
const autorContainer = document.querySelector('.noticia-autor-container');

if (noticia.autor && noticia.autor.trim()) {
    autorElement.innerHTML = `<strong>${escapeHtml(noticia.autor)}</strong>`;
    
    // CARREGA A IMAGEM DO AUTOR SE EXISTIR
    if (noticia.autorImagem && noticia.autorImagem.trim()) {
        autorImagemElement.src = noticia.autorImagem;
        autorImagemElement.alt = `Foto de ${escapeHtml(noticia.autor)}`;
        autorImagemElement.style.display = 'block';
        console.log('Imagem do autor carregada:', noticia.autorImagem);
    } else {
        // Se não tem imagem, esconde a imagem ou usa padrão
        autorImagemElement.style.display = 'none';
        console.log('Nenhuma imagem do autor definida');
    }
} else {
    // Esconde a seção do autor se não tiver autor
    autorSecao.style.display = 'none';
    autorContainer.style.display = 'none';
}
    console.log('Notícia carregada:', noticia.titulo);
});