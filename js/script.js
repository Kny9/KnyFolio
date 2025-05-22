// MENU DYNAMIQUE & TOGGLE

const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

const menuLinks = [
  { href: "index.html", label: "Accueil" },
  { href: "projects.html", label: "Projets" },
  { href: "about.html", label: "À propos" },
  { href: "contact.html", label: "Contact" },
  { href: "img/mon-cv.pdf", label: "CV" },
];

// Générer le menu
function generateMenu() {
  // On vide le menu pour éviter les doublons au cas où
  menu.innerHTML = "";
  
  menuLinks.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.label;
    a.className = 'block px-4 py-2 hover:bg-gray-700 text-white';
    menu.appendChild(a);

    // Fermer menu au clic sur un lien
    a.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

// Afficher/masquer menu
menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  menu.classList.toggle('hidden');
});

// Clic en dehors du menu => ferme menu
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
    menu.classList.add('hidden');
  }
});

// Gestion hover sur badges de compétences pour changer couleur barre
function setupSkillBadges() {
  const badges = document.querySelectorAll('.skill-badge');
  badges.forEach(badge => {
    const skill = badge.getAttribute('data-skill');
    const bar = document.getElementById(`bar-${skill}`);

    if (bar) {
      badge.addEventListener('mouseenter', () => {
        bar.style.backgroundColor = '#3B82F6'; // bleu Tailwind
      });
      badge.addEventListener('mouseleave', () => {
        bar.style.backgroundColor = 'white';
      });
    }
  });
}

// Animation fade-in sur la section principale (facultative)
function fadeInContent() {
  const contentElems = document.querySelectorAll('main section > *');
  contentElems.forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transition = 'opacity 0.8s ease';
    setTimeout(() => {
      el.style.opacity = 1;
    }, i * 300);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  generateMenu();
  setupSkillBadges();
  fadeInContent();
});
