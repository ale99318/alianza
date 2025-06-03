const questions = [
  {
    question: "¿Quiénes fueron dos delanteros que probablemente fueron titulares de Alianza Lima en la temporada 2005?",
    options: [
      "Claudio Pizarro y Jefferson Farfán",
      "Flavio Maestri y Waldir Sáenz",
      "José Carlos Fernández y Roberto Silva",
      "Wilmer Aguirre y Juan Diego Gonzales-Vigil"
    ],
    answer: 1
  },
  {
    question: "¿Qué defensor formó parte del plantel de Alianza Lima durante la temporada 2010?",
    options: [
      "Carlos Zambrano",
      "Walter Ibáñez",
      "Alberto Rodríguez",
      "Christian Ramos"
    ],
    answer: 1
  },
  {
    question: "¿Qué número de camiseta usó el extremo Wilmer Aguirre durante su paso por Alianza Lima en la temporada 2010?",
    options: [
      "Número 7",
      "Número 11",
      "Número 15",
      "Número 19"
    ],
    answer: 2
  },
  {
    question: "¿Qué jugador es recordado por haber sido capitán de Alianza Lima en la temporada 2017?",
    options: [
      "Leao Butrón",
      "Luis Aguiar",
      "Rinaldo Cruzado",
      "Germán Pacheco"
    ],
    answer: 0
  },
  {
    question: "¿Cuáles de los siguientes porteros formaron parte del plantel de Alianza Lima en 2021?",
    options: [
      "Pedro Gallese",
      "Ángelo Campos",
      "José Carvallo",
      "Ricardo Farro"
    ],
    answer: 1
  },
  {
    question: "¿Qué jugador se unió a Alianza Lima en la temporada 2007 proveniente de qué club?",
    options: [
      "Johan Fano / Universitario de Deportes",
      "Jefferson Farfán / PSV Eindhoven",
      "Donny Neyra / Cienciano",
      "Hernán Barcos / LDU Quito"
    ],
    answer: 2
  },
  {
    question: "¿Qué jugador dejó Alianza Lima en la temporada 2012 y a qué club se fue?",
    options: [
      "Paolo Guerrero / Corinthians",
      "Claudio Pizarro / Bayern Munich",
      "José Carlos Fernández / Sporting Cristal",
      "Luis Trujillo / Juan Aurich"
    ],
    answer: 2
  },
  {
    question: "¿Cuál de las siguientes fue una transferencia destacada de Alianza Lima en el año 2015?",
    options: [
      "La llegada de Paolo Hurtado",
      "La salida de André Carrillo",
      "El regreso de Carlos Ascues",
      "La contratación de Irven Ávila"
    ],
    answer: 2
  },
  {
    question: "¿Qué jugador extranjero salió de Alianza Lima durante la temporada 2019?",
    options: [
      "Mauricio Affonso",
      "Janio Pósito",
      "Alejandro Hohberg",
      "Cristian Zúñiga"
    ],
    answer: 1
  },
  {
    question: "¿Qué delantero uruguayo fue una incorporación importante para Alianza Lima en la temporada 2023?",
    options: [
      "Paolo Guerrero",
      "Christian Cueva",
      "Gabriel Costa",
      "André Carrillo"
    ],
    answer: 2
  },
  {
    question: "¿Quién fue el entrenador de Alianza Lima durante la temporada 2006?",
    options: [
      "Gustavo Costas",
      "José Soto (asumió interinamente)",
      "Franco Navarro",
      "Wilmar Valencia"
    ],
    answer: 1
  },
  {
    question: "¿En qué año Miguel Ángel Arrué asumió como director técnico en Alianza Lima?",
    options: [
      "2005",
      "2007",
      "2009",
      "2011"
    ],
    answer: 1
  },
  {
    question: "¿Cuántas veces se consagró campeón nacional el Club Alianza Lima entre los años 2010 y 2020 (inclusive)?",
    options: [
      "1 vez (2017)",
      "2 veces (2017, 2020)",
      "3 veces",
      "Nunca"
    ],
    answer: 0
  },
  {
    question: "¿Cuál fue una posible posición de Alianza Lima en la tabla de posiciones al final de la temporada 2008?",
    options: [
      "Primer lugar",
      "Quinto lugar (aproximado)",
      "Décimo quinto lugar",
      "Último lugar"
    ],
    answer: 1
  },
  {
    question: "¿Quién probablemente fue el máximo goleador de Alianza Lima jugando como extremo en la temporada 2014?",
    options: [
      "Mauro Guevgeozián",
      "Lionard Pajoy",
      "Víctor Cedrón",
      "Carlos Preciado"
    ],
    answer: 0
  },
  {
    question: "¿En qué temporada Alianza Lima probablemente tuvo una alta cantidad de partidos ganados?",
    options: [
      "2011 (temporada irregular)",
      "2017 (campeón nacional)",
      "2015 (campaña discreta)",
      "2013 (subcampeón nacional)"
    ],
    answer: 1
  },
  {
    question: "¿Qué acontecimiento especial conmemoró el Club Alianza Lima durante el año 2001?",
    options: [
      "La inauguración de su estadio propio.",
      "El centenario de su fundación.",
      "Un campeonato nacional invicto.",
      "El retiro de un jugador histórico."
    ],
    answer: 1
  },
  {
    question: "¿Qué encuentro reciente entre Alianza Lima y Sporting Cristal tuvo un resultado inesperado o una actuación individual destacada que cambió el curso del partido?",
    options: [
      "Un empate sin goles en la fase regular.",
      "Una victoria ajustada por 1-0 en los minutos finales.",
      "Una victoria de Alianza Lima con un gol de tiro libre en el último minuto por un jugador poco habitual.",
      "Un partido con pocos goles y mucha táctica."
    ],
    answer: 1
  },
  {
    question: "¿Cuál de los siguientes canteranos de Alianza Lima probablemente debutó y tuvo un impacto significativo en la temporada 2016 o 2017?",
    options: [
      "Paolo Hurtado",
      "Sergio Peña",
      "Kevin Quevedo",
      "Wilder Cartagena"
    ],
    answer: 2
  },
  {
    question: "¿Cuál es el apodo más conocido del club Alianza Lima?",
    options: [
      "Los Cremas",
      "Los Blanquiazules",
      "Los Celestes",
      "Los Rojos"
    ],
    answer: 1
  },
  {
    question: "¿Quién fue el director técnico de Alianza Lima que logró el campeonato nacional en 2017?",
    options: [
      "Guillermo Salas",
      "Pablo Bengoechea",
      "Gustavo Roverano",
      "Roberto Mosquera"
    ],
    answer: 1
  },
  {
    question: "¿Qué defensor central argentino llegó a Alianza Lima para reforzar el equipo en la temporada 2018?",
    options: [
      "Carlos Zambrano",
      "Gonzalo Godoy",
      "Alberto Rodríguez",
      "Christian Ramos"
    ],
    answer: 1
  },
  {
    question: "¿En qué estadio juega Alianza Lima sus partidos de local?",
    options: [
      "Estadio Nacional",
      "Estadio Monumental",
      "Estadio Alejandro Villanueva (Matute)",
      "Estadio San Martín de Porres"
    ],
    answer: 2
  },
  {
    question: "¿Cuál fue el marcador global de la final del Campeonato Nacional 2017 que ganó Alianza Lima?",
    options: [
      "1-0",
      "2-1",
      "0-0 (Alianza ganó por mejor posición en la tabla)",
      "3-2"
    ],
    answer: 1
  },
  {
    question: "¿Qué marca deportiva vistió la camiseta de Alianza Lima durante la temporada 2015?",
    options: [
      "Nike",
      "Adidas",
      "Umbro",
      "Walon"
    ],
    answer: 2
  },
  {
    question: "¿Qué delantero peruano tuvo un paso destacado por Alianza Lima a inicios de la década del 2000?",
    options: [
      "Paolo Guerrero",
      "Jefferson Farfán",
      "Claudio Pizarro",
      "Teófilo Cubillas"
    ],
    answer: 2
  },
  {
    question: "¿Cuál fue el rival tradicional de Alianza Lima en el clásico del fútbol peruano?",
    options: [
      "Sporting Cristal",
      "Universitario de Deportes",
      "Deportivo Municipal",
      "Cienciano"
    ],
    answer: 1
  },
  {
    question: "¿Cuál ha sido la mejor actuación del Club Alianza Lima en la Copa Libertadores de América?",
    options: [
      "Campeón de la Copa Libertadores",
      "Subcampeón de la Copa Sudamericana",
      "Llegar a semifinales. (En 1976 y 1978)",
      "Llegar a cuartos de final."
    ],
    answer: 2
  },
  {
    question: "¿Qué jugador extranjero se convirtió en un ídolo de la afición de Alianza Lima en los últimos 15 años?",
    options: [
      "Gabriel Costa",
      "Hernán Barcos",
      "Alejandro Hohberg",
      "Lionard Pajoy"
    ],
    answer: 1
  },
  {
    question: "¿En qué año Alianza Lima descendió de categoría en el fútbol peruano?",
    options: [
      "Nunca ha descendido",
      "2005",
      "2012",
      "2020"
    ],
    answer: 3
  }
];

