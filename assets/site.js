(() => {
  const translated = [...document.querySelectorAll('[data-en]')];
  translated.forEach(element => { element.dataset.ko = element.textContent; });
  const images = [...document.querySelectorAll('[data-alt-en]')];
  images.forEach(element => { element.dataset.altKo = element.alt; });
  function setLanguage(language, updateUrl) {
    const english = language === 'en';
    document.documentElement.lang = english ? 'en' : 'ko';
    translated.forEach(element => { element.textContent = english ? element.dataset.en : element.dataset.ko; });
    images.forEach(element => { element.alt = english ? element.dataset.altEn : element.dataset.altKo; });
    document.querySelectorAll('[data-language]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    });
    document.querySelectorAll('[data-privacy-link]').forEach(link => { link.href = english ? '/privacy/#en' : '/privacy/#ko'; });
    document.querySelectorAll('[data-terms-link]').forEach(link => { link.href = english ? '/terms/#en' : '/terms/#ko'; });
    if (updateUrl) {
      const url = new URL(window.location.href);
      if (english) url.searchParams.set('lang', 'en');
      else url.searchParams.delete('lang');
      history.replaceState(null, '', url);
    }
  }
  document.querySelectorAll('[data-language]').forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.language, true));
  });
  setLanguage(new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'ko', false);
})();
