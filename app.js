const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if (activeLink != i) {
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 500);
        }
    })
})

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

function showProject(image) {
    image.classList.toggle('expand');
}

var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

/* Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } 
  else {
    video.pause();
    btn.innerHTML = "Play";
  }
}*/

const linkers = document.querySelectorAll('.linker');
const sectioners = document.querySelectorAll('section');

let activeLinker = 0;

linkers.forEach((linker, i) => {
    linker.addEventListener('click', () => {
        if (activeLinker != i) {
            linkers[activeLinker].classList.remove('active');
            linker.classList.add('active');
            sectioners[activeLinker].classList.remove('active');

            setTimeout(() => {
                activeLinker = i;
                sectioners[i].classList.add('active');
            }, 500);
        }
    })
})

let slideI = 1;
showSliders(slideI);

// Next/previous controls
function plusSlides(n) {
  showSliders(slideI += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSliders(slideI = n);
}

function showSliders(n) {
  let i;
  let slides = document.getElementsByClassName("row");
  //let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideI = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideI-1].style.display = "flex";
  /*dots[slideIndex-1].className += " active";*/
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("row");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "flex";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
