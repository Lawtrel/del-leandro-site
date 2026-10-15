export const relationship = {
  names: "Del & Leandro",
  nickname: "Pretinha",
  firstChatDate: "2026-06-16T19:11:00-03:00",
  firstDate: "2026-07-04T19:00:00-03:00",
  officialDate: "2026-10-04T00:00:00-03:00",
  headline: "Nossa história começou antes do namoro.",
  subheadline:
    "Do primeiro oi às conversas que viraram rotina, do primeiro encontro ao dia em que a gente decidiu chamar isso de namoro. Este é o nosso arquivo vivo.",
};

export const quickDates = [
  {
    label: "primeiro oi no WhatsApp",
    date: "16.06.2026",
    text: '"Olá, Leandro aqui" — e um "Oii boa noite!" que começou muita coisa.',
  },
  {
    label: "primeiro encontro",
    date: "04.07.2026",
    text: "Felicità Café, nervosismo, conversa ao vivo e um casaco que ainda virou assunto depois.",
  },
  {
    label: "oficialmente nós",
    date: "04.10.2026",
    text: "Três meses depois do primeiro encontro, escolhemos a mesma data para começar o namoro.",
  },
];

type StoryEvent = {
  date: string;
  title: string;
  text: string;
  photoId?: string;
};

export const chapters: {
  month: string;
  title: string;
  intro: string;
  events: StoryEvent[];
}[] = [
  {
    month: "Junho",
    title: "Antes de existir um ‘nós’",
    intro:
      "A gente se encontrou no Tinder e levou a conversa para o WhatsApp. No começo eram perguntas simples, cabelo, rotina, música e aquela curiosidade de descobrir quem estava do outro lado.",
    events: [
      {
        date: "16.06.2026",
        title: "O primeiro oi",
        text: "Nossa conversa no WhatsApp começou. Entre as primeiras coisas que eu descobri: você era mãe, tinha um cabelo impossível de ignorar e já me fazia querer continuar a conversa.",
      },
      {
        date: "17.06.2026",
        title: "O primeiro convite",
        text: "Eu te convidei para uma cafeteria. O plano inicial precisou mudar, mas a vontade de te conhecer pessoalmente ficou.",
      },
      {
        date: "20.06.2026",
        title: "A música virou ponte",
        text: "Djavan, Tim Maia, Caetano, Garotin e MPB. Foi uma das primeiras vezes em que ficou muito claro que a gente tinha assunto e sintonia para dividir.",
      },
    ],
  },
  {
    month: "Julho",
    title: "A gente saiu da tela",
    intro:
      "O primeiro encontro mudou a história. Depois dele vieram as conversas sobre clareza, interesse e a certeza de que nenhum dos dois queria tratar aquilo como uma amizade qualquer.",
    events: [
      {
        date: "04.07.2026",
        title: "Nosso primeiro encontro",
        text: "Primeiro encontro, na cafeteria.",
        photoId: "primeiro-encontro-cafeteria",
      },
      {
        date: "06.07.2026",
        title: "O casaco",
        text: "Dois dias depois você ainda estava pensando em como devolver meu casaco. Uma lembrança pequena, mas muito do começo da gente.",
      },
      {
        date: "07.07.2026",
        title: "Clareza desde cedo",
        text: "Você perguntou diretamente se eu queria apenas amizade. Eu respondi que tinha gostado muito do encontro e que meu interesse definitivamente não era sermos só amigos.",
      },
      {
        date: "08.07.2026",
        title: "‘Aí você apareceu’",
        text: "Nós dois falamos sobre o cansaço de recomeçar e confiar novamente. No meio disso, cada um percebeu que o outro tinha aparecido justamente quando pensava em se fechar para relacionamentos.",
      },
      {
        date: "22.07.2026",
        title: "Primeira vez na casa dela",
        text: "Primeira vez na casa dela.",
        photoId: "primeira-vez-na-casa-dela",
      },
    ],
  },
  {
    month: "Agosto",
    title: "Entrando na vida um do outro",
    intro:
      "As conversas ficaram mais pessoais. Família, rotina, Benjamin, vulnerabilidades e a ideia de fazer parte do cotidiano um do outro deixaram de ser teoria.",
    events: [
      {
        date: "06.08.2026",
        title: "Famílias observando",
        text: "Sua família já tinha me conhecido e você contou que gostaram de mim, embora — como você — preferissem observar atitudes. Minha mãe também já perguntava por você.",
      },
      {
        date: "06.08.2026",
        title: "Você já fazia parte da rotina",
        text: "Eu te disse que queria dedicar meu tempo livre a você porque você já fazia parte da minha rotina. Isso aconteceu antes de qualquer título oficial.",
      },
      {
        date: "10.08.2026",
        title: "Viramos modelos",
        text: "Nati e Nane tiraram tantas fotos que você brincou dizendo que a gente tinha virado modelo delas. É uma ótima fase para colocar as primeiras fotos espontâneas de nós dois.",
      },
      {
        date: "12.08.2026",
        title: "Conversa no sofá",
        text: "Vocês conversando no sofá.",
        photoId: "conversa-no-sofa",
      },
      {
        date: "21.08.2026",
        title: "Tio Uê",
        text: "No meio das tentativas de ensinar Benjamin a falar ‘Tio Lê’, apareceu o inesquecível ‘Tio Uê’. Aos poucos eu também começava a entrar nesse pedaço tão importante da sua vida.",
      },
      {
        date: "29.08.2026",
        title: "Aniversário de Benjamin",
        text: "Aniversário de Benjamin, com a irmã dela e o namorado.",
        photoId: "aniversario-de-benjamin",
      },
      {
        date: "30.08.2026",
        title: "A maternidade entrou na conversa",
        text: "Você falou com muita sinceridade sobre o que significa se relacionar com uma mãe e sobre não querer que eu aceitasse algo que não conseguiria viver. Minha resposta foi que a gente faria dar certo do nosso jeito e com calma.",
      },
    ],
  },
  {
    month: "Setembro",
    title: "Escolha, limites e futuro",
    intro:
      "Foi um mês de aprofundar: fé, limites, confiança, família, comunicação, inseguranças e finalmente a conversa sobre transformar o que já existia em namoro.",
    events: [
      {
        date: "02.09.2026",
        title: "Respeitar também é amar",
        text: "Você pediu que eu respeitasse um período ligado à sua fé e seus limites. Eu te disse que esperaria você tomar a iniciativa quando se sentisse confortável. Foi uma lição simples de respeito.",
      },
      {
        date: "05.09.2026",
        title: "Mais perto da minha família",
        text: "Você veio à minha casa, almoçou com a gente e esse período também rendeu várias fotos. A vida fora das mensagens estava ficando cada vez mais misturada.",
      },
      {
        date: "05.09.2026",
        title: "Milkshake no Mr. Shake",
        text: "Milkshake no Mr. Shake.",
        photoId: "milkshake-mr-shake",
      },
      {
        date: "07.09.2026",
        title: "Pastel com amigos",
        text: "Com amigos comendo pastel.",
        photoId: "pastel-com-amigos",
      },
      {
        date: "12.09.2026",
        title: "E se a gente oficializar?",
        text: "Eu lembrei que 4 de julho tinha sido nosso primeiro encontro e perguntei se não era hora de oficializar. Você disse que também queria, gostou do dia 4 e combinamos de fazer isso nessa data.",
      },
      {
        date: "13.09.2026",
        title: "Hambúrguer artesanal",
        text: "Hambúrguer artesanal.",
        photoId: "hamburguer-artesanal",
      },
      {
        date: "16–17.09.2026",
        title: "Vulnerabilidade e apoio",
        text: "Eu abri uma parte difícil da minha cabeça, carreira e inseguranças. Você respondeu que estava ali, que eu podia contar com você e que me apoiaria. É uma memória importante porque parceria também nasce assim.",
      },
      {
        date: "29.09.2026",
        title: "A dama e o cavaleiro",
        text: "Uma conversa sobre elogios antigos virou brincadeira com português formal. Você disse que amava palavras assim e eu prometi aparecer algum dia de social falando bonito para você.",
      },
    ],
  },
  {
    month: "Outubro",
    title: "Oficialmente namorados",
    intro:
      "A história não começou aqui, mas aqui ganhou nome. O namoro veio depois de meses de conversa, convivência, dúvidas, aprendizado e vontade dos dois.",
    events: [
      {
        date: "04.10.2026",
        title: "A gente virou ‘nós’ oficialmente",
        text: "Escolhemos o mesmo dia do mês do nosso primeiro encontro para oficializar o namoro. Sem precisar de uma grande produção: o que importava era a gente.",
      },
      {
        date: "Depois do dia 4",
        title: "Aprender a ser casal",
        text: "Vieram as primeiras conversas como namorados sobre confiança, ciúmes, comunicação, família, Benjamin, carreira e futuro. Não para sermos perfeitos, mas para sermos melhores juntos.",
      },
      {
        date: "10.10.2026",
        title: "Foto de casal",
        text: "Foto de casal.",
        photoId: "foto-de-casal",
      },
    ],
  },
];

