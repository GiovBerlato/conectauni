
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
        titulo: "Universidade do Saber realiza campeonato de xadrez para alunos com autismo", 
        autor: "Por Carla Mendes – São Paulo (SP)",
        autorImagem: "imagem-autores/autismoautor.png", 
        data: "22/10/2025, 14h30", 
        imagem: "imagem-noticias/autismo.png",
        legenda: "Participantes do Campeonato de Xadrez Inclusivo da Universidade do Saber durante as partidas, acompanhados por monitores especializados. (Foto: João Silva/Universidade do Saber)",
        audio: "audios-noticia/audioautismo.mp3",
        legendaAudio:"Entrevista com Ana Beatriz Santos, coordenadora do programa de inclusão, explicando a importância do xadrez para alunos com autismo.",
        video: "video-noticia/videoautismo.mp4",
        legendaVideo: "Alunos competem no Campeonato de Xadrez Inclusivo da Universidade do Saber e compartilham suas estratégias com professores e colegas.",
        resumo: "Evento promove inclusão e diversidade, estimulando habilidades cognitivas e sociais dos participantes", 
        conteudo: `A Universidade do Saber realizou, nesta terça-feira (21), o seu primeiro Campeonato de Xadrez Inclusivo, destinado a alunos com autismo. A iniciativa, promovida no campus central em São Paulo, teve como objetivo estimular a concentração, a estratégia e a interação social dos participantes, reforçando o compromisso da instituição com a inclusão e a valorização da diversidade.<br><br>O campeonato contou com a participação de vinte estudantes, acompanhados por monitores especializados em educação inclusiva. Entre os participantes, destacou-se Lucas Andrade, 19 anos, que conquistou o primeiro lugar após vencer partidas desafiadoras.<br><br>De acordo com Ana Beatriz Santos, coordenadora do programa de inclusão da universidade, o evento representa uma oportunidade única de reconhecer talentos e oferecer condições igualitárias para todos os alunos. "O xadrez não é apenas um jogo; é uma ferramenta que estimula habilidades cognitivas, promove paciência e incentiva a interação social, aspectos fundamentais para nossos estudantes com autismo", explicou Ana.<br><br>Além das partidas, o evento contou com palestras curtas sobre estratégias de xadrez e momentos de socialização, nos quais os alunos puderam compartilhar experiências e reflexões sobre o cotidiano acadêmico. A iniciativa recebeu apoio integral da direção da universidade e de professores voluntários de diversos cursos, consolidando a prática como modelo de inclusão no campus.<br><br>Ao término do campeonato, todos os participantes receberam medalhas de participação e certificados de reconhecimento, reforçando o compromisso da Universidade do Saber com a inclusão e a diversidade. A expectativa da instituição é transformar o evento em uma atividade anual, ampliando a participação de alunos de diferentes cursos e incentivando novas práticas inclusivas.`,  
        categoria: ""
    },
    {
        id: 3, 
        titulo: "Universidade Brasileira conquista campeonato internacional de robótica sustentável nos EUA", 
        autor: "Por Felipe Oliveira – São Paulo (SP)",
        autorImagem: "imagem-autores/roboticaautor.png", 
        data: "22/10/2025, 16h00", 
        imagem: "imagem-noticias/robotica.png",
        legenda: "Equipe da Universidade Tecnológica de Inovação celebra a conquista do primeiro lugar no Campeonato Internacional de Robótica Sustentável em Boston, EUA. (Foto: João Pereira/UTI)",
        audio: "audios-noticia/roboticaaudio.mp3",
        legendaAudio:"Áudio: Entrevista com Mariana Costa, líder da equipe, sobre os desafios e aprendizados na competição internacional de robótica sustentável.",
        video: "",
        legendaVideo: "",
        resumo: "Equipe universitária representa o Brasil com projeto inovador e sustentável, saindo campeã da competição internacional", 
        conteudo: `A Universidade Tecnológica de Inovação (UTI) conquistou, na última segunda-feira (20), o primeiro lugar no Campeonato Internacional de Robótica Sustentável, realizado em Boston, Estados Unidos. A equipe brasileira apresentou um robô totalmente funcional e ambientalmente sustentável, destacando-se pela inovação, eficiência energética e design criativo.<br><br>O robô, desenvolvido ao longo de 18 meses por alunos e professores do curso de Engenharia Mecatrônica, foi projetado para executar tarefas complexas utilizando energia limpa, sensores inteligentes e materiais recicláveis. Entre os integrantes da equipe, destaque para Mariana Costa, 22 anos, líder do projeto, e Pedro Almeida, 23 anos, responsável pela programação do robô.<br><br>Segundo o professor orientador Lucas Menezes, o sucesso da equipe é resultado de dedicação, pesquisa e planejamento estratégico. "Nosso objetivo sempre foi mostrar que tecnologia e sustentabilidade podem caminhar juntas. Esse prêmio reforça que é possível criar soluções inovadoras e ecológicas sem perder performance", afirmou.<br><br>Durante a competição, as equipes precisaram superar desafios de navegação autônoma, resolução de problemas e eficiência energética. O robô da UTI não apenas completou todas as tarefas com precisão, mas também apresentou soluções criativas para problemas inesperados, garantindo a vitória brasileira.<br><br>Com a vitória, a Universidade Tecnológica de Inovação confirma seu protagonismo em inovação e sustentabilidade no cenário internacional. A equipe planeja continuar desenvolvendo aprimoramentos para futuras competições e expandir a aplicação do robô em projetos sociais e industriais.`,   
        categoria: "" 
    }
]; 

// Identificador da notícia em destaque na página inicial
const noticiaDestaqueId = 1;