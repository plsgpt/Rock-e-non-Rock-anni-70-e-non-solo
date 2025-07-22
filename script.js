
document.addEventListener('DOMContentLoaded', () => {
  // Pulsante torna su
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Pulsante play/pause playlist Spotify (simulazione show/hide)
  const playPauseBtn = document.getElementById('playPause');
  const spotifyFrame = document.querySelector('#playlist iframe');
  if (playPauseBtn && spotifyFrame) {
    playPauseBtn.addEventListener('click', () => {
      spotifyFrame.style.display = spotifyFrame.style.display === 'none' ? 'block' : 'none';
    });
  }

  // Scroll + suono per pulsante "Musica"
  const musicaBtn = document.querySelector('a[href="#playlist"]');
  const sezioneMusica = document.querySelector('#playlist');
  if (musicaBtn && sezioneMusica) {
    musicaBtn.addEventListener('click', (e) => {
      e.preventDefault();
      sezioneMusica.scrollIntoView({ behavior: 'smooth' });
      const sound = new Audio('https://www.soundjay.com/button/sounds/button-16.mp3');
      sound.play();
    });
  }
});
