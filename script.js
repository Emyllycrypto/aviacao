// Novas Questões: ESS (Emergência, Segurança e Sobrevivência), RPA (Humanos), PSS (Psicotrópicos/Saúde) e CGA (Conhecimentos Gerais)
const Questions = [
    // --- ESS (Emergência, Segurança e Sobrevivência) - 13 Questões ---
    { 
        subject: "ESS", 
        question: "Em uma situação de sobrevivência na selva, qual deve ser a prioridade imediata logo após prestar os primeiros socorros?", 
        options: ["Procurar alimentos imediatamente", "Sinalizar e construir ou buscar um abrigo", "Caminhar sem rumo procurando uma cidade", "Acender uma fogueira gigante"], 
        correct: 1, 
        hint: "A prioridade após socorrer os feridos é a proteção contra o clima e manter-se visível às equipes de resgate." 
    },
    { 
        subject: "ESS", 
        question: "Qual o tipo de extintor de incêndio mais recomendado para combater fogos na classe C (equipamentos elétricos energizados)?", 
        options: ["Água pressurizada", "Espuma mecânica", "Dióxido de Carbono (CO2) ou Pó Químico", "Sólidos inflamáveis"], 
        correct: 2, 
        hint: "Água conduz eletricidade e pode causar choques! Use extintores que abafem sem conduzir corrente." 
    },
    { 
        subject: "ESS", 
        question: "Na sobrevivência no mar, o consumo de água do mar para hidratação é:", 
        options: ["Totalmente recomendado em pequenas doses", "Altamente prejudicial, pois acelera a desidratação corporal", "Permitido se misturado com suco em pó", "Indicado apenas após o terceiro dia"], 
        correct: 1, 
        hint: "O sal exige mais água do corpo para ser filtrado pelos rins, acelerando severamente a desidratação." 
    },
    { 
        subject: "ESS", 
        question: "Durante uma evacuação de emergência em terra (ditching/evacuação), qual o tempo máximo regulamentar recomendado para desocupar a aeronave?", 
        options: ["90 segundos", "180 segundos", "5 minutos", "60 segundos"], 
        correct: 0, 
        hint: "O padrão internacional exige que a evacuação ocorra em no máximo 1 minuto e meio (90s)." 
    },
    { 
        subject: "ESS", 
        question: "Qual é o apito ou sinalizador acoplado ao colete salva-vidas utilizado para?", 
        options: ["Sinalização sonora e visual em resgates aquáticos", "Enfeite obrigatório da farda", "Medir a profundidade da água", "Chamar a atenção de tubarões"], 
        correct: 0, 
        hint: "Servem para emitir sinais de localização para os socorristas." 
    },
    { 
        subject: "ESS", 
        question: "Em caso de despressurização rápida da cabine, a primeira atitude do comissário deve ser:", 
        options: ["Pegar o extintor de incêndio", "Colocar a máscara de oxigênio mais próxima imediatamente", "Ajudar os passageiros primeiro", "Ir até a cabine de comando"], 
        correct: 1, 
        hint: "Regra básica de segurança: coloque sua máscara primeiro para garantir sua própria consciência antes de ajudar outros." 
    },
    { 
        subject: "ESS", 
        question: "Na sobrevivência na selva, qual é a principal fonte para obtenção de água potável com segurança?", 
        options: ["Água estagnada em pântanos sem ferver", "Chuva, orvalho, cipós adequados ou água fervida/tratada", "Água de poças barrentas sem filtragem", "Líquidos de plantas desconhecidas"], 
        correct: 1, 
        hint: "Água da chuva e de cipós adequados são opções puras e seguras em ambiente selvagem." 
    },
    { 
        subject: "ESS", 
        question: "O fogo de Classe A envolve materiais combustíveis sólidos, tais como:", 
        options: ["Líquidos inflamáveis e tintas", "Madeira, papel, tecidos e plásticos", "Equipamentos elétricos sob tensão", "Metais pirofóricos como magnésio"], 
        correct: 1, 
        hint: "A classe 'A' lembra materiais sólidos que deixam 'Cinzas' ou resíduos." 
    },
    { 
        subject: "ESS", 
        question: "Em um pouso de emergência na água (Ditching), os coletes salva-vidas dos passageiros devem ser inflados:", 
        options: ["Dentro da aeronave antes de sair", "Apenas no momento em que estiver saindo da aeronave/na porta", "Na fila da poltrona", "Apenas quando a equipe de resgate chegar"], 
        correct: 1, 
        hint: "Se inflar dentro do avião, o colete pode prender o passageiro ou rasgar na saída." 
    },
    { 
        subject: "ESS", 
        question: "Qual é o meio primário de combate ao fogo de pequenas proporções no lixo do lavatório da aeronave?", 
        options: ["Extintor fixo de Halon acionado automaticamente por temperatura", "Jogar mantas térmicas", "Abrir a porta e soprar", "Usar garrafas de refrigerante"], 
        correct: 0, 
        hint: "Os lixeiros dos lavatórios possuem extintores automáticos acionados pelo calor excessivo." 
    },
    { 
        subject: "ESS", 
        question: "Em caso de evacuação com fumaça na cabine, a instrução correta aos passageiros é:", 
        options: ["Andar ereto correndo para a saída", "Baixar-se (curvar-se) e seguir as luzes de emergência no piso", "Tentar abrir as janelas de emergência do meio", "Ficar parado aguardando o fogo apagar"], 
        correct: 1, 
        hint: "A fumaça sobe; o ar mais limpo fica próximo ao assoalho." 
    },
    { 
        subject: "ESS", 
        question: "Qual artigo do Kit de Sobrevivência é fundamental para sinalização noturna de emergência?", 
        options: ["Espelho de sinalização", "Foguete/Sinalizador pirotécnico (ou lanterna)", "Bússola magnética", "Ancoradouro de borracha"], 
        correct: 1, 
        hint: "Pirotécnicos ou fontes de luz intensa são visíveis à noite a grandes distâncias." 
    },
    { 
        subject: "ESS", 
        question: "O PBE (Protective Breathing Equipment) ou Máscara Antifumaça tem como função principal proteger o tripulante contra:", 
        options: ["Baixa pressão em voos altos", "Gases tóxicos, fumaça e falta de oxigênio durante combate ao fogo", "Frio intenso na altitude de cruzeiro", "Perda de audição por ruídos de motores"], 
        correct: 1, 
        hint: "Utilizado pelos comissários para combater focos de incêndio com fumaça densa." 
    },

    // --- RPA (Relações Interpessoais e Fatores Humanos no CRM) - 12 Questões ---
    { 
        subject: "RPA", 
        question: "O conceito de CRM (Corporate Resource Management / Crew Resource Management) na aviação visa principalmente:", 
        options: ["Reduzir custos com combustível", "Maximizar o uso eficiente de todos os recursos disponíveis para a segurança do voo", "Acelerar o tempo de embarque dos passageiros", "Substituir a autoridade do Comandante"], 
        correct: 1, 
        hint: "Foca no gerenciamento de recursos humanos e materiais para promover um voo seguro." 
    },
    { 
        subject: "RPA", 
        question: "A Consciência Situacional pode ser definida como:", 
        options: ["A capacidade de memorizar todos os procedimentos do manual", "A percepção correta do que está acontecendo ao redor da aeronave e a projeção do futuro próximo", "O conhecimento exclusivo de meteorologia", "A aptidão para pilotar em condições de tempestade"], 
        correct: 1, 
        hint: "Saber onde você está, o que está acontecendo agora e o que pode acontecer a seguir." 
    },
    { 
        subject: "RPA", 
        question: "Em uma comunicação eficaz entre a equipe de bordo, a técnica de 'Readback' (repetição) serve para:", 
        options: ["Testar o volume dos alto-falantes", "Garantir que a mensagem foi recebida e compreendida corretamente", "Demonstrar autoridade na cabine", "Apressar as respostas do controle"], 
        correct: 1, 
        hint: "Repetir o que foi dito garante que nenhuma informação importante foi mal interpretada." 
    },
    { 
        subject: "RPA", 
        question: "O erro humano na aviação deve ser tratado pelas empresas aéreas prioritariamente através de uma abordagem:", 
        options: ["Punitiva e com demissões imediatas", "Sistêmica, focando na prevenção e no aprendizado (Cultura Justa)", "Apenas com multas financeiras aos tripulantes", "Ignorando os erros leves"], 
        correct: 1, 
        hint: "A Cultura Justa busca entender as causas do erro para evitar que aconteçam novamente." 
    },
    { 
        subject: "RPA", 
        question: "A barreira de comunicação gerada por diferenças culturais ou ruído excessivo é chamada de:", 
        options: ["Ruído ou Interferência na comunicação", "Sinergia de equipe", "Comunicação assertiva", "Feedback imediato"], 
        correct: 0, 
        hint: "Tudo o que atrapalha ou distorce a transmissão e recepção da mensagem." 
    },
    { 
        subject: "RPA", 
        question: "Trabalho em equipe com 'Sinergia' significa que:", 
        options: ["O resultado do esforço conjunto é superior à soma dos esforços individuais", "Cada um deve trabalhar sozinho sem interferir no colega", "Apenas o Comandante toma decisões sem ouvir a equipe", "O voo é realizado sem planejamento prévio"], 
        correct: 0, 
        hint: "1 + 1 é maior que 2: o grupo trabalhando junto produz muito mais e melhor." 
    },
    { 
        subject: "RPA", 
        question: "O conceito de 'Sterile Cockpit' (Cabine Estéril) proíbe conversas não essenciais na cabine de comando abaixo de qual altitude?", 
        options: ["5.000 pés", "10.000 pés", "18.000 pés", "20.000 pés"], 
        correct: 1, 
        hint: "Abaixo de 10.000 pés o foco é total nas fases críticas do voo (pouso, decolagem e subida)." 
    },
    { 
        subject: "RPA", 
        question: "Qual destas atitudes demonstra comportamentos de Assertividade adequados na aviação?", 
        options: ["Expressar preocupações de segurança com clareza e respeito sem ser agressivo ou omisso", "Ficar calado diante de uma falha grave do Comandante por medo", "Gritar com a equipe quando algo dá errado", "Ignorar as ordens do plano de voo"], 
        correct: 0, 
        hint: "Assertividade é se posicionar com firmeza, clareza e respeito pela segurança do voo." 
    },
    { 
        subject: "RPA", 
        question: "A complacência na aviação geralmente ocorre quando:", 
        options: ["Um tripulante experiente fica excessivamente confiante e relaxa na checagem dos itens de segurança", "O tripulante é novato e está muito estressado", "Há uma emergência grave na aeronave", "O voo está sendo realizado sob mau tempo"], 
        correct: 0, 
        hint: "A rotina e a falsa sensação de segurança levam a pessoa a 'baixar a guarda'." 
    },
    { 
        subject: "RPA", 
        question: "A fadiga humana no ambiente aeronáutico pode acarretar:", 
        options: ["Aumento da atenção e dos reflexos", "Redução do tempo de reação, erros de julgamento e perda da consciência situacional", "Melhora no humor da tripulação", "Aumento da precisão na leitura de instrumentos"], 
        correct: 1, 
        hint: "O cansaço reduz a capacidade cognitiva e desacelera as respostas do cérebro." 
    },
    { 
        subject: "RPA", 
        question: "O Briefing pré-voo entre a tripulação serve para:", 
        options: ["Apenas cumprimentar os colegas de trabalho", "Alinhar procedimentos, repassar regras de segurança e promover a integração do time", "Decidir quem vai almoçar primeiro", "Escolher as músicas do voo"], 
        correct: 1, 
        hint: "Momento crucial de planejamento de equipe antes de ligar os motores." 
    },
    { 
        subject: "RPA", 
        question: "Como um comissário deve lidar com um passageiro indisciplinado que recusa cumprir normas de segurança?", 
        options: ["Usar de violência física imediata", "Manter a calma, agir com firmeza profissional e avisar o Chefe de Cabine/Comandante", "Devolver as ofensas na mesma moeda", "Ignorar o passageiro e deixar sem cinto"], 
        correct: 1, 
        hint: "Manter o controle emocional e seguir a cadeia de comando da aeronave." 
    },

    // --- PSS (Primeiros Socorros, Saúde e Psicotrópicos) - 12 Questões ---
    { 
        subject: "PSS", 
        question: "Qual é a frequência de compressões por minuto recomendada ao realizar a Reanimação Cardiopulmonar (RCP) em adultos?", 
        options: ["30 a 50 compressões/min", "100 a 120 compressões/min", "60 a 80 compressões/min", "150 a 200 compressões/min"], 
        correct: 1, 
        hint: "O ritmo ideal é forte e rápido, entre 100 e 120 batidas por minuto (ritmo da música 'Stayin' Alive')." 
    },
    { 
        subject: "PSS", 
        question: "A Hipóxia é uma condição médica grave causada por:", 
        options: ["Excesso de oxigênio nos tecidos do corpo", "Deficiência de oxigênio nos tecidos orgânicos", "Aumento drástico da pressão sanguínea", "Excesso de açúcar no sangue"], 
        correct: 1, 
        hint: "O prefixo 'Hipo' indica redução/falta e 'oxia' refere-se ao Oxigênio." 
    },
    { 
        subject: "PSS", 
        question: "O fenômeno do 'Barotrauma' auditivo durante as descidas da aeronave ocorre devido a:", 
        options: ["Diferença entre a pressão do ar do meio externo e a pressão interna do ouvido médio", "Infecção viral súbita", "Ingestão de alimentos gordurosos", "Exposição a ruídos altos dos motores"], 
        correct: 0, 
        hint: "Causado pela variação de pressão atmosférica na rápida variação de altitude." 
    },
    { 
        subject: "PSS", 
        question: "Para conter uma hemorragia externa abundante em um membro, a primeira conduta de primeiros socorros é:", 
        options: ["Aplicar garrote de imediato sem tentar mais nada", "Realizar compressão direta sobre o ferimento com pano limpo ou gaze", "Lavar o ferimento com água quente e sabão", "Passar pomadas anestésicas"], 
        correct: 1, 
        hint: "Comprimir o local afetado com firmeza é a medida inicial mais segura para estancar o sangue." 
    },
    { 
        subject: "PSS", 
        question: "Qual destas atitudes NÃO deve ser tomada ao prestar socorro a uma pessoa em crise convulsiva?", 
        options: ["Proteger a cabeça do indivíduo contra impactos", "Colocar a pessoa de lado após as contrações (posição lateral de segurança)", "Colocar objetos ou a mão dentro da boca da pessoa para segurar a língua", "Afastar objetos pontiagudos ao redor"], 
        correct: 2, 
        hint: "Nunca introduza nada na boca de quem está tendo uma convulsão!" 
    },
    { 
        subject: "PSS", 
        question: "Substâncias psicotrópicas depressoras do Sistema Nervoso Central (como álcool ou sedativos) provocam:", 
        options: ["Aumento da agilidade e dos reflexos", "Lentidão nas funções cerebrais, sonolência e redução dos reflexos", "Aumento da percepção visual noturna", "Alucinações coloridas e euforia constante"], 
        correct: 1, 
        hint: "Substâncias 'depressoras' desaceleram a atividade e as respostas do cérebro." 
    },
    { 
        subject: "PSS", 
        question: "A Manobra de Heimlich é um procedimento de emergência indicado para casos de:", 
        options: ["Parada cardiorrespiratória", "Obstrução grave das vias aéreas por corpo estranho (Engasgo)", "Queimaduras de 3º grau", "Fraturas expostas nas pernas"], 
        correct: 1, 
        hint: "Utilizada para expelir objetos ou alimentos entalados na garganta." 
    },
    { 
        subject: "PSS", 
        question: "Tripulantes de voo são proibidos de exercer suas funções sob efeito de bebidas alcoólicas. Qual o tempo mínimo de jejum alcoólico antes do voo segundo os regulamentos operacionais?", 
        options: ["4 horas", "8 a 12 horas (conforme norma regulamentar/RBAC)", "24 horas obrigatoriamente", "1 hora"], 
        correct: 1, 
        hint: "O regulamento exige um intervalo mínimo estrito (geralmente de no mínimo 8 a 12h) sem álcool antes do serviço." 
    },
    { 
        subject: "PSS", 
        question: "Uma pessoa apresentando palidez, suor frio, tontura e pulso fraco pode estar entrando em estado de:", 
        options: ["Hipertensão aguda", "Choque (Choque circulatório/hipovolêmico)", "Hipertermia severa", "Dengue leve"], 
        correct: 1, 
        hint: "O estado de choque causa queda de oxigenação e perfusão de sangue nos órgãos." 
    },
    { 
        subject: "PSS", 
        question: "O DEA (Desfibrilador Externo Automático) é um equipamento utilizado para tratar pacientes em:", 
        options: ["Crise de ansiedade leve", "Parada Cardíaca por ritmos chocáveis (como Fibrilação Ventricular)", "Asma e falta de ar moderada", "Desmaios passageiros por queda de pressão"], 
        correct: 1, 
        hint: "O DEA analisa os batimentos do coração e aplica choques elétricos em paradas cardíacas." 
    },
    { 
        subject: "PSS", 
        question: "Em caso de queimadura de 1º ou 2º grau sem rompimento de bolhas, qual a conduta correta de primeiros socorros?", 
        options: ["Passar manteiga ou pasta de dente no local", "Resfriar a área afetada com água corrente limpa e em temperatura ambiente", "Furar todas as bolhas IMEDIATAMENTE", "Colocar gelo direto sobre a pele queimada"], 
        correct: 1, 
        hint: "Lavar com água corrente limpa ajuda a resfriar o tecido sem agredir a pele." 
    },
    { 
        subject: "PSS", 
        question: "A aeroembolia (ou doença de descompressão) ocorre quando há formação de bolhas de qual gás no sangue devido à despressurização?", 
        options: ["Oxigênio", "Nitrogênio", "Dióxido de Carbono", "Hélio"], 
        correct: 1, 
        hint: "O gás Nitrogênio dissolvido no sangue forma bolhas quando a pressão cai bruscamente." 
    },

    // --- CGA (Conhecimentos Gerais de Aeronaves) - 13 Questões ---
    { 
        subject: "CGA", 
        question: "A parte da estrutura da aeronave composta pelas asas é chamada de:", 
        options: ["Empenagem", "Grupamento Moto-Propulsor", "Sustentador / Aerofólio Principal", "Fuselagem"], 
        correct: 2, 
        hint: "As asas constituem o principal elemento aerodinâmico encarregado da sustentação do voo." 
    },
    { 
        subject: "CGA", 
        question: "O corpo principal da aeronave, onde se acomodam os passageiros, tripulação e cargas, chama-se:", 
        options: ["Empenagem", "Fuselagem", "Extradorso", "Nacelle"], 
        correct: 1, 
        hint: "É o 'tubo' central do avião que conecta as asas e o trem de pouso." 
    },
    { 
        subject: "CGA", 
        question: "Os tanques de combustível principais da maioria dos jatos comerciais modernos ficam localizados:", 
        options: ["No nariz da aeronave", "Nas asas", "No teto da cabine de passageiros", "Na empenagem vertical"], 
        correct: 1, 
        hint: "Aproveita-se o espaço interno das estruturas das asas para distribuir o peso do combustível." 
    },
    { 
        subject: "CGA", 
        question: "A APU (Auxiliary Power Unit / Unidade Auxiliar de Partida) de um avião comercial geralmente fica instalada:", 
        options: ["No compartimento de carga dianteiro", "Na cauda (cone de cauda) da aeronave", "Embaixo do assento do Comandante", "Dentro do motor número 1"], 
        correct: 1, 
        hint: "Fica localizada na parte bem traseira da aeronave para fornecer energia e ar com o avião em solo." 
    },
    { 
        subject: "CGA", 
        question: "Qual superfície de comando primária é responsável por fazer o avião realizar o movimento de Arfagem (subir/descer o nariz)?", 
        options: ["Leme de direção", "Profundor (Leme de Profundidade)", "Ailerons", "Flaps"], 
        correct: 1, 
        hint: "Localizado no estabilizador horizontal da cauda para empurrar ou puxar o nariz para cima/baixo." 
    },
    { 
        subject: "CGA", 
        question: "O trem de pouso do tipo 'Triciclo' possui qual configuração de rodas?", 
        options: ["Duas rodas na cauda e uma no nariz", "Uma roda ou conjunto no nariz e conjuntos principais sob as asas/fuselagem", "Rodas apenas nas pontas das asas", "Três rodas exatamente alinhadas no meio do avião"], 
        correct: 1, 
        hint: "A maioria dos aviões modernos usa rodas no nariz e o conjunto principal no centro de gravidade." 
    },
    { 
        subject: "CGA", 
        question: "Os aerofólios conhecidos como Flaps e Slats são considerados superfícies de comando:", 
        options: ["Primárias", "Secundárias ou Dispositivos Hipersustentadores", "De emergência apenas", "Para manobra de guinada"], 
        correct: 1, 
        hint: "Servem para aumentar a sustentação da asa em velocidades baixas (como no pouso e decolagem)." 
    },
    { 
        subject: "CGA", 
        question: "Motores a reação do tipo 'Turbofan' utilizam qual tipo de combustível na aviação comercial?", 
        options: ["Gasolina de Aviação (AVGAS)", "Querosene de Aviação (QAV / Jet-A1)", "Álcool anidro", "Óleo Diesel comum"], 
        correct: 1, 
        hint: "Turbinas e jatos comerciais utilizam Querosene de Aviação (QAV)." 
    },
    { 
        subject: "CGA", 
        question: "A empenagem de uma aeronave é a estrutura localizada na parte traseira composta por:", 
        options: ["Asas e motores", "Estabilizador Vertical e Estabilizador Horizontal", "Trem de pouso e porão", "Biruta e pito"], 
        correct: 1, 
        hint: "Forma o 'rabo' da aeronave, garantindo a estabilidade do voo." 
    },
    { 
        subject: "CGA", 
        question: "Os freios aerodinâmicos localizados na parte superior das asas, usados para destruir a sustentação no pouso, chamam-se:", 
        options: ["Spoilers (Speedbrakes)", "Ailerons", "Tabs", "Compensadores"], 
        correct: 0, 
        hint: "A palavra em inglês vem de 'spoil' (estragar/destruir a sustentação do ar sobre a asa)." 
    },
    { 
        subject: "CGA", 
        question: "A pressurização da cabine é mantida durante o voo de cruzeiro utilizando ar extraído de onde?", 
        options: ["De garrafas de ar comprimido no porão", "Do compressor dos próprios motores ou da APU", "Das janelas dos pilotos", "Do movimento das hélices"], 
        correct: 1, 
        hint: "O ar aquecido e pressurizado é sangrado das etapas de compressão do motor para a cabine." 
    },
    { 
        subject: "CGA", 
        question: "O instrumento que capta a pressão total do ar para indicar a velocidade da aeronave é o:", 
        options: ["Tubo de Pitot", "Barômetro", "Termômetro de bordo", "Giroscópio"], 
        correct: 0, 
        hint: "Pequeno tubo montado na parte externa da fuselagem para medir a pressão do vento relativo." 
    },
    { 
        subject: "CGA", 
        question: "Em uma aeronave com motores a pistão (pequeno porte), qual combustível é utilizado predominantemente?", 
        options: ["Querosene de Aviação (Jet-A1)", "Gasolina de Aviação (AVGAS)", "Biodiesel", "Gás Natural"], 
        correct: 1, 
        hint: "Motores menores a pistão usam AVGAS (Aviation Gasoline)." 
    }
];

