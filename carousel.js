let slides = document.getElementsByClassName("topTen-List-Item");
let slidePosition = 0;
let totalSlides = slides.length;

function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove("topTen-List-Item-visible");
  }
}

document.getElementById("prevBtn").addEventListener("click", function () {
  hideAllSlides();

  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
    slides[slidePosition].classList.add("topTen-List-Item-visible");
  } else {
    slidePosition--;
    slides[slidePosition].classList.add("topTen-List-Item-visible");
  }
});

document.getElementById("nextBtn").addEventListener("click", function () {
  hideAllSlides();

  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
    slides[slidePosition].classList.add("topTen-List-Item-visible");
  } else {
    slidePosition++;
    slides[slidePosition].classList.add("topTen-List-Item-visible");
  }
});
