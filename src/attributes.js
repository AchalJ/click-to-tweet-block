import { __ } from '@wordpress/i18n';

const attributes = {
	tweet: {
		type: 'string',
		default: '',
	},
	url: {
		type: 'string',
		default: '',
	},
	via: {
		type: 'string',
	},
	textAlign: {
		type: 'string',
	},
	textColor: {
		type: 'string',
	},
	textSize: {
		type: 'number',
	},
	buttonText: {
		type: 'string',
		default: __( 'Tweet', 'ib-click-to-tweet' ),
	},
	buttonColor: {
		type: 'string',
	},
};
export default attributes;