export const discoveriesAboutDel = [
  {
    title: "Você sente tudo de verdade",
    text: "Intensa, carinhosa e muito transparente quando algo importa para você.",
  },
  {
    title: "Você é observadora",
    text: "Você presta atenção em comportamentos e confia mais na constância das atitudes do que em promessas bonitas.",
  },
  {
    title: "Música é linguagem",
    text: "MPB, Djavan, Tim Maia, Caetano, Garotin e letras que dão vontade de parar para pensar.",
  },
  {
    title: "The Walking Dead tem lugar reservado",
    text: "Uma das primeiras coisas que descobri foi que você é realmente fã — não do tipo que viu uma vez e esqueceu.",
  },
  {
    title: "Sua fé faz parte de você",
    text: "Cristo, igreja, reflexão e a necessidade de estar com alguém que respeite aquilo em que você acredita.",
  },
  {
    title: "Benjamin não é um detalhe",
    text: "Ele faz parte da sua vida, da sua rotina e de quem você é. Eu não quero ocupar o espaço dele; quero aprender a existir perto de vocês com respeito.",
  },
  {
    title: "Você gosta de palavras bonitas",
    text: "Especialmente quando parecem ter saído de um cavalheiro de cem anos usando roupa social.",
  },
  {
    title: "Seu cabelo é quase personagem",
    text: "Cacheado, cheio, marcante — e assunto desde as nossas primeiras conversas.",
  },
  {
    title: "Respeito e lealdade são inegociáveis",
    text: "Você não quer alguém perfeito; quer alguém coerente, maduro, cuidadoso, fiel e que saiba conversar.",
  },
  {
    title: "Você não quer parar de crescer",
    text: "Ser mãe e namorada não apaga seus próprios sonhos. Quero te ver avançando nos seus objetivos, estudos, trabalho e carreira.",
  },
];

