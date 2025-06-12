// 🎆 Fogos de artifício
function soltarFogos() {
  const duration = 15 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti({
      ...defaults,
      particleCount,
      origin: {
        x: randomInRange(0.1, 0.9),
        y: Math.random() - 0.2
      }
    });
  }, 300);
}

soltarFogos();

// 💖 Corações flutuantes
function criarCoracao() {
  const container = document.querySelector('.hearts-container');
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerText = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 20 + 16 + 'px';
  container.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

setInterval(criarCoracao, 500);

// 📸 Carrossel de fotos manual
const imagens = [
  'imagem/Amor1.jpg',
  'imagem/Amor2.jpg',
  'imagem/Amor3.jpg',
  'imagem/Amor4.jpg',
  'imagem/Amor5.jpg',
  'imagem/Amor6.jpg',
];

let indiceAtual = 0;

const imgElemento = document.querySelector('.foto-casal img');
const btnEsquerda = document.querySelector('.seta.esquerda');
const btnDireita = document.querySelector('.seta.direita');

function atualizarImagem() {
  imgElemento.src = imagens[indiceAtual];
}

btnEsquerda.addEventListener('click', () => {
  indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
  atualizarImagem();
});

btnDireita.addEventListener('click', () => {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  atualizarImagem();
});
