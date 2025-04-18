const params = new URLSearchParams(window.location.search);
const id = params.get('id');

fetch('dados.json')
  .then(response => response.json())
  .then(data => {
    const ponto = data.pontos.find(p => p.id === id);

    if (!ponto) {
      document.body.innerHTML = '<h1>Ponto turístico não encontrado</h1>';
      return;
    }

    document.getElementById('titulo').textContent = ponto.titulo;
    document.getElementById('descricao').textContent = ponto.descricao;
    document.getElementById('logo').src = ponto.logo;
    document.getElementById('introducao').textContent = ponto.introducao;
    document.getElementById('image1').src = ponto.image1;
    document.getElementById('image2').src = ponto.image2;
    document.getElementById('image3').src = ponto.image3;

    const hero = document.getElementById('hero');
    hero.style.backgroundImage = `url(${ponto.imagem_fundo})`;
  });

  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
