document.addEventListener('DOMContentLoaded', () => {
  
  // Pulsante torna su
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({top:0, behavior:'smooth'});
  });

  // Pulsante play/pause playlist Spotify (simulazione show/hide)
  const playPauseBtn = document.getElementById('playPause');
  const spotifyFrame = document.querySelector('#playlist iframe');
  playPauseBtn.addEventListener('click', () => {
    if(!spotifyFrame) return;
    if(spotifyFrame.style.display === 'none' || spotifyFrame.style.display === ''){
      spotifyFrame.style.display = 'block';
    } else {
      spotifyFrame.style.display = 'none';
    }
  });
});

// Scroll + suono per pulsante "Musica"
document.addEventListener("DOMContentLoaded", () => {
  const musicaBtn = document.querySelector('a[href="#playlist"]');
  const sezioneMusica = document.querySelector('#playlist');
  
  if (musicaBtn && sezioneMusica) {
    musicaBtn.addEventListener('click', (e) => {
      e.preventDefault();
      sezioneMusica.scrollIntoView({ behavior: 'smooth' });

      // Suono retrò
      const sound = new Audio('https://www.soundjay.com/button/sounds/button-16.mp3');
      sound.play();
    });
  }
});

const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
