const currentLanguage = document.querySelector('.header__language-current');
const languageList = document.querySelector('.header__language-list');
const languageItems = document.querySelectorAll('.header__language-item');
let selectedLanguage = 'Ru';

// set initial language
currentLanguage.textContent = selectedLanguage;

// update selected language and active class on click
languageItems.forEach(item => {
   item.addEventListener('click', () => {
      selectedLanguage = item.getAttribute('data-lang');
      currentLanguage.textContent = selectedLanguage;
      languageList.classList.remove('active');
      updateLanguageList();
   });
});

// update language list to show only unselected language
function updateLanguageList() {
   languageItems.forEach(item => {
      if (item.getAttribute('data-lang') !== selectedLanguage) {
         item.style.display = 'block';
      } else {
         item.style.display = 'none';
      }
   });
}

// show/hide language list on button click
currentLanguage.addEventListener('click', () => {
   languageList.classList.toggle('active');
   updateLanguageList();
});