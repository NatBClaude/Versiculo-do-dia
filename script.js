const VERSES = [
  { texto: "Porque para Deus nada é impossível.", referencia: "Lucas 1:37", musica: { titulo: "Tua Graça Me Basta", artista: "Davi Sacer" }, estudo: "Este versículo foi dito pelo anjo Gabriel a Maria, diante do anúncio impossível de uma virgem conceber. Ele lembra que os limites humanos não limitam a Deus: quando a situação parece sem saída, é exatamente aí que Ele costuma agir. Reflita: nenhuma circunstância é grande demais para o poder de Deus." },
  { texto: "Tudo posso naquele que me fortalece.", referencia: "Filipenses 4:13", musica: { titulo: "Tudo Posso", artista: "Fernandinho" }, estudo: "Paulo escreveu esta carta preso, e o contexto (versículos 11-12) mostra que ele aprendeu a se contentar tanto na fartura quanto na escassez. A força vem de Cristo, não do esforço próprio. Pergunte-se: em que área você tem tentado dar conta de tudo sozinho?" },
  { texto: "O Senhor é o meu pastor; nada me faltará.", referencia: "Salmos 23:1", musica: { titulo: "Salmo 23", artista: "Ministério Zoe" }, estudo: "Davi, que foi pastor antes de rei, usa essa imagem para descrever o cuidado de Deus: alguém que guia, protege e provê. 'Nada me faltará' não é ausência de dificuldade, mas certeza de provisão. Pense: você tem confiado no Pastor ou tentado se guiar sozinho?" },
  { texto: "Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o Senhor; pensamentos de paz, e não de mal, para vos dar o fim que esperais.", referencia: "Jeremias 29:11", musica: { titulo: "Ainda Que a Figueira Não Floresça", artista: "Nívea Soares" }, estudo: "A promessa foi feita ao povo de Israel durante o exílio na Babilônia — um tempo de espera e incerteza, não de conforto imediato. Deus revela que Seus planos existem mesmo quando não fazem sentido no presente. Reflita: você consegue confiar no propósito de Deus mesmo em tempos de espera?" },
  { texto: "Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento.", referencia: "Provérbios 3:5", musica: { titulo: "Confiarei", artista: "Anderson Freire" }, estudo: "O provérbio continua no verso seguinte: 'reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas'. Confiar de 'todo o coração' é diferente de confiar parcialmente. Avalie: existe alguma decisão em que você está confiando mais na sua lógica do que em Deus?" },
  { texto: "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça.", referencia: "Isaías 41:10", musica: { titulo: "Não Temerei", artista: "Gabriela Rocha" }, estudo: "Deus fala diretamente ao Seu povo amedrontado, prometendo presença, força e sustento. O medo é reconhecido, mas não tem a palavra final. Pergunte-se: o que você tem enfrentado sozinho que poderia entregar a Deus hoje?" },
  { texto: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.", referencia: "João 3:16", musica: { titulo: "Ousado Amor", artista: "Isaias Saad" }, estudo: "Este é considerado o resumo do evangelho: o amor de Deus expresso através da entrega do Filho. A vida eterna é oferecida como dom, não como conquista. Reflita: você já recebeu esse amor, ou ainda tenta merecê-lo?" },
  { texto: "Entrega o teu caminho ao Senhor; confia nele, e ele o fará.", referencia: "Salmos 37:5", musica: { titulo: "Preciso de Ti", artista: "Aline Barros" }, estudo: "'Entregar o caminho' sugere um ato deliberado de soltar o controle. O versículo seguinte promete que Deus faz 'sobressair a tua justiça como a luz'. Pense: o que significaria, na prática, entregar sua próxima decisão a Deus?" },
  { texto: "Buscai primeiro o reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas.", referencia: "Mateus 6:33", musica: { titulo: "Buscarei", artista: "Aline Barros" }, estudo: "Jesus ensina isso logo após falar sobre não se afligir com comida, roupa e o amanhã. Buscar o Reino primeiro reordena as prioridades. Avalie: o que você tem buscado primeiro nos seus dias?" },
  { texto: "Alegrai-vos sempre no Senhor; outra vez digo, alegrai-vos.", referencia: "Filipenses 4:4", musica: { titulo: "A Alegria Está no Coração", artista: "Aline Barros" }, estudo: "Paulo repete 'alegrai-vos' duas vezes, escrevendo da prisão — a alegria que ele descreve não depende das circunstâncias. É uma alegria 'no Senhor', não nos fatos ao redor. Pergunte-se: sua alegria hoje depende de quê?" },
  { texto: "O Senhor é a minha luz e a minha salvação; a quem temerei?", referencia: "Salmos 27:1", musica: { titulo: "Sol da Justiça", artista: "Aline Barros" }, estudo: "Davi enfrentava inimigos reais quando escreveu isso, mas escolhe não temer porque coloca o foco em quem Deus é. Luz dissipa trevas; salvação remove ameaça. Reflita: o que você tem temido que poderia colocar diante dessa luz?" },
  { texto: "Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.", referencia: "1 Pedro 5:7", musica: { titulo: "Deus Cuida de Mim", artista: "André Valadão" }, estudo: "O verso vem logo depois de uma instrução sobre humildade — entregar a ansiedade é também um ato de humildade, reconhecendo que não controlamos tudo. 'Ele tem cuidado de vós' é a razão dada para lançar o peso. Pense: que ansiedade você está carregando que poderia lançar hoje?" },
  { texto: "E conhecereis a verdade, e a verdade vos libertará.", referencia: "João 8:32", musica: { titulo: "Livre Estou", artista: "Gabriela Rocha" }, estudo: "Jesus fala isso a quem já cria nele, mostrando que conhecer a verdade é um processo contínuo, ligado a 'permanecer' na Sua palavra. Liberdade aqui é espiritual, não apenas circunstancial. Pergunte-se: em que área da sua vida você ainda não experimentou essa liberdade?" },
  { texto: "Bendize, ó minha alma, ao Senhor, e não te esqueças de nenhum de seus benefícios.", referencia: "Salmos 103:2", musica: { titulo: "Bendize, Ó Alma Minha", artista: "Hinário tradicional" }, estudo: "O salmo inteiro é uma lista de benefícios de Deus: perdão, cura, redenção. 'Não esquecer' é um exercício de memória ativa e gratidão. Reflita: quais benefícios de Deus você esqueceu de agradecer ultimamente?" },
  { texto: "Sede fortes e corajosos; não temais, nem vos assombreis diante deles, porque o Senhor teu Deus é o que vai contigo.", referencia: "Deuteronômio 31:6", musica: { titulo: "Coragem", artista: "Aline Barros" }, estudo: "Moisés fala isso a Josué e ao povo antes de entrarem na Terra Prometida, um território desconhecido e cheio de desafios. A coragem vem da certeza da presença de Deus, que 'não te deixará, nem te desamparará'. Pense: que 'terra desconhecida' você está enfrentando agora?" },
  { texto: "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.", referencia: "Mateus 11:28", musica: { titulo: "Descansarei", artista: "Nívea Soares" }, estudo: "Jesus convida os 'cansados e oprimidos' — não os que já resolveram tudo. O descanso oferecido é relacional ('vinde a mim'), não apenas ausência de trabalho. Avalie: você tem ido a Jesus com seu cansaço, ou tentado resolvê-lo sozinho?" },
  { texto: "O amor é sofredor, é benigno; o amor não é invejoso; o amor não trata com leviandade, não se ensoberbece.", referencia: "1 Coríntios 13:4", musica: { titulo: "O Maior Amor", artista: "Aline Barros" }, estudo: "Este é o início do 'capítulo do amor', escrito para uma igreja dividida por conflitos e comparações. Paulo descreve o amor por suas ações, não por sentimentos. Reflita: qual dessas características do amor você mais precisa praticar hoje?" },
  { texto: "Clama a mim, e responder-te-ei, e anunciar-te-ei coisas grandes e ocultas, que não sabes.", referencia: "Jeremias 33:3", musica: { titulo: "Clamo a Ti", artista: "Gabriela Rocha" }, estudo: "Deus faz esse convite a Jeremias enquanto ele estava preso, num momento de aparente derrota nacional. 'Clamar' pressupõe uma necessidade real, e a resposta promete revelação, não apenas alívio. Pense: você tem clamado a Deus ou apenas resmungado sobre o problema?" },
  { texto: "Porque assim como os céus são mais altos do que a terra, assim são os meus caminhos mais altos do que os vossos caminhos, e os meus pensamentos mais altos do que os vossos pensamentos.", referencia: "Isaías 55:9", musica: { titulo: "Grande é o Senhor", artista: "Adhemar de Campos" }, estudo: "O contexto contrasta os pensamentos de Deus com os nossos. Isso não é desculpa para não entender nada, mas um convite à humildade diante de decisões que não fazem sentido imediato. Pergunte-se: onde você tem exigido que Deus explique tudo antes de confiar?" },
  { texto: "O Senhor te abençoe, e te guarde; o Senhor faça resplandecer o seu rosto sobre ti, e tenha misericórdia de ti.", referencia: "Números 6:24-25", musica: { titulo: "A Bênção", artista: "Isaias Saad" }, estudo: "Esta é a bênção sacerdotal, dada por Deus a Moisés para Arão abençoar o povo — uma das bênçãos mais antigas registradas na Bíblia. Guardar, iluminar o rosto e ter misericórdia descrevem proximidade, não distância. Reflita: você sente essa proximidade de Deus na sua rotina?" },
  { texto: "Mas os que esperam no Senhor renovarão as forças, subirão com asas como águias; correrão, e não se cansarão; caminharão, e não se fatigarão.", referencia: "Isaías 40:31", musica: { titulo: "Renova-me", artista: "Aline Barros" }, estudo: "A promessa é para os que 'esperam no Senhor' — a palavra original sugere expectativa ativa, não passividade. Voar, correr e andar descrevem diferentes ritmos de vida que Deus sustenta. Pense: em que fase você está agora, e está bem com isso?" },
  { texto: "Este é o dia que fez o Senhor; regozijemo-nos, e alegremo-nos nele.", referencia: "Salmos 118:24", musica: { titulo: "Este É o Dia", artista: "Coral tradicional" }, estudo: "O salmo celebra a vitória e a fidelidade de Deus mesmo depois de rejeição. Escolher se alegrar é um ato de fé, não apenas reação às circunstâncias. Avalie: você tem recebido cada dia como algo 'feito pelo Senhor'?" },
  { texto: "E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e os vossos sentimentos em Cristo Jesus.", referencia: "Filipenses 4:7", musica: { titulo: "Paz Perfeita", artista: "Diante do Trono" }, estudo: "Este verso segue a instrução de orar sobre tudo — a paz vem como resultado da oração, não da resolução do problema. 'Excede todo o entendimento' significa que ela não depende de a situação fazer sentido. Pergunte-se: você tem orado antes de se preocupar, ou depois?" },
  { texto: "Não andeis ansiosos por coisa alguma; antes, as vossas petições sejam em tudo conhecidas diante de Deus.", referencia: "Filipenses 4:6", musica: { titulo: "Fica Tranquilo", artista: "Ana Nóbrega" }, estudo: "O mandamento é claro: não andar ansioso por nada. A alternativa proposta não é ignorar o problema, mas trazê-lo a Deus com oração e ação de graças. Reflita: qual ansiedade você pode transformar em oração hoje?" },
  { texto: "Sê forte e corajoso; não temas, nem te espantes, porque o Senhor teu Deus é contigo, por onde quer que andares.", referencia: "Josué 1:9", musica: { titulo: "Não Temas", artista: "Diante do Trono" }, estudo: "Deus repete essa ordem a Josué logo após a morte de Moisés — um momento de liderança incerta. Coragem aqui não é ausência de medo, mas ação apesar dele, apoiada na presença de Deus. Pense: que responsabilidade você está evitando por medo?" },
  { texto: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.", referencia: "Salmos 46:1", musica: { titulo: "Refúgio", artista: "Aline Barros" }, estudo: "O salmo foi escrito em meio a caos e ameaças, com imagens de terra se movendo e montes caindo no mar. Refúgio e fortaleza descrevem proteção ativa, 'bem presente', não distante. Avalie: para onde você tem corrido quando a vida balança?" },
  { texto: "Se, pois, o Filho vos libertar, verdadeiramente sereis livres.", referencia: "João 8:36", musica: { titulo: "Livre", artista: "Isadora Pompeo" }, estudo: "Jesus fala isso a pessoas que já se consideravam livres por herança, mostrando que liberdade espiritual é diferente de status social. A libertação vem 'pelo Filho', não por esforço próprio. Reflita: em que você ainda tenta se libertar sozinho?" },
  { texto: "Grandes coisas fez o Senhor por nós, e por isso estamos alegres.", referencia: "Salmos 126:3", musica: { titulo: "Grandes Coisas", artista: "Fernandinho" }, estudo: "Este salmo celebra o retorno do povo do exílio babilônico — uma restauração que parecia impossível. A alegria nasce da lembrança do que Deus já fez, não apenas da expectativa do que fará. Pense: que 'grande coisa' Deus já fez que você pode celebrar hoje?" },
  { texto: "Porque a palavra de Deus é viva e eficaz.", referencia: "Hebreus 4:12", musica: { titulo: "A Tua Palavra", artista: "Ministério Zoe" }, estudo: "O autor descreve a Palavra como 'viva e eficaz... mais cortante que espada de dois gumes', capaz de discernir pensamentos e intenções do coração. Não é um texto estático, mas algo que age. Pergunte-se: quando foi a última vez que a Palavra realmente confrontou algo em você?" },
  { texto: "Sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus.", referencia: "Romanos 8:28", musica: { titulo: "Deus Sabe o Que Faz", artista: "Aline Barros" }, estudo: "O contexto fala de sofrimentos presentes comparados à glória futura — a promessa não é que tudo é bom, mas que Deus opera até o que é ruim para o bem de quem o ama. Reflita: você consegue enxergar a mão de Deus mesmo nas dificuldades atuais?" },
];

const FAVORITES_KEY = "versiculo-do-dia:favoritos";

const dateEl = document.getElementById("date");
const verseTextEl = document.getElementById("verse-text");
const verseRefEl = document.getElementById("verse-ref");
const newVerseBtn = document.getElementById("new-verse");
const copyBtn = document.getElementById("copy");
const favoriteBtn = document.getElementById("favorite");
const favCountEl = document.getElementById("fav-count");
const favoritesListEl = document.getElementById("favorites-list");
const toastEl = document.getElementById("toast");
const songTitleEl = document.getElementById("song-title");
const songArtistEl = document.getElementById("song-artist");
const studyRefEl = document.getElementById("study-ref");
const studyTextEl = document.getElementById("study-text");
const screens = document.querySelectorAll(".screen");
const tabButtons = document.querySelectorAll(".tab-btn");

let currentVerse = null;

function dayIndex(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  return Math.floor(diff / 86400000);
}

function verseOfTheDay() {
  const index = dayIndex(new Date()) % VERSES.length;
  return VERSES[index];
}

function randomVerse(exclude) {
  if (VERSES.length === 1) return VERSES[0];
  let verse;
  do {
    verse = VERSES[Math.floor(Math.random() * VERSES.length)];
  } while (exclude && verse.referencia === exclude.referencia);
  return verse;
}

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
  } catch {
    return [];
  }
}

