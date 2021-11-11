import React from 'react';

const ResultDisplay = ({ onResult }) => {
	console.log('get on result', onResult);
	return (
		<div
			className='row mt-3 mb-2 shadow-sm'
			style={{
				height: '60px',
				backgroundColor: 'burlywood',
				width: '32.5%',
				marginLeft: '375px',
				fontFamily: 'Orbitron',
			}}>
			<p className='resPara fs-1 d-flex justify-content-end'>
				{onResult}
			</p>
		</div>
	);
};

export default ResultDisplay;

// position: 'relative',
// 						bottom: '5px',
// 						left: '290px',
