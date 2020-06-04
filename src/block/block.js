/**
 * BLOCK: flip-block3
 */

import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; 
const { registerBlockType, getBlockDefaultClassName } = wp.blocks;
const { InspectorControls, RichText, MediaUpload } = wp.editor;

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
			default: "http://placehold.it/200"
		},
		imgUrlBack: {
			type: "string",
			default: "http://placehold.it/200"
		}
	},

	
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
				{/* Later, when we have customizable options we will add stuff here? */}
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
					<p>Select the front image</p>
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
					<p>Select the back image</p>
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
                    We determine the class name and the html tag that
                    we want it to show as? */}
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
				<div className="media">
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
			</div>
		);
	}
});
