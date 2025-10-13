
    function setLanguage(lang, btn) {
      // Atualiza botão ativo
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Atualiza textos com base nos atributos data-pt e data-en
      document.querySelectorAll('[data-pt]').forEach(el => {
        const span = el.querySelector('span');
        if (span) {
          span.textContent = el.getAttribute(`data-${lang}`);
        } else {
          el.textContent = el.getAttribute(`data-${lang}`);
        }
      });
    }
  