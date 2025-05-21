// === REDIRECTION AU CLIC SUR LE LOGO DE CINÉPLEX ===
document.querySelector('.logo-cineplex-entete').addEventListener('click', () => {
    window.location.href = 'accueil.html'; 
  });
  
  // === REDIRECTION AU CLIC SUR "EXPÉRIENCES BONIFIÉES" (DESKTOP + MOBILE) ===
  const liensExperience = document.querySelectorAll('.experiences-bonifiees a');
  
  liensExperience.forEach((lien) => {
    lien.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'experiences.html';
    });
  });

  