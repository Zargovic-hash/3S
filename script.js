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

// Gestion des vidéos dans le carrousel
const videos = document.querySelectorAll('.carousel-item video');

videos.forEach(video => {
    video.addEventListener('play', () => {
        const currentItem = video.closest('.carousel-item');
        currentItem.setAttribute('data-bs-interval', 'false');  // Désactive l'intervalle de passage automatique
    });

    video.addEventListener('pause', () => {
        const currentItem = video.closest('.carousel-item');
        currentItem.setAttribute('data-bs-interval', 10000); // Réactive l'intervalle
    });

    video.addEventListener('ended', () => {
        const currentItem = video.closest('.carousel-item');
        currentItem.setAttribute('data-bs-interval', 10000); // Réactive l'intervalle
    });
});

// Fonction pour basculer entre mute et unmute
function toggleMute(button, videoIndex) {
    const video = document.querySelectorAll('.carousel-item video')[videoIndex];

    if (video.muted) {
        video.muted = false;
        button.innerText = "Mute";
    } else {
        video.muted = true;
        button.innerText = "Unmute";
    }
}

// Gestion de l'ouverture/fermeture des menus déroulants
document.querySelectorAll('.dropdown').forEach(function(dropdown) {
    dropdown.addEventListener('click', function(event) {
        event.stopPropagation(); // Empêche la propagation de l'événement
        const dropdownMenu = this.querySelector('.dropdown-menu');
        dropdownMenu.classList.toggle('show'); // Bascule la visibilité
    });
});

// Fermer le menu déroulant lorsqu'on clique en dehors de celui-ci
document.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
            menu.classList.remove('show'); // Supprime la classe 'show' pour cacher les menus
        });
    }
});

// Empêcher la fermeture immédiate lorsqu'on clique à l'intérieur d'un dropdown
document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
    menu.addEventListener('click', function(event) {
        event.stopPropagation(); // Empêche la propagation du clic vers le document
    });
});

      document.addEventListener("DOMContentLoaded", function () {
          let carousel = document.getElementById("carouselExampleDark");
    
          if (!carousel) {
              console.error("Carousel non trouvé !");
              return;
          }
    
          carousel.addEventListener("slide.bs.carousel", function () {
              console.log("Le carousel change de slide !");
              
              let videos = document.querySelectorAll("video");
              videos.forEach(video => {
                  video.pause();
                  video.currentTime = 0;
              });
          });
      });

     // Ajout des options au menu déroulant
      document.addEventListener("DOMContentLoaded", function () {
     const option = document.createElement('option');
     option.value = service.name.toLowerCase().replace(/\s+/g, '-');
     option.textContent = service.name;
     serviceSelect.appendChild(option);
   });
      