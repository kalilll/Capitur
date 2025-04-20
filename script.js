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
    document.getElementById('legenda_image1').textContent = ponto.legenda_image1;
    document.getElementById('image2').src = ponto.image2;
    document.getElementById('legenda_image2').textContent = ponto.legenda_image2;
    document.getElementById('image3').src = ponto.image3;
    document.getElementById('legenda_image3').textContent = ponto.legenda_image3;

    document.getElementById('text_como_chegar1').textContent =ponto.text_como_chegar1;
    document.getElementById('text_como_chegar2').textContent =ponto.text_como_chegar2;
    document.getElementById('text_como_chegar3').textContent =ponto.text_como_chegar3;
    document.getElementById('image4').src = ponto.image4;
    document.getElementById('legenda_image_como_chegar').textContent =ponto.legenda_image_como_chegar;
    
    document.getElementById('text_onde_ficar1').textContent =ponto.text_onde_ficar1;
    document.getElementById('text_onde_ficar2').textContent =ponto.text_onde_ficar2;
    document.getElementById('text_onde_ficar3').textContent =ponto.text_onde_ficar3;
    document.getElementById('image_onde_ficar1').src = ponto.image_onde_ficar1;
    document.getElementById('legenda_image_onde_ficar1').textContent =ponto.legenda_image_onde_ficar1;
    document.getElementById('image_onde_ficar2').src = ponto.image_onde_ficar2;
    document.getElementById('legenda_image_onde_ficar2').textContent =ponto.legenda_image_onde_ficar2;
    document.getElementById('image_onde_ficar3').src = ponto.image_onde_ficar3;
    document.getElementById('legenda_image_onde_ficar3').textContent =ponto.legenda_image_onde_ficar3;
    document.getElementById('image_onde_ficar4').src = ponto.image_onde_ficar4;
    document.getElementById('legenda_image_onde_ficar4').textContent =ponto.legenda_image_onde_ficar4;
    
    document.getElementById('text_passeios1').textContent =ponto.text_passeios1;
    document.getElementById('text_passeios2').textContent =ponto.text_passeios2;
    document.getElementById('text_passeios3').textContent =ponto.text_passeios3;
    document.getElementById('image_passeios1').src = ponto.image_passeios1;
    document.getElementById('legenda_image_passeios1').textContent =ponto.legenda_image_passeios1;
    document.getElementById('image_passeios2').src = ponto.image_passeios2;
    document.getElementById('legenda_image_passeios2').textContent =ponto.legenda_image_passeios2;
    document.getElementById('image_passeios3').src = ponto.image_passeios3;
    document.getElementById('legenda_image_passeios3').textContent =ponto.legenda_image_passeios3;
    document.getElementById('image_passeios4').src = ponto.image_passeios4;
    document.getElementById('legenda_image_passeios4').textContent =ponto.legenda_image_passeios4;
    
    document.getElementById('text_restaurantes1').textContent =ponto.text_restaurantes1;
    document.getElementById('text_restaurantes2').textContent =ponto.text_restaurantes2;
    document.getElementById('text_restaurantes3').textContent =ponto.text_restaurantes3;
    document.getElementById('image_restaurantes1').src = ponto.image_restaurantes1;
    document.getElementById('legenda_image_restaurantes1').textContent =ponto.legenda_image_restaurantes1;
    document.getElementById('image_restaurantes2').src = ponto.image_restaurantes2;
    document.getElementById('legenda_image_restaurantes2').textContent =ponto.legenda_image_restaurantes2;
    document.getElementById('image_restaurantes3').src = ponto.image_restaurantes3;
    document.getElementById('legenda_image_restaurantes3').textContent =ponto.legenda_image_restaurantes3;


    const hero = document.getElementById('hero');
    hero.style.backgroundImage = `url(${ponto.imagem_fundo})`;
  });

  let slideIndex = [0, 0, 0, 0];
  let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"];
  
  showSlidesAuto(0);
  showSlidesAuto(1);
  showSlidesAuto(2);
  showSlidesAuto(3);
  
  function showSlidesAuto(no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
  
    slideIndex[no]++;
    if (slideIndex[no] > x.length) {
      slideIndex[no] = 1;
    }
  
    x[slideIndex[no] - 1].style.display = "block";  
  
    setTimeout(() => showSlidesAuto(no), 4000);
  }
  