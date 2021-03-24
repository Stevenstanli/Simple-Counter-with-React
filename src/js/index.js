//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

import { Counter } from "./component/counter.js";

let counter = 0;

setInterval(function() {
	let six = Math.floor(counter / 10000);
	let five = Math.floor(counter / 10000);
	let four = Math.floor(counter / 1000);
	let three = Math.floor(counter / 100);
	let two = Math.floor(counter / 10);
	let one = Math.floor(counter / 1);

	counter++;

	ReactDOM.render(
		<Counter
			secOne={one}
			secTwo={two}
			secThree={three}
			secFour={four}
			secFive={five}
			secSix={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);