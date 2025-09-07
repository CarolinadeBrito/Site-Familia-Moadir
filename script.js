



// --- Código do carrossel ---
let slideIndex = 0;
const slides = document.querySelectorAll("#slides > div");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? "1" : "0";
  });
}

// Alterna automaticamente a cada 5 segundos
setInterval(() => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}, 3000);

const totalFotos = 29;
let currentIndex = 1;

const carrosselImg = document.getElementById("carrossel-img");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Função para atualizar a imagem
function updateImage() {
  carrosselImg.src = `imagens_sobre/IMG-202501 (${currentIndex}).jpg`;
  carrosselImg.alt = `Foto ${currentIndex}`;
}

// Botão próximo
nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > totalFotos) currentIndex = 1;
  updateImage();
});

// Botão anterior
prevBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 1) currentIndex = totalFotos;
  updateImage();
});

// Troca automática a cada 5 segundos (opcional)
setInterval(() => {
  currentIndex++;
  if (currentIndex > totalFotos) currentIndex = 1;
  updateImage();
}, 5000);

// Inicializa o primeiro slide
showSlide(slideIndex);
