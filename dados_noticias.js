
/**
 *              ARQUIVO DE ARMAZENAMENTO DAS NOTÍCIAS
 *              
 *      - Para criar uma nova notícia, faça um novo objeto nessa lista, preenchendo todos os campos, seguindo o exemplo da notícia de id 0.
 */

const dados_noticias = [
    {
        id: 0, // identificador da notícia, o id da próxima notícia deve ser o número após o anterior (nesse caso, a próxima notícia deve ter o id 1.)
        titulo: "Placeholder", // titulo da noticia
        autor: "John Doe", // autor da noticia
        autorImagem: "imagem-noticias/placeholder.png", // caminho até a foto do autor da noticia (exemplo: "imagem-noticias/autor.png")
        data: "October 12, 2025", // data da publicação da noticia
        imagem: "", // caminho até a foto da noticia (exemplo: "imagem-noticias/foto.png")
        legenda: "", // legenda da imagem da notícia (aparece abaixo da imagem)
        audio: "", // caminho até o áudio da noticia (exemplo: "audio-noticias/audio.mp3")
        legendaAudio: "", // legenda do áudio da notícia (aparece abaixo do player de áudio)
        video: "", // caminho até o vídeo da noticia (exemplo: "video-noticias/video.mp4")
        legendaVideo: "", // legenda do vídeo da notícia (aparece abaixo do player de vídeo)
        resumo: "", // resumo da notícia (o texto introdutório que aparece no card que leva ao site da notícia)
        conteudo: "", // texto completo da noticia
        categoria: "" // categorias disponiveis até agora: geral, esportes ou bolsas
    },
    {
        id: 1, 
        titulo: "Cachorro Barnabé é \"nomeado\" coordenador do bem-estar emocional no campus da Universidade Estrela do Saber", 
        autor: "Por Mariana Lopes – Belo Horizonte (MG)",
        autorImagem: "imagem-autores/barnabeautor.png", 
        data: "30/10/2025, 12h00", 
        imagem: "imagem-noticias/barnabé.png",
        legenda: "Barnabé, o novo coordenador do bem-estar emocional, recebe carinho de alunos na Universidade Estrela do Saber. (Foto: Lucas Oliveira/Universidade Estrela do Saber)",
        audio: "audios-noticia/barnabe.mp3",
        legendaAudio:"Entrevista com Ana Clara Fonseca, estudante, sobre a presença de Barnabé e seu impacto no bem-estar emocional dos alunos.",
        video: "video-noticia/Barnabe.video.mp4",
        legendaVideo: "Barnabé interagindo com estudantes no campus da universidade. (Vídeo: Lucas Oliveira/Universidade Estrela do Saber)",
        resumo: "Alunos oferecem crachá e casa personalizada ao novo mascote universitário, que ganhou espaço cativo entre os estudantes e se tornou símbolo de apoio emocional no campus.", 
        conteudo: `Um cachorro caramelo chamado Barnabé, que apareceu recentemente no campus da Universidade Estrela do Saber, se tornou sensação entre os estudantes. Em gesto simbólico de inclusão, os alunos "nomearam" o animal como coordenador do bem-estar emocional da universidade, entregando-lhe até um crachá e uma casinha personalizada para seu conforto.<br><br>O mascote Barnabé conquistou rapidamente a comunidade acadêmica, incluindo alunos como Ana Clara Fonseca, 20 anos, e Rafael Martins, 21 anos, que destacaram a presença do cão como fonte de alegria e alívio do estresse diário.<br><br>Segundo os estudantes, a ideia surgiu para promover momentos de descontração e interação entre os alunos. "Barnabé está sempre presente nos corredores e áreas de convivência, trazendo leveza e carinho para todos. Ele se tornou um verdadeiro coordenador do bem-estar emocional do campus", explicou Ana Clara.<br><br>A universidade apoiou a iniciativa, autorizando a instalação de uma pequena casinha para Barnabé em área segura do campus e fornecendo um crachá simbólico para identificação do mascote. A medida ganhou destaque nas redes sociais da instituição, recebendo elogios da comunidade acadêmica e da imprensa local.<br><br>Barnabé se tornou mais que um mascote: é um símbolo de união, acolhimento e bem-estar no campus da Universidade Estrela do Saber, mostrando como pequenos gestos podem transformar o ambiente universitário em um espaço mais humano e acolhedor.`,   
        categoria: ""
    },
     {
        id: 2, 
        titulo: "Placeholder", 
        autor: "John Doe",
        autorImagem: "imagem-noticias/placeholder.png", 
        data: "October 12, 2025", 
        imagem: "",
        legenda: "",
        audio: "",
        legendaAudio:"",
        video: "",
        legendaVideo: "",
        resumo: "", 
        conteudo: ``,   
        categoria: ""
    }
    
];

// Identificador da notícia em destaque na página inicial
const noticiaDestaqueId = 1;