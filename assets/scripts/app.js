const Portfolio = (function () {
	function makeWords() {
		var words = [
			{
				text: "Java",
				weight: 14,
			},
			{
				text: "Spring Boot",
				weight: 13,
			},
			{
				text: "REST APIs",
				weight: 11,
			},
			{
				text: "Backend",
				weight: 11,
			},
			{
				text: "Selenium",
				weight: 10,
			},
			{
				text: "Playwright",
				weight: 10,
			},
			{
				text: "JMeter",
				weight: 9,
			},
			{
				text: "PHP",
				weight: 9,
			},
			{
				text: "Node.js",
				weight: 8,
			},
			{
				text: "Docker",
				weight: 8,
			},
			{
				text: "MySQL",
				weight: 8,
			},
			{
				text: "Automation",
				weight: 10,
			},
		];
		return words;
	}

	function makeWordCloud(words) {
		$(".teaching-domains").jQCloud(words, { delay: 120 });
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on("scroll", function () {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"build Java & Spring Boot applications.",
				"design backend systems and APIs.",
				"automate testing with Selenium & Playwright.",
				"ship practical software products.",
			],
			stringsElement: null,
			typeSpeed: 40,
			backSpeed: 20,
			backDelay: 1000,
			loop: true,
			contentType: "text",
			callback: function () {
				$("#writing-text").css({
					color: "#fff",
					"background-color": "transparent",
				});
			},
			preStringTyped: function () {},
			onStringTyped: function () {},
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation,
	};
})();

var ready = (callback) => {
	if (document.readyState != "loading") callback();
	else document.addEventListener("DOMContentLoaded", callback);
};

ready(() => {
	// After document is ready
	// Lozad Initialization
	const observer = lozad(".lozad", {
		rootMargin: "500px 0px",
		threshold: 0.1,
		load: function (el) {
			el.src = el.dataset.src;
		},
	});
	observer.observe();

	// Display words
	Portfolio.displayWordCloud();
	Portfolio.typeAnimation();
});
