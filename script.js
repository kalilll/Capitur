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

    const hero = document.getElementById('hero');
    hero.style.backgroundImage = `url(${ponto.imagem_fundo})`;
  });
