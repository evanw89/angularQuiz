(function() {

	angular
		.module("cssSelectorQuiz")
		.controller("listCtrl", ListController);

		function ListController() {
			//view model
			var vm = this;
			
			vm.data = selectors;
			vm.activeSelector = {};
			vm.changeActiveSelector = changeActiveSelector;
			vm.activeOption = {};
			vm.changeActiveOption = changeActiveOption;

			function changeActiveSelector(index) {
				vm.activeSelector = index;
			}
			function changeActiveOption(index) {
				vm.activeOption = index;

			}
		}

		var selectors = [
			{
				selector: "div",
				option1: {
					"answer": "A div selector, selecting all divs in your HTML",
					"isCorrect": false
				},
				option2: {
					"answer": "An element selector, selecting all elements in your HTML",
					"isCorrect": false
				},
				option3: {
					"answer": "An element selector, selecting all divs in your HTML",
					"isCorrect": true
				},
				option4: {
					"answer": "A div selector, selecting all 'div' classes in your HTML",
					"isCorrect": false
				}
			},
			{
				selector: "h4",
				option1: {
					"answer": "An element selector, selecting all h4's in your HTML",
					"isCorrect": true
				},
				option2: {
					"answer": "An h4 selector, selecting all h4's in your HTML",
					"isCorrect": false
				},
				option3: {
					"answer": "An class selector, selecting all 'h4' classes in your HTML",
					"isCorrect": false
				},
				option4: {
					"answer": "An element selector, selecting all h1, h2, h3, and h4's in your HTML",
					"isCorrect": false
				}
			},
			{
				selector: "img",
				option1: {
					"answer": "An image selector, selecting all images on your site",
					"isCorrect": false
				},
				option2: {
					"answer": "An image selector, selecting all img tags on your site",
					"isCorrect": false
				},
				option3: {
					"answer": "An element selector, selecting all images on your site",
					"isCorrect": false
				},
				option4: {
					"answer": "An element selector, selecting all img tags on your site",
					"isCorrect": true
				}
			},
			{
				selector: ".box",
				option1: {
					"answer": "An element selector, selecting all elements with a class of 'box'",
					"isCorrect": false
				},
				option2: {
					"answer": "A class selector, selecting all box elements",
					"isCorrect": false
				},
				option3: {
					"answer": "A class selector, selecting all elements with a class of 'box'",
					"isCorrect": true
				},
				option4: {
					"answer": "An ID selector, selecting all elements with an ID of 'box'",
					"isCorrect": false
				}
			},
			{
				selector: "#cta",
				option1: {
					"answer": "An ID selector, selecting an element with an ID of 'cta'",
					"isCorrect": true
				},
				option2: {
					"answer": "An ID selector, selecting a text element with an ID of 'cta'",
					"isCorrect": false
				},
				option3: {
					"answer": "A class selector, selecting all elements with a class of 'cta'",
					"isCorrect": false
				},
				option4: {
					"answer": "An element selector, selecting all cta elements",
					"isCorrect": false
				}
			},
			{
				selector: ".box img",
				option1: {
					"answer": "Selects all img tags with a class of 'box'",
					"isCorrect": false
				},
				option2: {
					"answer": "Selects all img tags with an ID of 'box'",
					"isCorrect": false
				},
				option3: {
					"answer": "Selects all elements with a class of 'box' which contain an img",
					"isCorrect": false
				},
				option4: {
					"answer": "Selects all img tags that are inside an element with a class of 'box'",
					"isCorrect": true
				},
			},
			{
				selector: "#cta span",
				option1: {
					"answer": "Selects all spans inside elements with a class of 'cta'",
					"isCorrect": false
				},
				option2: {
					"answer": "Selects all spans inside elements with an ID of 'cta'",
					"isCorrect": true
				},
				option3: {
					"answer": "Selects all elements with an ID of 'cta' which contain a span",
					"isCorrect": false
				},
				option4: {
					"answer": "Selects the first span inside elements with an ID of 'cta'",
					"isCorrect": false
				}
			},
			{
				selector: "div h1",
				option1: {
					"answer": "Selects all divs which contain h1's",
					"isCorrect": false
				},
				option2: {
					"answer": "Selects the first h1 inside all divs",
					"isCorrect": false
				},
				option3: {
					"answer": "Selects all divs which contain h1's",
					"isCorrect": false
				},
				option4: {
					"answer": "Selects all h1's which are inside divs",
					"isCorrect": true
				}
			},
			{
				selector: "div div button",
				option1: {
					"answer": "Selects all buttons inside of divs",
					"isCorrect": false
				},
				option2: {
					"answer": "Selects all divs which contain buttons which are inside of divs",
					"isCorrect": false
				},
				option3: {
					"answer": "Selects all buttons inside of divs which are inside of divs",
					"isCorrect": true
				},
				option4: {
					"answer": "Selects all divs which contain divs which contain buttons",
					"isCorrect": false
				}
			},
			{
				selector: ".box .container div #title",
				option1: {
					"answer": "Selects all elements with an ID of 'title' which are inside divs which are inside elements with a class of 'container' which are inside elements with a class of 'box'",
					"isCorrect": true
				},
				option2: {
					"answer": "Selects all elements with a class of 'box' which contain elements with a class of 'container' which contain divs which contain elements with an ID of 'title'",
					"isCorrect": false
				},
				option3: {
					"answer": "Selects all elements with an ID of 'title' which are inside divs which have a class of 'box' and 'container'",
					"isCorrect": false
				},
				option4: {
					"answer": "Selects all elements with an ID of 'title' which are inside divs which have a class of 'box' or 'container'",
					"isCorrect": false
				}
			}
		];

})();