import React, { useState } from 'react';
import KeyPad from './KeyPad';

const Calculator1 = () => {
	const [result, setResult] = useState('');

	const handleButton = (button) => {
		// console.log(button, '<------');
		console.log('button', button, button.length);
		let operators = ['*', '+', '/', '-'];
		let nonStartOperators = ['*', '+', '/'];
		let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

		if (result === '' && nonStartOperators.includes(button)) {
			return;
		}
		// Always start with numbers which is an operator//
		if (
			result.length > 1 &&
			operators.includes(result[result.length - 2]) &&
			numbers.includes(result[result.length - 1]) &&
			result[result.length - 1] === '0' &&
			numbers.includes(button)
		) {
			const replaceLeadingZero = result.slice(0, -1) + button;
			return setResult(replaceLeadingZero);
		}
		// Always start with numbers which is an operator//
		if (
			result.length > 0 &&
			numbers.includes(result[0]) &&
			result[0] === '0' &&
			numbers.includes(button)
		) {
			const replaceFirstZero = result.replace(result[0], button);
			return setResult(replaceFirstZero);
		}

		// Always start with numbers which is an operator//
		if (
			result.length > 2 &&
			nonStartOperators.includes(result[result.length - 2]) &&
			operators.includes(result[result.length - 1]) &&
			operators.includes(button)
		) {
			const ignoreNextOperator = result + '';
			return setResult(ignoreNextOperator);
		}

		// if (
		// 	result.length > 0
		// 	&&
		// 	nonStartOperators.includes(result[result.length - 2])
		// 	&&
		// 	operators.includes(button)
		// ) {
		// 	console.log('true', true);
		// 	console.log(
		// 		'result2 =>'
		// 		result,
		// 		'result-length2 =>',
		// 		result.length,
		// 		'second-to-last-item =>',
		// 		result[result.length - 2],
		// 		'last-item =>',
		// 		result[result.length - 1],
		// 		'button =>',
		// 		button,
		// 		'final-result =>',
		// 		result + button
		// 	);
		// 	const addOperators = result + button;
		// 	return setResult(addOperators);
		// }

		// Start with numbers first in your algorithim and console log inside your "if" statement i.e result, result.length//
		if (
			result.length > 1 &&
			numbers.includes(result[result.length - 2]) &&
			operators.includes(button)
		) {
			const lastPressedButton = result[result.length - 1];

			if (
				operators.includes(lastPressedButton) &&
				operators.includes(button) &&
				button !== '-'
			) {
				const removedLastButton = result.slice(0, -1) + button;
				return setResult(removedLastButton);
			} else if (
				operators.includes(lastPressedButton) &&
				operators.includes(button) &&
				button === '-'
			) {
				const removedLastButton = result + button;
				return setResult(removedLastButton);
			}
		}

		if (button === 'eq') {
			return calculate();
		}
		if (button === 'clear') {
			return reset();
		}
		return setResult(result + button);
	};

	const calculate = () => {
		let newResult = '';
		if (result.includes('--')) {
			newResult = result.replace('--', '+');
		} else {
			newResult = result;
		}
		console.log('new result', newResult);
		try {
			if (eval(newResult) === Infinity) {
				setResult('');
			} else {
				setResult((eval(newResult) || '') + '');
			}
		} catch (e) {
			setResult('');
		}
	};

	const reset = () => {
		setResult('');
	};

	console.log('result =>', result, 'result length =>', result.length);

	return <KeyPad onHandleButton={handleButton} result={result} />;
};

export default Calculator1;
