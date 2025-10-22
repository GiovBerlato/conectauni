
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
        data: "October 12, 2025", // data da publicação da noticia
        imagem: "", // caminho até a foto da noticia (exemplo: "imagem-noticias/foto.png")
        audio: "", // caminho até o áudio da noticia (exemplo: "audio-noticias/audio.mp3")
        resumo: "", // resumo da notícia (o texto introdutório que aparece no card que leva ao site da notícia)
        conteudo: "", // texto completo da noticia
        categoria: "" // categorias disponiveis até agora: geral, esportes ou bolsas
    },
    {
        id: 1, 
        titulo: "Cachorro 'caramelo' vira mascote oficial do campus e ganha crachá de 'Coordenador de Bem-Estar Emocional", 
        autor: "Eduardo Mendes", 
        data: "12 de Outubro de 2025", 
        imagem: "imagem-noticias/barnabé.png", 
        audio: "", 
        resumo: "Conhecido por todos como \"Barnabé\", o cãozinho que apareceu no campus há dois anos agora tem uma casinha customizada e participa de eventos para aliviar o estresse dos estudantes em época de provas.", 
        conteudo: "", 
        categoria: ""
    },
    {
        id: 2, 
        titulo: "Leoas da Serra, da Universidade Federal do Planalto, Rugem Mais Alto e Conquistam a Superliga Universitária de Voleibol", 
        autor: "Eduardo Mendes", 
        data: "15 de Outubro de 2025", 
        imagem: "imagem-noticias/Volei.png.png", 
        audio: "", 
        resumo: "A Universidade Federal do Planalto (UFP) é a grande campeã da Superliga Universitária de Voleibol. Em uma final eletrizante decidida no tie-break, a equipe das \"Leoas da Serra\" superou as rivais da UMEC por 3 sets a 2, conquistando o título inédito para a instituição.", 
        conteudo: "", 
        categoria: ""
    },
    {
        id: 3, 
        titulo: "Dragões da Ânima, da UNISUL, Realizam Virada Histórica e Conquistam o TBGU de League of Legends", 
        autor: "Eduardo Mendes", 
        data: "17 de Outubro de 2025", 
        imagem: "imagem-noticias/esports.png.png", 
        audio: "", 
        resumo: "A equipe \"Dragões da Ânima\", da Universidade Ânima do Sul (UNISUL), é a nova campeã do Torneio Brasileiro de Gamers Universitários (TBGU). O título de League of Legends veio após uma virada espetacular por 3 a 2 sobre os Titãs do Sertão na grande final.", 
        conteudo: "", 
        categoria: ""
    },
    {
        id: 4, 
        titulo: "NOTICIA", 
        autor: "John Doe", 
        data: "October 12, 2025", 
        imagem: "Imagem_FrontPage/Imagem-teste.jpg", 
        audio: "", 
        resumo: "PLACEHOLDER", 
        conteudo: "", 
        categoria: "", 
        link: "" 
    },
    {
        id: 5, 
        titulo: "NOTICIA", 
        autor: "John Doe", 
        data: "October 12, 2025", 
        imagem: "Imagem_FrontPage/Imagem-teste.jpg", 
        audio: "", 
        resumo: "PLACEHOLDER", 
        conteudo: "", 
        categoria: ""
    },
    {
        id: 6, 
        titulo: "NOTICIA", 
        autor: "John Doe", 
        data: "October 12, 2025", 
        imagem: "Imagem_FrontPage/Imagem-teste.jpg", 
        audio: "", 
        resumo: "PLACEHOLDER", 
        conteudo: "", 
        categoria: ""
    }
]