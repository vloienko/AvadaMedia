document.addEventListener('DOMContentLoaded', function() {
   var buttons = document.getElementsByClassName("dropdown-item");
   for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function() {
         changeActiveButton(this.id);
      });
   }
});

function changeActiveButton(buttonId) {
   // Знайдемо всі кнопки з класом "dropdown-item"
   var buttons = document.getElementsByClassName("dropdown-item");
   // Знайдемо кнопку з id, який ми передали функції, і додамо до неї клас "active"
   document.getElementById(buttonId).classList.add("active");
   // Знайдемо елемент з id "dropdownMenuButton" і змінимо його текст на текст натиснутої кнопки
   document.getElementById("dropdownMenuButton").innerHTML = document.getElementById(buttonId).innerHTML;
}

