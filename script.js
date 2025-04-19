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
    document.getElementById('introducao1').textContent = ponto.introducao1;
    document.getElementById('introducao2').textContent = ponto.introducao2;
    document.getElementById('image1').src = ponto.image1;
    document.getElementById('image2').src = ponto.image2;
    document.getElementById('image3').src = ponto.image3;
    document.getElementById('text_como_chegar1').textContent =ponto.text_como_chegar1;
    document.getElementById('text_como_chegar2').textContent =ponto.text_como_chegar2;
    document.getElementById('text_como_chegar3').textContent =ponto.text_como_chegar3;
    document.getElementById('image4').src = ponto.image4;
    document.getElementById('text_onde_ficar1').textContent =ponto.text_onde_ficar1;
    document.getElementById('text_onde_ficar2').textContent =ponto.text_onde_ficar2;
    document.getElementById('text_onde_ficar3').textContent =ponto.text_onde_ficar3;

    const hero = document.getElementById('hero');
    hero.style.backgroundImage = `url(${ponto.imagem_fundo})`;
  });

  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000);
  }
  