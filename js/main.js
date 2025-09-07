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
