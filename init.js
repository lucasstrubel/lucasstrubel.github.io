// Loaded synchronously in <head> so the first paint already has the right theme and language.
// Kept in its own file (not inline) so the Content Security Policy can stay at script-src 'self'.
(function () {
  var html = document.documentElement;

  // localStorage throws in some privacy modes; fall back to the defaults
  function read(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  var theme = read('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  if (theme === 'light') html.setAttribute('data-theme', 'light');

  // A choice made with the toggle wins; otherwise follow the browser (German or English)
  var lang = read('lang');
  if (!lang) {
    var prefs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
    lang = /^de\b/i.test(prefs[0]) ? 'de' : 'en';
  }
  html.lang = lang === 'de' ? 'de' : 'en';
})();
