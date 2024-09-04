"use strict";

// Tabbed component

// it stores all the 3 buttons
const tabs = document.querySelectorAll(".operations__tab");

// it stores all the content windows
const contents = document.querySelectorAll(".operations__content");

// 1. Removes the "operations__tab--active" class from all tab buttons.
// 2. Removes the "operations__content--active" class from all content sections.
// 3. Adds the "operations__tab--active" class to the clicked tab button, making it visually active.
// 4. Finds the content section associated with the clicked tab button using its data-tab attribute.
// 5. If the associated content section is found, adds the "operations__content--active" class to it, making it visible.

tabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		tabs.forEach((t) => t.classList.remove("operations__tab--active"));
		contents.forEach((c) => c.classList.remove("operations__content--active"));

		tab.classList.add("operations__tab--active");

		// In the code below, tab.dataset.tab returns the value stored inside data-tab attribute for the concrete element.

		const targetContent = document.querySelector(
			`.operations__content--${tab.dataset.tab}`
		);

		// it returns a div with the concrete class e.g. operations__content--1 if we pressed the first button, because
		// the first button contains data-tab attribute with the value of 1.

		console.log(targetContent);

		if (targetContent) {
			targetContent.classList.add("operations__content--active");
		}
	});
});
