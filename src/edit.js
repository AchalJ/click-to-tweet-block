import { RichText } from '@wordpress/block-editor';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

import Inspector from './inspector';
import Controls from './controls';

import './editor.scss';

const edit = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		tweet,
		textSize,
		textAlign,
		textColor,
		buttonText,
		buttonColor,
	} = attributes;

	if ( props.postUrl ) {
		setAttributes( { url: props.postUrl } );
	}

	return [
		<>
			<Controls { ...{ attributes, setAttributes } } />
			<Inspector { ...{ attributes, setAttributes } } />
			<div className={ props.className }>
				<div
					className="ib-click-to-tweet"
					style={ { textAlign: textAlign, '--color': textColor } }
				>
					<RichText
						className="ib-click-to-tweet-text"
						placeholder={ __( 'Tweet...', 'ib-click-to-tweet' ) }
						value={ tweet }
						allowedFormats={ [] }
						keepPlaceholderOnFocus
						onChange={ ( tweet ) => {
							setAttributes( { tweet } );
						} }
						tagName="p"
						allowedFormats={ [ 'core/bold', 'core/italic' ] }
						style={ { color: textColor, fontSize: textSize } }
					/>
					<RichText
						className="ib-click-to-tweet-button"
						placeholder={ __( 'Tweet', 'ib-click-to-tweet' ) }
						multiline="false"
						allowedFormats={ [] }
						value={ buttonText }
						keepPlaceholderOnFocus
						onChange={ ( buttonText ) => {
							setAttributes( { buttonText } );
						} }
						tagName="span"
						style={ { backgroundColor: buttonColor } }
					/>
				</div>
			</div>
		</>,
	];
};

export default compose(
	withSelect( ( select ) => {
		return {
			postUrl: select( 'core/editor' ).getPermalink(),
		};
	} )
)( edit );
