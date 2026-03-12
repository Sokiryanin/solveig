export function initLangSwitch() {
  const btn = document.getElementById('lang-switch');
  if (!btn) return;

  // Завантажуємо збережену мову
  let currentLang = localStorage.getItem('lang') || 'en';

  // Встановлюємо початковий стан
  if (currentLang === 'uk') {
    btn.classList.add('--uk');
  }
  document.documentElement.lang = currentLang;

  // Обробник кліку
  btn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'uk' : 'en';

    btn.classList.toggle('--uk', currentLang === 'uk');
    localStorage.setItem('lang', currentLang);
    document.documentElement.lang = currentLang;

    console.log('🌐 Language:', currentLang.toUpperCase());

    // Тут буде переклад (додамо пізніше)
    // if (window.i18n) window.i18n.switchLang(currentLang);
  });
}
