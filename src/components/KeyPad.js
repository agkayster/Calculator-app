import ResultDisplay from './ResultDisplay';

const KeyPad = ({ result, onHandleButton }) => {
	return (
		<>
			<div className='border mt-2'>
				<ResultDisplay onResult={result} />
				<div className='row mt-1 row-cols-4 gx-2 justify-content-md-center'>
					<div className='col-1'>
						<button
							type='button'
							className='btn border w-100 fw-bold shadow-sm fs-5'
							style={{ fontFamily: 'Orbitron' }}
							name='7'
							onClick={(e) => onHandleButton(e.target.name)}>
							7
						</button>
					</div>
					<div className='col-1'>
						<button
							type='button'
							className='btn border w-100 fw-bold shadow-sm fs-5'
							style={{ fontFamily: 'Orbitron' }}
							name='8'
							onClick={(e) => onHandleButton(e.target.name)}>
							8
						</button>
					</div>
					<div className='col-1'>
						<button
							type='button'
							className='btn border w-100 fw-bold shadow-sm fs-5'
							style={{ fontFamily: 'Orbitron' }}
							name='9'
							onClick={(e) => onHandleButton(e.target.name)}>
							9
						</button>
					</div>
					<div className='col-1'>
						<button
							type='button'
							className='btn border w-100 fw-bold shadow-sm fs-5'
							style={{ fontFamily: 'Orbitron' }}
							name='*'
							onClick={(e) => onHandleButton(e.target.name)}>
							*
						</button>
					</div>
				</div>
				<div className='row mt-2 row-cols-4 gx-2 justify-content-md-center'>
					<div className='col-1'>
						<button
							type='button'
							className='btn border w-100 fw-bold shadow-sm fs-5'
							style={{ fontFamily: 'Orbitron' }}
							name='4'
							onClick={(e) => onHandleButton(e.target.name)}>
							4
						</button>
					</div>
					<div className='col-1'>
						<button
							type='button'
							className='btn border w-100 fw-bold shadow-sm fs-5'
							style={{ fontFamily: 'Orbitron' }}
							name='5'
							onClick={(e) => onHandleButton(e.target.name)}>
							5
						</button>
					</div>
					<div className='col-1'>
						<button
							type='button'
							className='btn border w-100 fw-bold shadow-sm fs-5'
							style={{ fontFamily: 'Orbitron' }}
							name='6'
							onClick={(e) => onHandleButton(e.target.name)}>
							6
						</button>
					</div>
					<div className='col-1'>
						<button
							type='button'
							className='btn border w-100 fw-bold shadow-sm fs-5'
							style={{ fontFamily: 'Orbitron' }}
							name='-'
							onClick={(e) => onHandleButton(e.target.name)}>
							-
						</button>
					</div>
				</div>
				<div className='row mt-2 row-cols-4 gx-2 justify-content-md-center'>
					<div className='col-1'>
						<button
							type='button'
							className='btn border w-100 fw-bold shadow-sm fs-5'
							style={{ fontFamily: 'Orbitron' }}
							name='1'
							onClick={(e) => onHandleButton(e.target.name)}>
							1
						</button>
					</div>
					<div className='col-1'>
						<button
							type='button'
							className='btn border w-100 fw-bold shadow-sm fs-5'
							style={{ fontFamily: 'Orbitron' }}
							name='2'
							onClick={(e) => onHandleButton(e.target.name)}>
							2
						</button>
					</div>
					<div className='col-1'>
						<button
							type='button'
							className='btn border w-100 fw-bold shadow-sm fs-5'
							style={{ fontFamily: 'Orbitron' }}
							name='3'
							onClick={(e) => onHandleButton(e.target.name)}>
							3
						</button>
					</div>
					<div className='col-1'>
						<button
							type='button'
							className='btn border w-100 fw-bold shadow-sm fs-5'
							style={{ fontFamily: 'Orbitron' }}
							name='+'
							onClick={(e) => onHandleButton(e.target.name)}>
							+
						</button>
					</div>
				</div>
				<div className='row mt-2 row-cols-4 gx-2 justify-content-md-center'>
					<div className='col-1'>
						<button
							type='button'
							className='btn border w-100 fw-bold shadow-sm fs-5'
							style={{ fontFamily: 'Orbitron' }}
							name='0'
							onClick={(e) => onHandleButton(e.target.name)}>
							0
						</button>
					</div>
					<div className='col-1'>
						<button
							type='button'
							className='btn border w-100 fw-bold shadow-sm fs-5'
							style={{ fontFamily: 'Orbitron' }}
							name='/'
							onClick={(e) => onHandleButton(e.target.name)}>
							/
						</button>
					</div>
					<div className='col-1'>
						<button
							type='button'
							className='btn border w-100 fw-bold shadow-sm fs-5'
							style={{ fontFamily: 'Orbitron' }}
							name='clear'
							onClick={(e) => onHandleButton(e.target.name)}>
							c
						</button>
					</div>
					<div className='col-1'>
						<button
							type='button'
							className='btn border w-100 bg-info fw-bold shadow-sm fs-5'
							style={{ fontFamily: 'Orbitron' }}
							name='eq'
							onClick={(e) => onHandleButton(e.target.name)}>
							=
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default KeyPad;
