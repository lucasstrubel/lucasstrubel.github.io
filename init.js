// Loaded synchronously in <head> so the first paint already has the right theme and language.
// Kept in its own file (not inline) so the Content Security Policy can stay at script-src 'self'.
(function () {
  var html = document.documentElement;

  // localStorage throws in some privacy modes; fall back to the defaults
  function read(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  var theme = read('theme') ||
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  if (theme === 'light') html.setAttribute('data-theme', 'light');

  // English is the default; German only when the visitor chose it
  html.lang = read('lang') === 'de' ? 'de' : 'en';
})();
