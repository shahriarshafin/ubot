import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import SlideImg1 from '../assets/images/slide1.png';
import SlideImg2 from '../assets/images/slide2.png';
import SlideImg3 from '../assets/images/slide3.png';

const HeroSlider = () => {
	return (
		<>
			<Carousel
				className='mt-4'
				style={{
					boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
				}}
			>
				{[SlideImg1, SlideImg2, SlideImg3].map((img, index) => (
					<Carousel.Item key={index} interval={1500}>
						<Image className='d-block w-100' src={img} alt='First slide' />
					</Carousel.Item>
				))}
			</Carousel>
		</>
	);
};

export default HeroSlider;