function saveFavorites(favorites) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

function isFavorite(verse) {
  return getFavorites().some((v) => v.referencia === verse.referencia);
}

function renderFavorites() {
  const favorites = getFavorites();
  favCountEl.textContent = favorites.length;
  favoritesListEl.innerHTML = "";

  if (favorites.length === 0) {
    const li = document.createElement("li");
    li.className = "empty";
    li.textContent = "Nenhum versículo favoritado ainda.";
    favoritesListEl.appendChild(li);
    return;
  }

  favorites.forEach((verse) => {
    const li = document.createElement("li");
    li.textContent = `"${verse.texto}" — ${verse.referencia}`;
    favoritesListEl.appendChild(li);
  });
}

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => toastEl.classList.remove("show"), 2000);
}

function renderVerse(verse) {
  currentVerse = verse;
  verseTextEl.textContent = `"${verse.texto}"`;
  verseRefEl.textContent = verse.referencia;
  favoriteBtn.classList.toggle("active", isFavorite(verse));
  favoriteBtn.textContent = isFavorite(verse) ? "💛 Favoritado" : "🤍 Favoritar";
  songTitleEl.textContent = verse.musica.titulo;
  songArtistEl.textContent = verse.musica.artista;
  studyRefEl.textContent = verse.referencia;
  studyTextEl.textContent = verse.estudo;
}

