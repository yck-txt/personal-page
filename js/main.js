'use strict';
document.addEventListener('DOMContentLoaded', function () {
	const topLink = document.querySelector('#skip-to-top');
	const nav = document.querySelector('nav');
	let observer = new IntersectionObserver(function (entries) {
		entries.forEach(function (entry) {
			if (!entry.isIntersecting) {
				topLink.hidden = false;
			} else {
				topLink.hidden = true;
			}
		});
	}, {
		threshold: [0]
	});
	observer.observe(nav);
});

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
  let slides = $(".mySlides");
  let dots = $(".dot");
  console.log(slides.length);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    console.log(slides[0])
    $(slides[i]).css("display", "none");
  }
  for (let i = 0; i < dots.length; i++) {
    $(dots[i]).className = $(dots[i]).removeClass("active");
  }
  $(slides[slideIndex-1]).css("display", "block");
  $(dots[slideIndex-1]).addClass("active")
  updateSlidecounter(slideIndex);
} 

function updateSlidecounter(currentSlide)
{
        let slides = $(".mySlides");
        let slidescount= slides.length;
        let slidecounter =$("#slidescount" + currentSlide);

        if(slidescount > 0){
            slidecounter.text(currentSlide + " / " + slidescount)
        }
        else{
            slidecounter.text(0 + " / " + 0)
        }

}