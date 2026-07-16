const VERSES = [
  { texto: "Porque para Deus nada é impossível.", referencia: "Lucas 1:37", musica: { titulo: "Tua Graça Me Basta", artista: "Davi Sacer" } },
  { texto: "Tudo posso naquele que me fortalece.", referencia: "Filipenses 4:13", musica: { titulo: "Tudo Posso", artista: "Fernandinho" } },
  { texto: "O Senhor é o meu pastor; nada me faltará.", referencia: "Salmos 23:1", musica: { titulo: "Salmo 23", artista: "Ministério Zoe" } },
  { texto: "Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o Senhor; pensamentos de paz, e não de mal, para vos dar o fim que esperais.", referencia: "Jeremias 29:11", musica: { titulo: "Ainda Que a Figueira Não Floresça", artista: "Nívea Soares" } },
  { texto: "Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento.", referencia: "Provérbios 3:5", musica: { titulo: "Confiarei", artista: "Anderson Freire" } },
  { texto: "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça.", referencia: "Isaías 41:10", musica: { titulo: "Não Temerei", artista: "Gabriela Rocha" } },
  { texto: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.", referencia: "João 3:16", musica: { titulo: "Ousado Amor", artista: "Isaias Saad" } },
  { texto: "Entrega o teu caminho ao Senhor; confia nele, e ele o fará.", referencia: "Salmos 37:5", musica: { titulo: "Preciso de Ti", artista: "Aline Barros" } },
  { texto: "Buscai primeiro o reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas.", referencia: "Mateus 6:33", musica: { titulo: "Buscarei", artista: "Aline Barros" } },
  { texto: "Alegrai-vos sempre no Senhor; outra vez digo, alegrai-vos.", referencia: "Filipenses 4:4", musica: { titulo: "A Alegria Está no Coração", artista: "Aline Barros" } },
  { texto: "O Senhor é a minha luz e a minha salvação; a quem temerei?", referencia: "Salmos 27:1", musica: { titulo: "Sol da Justiça", artista: "Aline Barros" } },
  { texto: "Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.", referencia: "1 Pedro 5:7", musica: { titulo: "Deus Cuida de Mim", artista: "André Valadão" } },
  { texto: "E conhecereis a verdade, e a verdade vos libertará.", referencia: "João 8:32", musica: { titulo: "Livre Estou", artista: "Gabriela Rocha" } },
  { texto: "Bendize, ó minha alma, ao Senhor, e não te esqueças de nenhum de seus benefícios.", referencia: "Salmos 103:2", musica: { titulo: "Bendize, Ó Alma Minha", artista: "Hinário tradicional" } },
  { texto: "Sede fortes e corajosos; não temais, nem vos assombreis diante deles, porque o Senhor teu Deus é o que vai contigo.", referencia: "Deuteronômio 31:6", musica: { titulo: "Coragem", artista: "Aline Barros" } },
  { texto: "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.", referencia: "Mateus 11:28", musica: { titulo: "Descansarei", artista: "Nívea Soares" } },
  { texto: "O amor é sofredor, é benigno; o amor não é invejoso; o amor não trata com leviandade, não se ensoberbece.", referencia: "1 Coríntios 13:4", musica: { titulo: "O Maior Amor", artista: "Aline Barros" } },
  { texto: "Clama a mim, e responder-te-ei, e anunciar-te-ei coisas grandes e ocultas, que não sabes.", referencia: "Jeremias 33:3", musica: { titulo: "Clamo a Ti", artista: "Gabriela Rocha" } },
  { texto: "Porque assim como os céus são mais altos do que a terra, assim são os meus caminhos mais altos do que os vossos caminhos, e os meus pensamentos mais altos do que os vossos pensamentos.", referencia: "Isaías 55:9", musica: { titulo: "Grande é o Senhor", artista: "Adhemar de Campos" } },
  { texto: "O Senhor te abençoe, e te guarde; o Senhor faça resplandecer o seu rosto sobre ti, e tenha misericórdia de ti.", referencia: "Números 6:24-25", musica: { titulo: "A Bênção", artista: "Isaias Saad" } },
  { texto: "Mas os que esperam no Senhor renovarão as forças, subirão com asas como águias; correrão, e não se cansarão; caminharão, e não se fatigarão.", referencia: "Isaías 40:31", musica: { titulo: "Renova-me", artista: "Aline Barros" } },
  { texto: "Este é o dia que fez o Senhor; regozijemo-nos, e alegremo-nos nele.", referencia: "Salmos 118:24", musica: { titulo: "Este É o Dia", artista: "Coral tradicional" } },
  { texto: "E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e os vossos sentimentos em Cristo Jesus.", referencia: "Filipenses 4:7", musica: { titulo: "Paz Perfeita", artista: "Diante do Trono" } },
  { texto: "Não andeis ansiosos por coisa alguma; antes, as vossas petições sejam em tudo conhecidas diante de Deus.", referencia: "Filipenses 4:6", musica: { titulo: "Fica Tranquilo", artista: "Ana Nóbrega" } },
  { texto: "Sê forte e corajoso; não temas, nem te espantes, porque o Senhor teu Deus é contigo, por onde quer que andares.", referencia: "Josué 1:9", musica: { titulo: "Não Temas", artista: "Diante do Trono" } },
  { texto: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.", referencia: "Salmos 46:1", musica: { titulo: "Refúgio", artista: "Aline Barros" } },
  { texto: "Se, pois, o Filho vos libertar, verdadeiramente sereis livres.", referencia: "João 8:36", musica: { titulo: "Livre", artista: "Isadora Pompeo" } },
  { texto: "Grandes coisas fez o Senhor por nós, e por isso estamos alegres.", referencia: "Salmos 126:3", musica: { titulo: "Grandes Coisas", artista: "Fernandinho" } },
  { texto: "Porque a palavra de Deus é viva e eficaz.", referencia: "Hebreus 4:12", musica: { titulo: "A Tua Palavra", artista: "Ministério Zoe" } },
  { texto: "Sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus.", referencia: "Romanos 8:28", musica: { titulo: "Deus Sabe o Que Faz", artista: "Aline Barros" } },
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
