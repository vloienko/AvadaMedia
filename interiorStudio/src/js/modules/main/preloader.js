var images = document.images,
   images_load = 0,
   images_count = images.length;

var preload = document.getElementById('preloader'),
   preload_status = document.getElementById('percents');

function loadImage() {
   // збільшуємо кількість завантажених (не вдалося завантажити) зображень
   images_load++;
   // розраховуємо і відображаємо відсоток завантаження
   console.log(images_load, parseInt(images_load / images_count * 100) + '%');
   preload_status.innerText = parseInt(images_load / images_count * 100) + '%';
   // якщо завантажено (не вдалося завантажити) усі зображення і клас "done" не додано, то додаємо його і видаляємо елемент preload
   if (images_count === images_load) {
      if (!preload.classList.contains('done')) {
         preload.classList.add('done');
         // прелоадер видаляється силами java script
         // preload.parentElement.removeChild(preload);
      }
   }
}

// цикл для проходження усіх зображень
for (var i = 0; i < images_count; i++) {
   // створюємо зображення
   var img = new Image();
   // подія load - зображення завантажено
   img.onload = loadImage;
   // подія error - виникла помилка при завантаженні
   img.onerror = loadImage;
   // вказуємо адресу зображення
   img.src = images[i].src;
}
