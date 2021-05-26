import React, { Fragment } from 'react';

const KeyPadComponent = (props) => {
	const { buttonClick } = props;
	return (
		<div className='output'>
			<button
				type='button'
				name='1'
				onClick={(e) => buttonClick(e.target.name)}>
				1
			</button>
			<button
				type='button'
				name='2'
				onClick={(e) => buttonClick(e.target.name)}>
				2
			</button>
			<button
				type='button'
				name='3'
				onClick={(e) => buttonClick(e.target.name)}>
				3
			</button>
			<button
				type='button'
				name='*'
				onClick={(e) => buttonClick(e.target.name)}>
				*
			</button>
			<br />
			<button
				type='button'
				name='4'
				onClick={(e) => buttonClick(e.target.name)}>
				4
			</button>
			<button
				type='button'
				name='5'
				onClick={(e) => buttonClick(e.target.name)}>
				5
			</button>
			<button
				type='button'
				name='6'
				onClick={(e) => buttonClick(e.target.name)}>
				6
			</button>
			<button
				type='button'
				name='-'
				onClick={(e) => buttonClick(e.target.name)}>
				-
			</button>
			<br />
			<button
				type='button'
				name='7'
				onClick={(e) => buttonClick(e.target.name)}>
				7
			</button>
			<button
				type='button'
				name='8'
				onClick={(e) => buttonClick(e.target.name)}>
				8
			</button>
			<button
				type='button'
				name='9'
				onClick={(e) => buttonClick(e.target.name)}>
				9
			</button>
			<button
				type='button'
				name='+'
				onClick={(e) => buttonClick(e.target.name)}>
				+
			</button>
			<br />
			<button
				type='button'
				name='0'
				onClick={(e) => buttonClick(e.target.name)}>
				0
			</button>
			<button
				type='button'
				name='/'
				onClick={(e) => buttonClick(e.target.name)}>
				/
			</button>
			<button
				type='button'
				name='clear'
				onClick={(e) => buttonClick(e.target.name)}>
				c
			</button>
			<button
				type='button'
				name='eq'
				onClick={(e) => buttonClick(e.target.name)}>
				=
			</button>
		</div>
	);
};

export default KeyPadComponent;

// class KeyPadComponent extends Component {
// 	render() {
// 		return (
// 			<div className='output'>
// 				<button
// 					type='button'
// 					name='7'
// 					onClick={(e) => this.props.buttonClick(e.target.name)}>
// 					7
// 				</button>
// 				<button
// 					type='button'
// 					name='8'
// 					onClick={(e) => this.props.buttonClick(e.target.name)}>
// 					8
// 				</button>
// 				<button
// 					type='button'
// 					name='9'
// 					onClick={(e) => this.props.buttonClick(e.target.name)}>
// 					9
// 				</button>
// 				<button
// 					type='button'
// 					name='*'
// 					onClick={(e) => this.props.buttonClick(e.target.name)}>
// 					*
// 				</button>
// 				<br />
// 				<button
// 					type='button'
// 					name='4'
// 					onClick={(e) => this.props.buttonClick(e.target.name)}>
// 					4
// 				</button>
// 				<button
// 					type='button'
// 					name='5'
// 					onClick={(e) => this.props.buttonClick(e.target.name)}>
// 					5
// 				</button>
// 				<button
// 					type='button'
// 					name='6'
// 					onClick={(e) => this.props.buttonClick(e.target.name)}>
// 					6
// 				</button>
// 				<button
// 					type='button'
// 					name='-'
// 					onClick={(e) => this.props.buttonClick(e.target.name)}>
// 					-
// 				</button>
// 				<br />
// 				<button
// 					type='button'
// 					name='1'
// 					onClick={(e) => this.props.buttonClick(e.target.name)}>
// 					1
// 				</button>
// 				<button
// 					type='button'
// 					name='2'
// 					onClick={(e) => this.props.buttonClick(e.target.name)}>
// 					2
// 				</button>
// 				<button
// 					type='button'
// 					name='3'
// 					onClick={(e) => this.props.buttonClick(e.target.name)}>
// 					3
// 				</button>
// 				<button
// 					type='button'
// 					name='+'
// 					onClick={(e) => this.props.buttonClick(e.target.name)}>
// 					+
// 				</button>
// 				<br />
// 				<button
// 					type='button'
// 					name='0'
// 					onClick={(e) => this.props.buttonClick(e.target.name)}>
// 					0
// 				</button>
// 				<button
// 					type='button'
// 					name='/'
// 					onClick={(e) => this.props.buttonClick(e.target.name)}>
// 					/
// 				</button>
// 				<button
// 					type='button'
// 					name='clear'
// 					onClick={(e) => this.props.buttonClick(e.target.name)}>
// 					C
// 				</button>
// 				<button
// 					type='button'
// 					name='eq'
// 					onClick={(e) => this.props.buttonClick(e.target.name)}>
// 					=
// 				</button>
// 			</div>
// 		);
// 	}
// }
