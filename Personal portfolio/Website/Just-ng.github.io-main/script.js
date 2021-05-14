var slideIndex = 1;
var showcaseImageWidth = 960;
var slides = document.getElementsByClassName("slide-image");
for (var i = 0; i < slides.length; i++) {
    slides[i].classList.add("active");
}

animateSlides();

function animateSlides() {
    
    var slides = document.getElementsByClassName("slide-image");
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].classList.add(" ");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1;};
    slides[slideIndex].classList.remove(" ");
    slides[slideIndex].classList.add("active");
    alert("hello");
    setTimeout(animateSlides, 1);
}