import { Container, Row } from 'react-bootstrap';
import { Feature, HeroSlider, Nav, Ubot } from '../components';

export default function Home() {
	return (
		<>
			<Nav />
			<HeroSlider />
			<Container>
				<Row>
					<Feature
						iconNo={0}
						color='#2196F3'
						bgColor={'#E3F2FD'}
						title={'25th anniversary of CSE Dept. from 1996-2021'}
					/>
					<Feature
						iconNo={1}
						color='#673AB7'
						bgColor={'#EDE7F6'}
						title={'UGC approved and IEB accredited'}
					/>
					<Feature
						iconNo={2}
						color='#fdcd77'
						bgColor={'#f4deb7c2'}
						title={'Generous financial aid policy with up to 100% scholarship'}
					/>
					<Feature
						iconNo={3}
						color='#D72E9D'
						bgColor={'#dc94c354'}
						title={'Iconic permanent campus at the center of the city'}
					/>
				</Row>
			</Container>
			<Ubot />
		</>
	);
}
