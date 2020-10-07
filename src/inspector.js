import {
	InspectorControls,
	PanelColorSettings,
	ContrastChecker,
	FontSizePicker,
} from '@wordpress/block-editor';

import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	const { textColor, textSize, buttonColor } = attributes;

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Content', 'ib-click-to-tweet' ) }>
				<FontSizePicker
					value={ textSize }
					onChange={ ( textSize ) => setAttributes( { textSize } ) }
				/>
			</PanelBody>
			<PanelColorSettings
				title={ __( 'Color', 'ib-click-to-tweet' ) }
				initialOpen={ false }
				colorSettings={ [
					{
						value: textColor,
						onChange: ( value ) => {
							setAttributes( { textColor: value } );
						},
						label: __( 'Text color', 'ib-click-to-tweet' ),
					},
					{
						value: buttonColor,
						onChange: ( value ) => {
							setAttributes( { buttonColor: value } );
						},
						label: __( 'Button color', 'ib-click-to-tweet' ),
					},
				] }
			>
				<ContrastChecker
					{ ...{
						textColor: '#ffffff',
						backgroundColor: buttonColor,
						fallbackTextColor: '#ffffff',
						fallbackButtonColor: '#1ea1f1',
					} }
				/>
			</PanelColorSettings>
		</InspectorControls>
	);
};

export default Inspector;