// Elogios
const praises = [
    "Sabia que você conseguiria!",
    "Mais perto das suas asas!",
    "Sua dedicação é linda. Continue!",
    "Excelente, minha Comissária! Você arrasou!",
    "Cada hora de estudo é um passo a mais em direção às suas asas!",
    "Com essa dedicação, a aprovação na ANAC já é sua! Continue brilhando!",
    "Aperte os cintos, porque o seu sucesso já está em fase de decolagem!",
    "Orgulho define! Cada resposta é um voo perfeito!",
    "ver você se esforçando assim só me faz te admirar ainda mais!",
    "Sua dedicação para a prova da ANAC é inspiradora!"
];

// Mensagens das Cartas
const letterMessages = [
    "Você é incrivelmente talentosa amor! Ver você estudando me enche de orgulho.",
    "Minha Comissária favorita! O céu não é o limite pra você!",
    "Estou e sempre estarei na primeira fila torcendo por cada conquista sua. Te amo! ",
    "Não existe tempestade no mundo que pare quem nasceu para voar!",
    "Você é a pessoa mais dedicada que conheço. O seu futuro na aviação vai ser lindo!",
    "A prova da ANAC é só um detalhe para quem tem a determinação linda que você tem. Te amo!",
    "Seu sonho de voar está cada dia mais perto. Continue firme, princesa!",
    "Estou contando os dias para ver você de fardamento, brilhando e realizando seu sonho! ",
    "A prova da ANAC é só um detalhe para quem tem a determinação linda que você tem. Te amo! ❤️"

];

