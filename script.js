/* =========================================
   DATOS DE CONTACTO
   
========================================= */

const plumberData = {
    whatsapp: "5491167834206",
    telefono: "11 6783-4206",
    email: "plumberserviciosba@gmail.com",
    instagram: "@plumberserviciosba"
};


/* =========================================
   WHATSAPP
========================================= */

const whatsappMessage =
    "Hola, me contacto desde la página de Plumber Servicios. Quisiera consultar por un trabajo de plomería o gas.";

const whatsappURL =
    `https://wa.me/${plumberData.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;


/* Aplicamos el enlace a todos los botones */

document.querySelectorAll(".whatsapp-link").forEach(link => {
    link.href = whatsappURL;
});


/* =========================================
   MENÚ MOBILE
========================================= */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});


/* Cerramos el menú al tocar una opción */

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });

});


/* =========================================
   HEADER
========================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

/* =========================================
   GALERÍA
========================================= */

const galleryTrack = document.querySelector(".gallery-track");
const gallerySlides = document.querySelectorAll(".gallery-slide");
const galleryPrev = document.querySelector(".gallery-prev");
const galleryNext = document.querySelector(".gallery-next");

let galleryIndex = 0;


function getVisibleSlides() {

    if (window.innerWidth <= 780) {
        return 1;
    }

    if (window.innerWidth <= 1050) {
        return 2;
    }

    return 3;
}


function updateGallery() {

    const visibleSlides = getVisibleSlides();

    const maxIndex =
        Math.max(0, gallerySlides.length - visibleSlides);

    if (galleryIndex > maxIndex) {
        galleryIndex = maxIndex;
    }

    const slideWidth =
        gallerySlides[0].getBoundingClientRect().width;

    const gap = 18;

    galleryTrack.style.transform =
        `translateX(-${galleryIndex * (slideWidth + gap)}px)`;
}


galleryNext.addEventListener("click", () => {

    const visibleSlides = getVisibleSlides();

    const maxIndex =
        Math.max(0, gallerySlides.length - visibleSlides);

    if (galleryIndex < maxIndex) {
        galleryIndex++;
    } else {
        galleryIndex = 0;
    }

    updateGallery();

});


galleryPrev.addEventListener("click", () => {

    const visibleSlides = getVisibleSlides();

    const maxIndex =
        Math.max(0, gallerySlides.length - visibleSlides);

    if (galleryIndex > 0) {
        galleryIndex--;
    } else {
        galleryIndex = maxIndex;
    }

    updateGallery();

});


window.addEventListener("resize", updateGallery);

updateGallery();