const Portfolio = (function () {
	function makeWords() {
		var words = [
			{
				text: "Java",
				weight: 12,
			},
			{
				text: "Splint",
				weight: 12,
			},
			{
				text: "APIs",
				weight: 10,
			},
			{
				text: "Backend",
				weight: 10,
			},
			{
				text: "Architecture",
				weight: 9,
			},
			{
				text: "PHP",
				weight: 10,
			},
			{
				text: "Node.js",
				weight: 8,
			},
			{
				text: "Systems",
				weight: 11,
			},
			{
				text: "Products",
				weight: 8,
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
				"build Java and Splint applications.",
				"design backend systems and APIs.",
				"ship practical software products.",
				"improve old projects into polished work.",
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