// Audio Context
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playAudioBeep(type) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === 'correct') {
        osc.frequency.setValueAtTime(587.33, audioCtx.currentTime);
        osc.frequency.setValueAtTime(880, audioCtx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.3);
    } else if (type === 'wrong') {
        osc.frequency.setValueAtTime(220, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.2);
    }
}

// Variáveis de Estado
let currentIndex = 0;
let score = 0;
let streak = 0;
let hintsLeft = 3;
let towerUsedCount = Number(localStorage.getItem("towerUsedCount")) || 0;
let bestStreak = Number(localStorage.getItem("bestStreak")) || 0;
let totalCompleted = Number(localStorage.getItem("totalCompleted")) || 0;

// Elementos Principais
const startScreen = document.getElementById("start-screen");
const mainGame = document.getElementById("main-game");
const resultScreen = document.getElementById("result-screen");
const startBtn = document.getElementById("start-btn");

// Elementos das Questões
const quizCard = document.getElementById("quiz-box");
const questionNumber = document.getElementById("question-number");
const subjectTag = document.getElementById("subject-tag");
const medalTag = document.getElementById("medal-tag");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedbackBox = document.getElementById("feedback-box");
const feedbackText = document.getElementById("feedback-text");
const nextBtn = document.getElementById("next-btn");
const progressBar = document.getElementById("progress-bar");
const progressPercent = document.getElementById("progress-percent");
const themeToggle = document.getElementById("theme-toggle");

