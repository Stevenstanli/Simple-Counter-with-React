import React from "react";
import PropType from "prop-types";

export const Counter = props => {
	return (
		<div className="container bg-dark text-white ">
			<div className="row d-flex justify-content-center">
				<span className="col">
					<i className="far fa-clock" />
				</span>
				<span className="col">{props.secSix % 10}</span>
				<span className="col">{props.secFive % 10}</span>
				<span className="col">{props.secFour % 10}</span>
				<span className="col">{props.secThree % 10}</span>
				<span className="col">{props.secTwo % 10}</span>
				<span className="col">{props.secOne % 10}</span>
			</div>
		</div>
	);
};

Counter.propTypes = {
	secOne: PropType.number,
	secTwo: PropType.number,
	secThree: PropType.number,
	secFour: PropType.number,
	secFive: PropType.number,
	secSix: PropType.number
};