export const discoveriesAboutLeandro = [
  {
    title: "Eu observo antes de falar",
    text: "Sou mais fechado e observador. Comunicação não sempre veio naturalmente, mas estou aprendendo a dividir mais o que acontece dentro de mim.",
  },
  {
    title: "Projetos ocupam minha cabeça",
    text: "Faculdade, pesquisa, tecnologia, carreira e ideias novas fazem parte da minha rotina — e eu quero que a gente cresça profissionalmente lado a lado.",
  },
  {
    title: "Eu demonstro muito fazendo",
    text: "Aparecer, ajudar, resolver, acompanhar e estar disponível costumam ser minhas formas mais espontâneas de demonstrar carinho.",
  },
  {
    title: "Eu como muito",
    text: "Isso já virou assunto suficiente entre nós para merecer ficar registrado oficialmente.",
  },
  {
    title: "Games, academia e computador continuam aqui",
    text: "Mas agora existe alguém que pode sentar do meu lado enquanto eu jogo e conversar com meus amigos sem entender nada do jogo.",
  },
  {
    title: "Eu escolhi abrir espaço novamente",
    text: "Eu tinha passado anos focado em mim. Quando decidi me abrir de novo para um relacionamento, você apareceu.",
  },
];

export const relationshipFoundations = [
  "Conversar antes de deixar incômodos acumularem.",
  "Não usar término, silêncio ou afastamento como forma de pressão.",
  "Respeitar um ‘não’ sem chantagem emocional.",
  "Fidelidade, transparência e atitudes coerentes com as palavras.",
  "Não transformar ciúme em controle da vida, amizades ou carreira do outro.",
  "Benjamin nunca precisa disputar espaço: existe lugar para o filho e para o casal.",
  "Apoiar estudos, trabalho, projetos e crescimento profissional dos dois.",
  "Ter momentos em família e também preservar momentos só nossos.",
  "Nossas decisões pertencem a nós; conselhos podem ajudar, mas terceiros não comandam a relação.",
  "Errar, reconhecer, reparar e aprender — sem esperar perfeição.",
];

