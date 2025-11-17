// Mengambil elemen hamburger dan menu nav
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Menambahkan event listener untuk toggle menu
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Menutup menu saat sebuah link diklik
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Efek header mengecil saat di-scroll (Opsional tapi bagus)
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.padding = "1rem 2rem";
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } else {
        navbar.style.padding = "1.5rem 2rem";
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
    }
});


/* ======== FUNGSI CAROUSEL HERO ======== */
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// **BARU: Autoplay Carousel**
// Slide akan berganti setiap 2 detik (2000ms)
let autoSlide = setInterval(() => {
    plusSlides(1);
}, 2000); 

// Catatan: Durasi 2 detik sangat cepat. Jika dirasa terlalu cepat
// dan pengunjung tidak sempat membaca teks, Anda bisa mengubah
// 2000 menjadi 4000 (4 detik) atau 5000 (5 detik).