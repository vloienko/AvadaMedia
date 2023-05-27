// Меню бургер
const iconMenus = document.querySelectorAll('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenus) {
   iconMenus.forEach(el => {
      el.addEventListener("click", function (e) {
         document.body.classList.toggle('_lock');
         el.classList.toggle('_active');
         menuBody.classList.toggle('_active');
      });
   });
   
}


// Прокрутка при кліку 
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight; // Віднімаємо шапку, якщо вона фіксована

			if (iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
         }
 
         window.scrollTo({ 
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}