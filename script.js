const canvas = document.getElementById('coinCanvas');
const ctx = canvas.getContext('2d');

function drawCoin(result) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 80, 0, Math.PI * 2);
    ctx.fillStyle = result === 'cara' ? 'gold' : 'silver';
    ctx.fill();

    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.fillText(result.charAt(0).toUpperCase() + result.slice(1), canvas.width / 2, canvas.height / 2 + 10);
}

function flipCoin() {
    const random = Math.random();
    const result = random < 0.5 ? 'cara' : 'coroa';
    drawCoin(result);
}

// Inicializa o desenho com a moeda virada para baixo
drawCoin('');
