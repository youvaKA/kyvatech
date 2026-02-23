// Animation de confettis pour la page de remerciement
document.addEventListener('DOMContentLoaded', function() {
    const confettiContainer = document.getElementById('confetti-container');
    if (!confettiContainer) return;

    const colors = ['#00f0ff', '#7b2ff7', '#ff3366', '#00d4aa', '#a855f7', '#f472b6'];

    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        confetti.style.left = Math.random() * 100 + '%';
        
        const size = Math.random() * 8 + 6;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        }
        
        confetti.style.animationDelay = Math.random() * 2 + 's';
        
        const duration = Math.random() * 2 + 2.5;
        confetti.style.animationDuration = duration + 's';
        
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, (duration + 2) * 1000);
    }
    
    function startConfetti() {
        for (let i = 0; i < 50; i++) {
            setTimeout(createConfetti, i * 100);
        }
        
        setTimeout(() => {
            for (let i = 0; i < 30; i++) {
                setTimeout(createConfetti, i * 80);
            }
        }, 2000);
        
        setTimeout(() => {
            for (let i = 0; i < 20; i++) {
                setTimeout(createConfetti, i * 120);
            }
        }, 4000);
    }
    
    setTimeout(startConfetti, 800);
    
    document.addEventListener('click', function() {
        for (let i = 0; i < 15; i++) {
            setTimeout(createConfetti, i * 50);
        }
    });
});
