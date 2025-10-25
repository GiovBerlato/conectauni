
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
        conteudo: `<p>O mascote Barnabé conquistou rapidamente a comunidade
acadêmica, incluindo alunos como Ana Clara Fonseca, 20 anos, e Rafael Martins,
21 anos, que destacaram a presença do cão como fonte de alegria e alívio do
estresse diário.</p>
<p>Segundo os estudantes, a ideia surgiu para promover momentos
de descontração e interação entre os alunos. “Barnabé está sempre presente nos
corredores e áreas de convivência, trazendo leveza e carinho para todos. Ele se
tornou um verdadeiro coordenador do bem-estar emocional do campus”, explicou
Ana Clara.</p>
<p>A universidade apoiou a iniciativa, autorizando a instalação
de uma pequena casinha para Barnabé em área segura do campus e fornecendo um
crachá simbólico para identificação do mascote. A medida ganhou destaque nas
redes sociais da instituição, recebendo elogios da comunidade acadêmica e da
imprensa local.</p>`,
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
        conteudo: `<p>O time feminino de vôlei da Universidade Atlântica conquistou, nesta sexta-feira (01/11/2025), o título do Interuniversidades da região Sul. Com atuações consistentes e espírito de equipe, as jogadoras garantiram a vitória após partidas intensas e emocionantes contra equipes de universidades concorrentes.</p>
        <p>A equipe, composta por 12 atletas, contou com jogadoras destaque como Camila Ferreira, 21 anos, e Júlia Santos, 22 anos, que marcaram pontos decisivos durante a final. O campeonato, realizado em Florianópolis, reuniu times femininos de diversas universidades da região, proporcionando partidas de alto nível técnico e muita emoção para atletas e torcedores.</p>
<p>Segundo a treinadora, Patrícia Albuquerque, o sucesso do time é fruto de disciplina, dedicação e trabalho coletivo. “As jogadoras mostraram garra e determinação em cada set. Esse título é o resultado de esforço, treinamento e união de toda a equipe”, explicou Patrícia.,</p>
<p>Além do reconhecimento regional, a vitória garante à Universidade Atlântica participação em competições nacionais, reforçando a tradição esportiva da instituição e incentivando a prática de esportes entre alunas de diferentes cursos.</p>

        `, 
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
        imagem: "imagem-noticias/autismo.png", 
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
        imagem: "imagem-noticias/concursodebolsa.png", 
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
        imagem: "Imagem-noticias/deficiente.png", 
        audio: "", 
        resumo: "PLACEHOLDER", 
        conteudo: "", 
        categoria: ""
    },
      {
        id: 7, 
        titulo: "NOTICIA", 
        autor: "John Doe", 
        data: "October 12, 2025", 
        imagem: "Imagem-noticias/feira.png", 
        audio: "", 
        resumo: "PLACEHOLDER", 
        conteudo: "", 
        categoria: ""
    },
      {
        id: 8, 
        titulo: "NOTICIA", 
        autor: "John Doe", 
        data: "October 12, 2025", 
        imagem: "Imagem-noticias/formatura.png", 
        audio: "", 
        resumo: "PLACEHOLDER", 
        conteudo: "", 
        categoria: ""
    },
    {
        id: 9, 
        titulo: "NOTICIA", 
        autor: "John Doe", 
        data: "October 12, 2025", 
        imagem: "Imagem-noticias/futebol.png", 
        audio: "", 
        resumo: "PLACEHOLDER", 
        conteudo: "", 
        categoria: ""
    },
    {
        id: 10, 
        titulo: "NOTICIA", 
        autor: "John Doe", 
        data: "October 12, 2025", 
        imagem: "Imagem-noticias/grupopagode.png", 
        audio: "", 
        resumo: "PLACEHOLDER", 
        conteudo: "", 
        categoria: ""
    },
    {
        id: 11, 
        titulo: "NOTICIA", 
        autor: "John Doe", 
        data: "October 12, 2025", 
        imagem: "Imagem-noticias/horta.png", 
        audio: "", 
        resumo: "PLACEHOLDER", 
        conteudo: "", 
        categoria: ""
    },
    {
        id: 12, 
        titulo: "NOTICIA", 
        autor: "John Doe", 
        data: "October 12, 2025", 
        imagem: "Imagem-noticias/intercambio.png", 
        audio: "", 
        resumo: "PLACEHOLDER", 
        conteudo: "", 
        categoria: ""
    },
    {
        id: 13, 
        titulo: "NOTICIA", 
        autor: "John Doe", 
        data: "October 12, 2025", 
        imagem: "Imagem-noticias/intercambio.png", 
        audio: "", 
        resumo: "PLACEHOLDER", 
        conteudo: "", 
        categoria: ""
    },
    {
        id: 14, 
        titulo: "NOTICIA", 
        autor: "John Doe", 
        data: "October 12, 2025", 
        imagem: "Imagem-noticias/intercambio.png", 
        audio: "", 
        resumo: "PLACEHOLDER", 
        conteudo: "", 
        categoria: ""
    },
    {
        id: 15, 
        titulo: "NOTICIA", 
        autor: "John Doe", 
        data: "October 12, 2025", 
        imagem: "Imagem-noticias/intercambio.png", 
        audio: "", 
        resumo: "PLACEHOLDER", 
        conteudo: "", 
        categoria: ""
    },
     {
        id: 16, 
        titulo: "NOTICIA", 
        autor: "John Doe", 
        data: "October 12, 2025", 
        imagem: "Imagem-noticias/intercambio.png", 
        audio: "", 
        resumo: "PLACEHOLDER", 
        conteudo: "", 
        categoria: ""
    },
     {
        id: 17, 
        titulo: "NOTICIA", 
        autor: "John Doe", 
        data: "October 12, 2025", 
        imagem: "Imagem-noticias/intercambio.png", 
        audio: "", 
        resumo: "PLACEHOLDER", 
        conteudo: "", 
        categoria: ""
    },
     {
        id: 18, 
        titulo: "NOTICIA", 
        autor: "John Doe", 
        data: "October 12, 2025", 
        imagem: "Imagem-noticias/intercambio.png", 
        audio: "", 
        resumo: "PLACEHOLDER", 
        conteudo: "", 
        categoria: ""
    },
     {
        id: 19, 
        titulo: "NOTICIA", 
        autor: "John Doe", 
        data: "October 12, 2025", 
        imagem: "Imagem-noticias/intercambio.png", 
        audio: "", 
        resumo: "PLACEHOLDER", 
        conteudo: "", 
        categoria: ""
    },
     {
        id: 20, 
        titulo: "NOTICIA", 
        autor: "John Doe", 
        data: "October 12, 2025", 
        imagem: "Imagem-noticias/intercambio.png", 
        audio: "", 
        resumo: "PLACEHOLDER", 
        conteudo: "", 
        categoria: ""
    },
    {
        id: 21, 
        titulo: "NOTICIA", 
        autor: "John Doe", 
        data: "October 12, 2025", 
        imagem: "Imagem-noticias/intercambio.png", 
        audio: "", 
        resumo: "PLACEHOLDER", 
        conteudo: "", 
        categoria: ""
    },
    
    




]