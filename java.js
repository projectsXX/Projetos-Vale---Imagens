// 1. Função para alternar idioma
function setLanguage(lang, btn) {
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('[data-pt]').forEach(el => {
    const translation = el.getAttribute(`data-${lang}`);
    const span = el.querySelector('span');

    if (span) {
      span.textContent = translation;
    } else {
      el.textContent = translation;
    }
  });
}
// 2. Abrir/fechar sidebar principal
const toggleBtn = document.getElementById('menu-toggle');
toggleBtn.addEventListener('click', () => {
  const sidebar = document.getElementById('sidebar');
  const subSidebars = document.querySelectorAll('.sub-sidebar');

  // Alterna visibilidade do sidebar principal
  const isVisible = sidebar.classList.contains('visible');
  sidebar.classList.toggle('visible');
  toggleBtn.classList.toggle('active');

  // Sempre fecha os sub-sidebars ao clicar no botão
  subSidebars.forEach(sub => sub.classList.remove('visible'));
  document.querySelectorAll('#sidebar li').forEach(li => li.classList.remove('selected'));

  // Se já estava visível, significa que está sendo fechado, então limpa tudo
  if (isVisible) {
    sidebar.classList.remove('visible');
    toggleBtn.classList.remove('active');
  }
});
// 3. Fechar todos os sidebars ao clicar fora
document.addEventListener('click', function (event) {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('menu-toggle');
  const subSidebars = document.querySelectorAll('.sub-sidebar');

  if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
    sidebar.classList.remove('visible');
    toggleBtn.classList.remove('active');

    subSidebars.forEach(sub => sub.classList.remove('visible'));
    document.querySelectorAll('#sidebar li').forEach(li => li.classList.remove('selected'));
  }
});


// 4. Controle de sub-sidebars e destaque visual com toggle
document.querySelectorAll('#sidebar li').forEach(item => {
  item.addEventListener('click', () => {
    const id = item.id;
    const target = document.getElementById('sub-' + id);
    const isAlreadySelected = item.classList.contains('selected');

    // Fecha todos os sub-sidebars e remove seleção
    document.querySelectorAll('.sub-sidebar').forEach(sub => sub.classList.remove('visible'));
    document.querySelectorAll('#sidebar li').forEach(li => li.classList.remove('selected'));

    // Se já estava selecionado, apenas fecha tudo
    if (isAlreadySelected) {
      return;
    }

    // Se não estava selecionado, abre o correspondente
    if (id !== 'home' && target) {
      target.classList.add('visible');
      item.classList.add('selected');
    }
  });
});