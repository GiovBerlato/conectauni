
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
        data: "Publicado em 30/10/2025, 12h00", 
        imagem: "imagem-noticias/barnabé.png",
        legenda: "Barnabé, o novo coordenador do bem-estar emocional, recebe carinho de alunos na Universidade Estrela do Saber. (Foto: Lucas Oliveira/Universidade Estrela do Saber)",
        audio: "audios-noticia/barnabe.mp3",
        legendaAudio:"Entrevista com Ana Clara Fonseca, estudante, sobre a presença de Barnabé e seu impacto no bem-estar emocional dos alunos.",
        video: "video-noticia/Barnabe.video.mp4",
        legendaVideo: "Barnabé interagindo com estudantes no campus da universidade. (Vídeo: Lucas Oliveira/Universidade Estrela do Saber)",
        resumo: "Alunos oferecem crachá e casa personalizada ao novo mascote universitário, que ganhou espaço cativo entre os estudantes e se tornou símbolo de apoio emocional no campus.", 
        conteudo:  `<p style="margin-bottom: 25px;">Um cachorro caramelo chamado Barnabé, que apareceu recentemente no campus da Universidade Estrela do Saber, se tornou sensação entre os estudantes. Em gesto simbólico de inclusão, os alunos "nomearam" o animal como <strong>coordenador do bem-estar emocional</strong> da universidade, entregando-lhe até um crachá e uma casinha personalizada para seu conforto.</p>

<p style="margin-bottom: 25px;">O mascote Barnabé conquistou rapidamente a comunidade acadêmica, incluindo alunos como <strong>Ana Clara Fonseca, 20 anos</strong>, e <strong>Rafael Martins, 21 anos</strong>, que destacaram a presença do cão como fonte de alegria e alívio do estresse diário.</p>

<p style="margin-bottom: 25px;">Segundo os estudantes, a ideia surgiu para promover momentos de descontração e interação entre os alunos. <strong>"Barnabé está sempre presente nos corredores e áreas de convivência, trazendo leveza e carinho para todos. Ele se tornou um verdadeiro coordenador do bem-estar emocional do campus"</strong>, explicou Ana Clara.</p>

<p style="margin-bottom: 25px;">A universidade apoiou a iniciativa, autorizando a instalação de uma pequena casinha para Barnabé em área segura do campus e fornecendo um <strong>crachá simbólico</strong> para identificação do mascote. A medida ganhou destaque nas redes sociais da instituição, recebendo elogios da comunidade acadêmica e da imprensa local.</p>

<p style="margin-bottom: 25px;">Barnabé se tornou mais que um mascote: é um <strong>símbolo de união, acolhimento e bem-estar</strong> no campus da Universidade Estrela do Saber, mostrando como pequenos gestos podem transformar o ambiente universitário em um espaço mais humano e acolhedor.</p>`,
        categoria: ""
    },
     {
        id: 2, 
        titulo: "Universidade do Saber realiza campeonato de xadrez para alunos com autismo", 
        autor: "Por Carla Mendes – São Paulo (SP)",
        autorImagem: "imagem-autores/autismoautor.png", 
        data: "Publicado em 22/10/2025, 14h30", 
        imagem: "imagem-noticias/autismo.png",
        legenda: "Participantes do Campeonato de Xadrez Inclusivo da Universidade do Saber durante as partidas, acompanhados por monitores especializados. (Foto: João Silva/Universidade do Saber)",
        audio: "audios-noticia/audioautismo.mp3",
        legendaAudio:"Entrevista com Ana Beatriz Santos, coordenadora do programa de inclusão, explicando a importância do xadrez para alunos com autismo.",
        video: "video-noticia/videoautismo.mp4",
        legendaVideo: "Alunos competem no Campeonato de Xadrez Inclusivo da Universidade do Saber e compartilham suas estratégias com professores e colegas.",
        resumo: "Evento promove inclusão e diversidade, estimulando habilidades cognitivas e sociais dos participantes.", 
        conteudo: `<p style="margin-bottom: 25px;">A Universidade do Saber realizou, nesta terça-feira (21), o seu <strong>primeiro Campeonato de Xadrez Inclusivo</strong>, destinado a alunos com autismo. A iniciativa, promovida no campus central em São Paulo, teve como objetivo estimular a concentração, a estratégia e a interação social dos participantes, reforçando o compromisso da instituição com a inclusão e a valorização da diversidade.</p>

<p style="margin-bottom: 25px;">O campeonato contou com a participação de <strong>vinte estudantes</strong>, acompanhados por monitores especializados em educação inclusiva. Entre os participantes, destacou-se <strong>Lucas Andrade, 19 anos</strong>, que conquistou o primeiro lugar após vencer partidas desafiadoras.</p>

<p style="margin-bottom: 25px;">De acordo com Ana Beatriz Santos, coordenadora do programa de inclusão da universidade, o evento representa uma <strong>oportunidade única de reconhecer talentos</strong> e oferecer condições igualitárias para todos os alunos. <strong>"O xadrez não é apenas um jogo; é uma ferramenta que estimula habilidades cognitivas, promove paciência e incentiva a interação social, aspectos fundamentais para nossos estudantes com autismo"</strong>, explicou Ana.</p>

<p style="margin-bottom: 25px;">Além das partidas, o evento contou com <strong>palestras curtas sobre estratégias de xadrez</strong> e momentos de socialização, nos quais os alunos puderam compartilhar experiências e reflexões sobre o cotidiano acadêmico. A iniciativa recebeu apoio integral da direção da universidade e de professores voluntários de diversos cursos.</p>

<p style="margin-bottom: 25px;">Ao término do campeonato, todos os participantes receberam <strong>medalhas de participação e certificados de reconhecimento</strong>, reforçando o compromisso da Universidade do Saber com a inclusão e a diversidade. A expectativa da instituição é transformar o evento em uma atividade anual.</p>`,        categoria: ""
    },
    {
        id: 3, 
        titulo: "Universidade Brasileira conquista campeonato internacional de robótica sustentável nos EUA", 
        autor: "Por Felipe Oliveira – São Paulo (SP)",
        autorImagem: "imagem-autores/roboticaautor.png", 
        data: "Publicado em 22/10/2025, 16h00", 
        imagem: "imagem-noticias/robotica.png",
        legenda: "Equipe da Universidade Tecnológica de Inovação celebra a conquista do primeiro lugar no Campeonato Internacional de Robótica Sustentável em Boston, EUA. (Foto: João Pereira/UTI)",
        audio: "audios-noticia/roboticaaudio.mp3",
        legendaAudio:"Áudio: Entrevista com Mariana Costa, líder da equipe, sobre os desafios e aprendizados na competição internacional de robótica sustentável.",
        video: "",
        legendaVideo: "",
        resumo: "Equipe universitária representa o Brasil com projeto inovador e sustentável, saindo campeã da competição internacional.", 
        conteudo: `<p style="margin-bottom: 25px;">A Universidade Tecnológica de Inovação (UTI) conquistou, na última segunda-feira (20), o <strong>primeiro lugar no Campeonato Internacional de Robótica Sustentável</strong>, realizado em Boston, Estados Unidos. A equipe brasileira apresentou um robô totalmente funcional e ambientalmente sustentável, destacando-se pela inovação, eficiência energética e design criativo.</p>

<p style="margin-bottom: 25px;">O robô, desenvolvido ao longo de <strong>18 meses</strong> por alunos e professores do curso de Engenharia Mecatrônica, foi projetado para executar tarefas complexas utilizando <strong>energia limpa, sensores inteligentes e materiais recicláveis</strong>. Entre os integrantes da equipe, destaque para <strong>Mariana Costa, 22 anos</strong>, líder do projeto, e <strong>Pedro Almeida, 23 anos</strong>, responsável pela programação do robô.</p>

<p style="margin-bottom: 25px;">Segundo o professor orientador Lucas Menezes, o sucesso da equipe é resultado de <strong>dedicação, pesquisa e planejamento estratégico</strong>. <strong>"Nosso objetivo sempre foi mostrar que tecnologia e sustentabilidade podem caminhar juntas. Esse prêmio reforça que é possível criar soluções inovadoras e ecológicas sem perder performance"</strong>, afirmou.</p>

<p style="margin-bottom: 25px;">Durante a competição, as equipes precisaram superar desafios de <strong>navegação autônoma, resolução de problemas e eficiência energética</strong>. O robô da UTI não apenas completou todas as tarefas com precisão, mas também apresentou soluções criativas para problemas inesperados.</p>

<p style="margin-bottom: 25px;">Com a vitória, a Universidade Tecnológica de Inovação confirma seu <strong>protagonismo em inovação e sustentabilidade</strong> no cenário internacional. A equipe planeja continuar desenvolvendo aprimoramentos para futuras competições.</p>`,        categoria: "" 
    },
    {
        id: 4, 
        titulo: "Universidade Horizonte do Saber promove concurso de bolsas para novos alunos", 
        autor: "Por João Yanke – Curitiba (PR)",
        autorImagem: "imagem-autores/concursobolsaautor.png", 
        data: "Publicado em 22/10/2025, 19h00 ", 
        imagem: "imagem-noticias/concursodebolsa.png",
        legenda: "Candidatos realizam a prova do concurso de bolsas da Universidade Horizonte do Saber em Curitiba, seguindo todas as normas de segurança e organização. (Foto: Ricardo Oliveira/Universidade Horizonte do Saber)",
        audio: "audios-noticia/bolsaaudio.mp3",
        legendaAudio:"Áudio: Entrevista com Marcelo Tavares, coordenador do concurso, explicando critérios de avaliação e concessão das bolsas.",
        video: "",
        legendaVideo: "",
        resumo: "Mais de 1.500 candidatos participaram da avaliação, que oferece bolsas de até 100%.", 
        conteudo: `<p style="margin-bottom: 25px;">A Universidade Horizonte do Saber realizou, neste domingo (20), seu <strong>concurso anual de bolsas</strong>, destinado a selecionar novos alunos para ingresso no próximo semestre. A avaliação, realizada das 8h às 12h, contou com diferentes modalidades de questões e proporcionou oportunidades de <strong>bolsas integrais e parciais</strong>.</p>

<p style="margin-bottom: 25px;">Entre os participantes, destacaram-se <strong>Ana Clara Freitas, 18 anos</strong>, e <strong>Gustavo Henrique Lopes, 19 anos</strong>, que demonstraram grande desempenho durante a prova. O exame, aplicado em unidades presenciais da universidade em várias cidades do país, avaliou conhecimentos em diversas áreas, incluindo <strong>Língua Portuguesa, Matemática, Ciências e Atualidades</strong>.</p>

<p style="margin-bottom: 25px;">Segundo o coordenador do concurso, Marcelo Tavares, a prova foi cuidadosamente elaborada para identificar candidatos com <strong>potencial acadêmico e comprometimento com os estudos</strong>. <strong>"Nosso objetivo é oferecer oportunidades para estudantes que se destacam pelo esforço e dedicação, garantindo bolsas de até 100% para os melhores desempenhos"</strong>, explicou Marcelo.</p>

<p style="margin-bottom: 25px;">O concurso contou com <strong>diferentes níveis de bolsas, variando de 25% a 100%</strong>, de acordo com o resultado obtido por cada candidato. A divulgação dos aprovados está prevista para o dia 28 de outubro, com matrículas previstas ainda este mês.</p>

<p style="margin-bottom: 25px;">A universidade também disponibilizou <strong>materiais de estudo online</strong>, garantindo acesso equitativo e ajudando os candidatos a se prepararem da melhor forma possível. O programa reforça o compromisso da instituição com a democratização do ensino superior.</p>`,        categoria: ""
     },
     {
 
        id: 5, 
        titulo: "Universidade Nova Visão inaugura laboratório inovador para alunos com deficiência visual", 
        autor: "Por Camila Torres – Porto Alegre (RS)",
        autorImagem: "imagem-autores/deficienteautor.png", 
        data: "Publicado em 18/10/2025, 20h30", 
        imagem: "imagem-noticias/deficiente.png",
        legenda: "Alunos utilizam os recursos do laboratório de acessibilidade da Universidade Nova Visão durante atividades acadêmicas. (Foto: Lucas Pereira/Universidade Nova Visão)",
        audio: "audios-noticia/deficienteaudio.mp3",
        legendaAudio:"Áudio: Entrevista com Patrícia Mendes, coordenadora do projeto, explicando os recursos e objetivos do laboratório para alunos com deficiência visual.",
        video: "",
        legendaVideo: "",
        resumo: "Espaço oferece recursos de acessibilidade e tecnologia assistiva para promover inclusão acadêmica.", 
        conteudo: `<p style="margin-bottom: 25px;">A Universidade Nova Visão inaugurou, nesta sexta-feira (18/10/2025), um <strong>laboratório especialmente desenvolvido para alunos com deficiência visual</strong>. O espaço conta com tecnologias adaptadas, ferramentas digitais e recursos de acessibilidade que permitem maior autonomia e participação dos estudantes em atividades acadêmicas.</p>

<p style="margin-bottom: 25px;">O laboratório, localizado no campus central em Porto Alegre, oferece recursos como <strong>softwares de leitura em braille, impressoras 3D para materiais táteis, dispositivos de audiodescrição e orientação sonora</strong>, além de mesas e equipamentos adaptados. Entre os primeiros usuários, destacam-se <strong>Mariana Lima, 20 anos</strong>, aluna de Psicologia, e <strong>Rafael Souza, 22 anos</strong>, estudante de Engenharia.</p>

<p style="margin-bottom: 25px;">Segundo a coordenadora do projeto de inclusão, Patrícia Mendes, o laboratório foi planejado para <strong>atender diferentes necessidades</strong> e garantir que todos os alunos possam acessar conteúdos e participar de experimentos práticos. <strong>"Nosso objetivo é oferecer condições iguais de aprendizado e promover a inclusão de forma concreta e eficaz"</strong>, explicou Patrícia.</p>

<p style="margin-bottom: 25px;">O laboratório também funcionará como <strong>centro de pesquisa em acessibilidade</strong>, permitindo que professores e estudantes desenvolvam novas tecnologias assistivas, além de capacitar monitores e docentes para o atendimento personalizado.</p>

<p style="margin-bottom: 25px;">A inauguração do laboratório reforça o <strong>compromisso da universidade com a inclusão e a diversidade</strong>, proporcionando oportunidades de aprendizado para alunos com deficiência visual e tornando-se referência nacional em tecnologia assistiva.</p>`,        categoria: ""
},
{
        id: 6, 
        titulo: "Universidade Cidade Nova realiza feira de projetos acadêmicos", 
        autor: "Por Felipe Martins – Recife (PE)",
        autorImagem: "imagem-autores/feiraautor.png", 
        data: "Publicado em 21/10/2025, 15h00", 
        imagem: "imagem-noticias/feira.png",
        legenda: "Alunos apresentam seus projetos acadêmicos na Feira de Projetos da Universidade Cidade Nova, recebendo visitas de professores e colegas. (Foto: Marina Lima/Universidade Cidade Nova)",
        audio: "audios-noticia/feiraaudio.mp3",
        legendaAudio:"",
        video: "",
        legendaVideo: "",
        resumo: "Alunos apresentam trabalhos desenvolvidos ao longo do semestre em diversas áreas do conhecimento.", 
        conteudo: `<p style="margin-bottom: 25px;">A Universidade Cidade Nova promoveu, nesta terça-feira (21/10/2025), sua <strong>tradicional Feira de Projetos Acadêmicos</strong>, reunindo estudantes de diferentes cursos para apresentar os trabalhos desenvolvidos durante o semestre. O evento, realizado no campus central em Recife, teve como objetivo incentivar a pesquisa, a inovação e a interação entre alunos, professores e visitantes.</p>

<p style="margin-bottom: 25px;">Durante a feira, foram apresentados projetos nas áreas de <strong>Engenharia, Biotecnologia, Ciências Sociais, Artes e Tecnologia da Informação</strong>. Entre os destaques, estão o <strong>protótipo de uma casa sustentável</strong> desenvolvido por Gabriela Souza, 21 anos, aluna de Engenharia Civil, e um <strong>aplicativo de acessibilidade para transporte público</strong> criado por Lucas Ribeiro, 22 anos.</p>

<p style="margin-bottom: 25px;">Segundo a coordenadora da feira, Helena Costa, o evento permite que os alunos <strong>compartilhem conhecimento e desenvolvam habilidades práticas</strong> que complementam a formação acadêmica. <strong>"É uma oportunidade de mostrar o que os estudantes conquistaram ao longo do semestre, promovendo criatividade, inovação e integração entre diferentes áreas"</strong>, explicou Helena.</p>

<p style="margin-bottom: 25px;">O evento contou ainda com <strong>apresentações de pôsteres, demonstrações práticas e sessões de perguntas e respostas</strong> com professores e especialistas convidados, estimulando a interação e o aprendizado coletivo entre todos os participantes.</p>

<p style="margin-bottom: 25px;">A Feira de Projetos Acadêmicos reforça o <strong>compromisso da instituição com a pesquisa e a inovação</strong>, consolidando-se como uma iniciativa fundamental para a formação integral dos alunos e o desenvolvimento de soluções criativas para desafios contemporâneos.</p>`,        categoria: ""
    },
    {
        id: 7, 
        titulo: "Universidade do Vale Real realiza formatura da turma de Engenharia com sucesso apesar de apagão", 
        autor: "Por Beatriz Campos – Florianópolis (SC)",
        autorImagem: "imagem-autores/formaturaautor.png", 
        data: "Publicado em 23/10/2025, 21h00 ", 
        imagem: "imagem-noticias/formatura.png",
        legenda: "Formandos da turma de Engenharia celebram a conclusão do curso durante a cerimônia da Universidade do Vale Real. (Foto: Lucas Ferreira/Universidade do Vale Real)",
        audio: "audios-noticia/formaturaaudio.mp3",
        legendaAudio:"Áudio: Entrevista com Ricardo Fonseca, coordenador da formatura, sobre a rápida ação da equipe técnica durante o apagão.",
        video: "video-noticia/formaturavideo.mp4",
        legendaVideo: "Formatura da turma de Engenharia da Universidade do Vale Real continua normalmente após apagão, graças ao acionamento dos geradores de energia. (Vídeo: Lucas Ferreira/Universidade do Vale Real)",
        resumo: "Evento contou com energia gerada por geradores, garantindo que a celebração prosseguisse normalmente.", 
        conteudo: `<p style="margin-bottom: 25px;">A Universidade do Vale Real realizou, na noite desta quinta-feira (23/10/2025), a <strong>cerimônia de formatura da turma de Engenharia</strong>. Durante o evento, um apagão inesperado atingiu o campus, mas a equipe técnica acionou os geradores de energia, garantindo que a festa prosseguisse sem maiores transtornos.</p>

<p style="margin-bottom: 25px;">A cerimônia contou com a presença de <strong>120 formandos</strong>, entre eles <strong>Sofia Almeida, 23 anos</strong>, e <strong>Bruno Castro, 24 anos</strong>, que celebraram a conclusão de seus cursos junto a familiares, amigos e professores. O evento, realizado no auditório principal do campus, incluiu discursos, entrega de diplomas, apresentações culturais e momentos de confraternização.</p>

<p style="margin-bottom: 25px;">Segundo o coordenador da formatura, Ricardo Fonseca, a <strong>rápida ação da equipe técnica foi essencial</strong> para manter a normalidade do evento. <strong>"Houve uma queda de energia inesperada, mas nossos geradores entraram em funcionamento imediatamente, permitindo que a cerimônia continuasse sem interrupções. Foi um momento de muito alívio e alegria para todos"</strong>, afirmou Ricardo.</p>

<p style="margin-bottom: 25px;">Apesar do susto, a celebração manteve seu <strong>clima festivo e seguro</strong>, com música, iluminação adequada e protocolos de segurança, garantindo que os formandos pudessem comemorar a conquista de forma memorável.</p>

<p style="margin-bottom: 25px;">A formatura reforçou o <strong>comprometimento da instituição em proporcionar experiências memoráveis</strong> para seus alunos, demonstrando capacidade de superação mesmo diante de imprevistos e celebrando a dedicação dos formandos ao longo do curso.</p>`,        categoria: ""
    },
    {
        id: 8, 
        titulo: "Time de futebol da Universidade São Lucas conquista título regional do Inter Atlética", 
        autor: "Por Rafael Almeida – Ribeirão Preto (SP)",
        autorImagem: "imagem-autores/futebolautor.png", 
        data: "Publicado em 25/10/2025, 17h00", 
        imagem: "imagem-noticias/futebol.png",
        legenda: "Equipe de futebol da Universidade São Lucas comemora o título do Inter Atlética regional após vitória decisiva. (Foto: João Pedro/Universidade São Lucas)",
        audio: "audios-noticia/futebolaudio.mp3",
        legendaAudio:"",
        video: "video-noticia/futebolvideo.mp4",
        legendaVideo: "Jogadores da Universidade São Lucas celebram gols e a vitória no campeonato Inter Atlética regional do interior.",
        resumo: "Equipe universitária se destaca na competição do interior e garante a vitória com desempenho consistente.", 
        conteudo: `<p style="margin-bottom: 25px;">A Universidade São Lucas celebrou uma conquista histórica no último sábado (25/10/2025), quando seu time de futebol de campo sagrou-se campeão do Inter Atlética regional do interior. A equipe demonstrou superioridade técnica ao vencer todos os principais concorrentes e finalizar a competição com <strong>campanha invicta</strong>.</p>

<p style="margin-bottom: 25px;">Composta por 18 atletas dedicados, a equipe contou com performances brilhantes de <strong>Matheus Ribeiro, 21 anos</strong>, e <strong>Felipe Santos, 22 anos</strong>, que foram decisivos com gols cruciais durante o torneio. Realizado em Sertãozinho, o campeonato reuniu as melhores universidades da região em partidas que combinaram <strong>alto nível técnico e intensa competitividade</strong>.</p>

<p style="margin-bottom: 25px;">O treinador Carlos Menezes destacou a filosofia por trás do sucesso: <strong>"Nossos jogadores demonstraram dedicação e estratégia em cada partida. Essa conquista é fruto do trabalho de todos os atletas e da comissão técnica"</strong>, afirmou o técnico, enfatizando a importância do trabalho coletivo.</p>

<p style="margin-bottom: 25px;">Além do <strong>reconhecimento regional</strong>, o título garante à Universidade São Lucas vagas nas competições estaduais e nacionais, consolidando ainda mais a tradição esportiva da instituição. A torcida estudantil foi peça fundamental, apoiando massivamente a equipe em todas as partidas e celebrando cada conquista.</p>

<p style="margin-bottom: 25px;">Esta vitória no Inter Atlética reforça o <strong>compromisso institucional com o esporte universitário</strong>, promovendo valores como trabalho em equipe, disciplina e desenvolvimento integral dos alunos através da prática esportiva de alto rendimento.</p>`,   
        categoria: ""
    },
    {
        id: 9, 
        titulo: "Grupo de estudo da Universidade Rio Verde se transforma em banda de pagode educativa", 
        autor: "Por Ana Paula Torres – Campinas (SP)",
        autorImagem: "imagem-autores/pagodeautor.png", 
        data: "Publicado em 26/10/2025, 19h30 ", 
        imagem: "imagem-noticias/grupopagode.png",
        legenda: "Alunos do grupo de estudo da Universidade Rio Verde apresentam canções de pagode com temas de matérias durante os intervalos. (Foto: Lucas Martins/Universidade Rio Verde)",
        audio: "audios-noticia/pagodeaudio.mp3",
        legendaAudio:"",
        video: "",
        legendaVideo: "",
        resumo: "Estudantes criam músicas com temas de matérias para descontrair e melhorar o desempenho nas provas.", 
        conteudo: `<p style="margin-bottom: 25px;">Um grupo de estudo da Universidade Rio Verde encontrou uma forma <strong>criativa de unir educação e diversão</strong>: transformar as revisões em músicas de pagode. A iniciativa surgiu no início do semestre e rapidamente conquistou estudantes, que agora utilizam as canções como ferramenta para memorizar conteúdos e aliviar o estresse durante os intervalos.</p>

<p style="margin-bottom: 25px;">O grupo, formado por <strong>cinco alunos do curso de Administração</strong>, incluindo <strong>Tiago Mendes, 21 anos</strong>, e <strong>Camila Rocha, 22 anos</strong>, começou a criar músicas que incorporam fórmulas de matemática, conceitos de economia e temas de gestão. As apresentações acontecem nos intervalos entre as aulas e têm sido recebidas com entusiasmo pelos colegas.</p>

<p style="margin-bottom: 25px;">Segundo Camila, a ideia surgiu para tornar o aprendizado mais leve e prazeroso. <strong>"Percebemos que cantar e dançar ajuda a fixar o conteúdo, e ainda criamos um momento de descontração para todos. É divertido e educativo ao mesmo tempo"</strong>, explicou a estudante, destacando a dupla função do projeto.</p>

<p style="margin-bottom: 25px;">O projeto ganhou <strong>destaque dentro da universidade</strong>, atraindo atenção de professores e alunos de diferentes cursos. Alguns docentes até sugerem temas de matérias para novas músicas, tornando a iniciativa uma forma interativa de reforçar o aprendizado em diversas disciplinas.</p>

<p style="margin-bottom: 25px;">O grupo de estudo da Universidade Rio Verde mostra como <strong>criatividade e educação podem caminhar juntas</strong>, oferecendo aos estudantes uma experiência de aprendizado diferente, divertida e eficaz. A expectativa é que o projeto inspire outras turmas e universidades a adotarem iniciativas semelhantes.</p>`,   
        categoria: ""
    },
    {
        id: 10, 
        titulo: "Estudantes de Engenharia Agronômica da Universidade Verde Campo criam horta experimental no campus", 
        autor: "Por Felipe Carvalho – Campinas (SP)", 
        autorImagem: "imagem-autores/hortaautor.png", 
        data: "Publicado em 27/10/2025, 16h00 ", 
        imagem: "imagem-noticias/horta.png", 
        legenda: "Estudantes de Engenharia Agronômica cuidam da horta experimental da Universidade Verde Campo, monitorando o crescimento das plantas. (Foto: Luana Almeida/Universidade Verde Campo)", 
        audio: "audios-noticia/hortaudio.mp3", 
        legendaAudio: "", 
        video: "", 
        legendaVideo: "", 
        resumo: "Projeto permite testar plantações, condições climáticas e técnicas agrícolas dentro da universidade.", 
        conteudo: `<p style="margin-bottom: 25px;">Alunos do curso de <strong>Engenharia Agronômica da Universidade Verde Campo</strong> implantaram, nesta segunda-feira (27/10/2025), uma <strong>horta experimental no campus</strong>. A iniciativa tem como objetivo proporcionar aprendizado prático sobre cultivo, variações climáticas e manejo de plantas, integrando teoria e prática dentro da formação acadêmica.</p>

<p style="margin-bottom: 25px;">O projeto conta com a participação de estudantes como <strong>Mariana Ribeiro, 21 anos</strong>, e <strong>Pedro Henrique Santos, 22 anos</strong>, que são responsáveis pelo planejamento das áreas de plantio, irrigação e monitoramento das condições do solo e do clima. A horta inclui <strong>diferentes tipos de hortaliças, ervas medicinais e plantas ornamentais</strong>, permitindo que os alunos acompanhem o crescimento e testem técnicas de manejo sustentável.</p>

<p style="margin-bottom: 25px;">Segundo o professor orientador, Antônio Lima, o <strong>laboratório a céu aberto oferece uma oportunidade única de aprendizado</strong>. <strong>"Os alunos conseguem aplicar os conhecimentos adquiridos em sala de aula diretamente na horta, observando como fatores como temperatura, luminosidade e umidade influenciam o desenvolvimento das plantas"</strong>, explicou Antônio.</p>

<p style="margin-bottom: 25px;">O projeto também busca <strong>envolver a comunidade acadêmica</strong>, permitindo que outros cursos e alunos interessados participem das atividades e aprendam sobre <strong>agricultura urbana e sustentabilidade</strong>.</p>

<p style="margin-bottom: 25px;">A horta experimental da Universidade Verde Campo representa um <strong>importante recurso pedagógico</strong> para os estudantes de Engenharia Agronômica, incentivando a prática, a pesquisa e o desenvolvimento de habilidades essenciais para o setor agrícola e sustentável.</p>`, 
        categoria: ""
    },
    {
        id: 11, 
        titulo: "Universidade Internacional do Saber lança programa de intercâmbio para dupla certificação", 
        autor: "Por Laura Mendes – São Paulo (SP)", 
        autorImagem: "imagem-autores/intercambioautor.png", 
        data: "Publicado em 28/10/2025, 14h00 ", 
        imagem: "imagem-noticias/intercambio.png", 
        legenda: "Alunos selecionados para o programa de intercâmbio da Universidade Internacional do Saber posam durante apresentação do projeto. (Foto: Mariana Lima/Universidade Internacional do Saber)", 
        audio: "audios-noticia/intercambioaudio.mp3", 
        legendaAudio: "", 
        video: "", 
        legendaVideo: "", 
        resumo: "Alunos selecionados por meio de concurso de bolsas e desempenho acadêmico poderão estudar em universidades parceiras no exterior.", 
        conteudo: `<p style="margin-bottom: 25px;">A Universidade Internacional do Saber anunciou, nesta terça-feira (28/10/2025), o lançamento de seu <strong>novo programa de intercâmbio para dupla certificação</strong>. A iniciativa permitirá que estudantes cursando graduação obtenham diplomas reconhecidos tanto no Brasil quanto em instituições internacionais, com vagas concedidas através de concurso de bolsas e notas em disciplinas específicas.</p>

<p style="margin-bottom: 25px;">O programa selecionará <strong>alunos com excelente desempenho acadêmico</strong>, considerando notas nas matérias principais e participação em atividades complementares. Entre os primeiros contemplados estão <strong>Carolina Mendes, 21 anos</strong>, e <strong>João Victor Silva, 22 anos</strong>, que demonstraram comprometimento e destaque em suas respectivas áreas.</p>

<p style="margin-bottom: 25px;">Segundo o coordenador do programa, Felipe Tavares, o projeto visa proporcionar <strong>experiência internacional e ampliar o conhecimento acadêmico</strong> dos estudantes. <strong>"Nosso objetivo é oferecer uma oportunidade única para que os alunos estudem em instituições parceiras no exterior e retornem com uma certificação reconhecida internacionalmente, ampliando suas perspectivas profissionais"</strong>, explicou Felipe.</p>

<p style="margin-bottom: 25px;">O programa inclui <strong>cursos ministrados em inglês, acompanhamento acadêmico personalizado e apoio logístico</strong> para os estudantes durante o período no exterior. Além disso, os alunos selecionados receberão <strong>suporte financeiro parcial ou integral</strong>, dependendo do desempenho no concurso de bolsas.</p>

<p style="margin-bottom: 25px;">O novo programa de intercâmbio da Universidade Internacional do Saber reforça o <strong>compromisso da instituição com a mobilidade acadêmica e internacionalização</strong>, formando profissionais capacitados para atuar globalmente. A expectativa é expandir o programa nos próximos anos, beneficiando cada vez mais estudantes.</p>`,
        categoria: ""
    },
    {
        id: 12, 
        titulo: "Universidade Sol Nascente substitui todas as lâmpadas do campus por LEDs", 
        autor: "Por Ricardo Almeida – Porto Alegre (RS)", 
        autorImagem: "imagem-autores/ledautor.png", 
        data: "Publicado em 29/10/2025, 11h00 ", 
        imagem: "imagem-noticias/led.png", 
        legenda: "Técnicos e estudantes da Universidade Sol Nascente participam da instalação de lâmpadas LED no campus. (Foto: Ana Luiza/Universidade Sol Nascente)", 
        audio: "audios-noticia/ledaudio.mp3", 
        legendaAudio: "", 
        video: "", 
        legendaVideo: "", 
        resumo: "Medida melhora a iluminação e reduz em 40% o consumo de energia elétrica no campus.", 
        conteudo: `<p style="margin-bottom: 25px;">A Universidade Sol Nascente concluiu, nesta quarta-feira (29/10/2025), a <strong>substituição de todas as lâmpadas do campus por tecnologia LED</strong>. A iniciativa visa aumentar a eficiência energética, melhorar a iluminação dos espaços acadêmicos e reduzir custos com energia elétrica em cerca de 40%.</p>

<p style="margin-bottom: 25px;">O projeto foi coordenado pelo <strong>engenheiro elétrico da universidade, Marcelo Torres</strong>, e contou com a participação de uma equipe de técnicos e alunos de Engenharia Elétrica. Segundo Marcelo, a atualização das lâmpadas permite <strong>maior luminosidade, menor consumo de energia e menor manutenção</strong>, além de contribuir para práticas de sustentabilidade.</p>

<p style="margin-bottom: 25px;">Entre os beneficiados estão os estudantes do curso de <strong>Arquitetura e Urbanismo</strong>, como <strong>Larissa Mendes, 21 anos</strong>, e <strong>Gabriel Costa, 22 anos</strong>, que destacaram a melhora na iluminação de salas de aula, laboratórios e áreas externas do campus.</p>

<p style="margin-bottom: 25px;">A substituição das lâmpadas também faz parte de um <strong>plano mais amplo da universidade para reduzir a pegada de carbono</strong> e tornar o campus mais sustentável. O investimento incluiu planejamento, instalação e ajustes elétricos para garantir máxima eficiência energética e conforto para alunos e professores.</p>

<p style="margin-bottom: 25px;">Com a adoção das lâmpadas LED, a Universidade Sol Nascente demonstra <strong>compromisso com sustentabilidade, eficiência energética e bem-estar</strong> de sua comunidade acadêmica, tornando o campus mais iluminado, seguro e ecologicamente responsável.</p>`,
        categoria: ""
    },
    {
        id: 13, 
        titulo: "Universidade Digital Elite conquista título em campeonato regional de League of Legends", 
        autor: "Por Mariana Souza – São Paulo (SP)", 
        autorImagem: "imagem-autores/esportsautor.png", 
        data: "Publicado em 31/10/2025, 18h00 ", 
        imagem: "imagem-noticias/esports.png.png", 
        legenda: "Equipe de League of Legends da Universidade Digital Elite comemora a vitória no campeonato regional de e-sports. (Foto: Gabriel Silva/Universidade Digital Elite)", 
        audio: "audios-noticia/esportsaudio.mp3", 
        legendaAudio: "", 
        video: "", 
        legendaVideo: "", 
        resumo: "Equipe universitária se destaca na competição e garante vitória após partidas emocionantes.", 
        conteudo: `<p style="margin-bottom: 25px;">O time de <strong>League of Legends da Universidade Digital Elite</strong> foi campeão do campeonato regional de e-sports, realizado neste sábado (31/10/2025). Com partidas intensas e grande estratégia, a equipe conquistou o título e garantiu <strong>reconhecimento entre universidades da região</strong>.</p>

<p style="margin-bottom: 25px;">A equipe, composta por <strong>cinco jogadores principais</strong>, contou com destaques como <strong>Rafael "Dragão" Lima, 21 anos</strong>, e <strong>Camila "Fênix" Rocha, 22 anos</strong>, que marcaram jogadas decisivas nas semifinais e finais do torneio. A competição reuniu times universitários de diferentes cidades, proporcionando <strong>partidas de alto nível técnico</strong> e momentos de grande emoção para participantes e torcedores.</p>

<p style="margin-bottom: 25px;">Segundo o técnico da equipe, Lucas Martins, a vitória é resultado de <strong>muito treino, estratégia e trabalho em equipe</strong>. <strong>"Nossos jogadores demonstraram dedicação e união em cada partida. Esse título é fruto do esforço coletivo e do comprometimento de todos"</strong>, afirmou Lucas.</p>

<p style="margin-bottom: 25px;">A vitória do campeonato regional também garante à Universidade Digital Elite <strong>participação em competições estaduais e nacionais de e-sports</strong>, além de reforçar a tradição da instituição no cenário universitário de jogos eletrônicos.</p>

<p style="margin-bottom: 25px;">O título conquistado pela Universidade Digital Elite no campeonato de League of Legends <strong>reafirma o crescimento dos e-sports no ambiente acadêmico</strong> e destaca o compromisso da universidade em apoiar atividades extracurriculares que desenvolvem habilidades estratégicas, trabalho em equipe e pensamento crítico nos estudantes.</p>`, 
        categoria: ""
    },
    {
        id: 14, 
        titulo: "Placeholder", 
        autor: "John Doe", 
        autorImagem: "imagem-noticias/placeholder.png", 
        data: "October 12, 2025", 
        imagem: "", 
        legenda: "", 
        audio: "", 
        legendaAudio: "", 
        video: "", 
        legendaVideo: "", 
        resumo: "", 
        conteudo: "", 
        categoria: ""
    },
    {
        id: 15, 
        titulo: "Placeholder", 
        autor: "John Doe", 
        autorImagem: "imagem-noticias/placeholder.png", 
        data: "October 12, 2025", 
        imagem: "", 
        legenda: "", 
        audio: "", 
        legendaAudio: "", 
        video: "", 
        legendaVideo: "", 
        resumo: "", 
        conteudo: "", 
        categoria: ""
    },
    {
        id: 16, 
        titulo: "Placeholder", 
        autor: "John Doe", 
        autorImagem: "imagem-noticias/placeholder.png", 
        data: "October 12, 2025", 
        imagem: "", 
        legenda: "", 
        audio: "", 
        legendaAudio: "", 
        video: "", 
        legendaVideo: "", 
        resumo: "", 
        conteudo: "", 
        categoria: ""
    },
    {
        id: 17, 
        titulo: "Placeholder", 
        autor: "John Doe", 
        autorImagem: "imagem-noticias/placeholder.png", 
        data: "October 12, 2025", 
        imagem: "", 
        legenda: "", 
        audio: "", 
        legendaAudio: "", 
        video: "", 
        legendaVideo: "", 
        resumo: "", 
        conteudo: "", 
        categoria: ""
    },
    {
        id: 18, 
        titulo: "Placeholder", 
        autor: "John Doe", 
        autorImagem: "imagem-noticias/placeholder.png", 
        data: "October 12, 2025", 
        imagem: "", 
        legenda: "", 
        audio: "", 
        legendaAudio: "", 
        video: "", 
        legendaVideo: "", 
        resumo: "", 
        conteudo: "", 
        categoria: ""
    },
    {
        id: 19, 
        titulo: "Placeholder", 
        autor: "John Doe", 
        autorImagem: "imagem-noticias/placeholder.png", 
        data: "October 12, 2025", 
        imagem: "", 
        legenda: "", 
        audio: "", 
        legendaAudio: "", 
        video: "", 
        legendaVideo: "", 
        resumo: "", 
        conteudo: "", 
        categoria: ""
    },
    {
        id: 20, 
        titulo: "Placeholder", 
        autor: "John Doe", 
        autorImagem: "imagem-noticias/placeholder.png", 
        data: "October 12, 2025", 
        imagem: "", 
        legenda: "", 
        audio: "", 
        legendaAudio: "", 
        video: "", 
        legendaVideo: "", 
        resumo: "", 
        conteudo: "", 
        categoria: ""
    },
     {
        id: 21, 
        titulo: "Placeholder", 
        autor: "John Doe", 
        autorImagem: "imagem-noticias/placeholder.png", 
        data: "October 12, 2025", 
        imagem: "", 
        legenda: "", 
        audio: "", 
        legendaAudio: "", 
        video: "", 
        legendaVideo: "", 
        resumo: "", 
        conteudo: "", 
        categoria: ""
    },
]; 



// Identificador da notícia em destaque na página inicial
const noticiaDestaqueId = 1;