const countdownElement = document.getElementById('countdown');

// Configuração da data para a contagem regressiva
const targetDate = new Date('2025-01-24T00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        countdownElement.innerHTML = "Chegou o grande dia! 💖";
        clearInterval(interval);
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw'; // Posição aleatória horizontal
    heart.style.animationDuration = Math.random() * 2 + 4 + 's'; // Duração da animação
    heart.style.opacity = Math.random(); // Opacidade aleatória para variação visual
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Criar mais corações aumentando a frequência
const interval = setInterval(updateCountdown, 1000);
updateCountdown();
setInterval(createHeart, 100); // Intervalo menor para mais corações
