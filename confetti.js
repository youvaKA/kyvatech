// Animation de confettis pour la page de remerciement
document.addEventListener('DOMContentLoaded', function() {
    const confettiContainer = document.getElementById('confetti-container');
    
    // Fonction pour créer un confetti
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Position aléatoire en haut de l'écran
        confetti.style.left = Math.random() * 100 + '%';
        
        // Taille aléatoire
        const size = Math.random() * 8 + 6;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        
        // Forme aléatoire (carré ou rond)
        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        }
        
        // Délai d'animation aléatoire
        confetti.style.animationDelay = Math.random() * 2 + 's';
        
        // Durée d'animation aléatoire
        const duration = Math.random() * 2 + 2.5;
        confetti.style.animationDuration = duration + 's';
        
        confettiContainer.appendChild(confetti);
        
        // Supprimer le confetti après l'animation
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, duration * 1000);
    }
    
    // Fonction pour lancer l'animation de confettis
    function startConfetti() {
        // Créer plusieurs vagues de confettis
        for (let i = 0; i < 50; i++) {
            setTimeout(createConfetti, i * 100);
        }
        
        // Deuxième vague après 2 secondes
        setTimeout(() => {
            for (let i = 0; i < 30; i++) {
                setTimeout(createConfetti, i * 80);
            }
        }, 2000);
        
        // Troisième vague après 4 secondes
        setTimeout(() => {
            for (let i = 0; i < 20; i++) {
                setTimeout(createConfetti, i * 120);
            }
        }, 4000);
    }
    
    // Démarrer l'animation après un court délai
    setTimeout(startConfetti, 800);
    
    // Animation au clic sur la page
    document.addEventListener('click', function() {
        for (let i = 0; i < 15; i++) {
            setTimeout(createConfetti, i * 50);
        }
    });
});

// Animation pour le menu mobile (reprise de la logique existante si nécessaire)
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenu && mainNav) {
        mobileMenu.addEventListener('click', function() {
            mainNav.classList.toggle('open');
            mobileMenu.classList.toggle('open');
        });
        
        // Fermer le menu en cliquant sur un lien
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mainNav.classList.remove('open');
                mobileMenu.classList.remove('open');
            });
        });
    }
});
