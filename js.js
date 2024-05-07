let sliderImages = document.querySelector('.slider-images');
let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');
let currentImage = 1;

arrowLeft.addEventListener('click', () => {
  if (currentImage > 1) {
    currentImage--;
    sliderImages.style.transform = `translateX(-${(currentImage - 1) * 50}%)`;
  } else {
    currentImage = 2;
    sliderImages.style.transform = `translateX(-${(currentImage - 1) * 50}%)`;
  }
});

arrowRight.addEventListener('click', () => {
  if (currentImage < 2) {
    currentImage++;
    sliderImages.style.transform = `translateX(-${(currentImage - 1) * 50}%)`;
  } else {
    currentImage = 1;
    sliderImages.style.transform = `translateX(-${(currentImage - 1) * 50}%)`;
  }
});

let addToCartBtn = document.querySelector('.btn');
addToCartBtn.addEventListener('click', () => {
  window.location.href = 'ошибка.html';
});

let hoverElems = document.querySelectorAll('.hover-black[class*="border-"]');
hoverElems.forEach(elem => {
  elem.addEventListener('mouseenter', () => {
    elem.style.color = '#ffffff';
    elem.style.backgroundColor = '#000000';
  });
  elem.addEventListener('mouseleave', () => {
    elem.style.color = '#000000';
    elem.style.backgroundColor = '#ffffff';
  });
});

window.addEventListener('load', function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("contact-info-container").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "xml.xml", true);
    xhttp.send();
  });
  
