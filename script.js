let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    // Desplazar el carrusel
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Inicializa el carrusel mostrando el primer slide
showSlide(currentIndex);

// Configura el carrusel para avanzar automáticamente cada 3 segundos
setInterval(() => {
    nextSlide();
}, 3000); // 3000 milisegundos (3 segundos)

// Mostrar la galería de videos
function showVideoGallery() {
    document.getElementById('video-gallery').style.display = 'block';
}

// Mostrar la galería de fotos
function showPhotoGallery() {
    document.getElementById('photo-gallery').style.display = 'block';
}

// Cerrar la galería
function closeGallery(galleryId) {
    document.getElementById(galleryId).style.display = 'none';
}

// Función para abrir la tarjeta al hacer clic en el botón
function openCard() {
  // Ocultar el botón
  document.getElementById("open-card-btn").style.display = "none";

  // Mostrar la tarjeta
  document.getElementById("card").style.display = "block";
}
document.getElementById('open-card-btn').addEventListener('click', function() {
  // Activar la animación de apertura del sobre
  this.classList.add('open');
  
  // Mostrar la tarjeta con una animación
  setTimeout(() => {
      document.querySelector('.card').classList.add('show');
  }, 500); // Esperar 500ms antes de mostrar la tarjeta, para que se vea la apertura
});
