const currentLanguage = document.querySelector('.contact-info__city-current');
const languageList = document.querySelector('.contact-info__city-list');
const languageItems = document.querySelectorAll('.contact-info__city-item');
let selectedLanguage = 'Berlin';

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