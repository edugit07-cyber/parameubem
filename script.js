// 1. SISTEMA DE NAVEGAÇÃO SEM RECARREGAR A PÁGINA (A MÚSICA CONTINUA TOCANDO)
function switchPage(pageId, navElement) {
  // Esconde todas as seções
  const pages = document.querySelectorAll('.page-content');
  pages.forEach(page => page.classList.remove('active'));

  // Remove o estado ativo de todos os links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => link.classList.remove('active'));

  // Exibe a página selecionada e ativa o botão no menu
  document.getElementById(pageId).classList.add('active');
  if (navElement) {
    navElement.classList.add('active');
  }

  // Rola para o topo suavemente
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToPage(pageId, navIndex) {
  const navLinks = document.querySelectorAll('.nav-link');
  switchPage(pageId, navLinks[navIndex]);
}

// 2. CÁLCULO DE TEMPO (03/07/2026)
const startDate = new Date("2026-07-03T00:00:00");

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  if (diff > 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
  }
}

setInterval(updateTimer, 1000);
updateTimer();

// 3. CARROSSEL DE FOTOS
let slideIndex = 0;
const slide = document.getElementById("carouselSlide");

function moveSlide(direction) {
  if (!slide) return;
  const totalSlides = slide.children.length;
  slideIndex = (slideIndex + direction + totalSlides) % totalSlides;
  slide.style.transform = `translateX(-${slideIndex * 100}%)`;
}

if (slide) {
  setInterval(() => moveSlide(1), 5000);
}

// 4. REPRODUTOR DE MÚSICA
const music = document.getElementById("bgMusic");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");

function toggleMusic() {
  if (music.paused) {
    music.play();
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
  } else {
    music.pause();
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
  }
}

// 5. ANIMAÇÃO DE CORAÇÕES
function createSoftHeart() {
  const container = document.getElementById("heart-container");
  if (!container) return;
  
  const heart = document.createElement("div");
  heart.classList.add("soft-heart");
  
  const icons = ["♥", "✦", "❥"];
  heart.innerText = icons[Math.floor(Math.random() * icons.length)];
  
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 12 + 10) + "px";
  heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
  
  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createSoftHeart, 800);

// 6. MENSAGEM DO BOTÃO
function triggerLove() {
  alert("Te amar é a decisão mais fácil e bonita que tomei na vida. ❤️");
  for (let i = 0; i < 20; i++) {
    setTimeout(createSoftHeart, i * 60);
  }
}