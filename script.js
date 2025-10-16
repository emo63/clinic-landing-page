// اختيار أزرار اللغة
const arabicBtn = document.getElementById('arabicBtn');
const englishBtn = document.getElementById('englishBtn');

// كل العناصر التي تحتوي على نص متعدد اللغات
const elements = document.querySelectorAll('[data-ar]');

function switchLanguage(lang) {
  if (lang === 'ar') {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    arabicBtn.classList.add('active');
    englishBtn.classList.remove('active');
  } else if (lang === 'en') {
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
    englishBtn.classList.add('active');
    arabicBtn.classList.remove('active');
  }

  elements.forEach(el => {
    if (lang === 'ar') {
      el.textContent = el.getAttribute('data-ar');
    } else {
      el.textContent = el.getAttribute('data-en');
    }
  });
}

// أحداث الضغط على أزرار اللغة
arabicBtn.addEventListener('click', () => switchLanguage('ar'));
englishBtn.addEventListener('click', () => switchLanguage('en'));
