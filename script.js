const arabicBtn = document.getElementById('arabicBtn');
const englishBtn = document.getElementById('englishBtn');
const elements = document.querySelectorAll('[data-ar]');

arabicBtn.addEventListener('click', () => {
  document.documentElement.lang = 'ar';
  document.documentElement.dir = 'rtl';
  elements.forEach(el => {
    el.textContent = el.getAttribute('data-ar');
  });
});

englishBtn.addEventListener('click', () => {
  document.documentElement.lang = 'en';
  document.documentElement.dir = 'ltr';
  elements.forEach(el => {
    el.textContent = el.getAttribute('data-en');
  });
});
