import React from "react";
import PropType from "prop-types";

export const Counter = props => {
	return (
		<div className="container bg-secondary bg-gradient text-white rounded-pill">
			<div className="row d-flex justify-content-center box">
				<span className="col">
					<i className="far fa-clock clock" />
				</span>
				<span className="col count">{props.secSix % 10}</span>
				<span className="col count">{props.secFive % 10}</span>
				<span className="col count">{props.secFour % 10}</span>
				<span className="col count">{props.secThree % 10}</span>
				<span className="col count">{props.secTwo % 10}</span>
				<span className="col count">{props.secOne % 10}</span>
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
