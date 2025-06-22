document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for fixed header height
                    behavior: 'smooth'
                });
            }
        });
    });


    // Vous pourriez vouloir un bouton de menu mobile ici
    // Exemple (nécessite une icône hamburger en HTML et CSS pour le mobile)
    // const mobileMenuButton = document.querySelector('.mobile-menu-toggle');
    // const mainNav = document.querySelector('.main-nav');
    // if (mobileMenuButton) {
    //     mobileMenuButton.addEventListener('click', () => {
    //         mainNav.classList.toggle('active');
    //     });
    // }

    // Si vous avez un curseur d'image dans la section héro, vous ajouteriez du JS ici.
    // Pour l'instant, c'est juste une image de fond statique.

    // Code pour le fond dynamique (Parallaxe) - NOUVEAU CODE ICI
    const parallaxImage = document.querySelector('.parallax-image');
    const container = document.querySelector('.parallax-container');

    if (parallaxImage && container) {
        // Obtenir les dimensions du conteneur pour calculer le centre
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;

        container.addEventListener('mousemove', (e) => {
            // Coordonnées de la souris par rapport au centre du conteneur
            // (0,0) est le centre, (-1, -1) est en haut à gauche, (1,1) est en bas à droite
            const mouseX = e.clientX - (container.getBoundingClientRect().left + containerWidth / 2);
            const mouseY = e.clientY - (container.getBoundingClientRect().top + containerHeight / 2);

            // Facteur de mouvement (ajustez ces valeurs pour un effet plus ou moins prononcé)
            // Des valeurs plus petites comme 0.02 ou 0.03 donnent un mouvement subtil
            const moveX = mouseX * 0.03; 
            const moveY = mouseY * 0.03; 

            // Appliquer la transformation CSS
            // translate3d est souvent préféré pour la performance car il utilise l'accélération matérielle
            parallaxImage.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
        });

        // Optionnel : Réinitialiser la position quand la souris quitte le conteneur
        container.addEventListener('mouseleave', () => {
            parallaxImage.style.transform = `translate3d(0, 0, 0)`;
        });
    } else {
        console.error("Les éléments .parallax-image ou .parallax-container n'ont pas été trouvés. Vérifiez votre HTML.");
    }
});