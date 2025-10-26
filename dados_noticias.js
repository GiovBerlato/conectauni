
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
        legenda: "", // legenda da imagem da notícia (aparece abaixo da imagem)
        audio: "", // caminho até o áudio da noticia (exemplo: "audio-noticias/audio.mp3")
        legendaAudio: "", // legenda do áudio da notícia (aparece abaixo do player de áudio)
        resumo: "", // resumo da notícia (o texto introdutório que aparece no card que leva ao site da notícia)
        conteudo: "", // texto completo da noticia
        categoria: "" // categorias disponiveis até agora: geral, esportes ou bolsas
    },
    {
        id: 1, 
        titulo: "Cachorro Barnabé é \"nomeado\" coordenador do bem-estar emocional no campus da Universidade Estrela do Saber", 
        autor: "Por Mariana Lopes – Belo Horizonte (MG)", 
        data: "30/10/2025, 12h00", 
        imagem: "imagem-noticias/barnabé.png",
        legenda: "Barnabé, o novo coordenador do bem-estar emocional, recebe carinho de alunos na Universidade Estrela do Saber. (Foto: Lucas Oliveira/Universidade Estrela do Saber)",
        audio: "audios-noticia/barnabe.mp3",
        legendaAudio:"Entrevista com Ana Clara Fonseca, estudante, sobre a presença de Barnabé e seu impacto no bem-estar emocional dos alunos.", 
        resumo: "Alunos oferecem crachá e casa personalizada ao novo mascote universitário, que ganhou espaço cativo entre os estudantes e se tornou símbolo de apoio emocional no campus.", 
        conteudo: `Um cachorro caramelo chamado Barnabé, que apareceu recentemente no campus da Universidade Estrela do Saber, se tornou sensação entre os estudantes. Em gesto simbólico de inclusão, os alunos "nomearam" o animal como coordenador do bem-estar emocional da universidade, entregando-lhe até um crachá e uma casinha personalizada para seu conforto.<br><br>O mascote Barnabé conquistou rapidamente a comunidade acadêmica, incluindo alunos como Ana Clara Fonseca, 20 anos, e Rafael Martins, 21 anos, que destacaram a presença do cão como fonte de alegria e alívio do estresse diário.<br><br>Segundo os estudantes, a ideia surgiu para promover momentos de descontração e interação entre os alunos. "Barnabé está sempre presente nos corredores e áreas de convivência, trazendo leveza e carinho para todos. Ele se tornou um verdadeiro coordenador do bem-estar emocional do campus", explicou Ana Clara.<br><br>A universidade apoiou a iniciativa, autorizando a instalação de uma pequena casinha para Barnabé em área segura do campus e fornecendo um crachá simbólico para identificação do mascote. A medida ganhou destaque nas redes sociais da instituição, recebendo elogios da comunidade acadêmica e da imprensa local.<br><br>Barnabé se tornou mais que um mascote: é um símbolo de união, acolhimento e bem-estar no campus da Universidade Estrela do Saber, mostrando como pequenos gestos podem transformar o ambiente universitário em um espaço mais humano e acolhedor.`
        ,   
        categoria: "geral"
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
        titulo: "Universidade do Saber realiza campeonato de xadrez para alunos com autismo", 
        autor: "Ana Silva", 
        data: "2 de Outubro de 2025", 
        imagem: "imagem-noticias/autismo.png", 
        audio: "", 
        resumo: "A Universidade do Saber realizou, nesta terça-feira (21), o seu primeiro Campeonato de Xadrez Inclusivo, destinado a alunos com autismo. A iniciativa, promovida no campus central em São Paulo, teve como objetivo estimular a concentração, a estratégia e a interação social dos participantes, reforçando o compromisso da instituição com a inclusão e a valorização da diversidade.", 
        conteudo: "<p>O campeonato contou com a participação de vinte estudantes, acompanhados por monitores especializados em educação inclusiva. Entre os participantes, destacou-se Lucas Andrade, 19 anos, que conquistou o primeiro lugar após vencer partidas desafiadoras.</p> <p>De acordo com Ana Beatriz Santos, coordenadora do programa de inclusão da universidade, o evento representa uma oportunidade única de reconhecer talentos e oferecer condições igualitárias para todos os alunos. “O xadrez não é apenas um jogo; é uma ferramenta que estimula habilidades cognitivas, promove paciência e incentiva a interação social, aspectos fundamentais para nossos estudantes com autismo”, explicou Ana</p> <p>Além das partidas, o evento contou com palestras curtas sobre estratégias de xadrez e momentos de socialização, nos quais os alunos puderam compartilhar experiências e reflexões sobre o cotidiano acadêmico. A iniciativa recebeu apoio integral da direção da universidade e de professores voluntários de diversos cursos, consolidando a prática como modelo de inclusão no campus. </p>", 
        categoria: "", 
        link: "" 
    },
    {
        id: 5, 
        titulo: "Universidade Horizonte do Saber promove concurso de bolsas para novos alunos", 
        autor: "Eduardo Mendes", 
        data: "2 de Setembro de 2024", 
        imagem: "imagem-noticias/concursodebolsa.png", 
        audio: "", 
        resumo: "A Universidade Horizonte do Saber realizou, neste domingo (20), seu concurso anual de bolsas, destinado a selecionar novos alunos para ingresso no próximo semestre. A avaliação, realizada das 8h às 12h, contou com diferentes modalidades de questões e proporcionou oportunidades de bolsas integrais e parciais.", 
        conteudo: "<p>Entre os participantes, destacaram-se Ana Clara Freitas, 18 anos, e Gustavo Henrique Lopes, 19 anos, que demonstraram grande desempenho durante a prova. O exame, aplicado em unidades presenciais da universidade em várias cidades do país, avaliou conhecimentos em diversas áreas, incluindo Língua Portuguesa, Matemática, Ciências e Atualidades.</p> <p>Segundo o coordenador do concurso, Marcelo Tavares, a prova foi cuidadosamente elaborada para identificar candidatos com potencial acadêmico e comprometimento com os estudos. “Nosso objetivo é oferecer oportunidades para estudantes que se destacam pelo esforço e dedicação, garantindo bolsas de até 100% para os melhores desempenhos”, explicou Marcelo.</p> <p>O concurso contou com diferentes níveis de bolsas, variando de 25% a 100%, de acordo com o resultado obtido por cada candidato. A divulgação dos aprovados está prevista para o dia 28 de outubro, com matrículas previstas ainda este mês. </p> <p>A universidade também disponibilizou materiais de estudo online, garantindo acesso equitativo e ajudando os candidatos a se prepararem da melhor forma possível.</p>", 
        categoria: ""
    },
    {
        id: 6, 
        titulo: "Universidade Nova Visão inaugura laboratório inovador para alunos com deficiência visual", 
        autor: "Eduarda Marques", 
        data: "2 de Setembro de 2024", 
        imagem: "Imagem-noticias/deficiente.png", 
        audio: "", 
        resumo: "A Universidade Nova Visão inaugurou, nesta sexta-feira (18/10/2025), um laboratório especialmente desenvolvido para alunos com deficiência visual. O espaço conta com tecnologias adaptadas, ferramentas digitais e recursos de acessibilidade que permitem maior autonomia e participação dos estudantes em atividades acadêmicas.", 
        conteudo: "<p>O laboratório, localizado no campus central em Porto Alegre, oferece recursos como softwares de leitura em braille, impressoras 3D para materiais táteis, dispositivos de audiodescrição e orientação sonora, além de mesas e equipamentos adaptados. Entre os primeiros usuários, destacam-se Mariana Lima, 20 anos, aluna de Psicologia, e Rafael Souza, 22 anos, estudante de Engenharia, que elogiaram a iniciativa.</p> <p>Segundo a coordenadora do projeto de inclusão, Patrícia Mendes, o laboratório foi planejado para atender diferentes necessidades e garantir que todos os alunos possam acessar conteúdos e participar de experimentos práticos. “Nosso objetivo é oferecer condições iguais de aprendizado e promover a inclusão de forma concreta e eficaz”, explicou Patrícia.</p> <p>O laboratório também funcionará como centro de pesquisa em acessibilidade, permitindo que professores e estudantes desenvolvam novas tecnologias assistivas, além de capacitar monitores e docentes para o atendimento personalizado. </p>", 
        categoria: ""
    },
      {
        id: 7, 
        titulo: "Universidade Cidade Nova realiza feira de projetos acadêmicos", 
        autor: "Eduardo Mendes", 
        data: "October 12, 2025", 
        imagem: "Imagem-noticias/feira.png", 
        audio: "", 
        resumo: "A Universidade Cidade Nova promoveu, nesta terça-feira (21/10/2025), sua tradicional Feira de Projetos Acadêmicos, reunindo estudantes de diferentes cursos para apresentar os trabalhos desenvolvidos durante o semestre. O evento, realizado no campus central em Recife, teve como objetivo incentivar a pesquisa, a inovação e a interação entre alunos, professores e visitantes.", 
        conteudo: "<p>Durante a feira, foram apresentados projetos nas áreas de Engenharia, Biotecnologia, Ciências Sociais, Artes e Tecnologia da Informação. Entre os destaques, estão o protótipo de uma casa sustentável desenvolvido por Gabriela Souza, 21 anos, aluna de Engenharia Civil, e um aplicativo de acessibilidade para transporte público criado por Lucas Ribeiro, 22 anos, estudante de Ciência da Computação.</p> <p>Segundo a coordenadora da feira, Helena Costa, o evento permite que os alunos compartilhem conhecimento e desenvolvam habilidades práticas que complementam a formação acadêmica. “É uma oportunidade de mostrar o que os estudantes conquistaram ao longo do semestre, promovendo criatividade, inovação e integração entre diferentes áreas”, explicou Helena.</p> <p>O evento contou ainda com apresentações de pôsteres, demonstrações práticas e sessões de perguntas e respostas com professores e especialistas convidados, estimulando a interação e o aprendizado coletivo. </p>", 
        categoria: ""
    },
      {
        id: 8, 
        titulo: "Universidade do Vale Real realiza formatura da turma de Engenharia com sucesso apesar de apagão", 
        autor: "John Doe", 
        data: "October 12, 2025", 
        imagem: "Imagem-noticias/formatura.png", 
        audio: "", 
        resumo: "A Universidade do Vale Real realizou, na noite desta quinta-feira (23/10/2025), a cerimônia de formatura da turma de Engenharia. Durante o evento, um apagão inesperado atingiu o campus, mas a equipe técnica acionou os geradores de energia, garantindo que a festa prosseguisse sem maiores transtornos.", 
        conteudo: "<p>A cerimônia contou com a presença de 120 formandos, entre eles Sofia Almeida, 23 anos, e Bruno Castro, 24 anos, que celebraram a conclusão de seus cursos junto a familiares, amigos e professores. O evento, realizado no auditório principal do campus, incluiu discursos, entrega de diplomas, apresentações culturais e momentos de confraternização.</p> <p>Segundo o coordenador da formatura, Ricardo Fonseca, a rápida ação da equipe técnica foi essencial para manter a normalidade do evento. “Houve uma queda de energia inesperada, mas nossos geradores entraram em funcionamento imediatamente, permitindo que a cerimônia continuasse sem interrupções. Foi um momento de muito alívio e alegria para todos”, afirmou Ricardo.</p> <p>Apesar do susto, a celebração manteve seu clima festivo, com música, iluminação adequada e protocolos de segurança, garantindo que os formandos pudessem comemorar a conquista de forma segura e memorável. </p>", 
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
    
    ];

// Identificador da notícia em destaque na página inicial
const noticiaDestaqueId = 1;