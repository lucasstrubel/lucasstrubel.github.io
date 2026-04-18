(function () {
  var html = document.documentElement;
  var btn  = document.getElementById('themeToggle');

  function setTheme(theme) {
    theme === 'light'
      ? html.setAttribute('data-theme', 'light')
      : html.removeAttribute('data-theme');
  }

  function applyTheme(theme) {
    setTheme(theme);
    localStorage.setItem('theme', theme);
  }

  html.classList.add('theme-ready');

  if (btn) btn.addEventListener('click', function () {
    applyTheme(html.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
  });

  // Sync explicit toggle across open tabs
  window.addEventListener('storage', function (e) {
    if (e.key === 'theme' && e.newValue) applyTheme(e.newValue);
  });

  // Follow OS preference changes — only when user hasn't manually toggled
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function (e) {
    if (!localStorage.getItem('theme')) setTheme(e.matches ? 'light' : 'dark');
  });
})();
