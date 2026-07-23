// Banco de Dados das 50 Questões ANAC com dicas para a Torre de Controle
const questions = [
    // Regulamentos, ANAC, ICAO, VFR, IFR
    { subject: "Regulamentos", question: "Qual órgão é responsável por regulação e fiscalização da aviação civil no Brasil?", options: ["DECEA", "ANAC", "ICAO", "FAB"], correct: 1, hint: "Pense no órgão nacional da Agência Nacional de Aviação Civil!" },
    { subject: "Regulamentos", question: "A sigla ICAO (OACI em português) refere-se a qual organização internacional?", options: ["Organização de Aviação Comercial", "Organização da Aviação Civil Internacional", "Órgão Central de Aeronaves", "Associação Internacional de Pilotos"], correct: 1, hint: "É uma organização global para a Aviação Civil Internacional." },
    { subject: "Regulamentos", question: "VFR é a sigla que define as regras de voo:", options: ["Por Instrumentos", "Noturnos Obrigatórios", "Visuais", "Comerciais de Carga"], correct: 2, hint: "A letra 'V' vem de Visual Flying Rules." },
    { subject: "Regulamentos", question: "Quando a visibilidade do aeroporto fica abaixo dos limites visuais, opera-se sob regras:", options: ["VFR", "IFR", "VMC", "GND"], correct: 1, hint: "O voo passa a ser guiado por Instrumentos (IFR)." },
    { subject: "Regulamentos", question: "Qual é o documento que atesta a navegabilidade de uma aeronave?", options: ["CMA", "Certificado de Matrícula e Comprovante de Navegabilidade", "CIV", "CPL"], correct: 1, hint: "Procure a opção que menciona abertamente a Navegabilidade." },
    { subject: "Regulamentos", question: "O limite máximo de validade do Exame Médico Pericial (CMA) varia de acordo com:", options: ["O fabricante da aeronave", "A idade e a função do piloto", "O número de passageiros", "O peso máximo de decolagem"], correct: 1, hint: "Depende de quem está voando (sua idade e tipo de licença)." },
    { subject: "Regulamentos", question: "Qual é o código transponder padrão para declarar emergência geral a bordo?", options: ["7500", "7600", "7700", "2000"], correct: 2, hint: "A dica da torre é: 7700 é emergência geral!" },
    { subject: "Regulamentos", question: "Qual código transponder deve ser acionado em caso de falha total de comunicações?", options: ["7500", "7600", "7700", "1200"], correct: 1, hint: "Sete-Meia-Zero-Zero para falha de rádio." },
    { subject: "Regulamentos", question: "O código transponder 7500 indica:", options: ["Emergência médica", "Falha de rádio", "Interferência ilícita (Sequestro)", "Pane de motor"], correct: 2, hint: "Sete-Cinco-Zero-Zero é interferência ilícita." },
    { subject: "Regulamentos", question: "O espaço aéreo no qual o serviço de controle de tráfego aéreo é prestado é chamado de:", options: ["Espaço Aéreo Controlado", "Área Livre", "Rota Não Homologada", "Zona Sem Rádio"], correct: 0, hint: "É um espaço que está sob controle!" },

    // Meteorologia
    { subject: "Meteorologia", question: "Em qual camada da atmosfera ocorrem quase todos os fenômenos meteorológicos?", options: ["Estratosfera", "Troposfera", "Termosfera", "Exosfera"], correct: 1, hint: "É a camada mais baixa e próxima da superfície da Terra." },
    { subject: "Meteorologia", question: "Nuvens do tipo Cumulonimbus (CB) indicam a presença de:", options: ["Tempo estável e sem vento", "Forte turbulência, granizo e tempestades", "Apenas chuvisco fraco", "Nevoeiro rasaste"], correct: 1, hint: "São as nuvens temidas pelos pilotos devido a tempestades severas." },
    { subject: "Meteorologia", question: "A passagem de uma Frente Fria geralmente traz:", options: ["Aumento da temperatura e vento calmo", "Queda de temperatura, ventos fortes e pancadas de chuva", "Céu limpo sem nuvens", "Pressão atmosférica constante"], correct: 1, hint: "O próprio nome sugere queda na temperatura e tempo instável." },
    { subject: "Meteorologia", question: "O instrumento utilizado a bordo para medir a pressão atmosférica e determinar a altitude é o:", options: ["Velocímetro", "Altímetro", "Variômetro", "Horizontador"], correct: 1, hint: "Mede a altitude em pés." },
    { subject: "Meteorologia", question: "O vento sopra das regiões de:", options: ["Baixa para Alta pressão", "Alta para Baixa pressão", "Temperatura menor para maior massa", "Oeste para Leste obrigatoriamente"], correct: 1, hint: "O ar se move de onde há mais pressão para onde há menos pressão." },
    { subject: "Meteorologia", question: "Nuvens estratiformes (Stratus) costumam cobrir o céu como uma camada e geram:", options: ["Tempestades severas", "Chuva contínua ou chuvisco leve", "Granizo grande", "Tesoura de vento extrema"], correct: 1, hint: "Produzem chuvas contínuas e leves." },
    { subject: "Meteorologia", question: "O nevoeiro é uma nuvem do tipo Stratus em contato com:", options: ["A alta troposfera", "O solo", "A estratosfera", "A superfície do mar apenas"], correct: 1, hint: "Quando a nuvem 'encosta' no chão!" },
    { subject: "Meteorologia", question: "O fenômeno do Windshear (Tesoura de Vento) é perigoso principalmente nas fases de:", options: ["Cruzeiro em alta altitude", "Pouso e Decolagem", "Táxi na pista", "Estacionamento no pátio"], correct: 1, hint: "Acontece perto do solo quando a aeronave está em baixa velocidade." },
    { subject: "Meteorologia", question: "A pressão padrão ao nível do mar na atmosfera ISA é de:", options: ["1013.2 hPa / 29.92 inHg", "1000 hPa", "1020.5 hPa", "28.50 inHg"], correct: 0, hint: "Número clássico: 1013 hPa ou 29.92 pol.Hg." },
    { subject: "Meteorologia", question: "A temperatura média da atmosfera padrão (ISA) ao nível do mar é de:", options: ["20°C", "15°C", "0°C", "25°C"], correct: 1, hint: "Exatamente 15 graus Celsius!" },

    // Navegação
    { subject: "Navegação", question: "A direção para onde o nariz da aeronave está apontado chama-se:", options: ["Rumo", "Proa", "Rota", "Azimute"], correct: 1, hint: "Para onde o nariz aponta é a PROA." },
    { subject: "Navegação", question: "A trajetória real descrita pela aeronave em relação ao solo é o(a):", options: ["Proa", "Rumo (ou Rota)", "Deriva", "Declinação"], correct: 1, hint: "O caminho real sobre a terra é o Rumo/Rota." },
    { subject: "Navegação", question: "O ângulo formado entre a Proa da aeronave e o Rumo percorrido devido ao vento é a:", options: ["Declinação Magnética", "Inclinação", "Deriva", "Loxodromia"], correct: 2, hint: "O vento empurra a aeronave gerando o ângulo de DERIVA." },
    { subject: "Navegação", question: "As linhas imaginárias paralelas ao Equador terrestre são chamadas de:", options: ["Meridianos", "Paralelos de Latitude", "Azimutes", "Isóbaras"], correct: 1, hint: "São linhas paralelas ao Equador." },
    { subject: "Navegação", question: "O Meridiano de referência internacional (0° de Longitude) é o de:", options: ["Equador", "Greenwich", "Capricórnio", "Câncer"], correct: 1, hint: "Localizado perto de Londres: Greenwich." },
    { subject: "Navegação", question: "Uma milha náutica (NM) equivale a aproximadamente:", options: ["1000 metros", "1852 metros", "1609 metros", "2000 metros"], correct: 1, hint: "1 NM = 1.852 metros." },
    { subject: "Navegação", question: "A bússola magnética indica o:", options: ["Norte Verdadeiro", "Norte Magnético", "Norte de Grade", "Sul Verdadeiro"], correct: 1, hint: "Por ter propriedades magnéticas, aponta para o Norte Magnético." },
    { subject: "Navegação", question: "Uma hora de tempo no globo terrestre corresponde a quantos graus de longitude?", options: ["10°", "15°", "30°", "45°"], correct: 1, hint: "360° divididos por 24 horas = 15°." },
    { subject: "Navegação", question: "Na escala fonética internacional, como pronunciamos a letra 'N'?", options: ["Navy", "November", "Node", "New York"], correct: 1, hint: "Corresponde ao mês de Novembro em inglês." },
    { subject: "Navegação", question: "A agulha giroscópica utilizada para manter a direção do voo sem oscilar com o vento é o:", options: ["Giro Direcional", "Altímetro", "Clinômetro", "Turn Coordinator"], correct: 0, hint: "É o instrumento que dá a direção baseada no giroscópio." },

    // Aerodinâmica
    { subject: "Aerodinâmica", question: "A força aerodinâmica responsável por vencer o peso do avião é a:", options: ["Tração", "Sustentação", "Arrasto", "Gravidade"], correct: 1, hint: "O que mantém o avião lá em cima é a Sustentação." },
    { subject: "Aerodinâmica", question: "A curvatura superior da asa de um avião é denominada:", options: ["Intradorso", "Extradorso", "Bordo de Fuga", "Corda"], correct: 1, hint: "Parte de cima da asa = Extradorso (Extra = fora/cima)." },
    { subject: "Aerodinâmica", question: "De acordo com o Princípio de Bernoulli, onde a velocidade do ar aumenta, a pressão:", options: ["Aumenta", "Diminui", "Permanece igual", "Torna-se nula"], correct: 1, hint: "Mais velocidade do fluido = menor pressão." },
    { subject: "Aerodinâmica", question: "O dispositivo de bordo de asa usado para aumentar a sustentação nos pousos é o:", options: ["Aileron", "Flape", "Leme de Direção", "Compensador"], correct: 1, hint: "Pilotos estendem o Flape no pouso!" },
    { subject: "Aerodinâmica", question: "O Aileron é o comando responsável por controlar o movimento de:", options: ["Arfagem (nariz para cima/baixo)", "Bancagem / Rolagem (asa para cima/baixo)", "Guinada (nariz para esquerda/direita)", "Aceleração"], correct: 1, hint: "Faz a aeronave inclinar as asas (Rolagem / Bancagem)." },
    { subject: "Aerodinâmica", question: "A perda súbita de sustentação quando a asa ultrapassa o ângulo de ataque crítico chama-se:", options: ["Glide", "Estol (Stall)", "Overspend", "Deriva"], correct: 1, hint: "Conhecido universalmente como Estol ou Stall." },
    { subject: "Aerodinâmica", question: "O Leme de Direção, localizado no estabilizador vertical, controls o eixo de:", options: ["Lateral", "Longitudinal", "Vertical (Guinada)", "Transversal"], correct: 2, hint: "Controla a guinada do nariz para os lados." },
    { subject: "Aerodinâmica", question: "O profundor (localizado na empenagem) controla o movimento de:", options: ["Guinada", "Arfagem (Pitch)", "Rolagem", "Arrasto induzido"], correct: 1, hint: "Arfagem: o movimento de subir ou descer o nariz." },
    { subject: "Aerodinâmica", question: "O arrasto produzido como consequência inevitável da geração de sustentação é o:", options: ["Arrasto Parasita", "Arrasto Induzido", "Arrasto de Perfil", "Arrasto de Atrito"], correct: 1, hint: "Ele foi 'induzido' pela própria sustentação." },
    { subject: "Aerodinâmica", question: "A linha reta que une o Bordo de Ataque ao Bordo de Fuga do aerofólio é a:", options: ["Linha do Equador", "Corda", "Curvatura Média", "Espessura Máxima"], correct: 1, hint: "A linha reta principal do perfil da asa é a Corda." },

    // Conhecimentos Técnicos & Comunicação
    { subject: "Conhecimentos Técnicos", question: "Nos motores aeronáuticos a pistão (como Lycoming e Continental), o sistema de ignição é alimentado por:", options: ["Bateria principal", "Magnetos independentes", "Alternador apenas", "Inversor elétrico"], correct: 1, hint: "São geradores independentes chamados Magnetos." },
    { subject: "Conhecimentos Técnicos", question: "A mistura ar/combustível rica é utilizada principalmente em qual fase para resfriar o motor?", options: ["Decolagem e Subida com alta potência", "Voo de cruzeiro econômico", "Descida lenta", "Com a aeronave desligada"], correct: 0, hint: "Exige máxima potência: Decolagem e Subida." },
    { subject: "Conhecimentos Técnicos", question: "A formação de gelo no carburador pode ocorrer mesmo em dias quentes devido a:", options: ["Queda de pressão e evaporação do combustível na agulha", "Uso de gasolina adulterada", "Vento de cauda", "Mistura muito pobre"], correct: 0, hint: "A rápida evaporação do combustível causa queda acentuada de temperatura." },
    { subject: "Comunicação", question: "O termo utilizado pelo piloto ao controle de tráfego para interromper o pouso é:", options: ["Pouso forçado", "Arremeter (Going Around)", "Cancelando frequência", "Pista Livre"], correct: 1, hint: "Arremeter o voo e subir novamente." },
    { subject: "Comunicação", question: "A expressão 'MAYDAY' repetida três vezes no rádio indica:", options: ["Urgência simples", "Situação de Perigo / Emergência Grave", "Pedido de combustível", "Mudança de plano de voo"], correct: 1, hint: "Sinal de socorro supremo e perigo grave!" },
    { subject: "Comunicação", question: "A expressão 'PAN PAN' transmitida via rádio indica uma situação de:", options: ["Perigo iminente de queda", "Urgência (não há risco imediato à vida)", "Teste de microfone", "Autorização de decolagem"], correct: 1, hint: "Situação de Urgência que necessita atenção, mas sem perigo imediato de vida." },
    { subject: "Comunicação", question: "Na radiocomunicação, como pronunciamos o número '9' segundo a norma padrão?", options: ["Nove", "Niner", "Nine", "Novena"], correct: 1, hint: "A pronúncia aeronáutica para 9 é Niner." },
    { subject: "Comunicação", question: "O que o controle de tráfego quer dizer com 'Wilco'?", options: ["Não entendi", "Compreendido e cumprirei a instrução", "Aguarde na posição", "Repita a mensagem"], correct: 1, hint: "Vem de 'Will Comply' (Irei cumprir)." },
    { subject: "Comunicação", question: "A frase 'Roger' na comunicação aeronáutica significa:", options: ["Autorizado decolar", "Recebi e entendi sua mensagem", "Cumprirei a ordem", "Aeronave arremetendo"], correct: 1, hint: "Apenas confirmação de mensagem recebida." },
    { subject: "Comunicação", question: "O que significa a expressão 'Pista Livre'?", options: ["A pista está autorizada para pouso", "A aeronave livrou totalmente a pista após o pouso", "A pista está sem iluminação", "Não há tráfegos no aeroporto"], correct: 1, hint: "Que o avião já saiu completamente da pista após pousar." }
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