// Torre de Controle Elementos
const towerBtn = document.getElementById("tower-btn");
const hintsCount = document.getElementById("hints-count");
const towerModal = document.getElementById("tower-modal");
const towerMessage = document.getElementById("tower-message");
const closeTowerBtn = document.getElementById("close-tower-btn");

// Passaporte Elementos
const passportBtn = document.getElementById("passport-btn");
const diaryModal = document.getElementById("diary-modal");
const closeDiaryBtn = document.getElementById("close-diary-btn");
const passportStatus = document.getElementById("passport-status");

// Carta Elementos
const letterModal = document.getElementById("letter-modal");
const envelopeBox = document.getElementById("envelope-box");
const letterMessage = document.getElementById("letter-message");
const closeLetterBtn = document.getElementById("close-letter-btn");

// Salvar Progresso
function saveData() {
    localStorage.setItem("towerUsedCount", towerUsedCount);
    localStorage.setItem("bestStreak", bestStreak);
    localStorage.setItem("totalCompleted", totalCompleted);
}

// Iniciar Jogo
if (startBtn) {
    startBtn.onclick = () => {
        playAudioBeep('correct');
        if (startScreen) startScreen.classList.add("hidden");
        if (mainGame) mainGame.classList.remove("hidden");
        if (quizCard) quizCard.classList.remove("hidden");
        if (resultScreen) resultScreen.classList.add("hidden");

        currentIndex = 0;
        score = 0;
        streak = 0;
        hintsLeft = 3;
        if (hintsCount) hintsCount.innerText = hintsLeft;

        loadQuestion();
    };
}

