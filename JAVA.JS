<script>
  function setLanguage(lang, btn) {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('[data-pt]').forEach(el => {
      const span = el.querySelector('span');
      if (span) {
        span.textContent = el.getAttribute(`data-${lang}`);
      } else {
        el.textContent = el.getAttribute(`data-${lang}`);
      }
    });
  }
</script>