import React from 'react';

const CalculatorResultComponent = (props) => {
	const { result } = props;
	return (
		<div className='result'>
			<p>{result}</p>
		</div>
	);
};

export default CalculatorResultComponent;

// class CalculatorResultComponent extends Component {
// 	render() {
// 		const { result } = this.props;
// 		return (
// 			<div className='result'>
// 				<p>{result}</p>
// 			</div>
// 		);
// 	}
// }