export const letters = [
  {
    id: "saudade",
    title: "Quando sentir saudade",
    text: "Se eu pudesse, aparecia aí agora só pra te dar um abraço demorado. Até lá, lembra que eu também penso em você e que sempre existe um próximo encontro esperando a gente.",
  },
  {
    id: "insegura",
    title: "Quando estiver insegura",
    text: "Você não precisa competir com ninguém. Eu escolhi você pela mulher que você é, pelo seu jeito, pelas nossas conversas, pelos seus detalhes e pela vida que eu quero dividir ao seu lado.",
  },
  {
    id: "triste",
    title: "Quando estiver triste",
    text: "Você não precisa estar bem o tempo todo comigo. Pode só existir, respirar e ficar perto. Eu não quero apenas os seus dias leves; quero saber estar presente nos difíceis também.",
  },
  {
    id: "duvida",
    title: "Quando você duvidar",
    text: "Se algum dia você se perguntar se eu ainda escolho você, volte aqui. Eu escolho. Não por obrigação, mas porque quero você na minha vida.",
  },
  {
    id: "orgulho",
    title: "Quando conquistar algo",
    text: "Eu quero comemorar suas conquistas com você. Seu crescimento não ameaça o nosso amor — ele faz parte da vida que eu quero ver você vivendo.",
  },
];

export const carinho = [
  "Você é a mulher mais linda do mundo pra mim — sem categoria nenhuma. ❤️",
  "Eu gosto do seu jeito intenso de sentir as coisas.",
  "A sua presença deixa meus planos mais bonitos.",
  "Eu quero comemorar suas conquistas como se fossem minhas.",
  "Meu lugar favorito ainda pode ser simplesmente ao seu lado.",
  "Eu não quero que nenhum de nós pare de crescer por causa do amor; quero que a gente cresça com ele.",
  "Pretinha, você faz parte do futuro que eu imagino.",
  "Com todo o devido respeito, minha cara dama: este humilde admirador continua rendido à vossa formosura. ♥",
];

export const plans = [
  "Ter mais momentos só nossos, sem pressa.",
  "Apoiar os estudos, carreira e projetos um do outro.",
  "Conhecer lugares novos e criar nossas próprias tradições.",
  "Guardar fotos, músicas e histórias que tenham significado.",
  "Continuar crescendo individualmente sem deixar de crescer como casal.",
  "Conversar quando algo incomodar, sem deixar acumular.",
  "Comemorar cada pequena vitória do outro.",
  "Construir confiança com tempo, constância e atitude.",
];

export const songs = [
  {
    title: "Flor do Medo",
    artist: "Djavan",
    note: "Uma das primeiras músicas que você me disse ser sua preferida.",
  },
  {
    title: "Samurai / Nem um Dia",
    artist: "Djavan",
    note: "As que eu citei quando nossas conversas sobre MPB começaram.",
  },
  {
    title: "Garotin",
    artist: "várias",
    note: "Só Vem, Zero a Cem, Depois da Briga, Pouco a Pouco… música ajudou a gente a descobrir sintonia cedo.",
  },
  {
    title: "Planos",
    artist: "BK’",
    note: "Virou escolha para acompanhar nossas fotos e a ideia de futuro.",
  },
  {
    title: "Veludo",
    artist: "Liniker",
    note: "Intimidade, desejo e a vontade de descobrir a vida a dois.",
  },
  {
    title: "Não Existe Amor em SP",
    artist: "Criolo",
    note: "Uma música que virou conversa sobre fé, vida e o que realmente importa.",
  },
];

export const achievements = [
  {
    who: "Del",
    title: "Os sonhos dela também são nossos motivos para comemorar",
    text: "Use este espaço para registrar trabalho, estudos, projetos, cursos e todas as conquistas que fizerem Del sentir orgulho da própria caminhada.",
  },
  {
    who: "Leandro",
    title: "Crescer sem deixar de viver o amor",
    text: "Faculdade, pesquisa, projetos, carreira e oportunidades continuam fazendo parte da história — agora com alguém para dividir as vitórias e os dias difíceis.",
  },
];
