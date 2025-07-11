const topBtn = document.getElementById('topBtn');

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = 'block';
  } else {
    topBtn.style.display = 'none';
  }
};

topBtn.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({behavior: 'smooth'});
    }
  });
});
