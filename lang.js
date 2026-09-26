(function () {
  var html = document.documentElement;
  var btn  = document.getElementById('langToggle');

  // English is written directly in the HTML (what crawlers and link previews see);
  // this is the German counterpart. Long-form text (project and blog pages) uses
  // paired data-lang blocks instead.
  var de = {
    // Shared
    'nav.about':    'Über mich',
    'nav.skills':   'Kenntnisse',
    'nav.projects': 'Projekte',
    'nav.contact':  'Kontakt',
    'a11y.theme':   'Farbschema wechseln',
    'a11y.menu':    'Menü öffnen',
    'a11y.ghFaktura':   'Faktura auf GitHub',
    'a11y.ghPortfolio': 'Portfolio-Website auf GitHub',
    'a11y.ghProfile':   'GitHub-Profil',
    'a11y.lang':    'DE/EN – Sprache wechseln',
    'a11y.skip':    'Zum Inhalt springen',
    'footer.built': 'Gestaltet &amp; entwickelt von Lucas Strubel',
    'back.projects': 'Zurück zu den Projekten',
    'back.allProjects': 'Alle Projekte',
    'back.blog':    'Zurück zum Blog',
    'back.allPosts': 'Alle Beiträge',

    // Hero
    'hero.badge':    'Offen für Praktika &amp; Werkstudentenstellen',
    'hero.title':    'Hallo, ich bin <span class="gradient-text">Lucas</span>',
    'hero.subtitle': 'Student der Wirtschaftsinformatik',
    'hero.desc':     'Ich verbinde technische Lösungen mit betriebswirtschaftlichem Verständnis — und übersetze komplexe Prozesse, Daten und Systeme in klare, umsetzbare Ergebnisse.',
    'hero.work':     'Meine Projekte',
    'hero.contact':  'Kontakt aufnehmen',

    // About
    'about.tag':    'Wer ich bin',
    'about.title':  'Über mich',
    'about.imgAlt': 'Lucas Strubel im Freien',
    'about.lead':   'Ich studiere Wirtschaftsinformatik und verbinde technische Tiefe mit betriebswirtschaftlichem Denken. Komplexe Prozesse, Daten und Systeme mache ich zu klaren, pragmatischen Lösungen für echte organisatorische Herausforderungen.',
    'about.body':   'In eigenen Projekten, Team-Laboren und im Studium habe ich mir angewöhnt, unklare Probleme zu strukturieren, sie einfach zu erklären und Ergebnisse zu liefern, die tatsächlich nutzbar sind. Wenn ich nicht gerade lerne oder programmiere, bin ich meistens irgendwo draußen unterwegs.',
    'about.stat1':  'Problemlösung',
    'about.stat2':  'Kommunikation',
    'about.stat3':  'Analytisches Denken',
    'about.cv':     'Lebenslauf herunterladen',

    // Skills
    'skills.tag':     'Womit ich arbeite',
    'skills.title':   'Kenntnisse &amp; Werkzeuge',
    'skills.web':     'Web &amp; APIs',
    'skills.data':    'Daten &amp; Datenbanken',
    'skills.learning':     'Aktuell im Studium',
    'skills.process': 'Prozess- &amp; Business-Analyse',
    'skills.processAnalysis': 'Prozessanalyse',

    // Projects
    'projects.tag':       'Was ich gebaut habe',
    'projects.title':     'Ausgewählte Projekte',
    'projects.faktura.desc': 'Schlanke Desktop-Fakturierung für Freiberufler und Kleinstunternehmen — vom Angebot bis zur Rechnung, mit E-Rechnung nach EN 16931, GoBD-konform und vollständig lokal. Gestartet als Teamprojekt an der TH Mannheim, von mir allein zur auslieferbaren Anwendung weiterentwickelt.',
    'projects.portfolio.title': 'Portfolio-Website &amp; Tech-Blog',
    'projects.portfolio.desc':  'Diese Website — selbst konzipiert, gestaltet und entwickelt, ohne Framework. Zweisprachig (DE/EN), mit Hell- und Dunkelmodus, Projektübersicht und Blog; gehostet über GitHub Pages und laufend gepflegt.',
    'projects.api.title': 'Claude-API-Anwendung',
    'projects.api.desc':  'Eigene Anwendung auf Basis der Claude API, die parallel zum Kurs „Building with the Claude API“ entsteht — von Prompting und Tool Use bis zur Anbindung an eigene Daten. Details folgen, sobald eine erste Version steht.',
    'projects.wip':       'In Arbeit',
    'projects.cta':       'Alle Projekte auf GitHub',

    // Blog
    'blog.tag':      'Texte',
    'blog.subtitle': 'Gedanken zu Daten, Engineering und Wirtschaftsinformatik.',
    'post.academy.category': 'Erfahrungsbericht',
    'post.academy.title':    'Zehn Kurse Anthropic Academy: Was wirklich hängen geblieben ist',
    'post.academy.excerpt':  'Ich habe die kostenlosen Kurse der Anthropic Academy durchgearbeitet — von AI Fluency bis zu Subagents. Ein ehrlicher Bericht darüber, was sich gelohnt hat und was ich seitdem anders mache.',
    'post.academy.meta':     'September 2026 &middot; 7 Min. Lesezeit',
    'post.fluency.title':   'KI-Kompetenz: Die Fähigkeit, auf die es gerade wirklich ankommt',
    'post.fluency.excerpt': 'Warum der souveräne Umgang mit KI-Werkzeugen zur Grundvoraussetzung wird — und was es heißt, sie wirklich zu beherrschen, statt sie nur zu benutzen.',
    'post.fluency.meta':    'Mai 2026 &middot; 5 Min. Lesezeit',
    'post.workflow.title':   'Wie ich KI im Studium tatsächlich nutze',
    'post.workflow.excerpt': 'Ein Erfahrungsbericht darüber, wie ich KI in Lernen, Schreiben und Programmieren einbinde — und warum es wichtiger ist, wo man die Grenze zieht, als die meisten Tutorials zugeben.',
    'post.workflow.meta':    'Dezember 2025 &middot; 6 Min. Lesezeit',
    'title.academy':  'Zehn Kurse Anthropic Academy: Was wirklich hängen geblieben ist — Lucas Strubel',
    'title.fluency':  'KI-Kompetenz: Die Fähigkeit, auf die es gerade wirklich ankommt — Lucas Strubel',
    'title.workflow': 'Wie ich KI im Studium tatsächlich nutze — Lucas Strubel',
    'title.portfolio': 'Portfolio-Website — Lucas Strubel',
    'tag.ai':           'KI',
    'tag.productivity': 'Produktivität',
    'tag.skills':       'Kompetenzen',
    'tag.student':      'Studium',
    'tag.learning':     'Weiterbildung',

    // Contact
    'contact.tag':   'Sprechen wir',
    'contact.title': 'Kontakt aufnehmen',
    'contact.text':  'Ich suche aktiv nach Praktika und Werkstudentenstellen in den Bereichen Software Engineering, Business- &amp; Prozessanalyse und Datenanalyse. Ob konkrete Stelle oder einfach Austausch — ich freue mich über Ihre Nachricht.',
    'contact.cta':   'Nachricht schreiben',

    // 404
    'title.404': 'Seite nicht gefunden — Lucas Strubel',
    'nf.title':  'Seite nicht gefunden',
    'nf.text':   'Diese Seite gibt es nicht (mehr). Vielleicht wurde sie verschoben — oder der Link hatte einen Tippfehler.',
    'nf.home':   'Zur Startseite',

    // Faktura case study
    'fk.subtitle':  'Vom Hochschulprojekt zur auslieferbaren Fakturierungsanwendung',
    'fk.heroAlt':   'Faktura-Übersicht mit offenen und überfälligen Rechnungen sowie dem Jahresumsatz',
    'fk.source':    'Quellcode auf GitHub',
    'fk.download':  'Download (v3.0.0)',
    'fk.caseStudy': 'Vollständige Fallstudie (PDF)',

    // Portfolio case study
    'pf.title':     'Portfolio-Website',
    'pf.subtitle':  'Von der handgeschriebenen statischen Seite zum abgesicherten, zweisprachigen Portfolio mit eigener Domain',
    'pf.heroAlt':   'Startseite von lucasstrubel.me im Dunkelmodus mit Vorstellung und Porträt',
    'pf.source':    'Quellcode auf GitHub',
    'pf.live':      'Live-Seite'
  };

  var textEls = document.querySelectorAll('[data-i18n]');
  var attrEls = document.querySelectorAll('[data-i18n-attr]');

  function attrPairs(el) {
    return el.getAttribute('data-i18n-attr').split(';').map(function (p) { return p.split(':'); });
  }

  // Remember the English originals so switching back needs no second dictionary
  // (separate properties: an element can carry both data-i18n and data-i18n-attr)
  textEls.forEach(function (el) { el._enText = el.innerHTML; });
  attrEls.forEach(function (el) {
    el._enAttrs = {};
    attrPairs(el).forEach(function (p) { el._enAttrs[p[0]] = el.getAttribute(p[0]); });
  });

  function setLang(lang) {
    var useDe = lang === 'de';
    html.lang = useDe ? 'de' : 'en';
    textEls.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      el.innerHTML = useDe && key in de ? de[key] : el._enText;
    });
    attrEls.forEach(function (el) {
      attrPairs(el).forEach(function (p) {
        el.setAttribute(p[0], useDe && p[1] in de ? de[p[1]] : el._enAttrs[p[0]]);
      });
    });
  }

  function applyLang(lang) {
    setLang(lang);
    try { localStorage.setItem('lang', lang); } catch (e) { /* not persisted */ }
  }

  // init.js already set html.lang from localStorage (default: English)
  setLang(html.lang);

  if (btn) btn.addEventListener('click', function () {
    applyLang(html.lang === 'de' ? 'en' : 'de');
  });

  // Sync the choice across open tabs
  window.addEventListener('storage', function (e) {
    if (e.key === 'lang' && e.newValue) setLang(e.newValue);
  });
})();
