// script.js

const fallingStarsContainer = document.querySelector('.falling-stars');

// Generar estrellas
function createStars() {
  const starCount = 150; // Aumenta el número de estrellas
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    star.style.animationDuration = `${Math.random() * 5 + 2}s`;
    fallingStarsContainer.appendChild(star);
  }
}

createStars();