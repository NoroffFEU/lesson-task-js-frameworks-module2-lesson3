import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";

function ScreenshotSlider({ screenshots }) {
	return (
		<Carousel>
			{screenshots.map(function (screenshot, index) {
				return (
					<Carousel.Item key={screenshot.image}>
						<img className="d-block w-100" src={screenshot.image} alt={`screenshot ${index}`} />
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
}

ScreenshotSlider.propTypes = {
	screenshots: PropTypes.arrayOf(PropTypes.object),
};

export default ScreenshotSlider;
