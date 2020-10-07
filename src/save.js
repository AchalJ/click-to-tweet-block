import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const save = ( props ) => {
	const { attributes } = props;

	const {
		tweet,
		url,
		via,
		textAlign,
		textColor,
		textSize,
		buttonText,
		buttonColor,
	} = attributes;

	const getPlainText = ( html ) => {
		const div = document.createElement( 'div' );
		div.innerHTML = html;
		return div.textContent || div.innerText;
	};

	const tweetUrl = `http://twitter.com/share?&text=${ encodeURIComponent(
		getPlainText( tweet )
	) }&url=${ url }&via=${ via ? via : '' }`;

	return (
		<div>
			<div
				className="ib-click-to-tweet"
				style={ { textAlign: textAlign, '--color': textColor } }
			>
				<RichText.Content
					className="ib-click-to-tweet-text"
					value={ tweet }
					tagName="p"
					style={ { color: textColor, fontSize: textSize } }
				/>
				<RichText.Content
					className="ib-click-to-tweet-button"
					value={ buttonText }
					tagName="a"
					href={ tweetUrl }
					target="_blank"
					rel="noopener noreferrer"
					style={ { backgroundColor: buttonColor } }
				/>
			</div>
		</div>
	);
};
export default save;
