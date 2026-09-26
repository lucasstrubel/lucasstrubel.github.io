(function () {
  var html = document.documentElement;
  var btn  = document.getElementById('themeToggle');

  function setTheme(theme) {
    if (theme === 'light') html.setAttribute('data-theme', 'light');
    else html.removeAttribute('data-theme');
  }

  function applyTheme(theme) {
    setTheme(theme);
    try { localStorage.setItem('theme', theme); } catch (e) { /* not persisted */ }
  }

  function storedTheme() {
    try { return localStorage.getItem('theme'); } catch (e) { return null; }
  }

  html.classList.add('theme-ready');

  if (btn) btn.addEventListener('click', function () {
    applyTheme(html.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
  });

  // Sync explicit toggle across open tabs (the other tab already stored it)
  window.addEventListener('storage', function (e) {
    if (e.key === 'theme' && e.newValue) setTheme(e.newValue);
  });

  // Follow OS preference changes — only when user hasn't manually toggled
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function (e) {
    if (!storedTheme()) setTheme(e.matches ? 'light' : 'dark');
  });
})();
