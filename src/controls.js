import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { Toolbar } from '@wordpress/components';
import { AlignmentToolbar, BlockControls } from '@wordpress/block-editor';

const Controls = ( props ) => {
	const { attributes, setAttributes } = props;

	const { textAlign, via } = attributes;

	return (
		<Fragment>
			<BlockControls>
				<AlignmentToolbar
					value={ textAlign }
					onChange={ ( textAlign ) => {
						setAttributes( { textAlign } );
					} }
				/>
				<Toolbar>
					<div className="ib-ctt-tb-wrapper">
						<label
							aria-label={ __(
								'Twitter Username',
								'ib-click-to-tweet'
							) }
							htmlFor="ib-ctt-tb-via-input"
						>
							@
						</label>
						<input
							type="text"
							placeholder={ __(
								'Twitter Username',
								'ib-click-to-tweet'
							) }
							id="ib-ctt-tb-via-input"
							value={ via }
							onChange={ ( e ) => {
								setAttributes( { via: e.target.value } );
							} }
						/>
					</div>
				</Toolbar>
			</BlockControls>
		</Fragment>
	);
};

export default Controls;