// Alternar Tema
if (themeToggle) {
    themeToggle.onclick = () => {
        document.body.classList.toggle("night-mode");
        const icon = themeToggle.querySelector("i");
        if (icon) {
            if (document.body.classList.contains("night-mode")) {
                icon.className = "fa-solid fa-sun";
                icon.style.color = "#fde047";
            } else {
                icon.className = "fa-solid fa-moon";
                icon.style.color = "rgb(175, 127, 178)";
            }
        }
    };
}

function loadQuestion() {
    const q = questions[currentIndex];

    const progress = Math.round((currentIndex / questions.length) * 100);
    if (progressBar) progressBar.style.width = `${progress}%`;
    if (progressPercent) progressPercent.innerText = `${progress}%`;

    let currentRank = "🥉 Primeiro Voo";
    if (score >= 35) currentRank = "👑 Rainha dos Céus";
    else if (score >= 20) currentRank = "🥇 Comandante";
    else if (score >= 8) currentRank = "🥈 Piloto em Treinamento";

    if (medalTag) medalTag.innerText = currentRank;
    if (passportStatus) passportStatus.innerText = currentRank;

    if (subjectTag) subjectTag.innerText = q.subject;
    if (questionNumber) questionNumber.innerText = `Questão ${currentIndex + 1} de ${questions.length}`;
    if (questionText) questionText.innerText = q.question;

    if (quizCard) quizCard.classList.remove("card-success");
    if (optionsContainer) optionsContainer.innerHTML = "";
    if (feedbackBox) feedbackBox.classList.add("hidden");

    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = `${String.fromCharCode(65 + index)}) ${opt}`;
        btn.onclick = () => selectOption(index);
        if (optionsContainer) optionsContainer.appendChild(btn);
    });
}

