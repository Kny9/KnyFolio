
const menuBtn = document.getElementById('menu-btn');  // Bouton pour ouvrir/fermer le menu
const menu = document.getElementById('menu');

// Fonction pour afficher ou masquer le menu lorsqu'on clique sur le bouton
menuBtn.addEventListener('click', () => {
  // Rediriger vers la page menu.html lorsque le bouton est cliqué
  window.location.href = 'menu.html';
});

// Fermer le menu si l'utilisateur clique ailleurs que sur le menu ou le bouton
document.addEventListener('click', (e) => {
  if (!menuBtn.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.add('hidden');
  }
});

// Ajouter une gestion d'événements pour chaque lien dans le menu (facultatif)
const menuLinks = document.querySelectorAll('#menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.add('hidden'); // Ferme le menu lorsque l'un des liens est cliqué
  });
});

const badges = document.querySelectorAll('.skill-badge');

badges.forEach(badge => {
  const skill = badge.getAttribute('data-skill');
  const bar = document.getElementById(`bar-${skill}`);

  if (bar) {
    // Quand la souris entre sur le badge
    badge.addEventListener('mouseenter', () => {
      bar.style.backgroundColor = '#3B82F6'; // bleu Tailwind
    });

    // Quand la souris sort du badge
    badge.addEventListener('mouseleave', () => {
      bar.style.backgroundColor = 'white'; // remet la couleur d'origine
    });
  }
});
