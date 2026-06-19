(function () {
  const KEY = 'vics-theme';
  const body = document.body;
  const toggle = document.querySelector('.mode-toggle');

  function applyTheme(theme) {
    const isNeon = theme === 'neon';
    body.classList.toggle('neon-mode', isNeon);
    if (toggle) {
      toggle.textContent = isNeon ? 'Light Mode' : 'Neon Mode';
      toggle.setAttribute('aria-pressed', isNeon ? 'true' : 'false');
    }
  }

  const savedTheme = localStorage.getItem(KEY) || 'light';
  applyTheme(savedTheme);

  if (toggle) {
    toggle.addEventListener('click', function () {
      const nextTheme = body.classList.contains('neon-mode') ? 'light' : 'neon';
      localStorage.setItem(KEY, nextTheme);
      applyTheme(nextTheme);
    });
  }
})();