function selectOption(selectedIndex) {
    const q = questions[currentIndex];
    const buttons = optionsContainer.querySelectorAll(".option-btn");
    buttons.forEach(btn => btn.disabled = true);

    if (selectedIndex === q.correct) {
        buttons[selectedIndex].classList.add("correct");
        if (quizCard) quizCard.classList.add("card-success");
        score++;
        streak++;
        if (streak > bestStreak) bestStreak = streak;

        playAudioBeep('correct');
        if (typeof confetti === 'function') confetti({ particleCount: 35, spread: 50, origin: { y: 0.7 } });

        const randomPraise = praises[Math.floor(Math.random() * praises.length)];
        if (feedbackText) feedbackText.innerText = randomPraise;

        if (score % 5 === 0) {
            setTimeout(showLetterModal, 700);
        }
    } else {
        buttons[selectedIndex].classList.add("wrong");
        buttons[q.correct].classList.add("correct");
        streak = 0;
        playAudioBeep('wrong');
        if (feedbackText) feedbackText.innerText = "Quase lá, meu amor! O importante é fixar o aprendizado para a ANAC. ❤️";
    }

    if (feedbackBox) feedbackBox.classList.remove("hidden");
    saveData();
}

if (nextBtn) {
    nextBtn.onclick = () => {
        currentIndex++;
        if (currentIndex < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    };
}

// --- TORRE DE CONTROLE (Dicas) ---
if (towerBtn) {
    towerBtn.onclick = () => {
        if (hintsLeft <= 0) {
            if (towerMessage) towerMessage.innerText = "📡 Torre de Controle: 'Comandante, você já utilizou todas as solicitações de apoio deste voo! Confie nos seus estudos!'";
            if (towerModal) towerModal.classList.remove("hidden");
            return;
        }

        const q = questions[currentIndex];
        hintsLeft--;
        towerUsedCount++;
        if (hintsCount) hintsCount.innerText = hintsLeft;

        const buttons = optionsContainer.querySelectorAll(".option-btn");
        let eliminatedIndex = -1;

        for (let i = 0; i < q.options.length; i++) {
            if (i !== q.correct && !buttons[i].classList.contains("eliminated")) {
                eliminatedIndex = i;
                buttons[i].classList.add("eliminated");
                buttons[i].disabled = true;
                break;
            }
        }

        let hintText = q.hint || "Revise os conceitos fundamentais desta matéria.";
        if (eliminatedIndex !== -1) {
            hintText += `\n\n💡 Eliminamos uma opção incorreta para você!`;
        }

        if (towerMessage) towerMessage.innerText = ` Dica da Torre:\n\n"${hintText}"`;
        if (towerModal) towerModal.classList.remove("hidden");
        saveData();
    };
}

if (closeTowerBtn) {
    closeTowerBtn.onclick = () => {
        if (towerModal) towerModal.classList.add("hidden");
    };
}

// --- CARTA ---
function showLetterModal() {
    const msg = letterMessages[Math.floor(Math.random() * letterMessages.length)];
    if (letterMessage) {
        letterMessage.innerText = msg;
        letterMessage.classList.add("hidden-message");
    }
    if (closeLetterBtn) closeLetterBtn.classList.add("hidden");
    if (letterModal) letterModal.classList.remove("hidden");
}

if (envelopeBox) {
    envelopeBox.onclick = () => {
        if (letterMessage) letterMessage.classList.remove("hidden-message");
        if (closeLetterBtn) closeLetterBtn.classList.remove("hidden");
        if (typeof confetti === 'function') confetti({ particleCount: 50, spread: 70, origin: { y: 0.5 } });
    };
}

if (closeLetterBtn) {
    closeLetterBtn.onclick = () => {
        if (letterModal) letterModal.classList.add("hidden");
    };
}

// --- PASSAPORTE & CONQUISTAS ---
if (passportBtn) {
    passportBtn.onclick = () => {
        const elTotal = document.getElementById("total-flights");
        const elScore = document.getElementById("current-score");
        const elStreak = document.getElementById("best-streak");

        if (elTotal) elTotal.innerText = totalCompleted;
        if (elScore) elScore.innerText = score;
        if (elStreak) elStreak.innerText = bestStreak;

        if (totalCompleted >= 1 || score >= 1) document.getElementById("stk-1")?.classList.remove("locked");
        if (bestStreak >= 3) document.getElementById("stk-2")?.classList.remove("locked");
        if (towerUsedCount >= 1) document.getElementById("stk-3")?.classList.remove("locked");
        if (score >= 15) document.getElementById("stk-4")?.classList.remove("locked");
        if (totalCompleted >= 3 || score >= 35) document.getElementById("stk-5")?.classList.remove("locked");

        if (diaryModal) diaryModal.classList.remove("hidden");
    };
}

if (closeDiaryBtn) {
    closeDiaryBtn.onclick = () => {
        if (diaryModal) diaryModal.classList.add("hidden");
    };
}

// Disparar confetes
function launchConfetti() {
    if (typeof confetti === 'function') {
        confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    }
}

// --- COLOQUE O LINK DA SUA MÚSICA / PLAYLIST DO SPOTIFY AQUI ---
const SPOTIFY_URL = "https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT"; 

function showResults() {
  if (startScreen) startScreen.classList.add("hidden");
  if (mainGame) mainGame.classList.add("hidden");
  if (resultScreen) resultScreen.classList.remove("hidden");

  totalCompleted++;
  saveData();

  // Confetes
  if (typeof confetti === 'function') {
    confetti({ particleCount: 130, spread: 90, origin: { y: 0.6 } });
  }

  const percentage = Math.round((score / questions.length) * 100);

  // Nível / Patente
  let rank = "Passageira de Primeira Classe 🎫";
  if (percentage >= 90) {
    rank = "Comandante Master 🧑‍✈️✨";
  } else if (percentage >= 70) {
    rank = "Co-Piloto Experiente 👨‍✈️";
  } else if (percentage >= 50) {
    rank = "Aluno em Treinamento 🛩️";
  }

  // Preenche dados do Cartão
  document.getElementById("final-score").innerText = `${score} / ${questions.length}`;
  document.getElementById("final-percentage").innerText = `${percentage}%`;
  document.getElementById("final-rank").innerText = rank;

  // Gerar QR Code Dinâmico do Spotify
  const qrImg = document.getElementById("spotify-qr-code");
  if (qrImg) {
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(SPOTIFY_URL)}`;
    qrImg.src = qrApiUrl;
  }
}

// Botão Decolar Novamente
document.addEventListener("DOMContentLoaded", () => {
  const restartBtn = document.getElementById("restart-btn");
  if (restartBtn) {
    restartBtn.onclick = () => {
      location.reload(); // Recarrega o quiz do zero
    };
  }
});

// Botão de Teste e Configurações de Inicialização
document.addEventListener("DOMContentLoaded", () => {
    const btnTestar = document.getElementById("btn-testar-final") || document.getElementById("btn-testar");
    if (btnTestar) {
        btnTestar.onclick = function () {
            score = 42;
            showResults();
        };
    }
});

// MENSAGENS FOFINHAS PARA A TELA FINAL
const finalCuteMessages = {
  high: [
    "Uau! Você arrasou demais! A farda já é praticamente sua, minha Comandante! ",
    "Desempenho espetacular! Tenho tanto orgulho da sua dedicação aos estudos! ",
    "Gabaritou o coração e a prova! Você nasceu para voar alto! "
  ],
  medium: [
    "Resultado lindo! Cada dia de estudo te deixa mais pertinho do seu sonho! ",
    "Muito bem, meu bem! O progresso é constante e você está Mandando muito bem! ",
    "Voo super suave! Continue com esse foco lindo que a aprovação vem!"
  ],
  low: [
    "O importante é praticar! Todo grande voo começa com os primeiros passos. To do seu lado! ",
    "Não se preocupe, cada erro aqui é um acerto garantido na prova da ANAC! Te amo! "
  ]
};


// EXIBIR TELA FINAL DE RESULTADO
function showResults() {
  if (startScreen) startScreen.classList.add("hidden");
  if (mainGame) mainGame.classList.remove("hidden");
  if (quizCard) quizCard.classList.add("hidden");
  if (resultScreen) resultScreen.classList.remove("hidden");

  totalCompleted++;
  saveData();

  // Lança confetes festivos!
  if (typeof confetti === 'function') {
    confetti({ particleCount: 120, spread: 100, origin: { y: 0.6 } });
  }

  const percentage = Math.round((score / questions.length) * 100);
  
  let rank = "PassageiraVIP ";
  let messageList = finalCuteMessages.low;

  if (percentage >= 85) {
    rank = "Comandante Master ";
    messageList = finalCuteMessages.high;
  } else if (percentage >= 65) {
    rank = "Co-Piloto Estrelar ";
    messageList = finalCuteMessages.medium;
  } else if (percentage >= 40) {
    rank = "Piloto em Treinamento ";
    messageList = finalCuteMessages.medium;
  }

  // Escolhe uma mensagem fofa aleatória
  const randomMessage = messageList[Math.floor(Math.random() * messageList.length)];

  // Preenche a tela
  const finalScoreEl = document.getElementById("final-score");
  const finalPercentageEl = document.getElementById("final-percentage");
  const finalRankEl = document.getElementById("final-rank");
  const cuteMessageEl = document.getElementById("cute-final-message");

  if (finalScoreEl) finalScoreEl.innerText = `${score} / ${questions.length}`;
  if (finalPercentageEl) finalPercentageEl.innerText = `${percentage}%`;
  if (finalRankEl) finalRankEl.innerText = rank;
  if (cuteMessageEl) cuteMessageEl.innerText = `"${randomMessage}"`;
}

// Botões da Tela Final
document.addEventListener("DOMContentLoaded", () => {
  const restartBtn = document.getElementById("restart-btn");
  const finalPassportBtn = document.getElementById("final-passport-btn");

  if (restartBtn) {
    restartBtn.onclick = () => {
      if (startBtn) startBtn.click(); // Utiliza a lógica de reinício do botão inicial
    };
  }

  if (finalPassportBtn) {
    finalPassportBtn.onclick = () => {
      if (passportBtn) passportBtn.click(); // Abre o passaporte de conquistas
    };
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const cardTrigger = document.getElementById("card-flip-trigger");
  const boardingCard = document.getElementById("boarding-card");

  if (cardTrigger && boardingCard) {
    cardTrigger.addEventListener("click", () => {
      boardingCard.classList.toggle("flipped");
    });
  }
});

// Referências do Avatar
const avatarContainer = document.getElementById('avatar-container');
const avatarInput = document.getElementById('avatar-input');
const userAvatarImg = document.getElementById('user-avatar-img');
const defaultAvatarIcon = document.getElementById('default-avatar-icon');

// Evento ao clicar no avatar: abre a janela de seleção de arquivo
avatarContainer.addEventListener('click', () => {
    avatarInput.click();
});

// Evento ao selecionar uma imagem
avatarInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(event) {
            const imageDataUrl = event.target.result;
            
            // Exibe a imagem selecionada
            userAvatarImg.src = imageDataUrl;
            userAvatarImg.classList.remove('hidden');
            defaultAvatarIcon.classList.add('hidden');
            
            // Salva a imagem no LocalStorage em formato base64
            localStorage.setItem('userAvatar', imageDataUrl);
        };
        
        reader.readAsDataURL(file);
    }
});

// Carrega a foto salva quando a página abre
function loadSavedAvatar() {
    const savedAvatar = localStorage.getItem('userAvatar');
    if (savedAvatar) {
        userAvatarImg.src = savedAvatar;
        userAvatarImg.classList.remove('hidden');
        defaultAvatarIcon.classList.add('hidden');
    }
}

// Chame a função ao inicializar o projeto
document.addEventListener('DOMContentLoaded', () => {
    loadSavedAvatar();
});