function showScreen(name) {
  screens.forEach((screen) => {
    screen.classList.toggle("active", screen.id === `screen-${name}`);
  });
  tabButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.screen === name);
  });
}

function init() {
  dateEl.textContent = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  renderVerse(verseOfTheDay());
  renderFavorites();
}

newVerseBtn.addEventListener("click", () => {
  renderVerse(randomVerse(currentVerse));
});

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => showScreen(btn.dataset.screen));
});

copyBtn.addEventListener("click", async () => {
  const text = `"${currentVerse.texto}" — ${currentVerse.referencia}\n🎵 ${currentVerse.musica.titulo} — ${currentVerse.musica.artista}`;
  try {
    await navigator.clipboard.writeText(text);
    showToast("Versículo copiado!");
  } catch {
    showToast("Não foi possível copiar.");
  }
});

favoriteBtn.addEventListener("click", () => {
  const favorites = getFavorites();
  const index = favorites.findIndex((v) => v.referencia === currentVerse.referencia);

  if (index === -1) {
    favorites.push(currentVerse);
    showToast("Adicionado aos favoritos!");
  } else {
    favorites.splice(index, 1);
    showToast("Removido dos favoritos.");
  }

  saveFavorites(favorites);
  renderFavorites();
  renderVerse(currentVerse);
});

init();
