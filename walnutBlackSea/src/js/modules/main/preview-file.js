const formImage = document.getElementById('formImage');
const formPreview = document.getElementById('formPreview');


formImage.addEventListener('change', () => {
   uploadFile(formImage.files[0]);
});

function uploadFile(file) {

   if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
      alert('Тільки зображення!');
      formImage.value = '';
      return;
   }

   if (file.size > 2 * 1024 * 1024) {
      alert('Зображення не більше 2МБ.');
      return;
   }

   var reader = new FileReader();
   reader.onload = function (e) {
      formPreview.innerHTML = `<img src="${e.target.result}" alt="Фoтo">`;
   };
   reader.onerror = function (e) {
      alert('Помилка');
   };
   reader.readAsDataURL(file);
   
}





