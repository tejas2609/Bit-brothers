var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow-container");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

var slideIndexC = 1;

function plusSlidesC(n) {
  showSlidesC(slideIndexC += n);
}
showSlidesC();

function showSlidesC() {
  var i;
  var slidesC = document.getElementsByClassName("mySlides");
  for (i = 0; i < slidesC.length; i++) {
    slidesC[i].style.display = "none";  
  }
  slideIndexC++;
  if (slideIndexC > slidesC.length) {slideIndexC = 1}
  slidesC[slideIndexC-1].style.display = "block";
  setTimeout(showSlidesC, 2000);
}

var observer1 = new IntersectionObserver(function(entries) { console.log(entries);
	if(entries[0]['isIntersecting'] === true) {
		if(entries[0]['intersectionRatio'] > 0.9){
      document.getElementById('navbar-list').style.display = "none";
      document.getElementById('nav-navgitor').style.display = "block";
		}	
	}
	else {
		document.querySelector("#message").textContent = 'Target is not visible in screen';
	}
}, { threshold: [0, 0.9, 1] });

observer1.observe(document.querySelector("#navigator"));

var observer2 = new IntersectionObserver(function(entries) { console.log(entries);
	if(entries[0]['isIntersecting'] === true) {
		if(entries[0]['intersectionRatio'] > 0.9){
      document.getElementById('navbar-list').style.display = "flex";
      document.getElementById('nav-navgitor').style.display = "none";
		}	
	}
	else {
		document.querySelector("#message").textContent = 'Target is not visible in screen';
	}
}, { threshold: [0, 0.9, 1] });
observer2.observe(document.querySelector("#navigator2"));