(function () {
  var html = document.documentElement;
  var btn  = document.getElementById('themeToggle');

  function getTheme() { return html.getAttribute('data-theme') === 'light' ? 'light' : 'dark'; }
  function applyTheme(theme) {
    theme === 'light' ? html.setAttribute('data-theme', 'light') : html.removeAttribute('data-theme');
    localStorage.setItem('theme', theme);
  }

  html.classList.add('theme-ready');

  if (btn) btn.addEventListener('click', function () { applyTheme(getTheme() === 'dark' ? 'light' : 'dark'); });
  window.addEventListener('storage', function (e) { if (e.key === 'theme' && e.newValue) applyTheme(e.newValue); });
})();
