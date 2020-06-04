/**
 * BLOCK: flip-block3
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */


import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; 
const { registerBlockType, getBlockDefaultClassName } = wp.blocks;
const { InspectorControls, RichText, MediaUpload } = wp.editor;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType("cgb/block-flip-block3", {
	title: __("flip-block3 - CGB Block"),
	icon: "smiley",
	category: "common",
	attributes: {
		bodyContent: {
			source: "html",
			selector: ".copy-bd"
		},
		heading: {
			source: "html",
			selector: "h2"
		},
		imgUrlFront: {
			type: "string",
			default: "http://placehold.it/500"
		},
		imgUrlBack: {
			type: "string",
			default: "http://placehold.it/500"
		}
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: props => {
		const { className, setAttributes } = props;
		const { attributes } = props;

		function changeBodyContent(changes) {
			setAttributes({
				bodyContent: changes
			});
		}

		function changeHeading(heading) {
			setAttributes({ heading });
		}

		function selectImageFront(value) {
			console.log(value);
			setAttributes({
				imgUrlFront: value.sizes.full.url
			});
		}
		function selectImageBack(value) {
			console.log(value);
			setAttributes({
				imgUrlBack: value.sizes.full.url
			});
		}
		return [
			<InspectorControls>
				{/* Later, when we have customizable options we will add stuff here! */}
				<div
					style={{
						padding: "1em 0"
					}}
				>
					Options
				</div>
			</InspectorControls>,
			<div className={className}>
				<div className="media-front">
					<MediaUpload
						onSelect={selectImageFront}
						render={({ open }) => {
							return (
								<button onClick={open}>
									<img src={attributes.imgUrlFront} />
								</button>
							);
						}}
					/>
				</div>
				<div className="media-back">
					<MediaUpload
						onSelect={selectImageBack}
						render={({ open }) => {
							return (
								<button onClick={open}>
									<img src={attributes.imgUrlBack} />
								</button>
							);
						}}
					/>
				</div>
				<div className="copy">
					<RichText
						className="copy-hd"
						tagName="h2"
						placeholder="Enter your heading"
						value={attributes.heading}
						onChange={changeHeading}
					/>
					{/* Content is replaced by this guy.
                    We determin the class name and the html tag that
                    we want it to show as. */}
					<RichText
						className="copy-bd"
						tagName="div"
						placeholder="Enter your text here"
						value={attributes.bodyContent}
						onChange={changeBodyContent}
					/>
				</div>
			</div>
		];
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: props => {
		const className = getBlockDefaultClassName("guty/media-block");
		const { attributes } = props;

		return (
			<div className={className}>
				<div className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front">
							<img src={attributes.imgUrlFront} />
						</div>
						<div className="flip-card-back">
							<img src={attributes.imgUrlBack} />
						</div>
					</div>
				</div>
				<div className="media"></div>
				<div className="copy">
					<RichText.Content
						class="copy-hd"
						tagName="h2"
						value={attributes.heading}
					/>
					<RichText.Content
						className="copy-bd"
						tagName="div"
						value={attributes.bodyContent}
					/>
				</div>
			</div>
		);
	}
});
