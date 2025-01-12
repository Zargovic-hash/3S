// Menu Hamburger
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('show');
});

// Recherche
const searchInput = document.getElementById('search-input');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const category = card.dataset.category.toLowerCase();
        if (category.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});


 // Ajouter des événements pour interagir avec les vidéos
 videos.forEach(video => {
    video.addEventListener('play', () => {
        // Désactive le changement automatique de slide lorsque la vidéo est jouée
        const currentItem = video.closest('.carousel-item');
        currentItem.setAttribute('data-bs-interval', 'false');  // Désactive l'intervalle de passage automatique
    });

    video.addEventListener('pause', () => {
        // Réactive le changement automatique de slide lorsque la vidéo est en pause
        const currentItem = video.closest('.carousel-item');
        currentItem.setAttribute('data-bs-interval', 10000); // Remet l'intervalle
    });

    video.addEventListener('ended', () => {
        // Réactive le changement automatique de slide lorsque la vidéo est terminée
        const currentItem = video.closest('.carousel-item');
        currentItem.setAttribute('data-bs-interval', 10000); // Remet l'intervalle
    });
});

    // Fonction pour basculer entre mute et unmute
    function toggleMute(button, videoIndex) {
        // Sélectionner la vidéo correspondante
        const video = document.querySelectorAll('.carousel-item video')[videoIndex];

        // Vérifier si la vidéo est actuellement muette
        if (video.muted) {
            video.muted = false;
            button.innerText = "Mute";  // Changer le texte du bouton en "Mute"
        } else {
            video.muted = true;
            button.innerText = "Unmute";  // Changer le texte du bouton en "Unmute"
        }
    }