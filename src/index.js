import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import attributes from './attributes';
import edit from './edit';
import save from './save';
import example from './example';
import metadata from '../block.json';
import './style.scss';

const { name, icon, category, keywords, supports } = metadata;

registerBlockType( 'ib-click-to-tweet/click-to-tweet', {
	title: __( 'Click to Tweet', 'ib-click-to-tweet' ),
	description: __(
		'Add a quote for visitors to tweet via Twitter.',
		'ib-click-to-tweet'
	),
	category,
	icon,
	keywords,
	supports,
	attributes,
	edit,
	save,
	example,
	styles: [
		{
			name: 'normal',
			label: __( 'Normal', 'ib-click-to-tweet' ),
			isDefault: true,
		},
		{
			name: 'quote',
			label: __( 'Blockquote', 'ib-click-to-tweet' ),
			isDefault: false,
		},
	],
} );
