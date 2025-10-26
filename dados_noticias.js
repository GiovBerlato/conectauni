
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
        conteudo: `Um cachorro caramelo chamado Barnabé, que apareceu recentemente no campus da Universidade Estrela do Saber, se tornou sensação entre os estudantes. Em gesto simbólico de inclusão, os alunos "nomearam" o animal como coordenador do bem-estar emocional da universidade, entregando-lhe até um crachá e uma casinha personalizada para seu conforto.<br><br>O mascote Barnabé conquistou rapidamente a comunidade acadêmica, incluindo alunos como Ana Clara Fonseca, 20 anos, e Rafael Martins, 21 anos, que destacaram a presença do cão como fonte de alegria e alívio do estresse diário.<br><br>Segundo os estudantes, a ideia surgiu para promover momentos de descontração e interação entre os alunos. "Barnabé está sempre presente nos corredores e áreas de convivência, trazendo leveza e carinho para todos. Ele se tornou um verdadeiro coordenador do bem-estar emocional do campus", explicou Ana Clara.<br><br>A universidade apoiou a iniciativa, autorizando a instalação de uma pequena casinha para Barnabé em área segura do campus e fornecendo um crachá simbólico para identificação do mascote. A medida ganhou destaque nas redes sociais da instituição, recebendo elogios da comunidade acadêmica e da imprensa local.<br><br>Barnabé se tornou mais que um mascote: é um símbolo de união, acolhimento e bem-estar no campus da Universidade Estrela do Saber, mostrando como pequenos gestos podem transformar o ambiente universitário em um espaço mais humano e acolhedor.`,   
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
        conteudo: `A Universidade do Saber realizou, nesta terça-feira (21), o seu primeiro Campeonato de Xadrez Inclusivo, destinado a alunos com autismo. A iniciativa, promovida no campus central em São Paulo, teve como objetivo estimular a concentração, a estratégia e a interação social dos participantes, reforçando o compromisso da instituição com a inclusão e a valorização da diversidade.<br><br>O campeonato contou com a participação de vinte estudantes, acompanhados por monitores especializados em educação inclusiva. Entre os participantes, destacou-se Lucas Andrade, 19 anos, que conquistou o primeiro lugar após vencer partidas desafiadoras.<br><br>De acordo com Ana Beatriz Santos, coordenadora do programa de inclusão da universidade, o evento representa uma oportunidade única de reconhecer talentos e oferecer condições igualitárias para todos os alunos. "O xadrez não é apenas um jogo; é uma ferramenta que estimula habilidades cognitivas, promove paciência e incentiva a interação social, aspectos fundamentais para nossos estudantes com autismo", explicou Ana.<br><br>Além das partidas, o evento contou com palestras curtas sobre estratégias de xadrez e momentos de socialização, nos quais os alunos puderam compartilhar experiências e reflexões sobre o cotidiano acadêmico. A iniciativa recebeu apoio integral da direção da universidade e de professores voluntários de diversos cursos, consolidando a prática como modelo de inclusão no campus.<br><br>Ao término do campeonato, todos os participantes receberam medalhas de participação e certificados de reconhecimento, reforçando o compromisso da Universidade do Saber com a inclusão e a diversidade. A expectativa da instituição é transformar o evento em uma atividade anual, ampliando a participação de alunos de diferentes cursos e incentivando novas práticas inclusivas.`,  
        categoria: ""
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
        conteudo: `A Universidade Tecnológica de Inovação (UTI) conquistou, na última segunda-feira (20), o primeiro lugar no Campeonato Internacional de Robótica Sustentável, realizado em Boston, Estados Unidos. A equipe brasileira apresentou um robô totalmente funcional e ambientalmente sustentável, destacando-se pela inovação, eficiência energética e design criativo.<br><br>O robô, desenvolvido ao longo de 18 meses por alunos e professores do curso de Engenharia Mecatrônica, foi projetado para executar tarefas complexas utilizando energia limpa, sensores inteligentes e materiais recicláveis. Entre os integrantes da equipe, destaque para Mariana Costa, 22 anos, líder do projeto, e Pedro Almeida, 23 anos, responsável pela programação do robô.<br><br>Segundo o professor orientador Lucas Menezes, o sucesso da equipe é resultado de dedicação, pesquisa e planejamento estratégico. "Nosso objetivo sempre foi mostrar que tecnologia e sustentabilidade podem caminhar juntas. Esse prêmio reforça que é possível criar soluções inovadoras e ecológicas sem perder performance", afirmou.<br><br>Durante a competição, as equipes precisaram superar desafios de navegação autônoma, resolução de problemas e eficiência energética. O robô da UTI não apenas completou todas as tarefas com precisão, mas também apresentou soluções criativas para problemas inesperados, garantindo a vitória brasileira.<br><br>Com a vitória, a Universidade Tecnológica de Inovação confirma seu protagonismo em inovação e sustentabilidade no cenário internacional. A equipe planeja continuar desenvolvendo aprimoramentos para futuras competições e expandir a aplicação do robô em projetos sociais e industriais.`,   
        categoria: "" 
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
        conteudo: `A Universidade Horizonte do Saber realizou, neste domingo (20), seu concurso anual de bolsas, destinado a selecionar novos alunos para ingresso no próximo semestre. A avaliação, realizada das 8h às 12h, contou com diferentes modalidades de questões e proporcionou oportunidades de bolsas integrais e parciais.<br><br>Entre os participantes, destacaram-se Ana Clara Freitas, 18 anos, e Gustavo Henrique Lopes, 19 anos, que demonstraram grande desempenho durante a prova. O exame, aplicado em unidades presenciais da universidade em várias cidades do país, avaliou conhecimentos em diversas áreas, incluindo Língua Portuguesa, Matemática, Ciências e Atualidades.<br><br>Segundo o coordenador do concurso, Marcelo Tavares, a prova foi cuidadosamente elaborada para identificar candidatos com potencial acadêmico e comprometimento com os estudos. "Nosso objetivo é oferecer oportunidades para estudantes que se destacam pelo esforço e dedicação, garantindo bolsas de até 100% para os melhores desempenhos", explicou Marcelo.<br><br>O concurso contou com diferentes níveis de bolsas, variando de 25% a 100%, de acordo com o resultado obtido por cada candidato. A divulgação dos aprovados está prevista para o dia 28 de outubro, com matrículas previstas ainda este mês.<br><br>A universidade também disponibilizou materiais de estudo online, garantindo acesso equitativo e ajudando os candidatos a se prepararem da melhor forma possível.<br><br>O concurso de bolsas da Universidade Horizonte do Saber reforça o compromisso da instituição com a democratização do ensino superior e com a formação de novos talentos. A expectativa é que o programa continue crescendo nos próximos anos, beneficiando cada vez mais estudantes em todo o país.`,   
        categoria: ""
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
        conteudo: `A Universidade Nova Visão inaugurou, nesta sexta-feira (18/10/2025), um laboratório especialmente desenvolvido para alunos com deficiência visual. O espaço conta com tecnologias adaptadas, ferramentas digitais e recursos de acessibilidade que permitem maior autonomia e participação dos estudantes em atividades acadêmicas.<br><br>O laboratório, localizado no campus central em Porto Alegre, oferece recursos como softwares de leitura em braille, impressoras 3D para materiais táteis, dispositivos de audiodescrição e orientação sonora, além de mesas e equipamentos adaptados. Entre os primeiros usuários, destacam-se Mariana Lima, 20 anos, aluna de Psicologia, e Rafael Souza, 22 anos, estudante de Engenharia, que elogiaram a iniciativa.<br><br>Segundo a coordenadora do projeto de inclusão, Patrícia Mendes, o laboratório foi planejado para atender diferentes necessidades e garantir que todos os alunos possam acessar conteúdos e participar de experimentos práticos. "Nosso objetivo é oferecer condições iguais de aprendizado e promover a inclusão de forma concreta e eficaz", explicou Patrícia.<br><br>O laboratório também funcionará como centro de pesquisa em acessibilidade, permitindo que professores e estudantes desenvolvam novas tecnologias assistivas, além de capacitar monitores e docentes para o atendimento personalizado.<br><br>A inauguração do laboratório reforça o compromisso da Universidade Nova Visão com a inclusão e a diversidade, proporcionando oportunidades de aprendizado para alunos com deficiência visual. A expectativa é expandir os recursos do laboratório e torná-lo referência nacional em tecnologia assistiva para educação superior.`,   
        categoria: ""
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
        conteudo: `A Universidade Cidade Nova promoveu, nesta terça-feira (21/10/2025), sua tradicional Feira de Projetos Acadêmicos, reunindo estudantes de diferentes cursos para apresentar os trabalhos desenvolvidos durante o semestre. O evento, realizado no campus central em Recife, teve como objetivo incentivar a pesquisa, a inovação e a interação entre alunos, professores e visitantes.<br><br>Durante a feira, foram apresentados projetos nas áreas de Engenharia, Biotecnologia, Ciências Sociais, Artes e Tecnologia da Informação. Entre os destaques, estão o protótipo de uma casa sustentável desenvolvido por Gabriela Souza, 21 anos, aluna de Engenharia Civil, e um aplicativo de acessibilidade para transporte público criado por Lucas Ribeiro, 22 anos, estudante de Ciência da Computação.<br><br>Segundo a coordenadora da feira, Helena Costa, o evento permite que os alunos compartilhem conhecimento e desenvolvem habilidades práticas que complementam a formação acadêmica. "É uma oportunidade de mostrar o que os estudantes conquistaram ao longo do semestre, promovendo criatividade, inovação e integração entre diferentes áreas", explicou Helena.<br><br>O evento contou ainda com apresentações de pôsteres, demonstrações práticas e sessões de perguntas e respostas com professores e especialistas convidados, estimulando a interação e o aprendizado coletivo.<br><br>A Feira de Projetos Acadêmicos da Universidade Cidade Nova reforça o compromisso da instituição com a pesquisa, a inovação e a formação integral dos alunos. A expectativa é que a iniciativa continue crescendo e se torne referência regional em incentivo à ciência e à criatividade estudantil.`,  
        categoria: ""
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
        conteudo: `A Universidade do Vale Real realizou, na noite desta quinta-feira (23/10/2025), a cerimônia de formatura da turma de Engenharia. Durante o evento, um apagão inesperado atingiu o campus, mas a equipe técnica acionou os geradores de energia, garantindo que a festa prosseguisse sem maiores transtornos.<br><br>A cerimônia contou com a presença de 120 formandos, entre eles Sofia Almeida, 23 anos, e Bruno Castro, 24 anos, que celebraram a conclusão de seus cursos junto a familiares, amigos e professores. O evento, realizado no auditório principal do campus, incluiu discursos, entrega de diplomas, apresentações culturais e momentos de confraternização.<br><br>Segundo o coordenador da formatura, Ricardo Fonseca, a rápida ação da equipe técnica foi essencial para manter a normalidade do evento. "Houve uma queda de energia inesperada, mas nossos geradores entraram em funcionamento imediatamente, permitindo que a cerimônia continuasse sem interrupções. Foi um momento de muito alívio e alegria para todos", afirmou Ricardo.<br><br>Apesar do susto, a celebração manteve seu clima festivo, com música, iluminação adequada e protocolos de segurança, garantindo que os formandos pudessem comemorar a conquista de forma segura e memorável.<br><br>A formatura da turma de Engenharia da Universidade do Vale Real reforçou o comprometimento da instituição em proporcionar experiências memoráveis para seus alunos, mesmo diante de imprevistos. A cerimônia terminou com sucesso, celebrando a dedicação e o esforço dos formandos ao longo do curso.`,   
        categoria: ""
    }
]; 

// Identificador da notícia em destaque na página inicial
const noticiaDestaqueId = 1;