let currentIndex = 0;
let score = 0;

function startGame() {
  currentIndex = 0;
  score = 0;
  document.getElementById('main-menu').classList.add('hidden');
  document.getElementById('history-section').classList.add('hidden');
  document.getElementById('credits-section').classList.add('hidden');
  document.getElementById('quiz-section').classList.remove('hidden');
  document.getElementById('score-board').style.display = 'none';
  showQuestion();
}

function showQuestion() {
  const q = questions[currentIndex];
  document.getElementById('current-question').textContent = currentIndex + 1;
  document.getElementById('quiz-question').textContent = q.question;
  const optionsDiv = document.getElementById('quiz-options');
  optionsDiv.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(i);
    optionsDiv.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const correct = questions[currentIndex].answer;
  if (selected === correct) score++;
  
  // Breve feedback visual (resaltar correcta/incorrecta)
  Array.from(document.getElementsByClassName('option-btn')).forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correct) btn.style.background = '#5bcba0';
    if (idx === selected && selected !== correct) btn.style.background = '#ef4444';
  });
  
  setTimeout(() => {
    currentIndex++;
    if (currentIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 750);
}

function showResult() {
  document.getElementById('quiz-question').innerHTML = `<div class="result-message">¡Juego terminado!</div>`;
  document.getElementById('quiz-options').innerHTML = '';
  document.getElementById('score-board').style.display = 'block';
  document.getElementById('score-board').textContent =
    `Obtuviste ${score} de ${questions.length} puntos.`;
}

function showSection(section) {
  // Oculta todo
  document.getElementById('main-menu').classList.add('hidden');
  document.getElementById('quiz-section').classList.add('hidden');
  document.getElementById('history-section').classList.add('hidden');
  document.getElementById('credits-section').classList.add('hidden');
  
  if (section === 'history') document.getElementById('history-section').classList.remove('hidden');
  if (section === 'credits') document.getElementById('credits-section').classList.remove('hidden');
}

function backToMenu() {
  document.getElementById('main-menu').classList.remove('hidden');
  document.getElementById('quiz-section').classList.add('hidden');
  document.getElementById('history-section').classList.add('hidden');
  document.getElementById('credits-section').classList.add('hidden');
}