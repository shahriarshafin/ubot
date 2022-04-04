import { FaCheckCircle, FaHands, FaMapMarkedAlt, FaStar } from 'react-icons/fa';
import styled from 'styled-components';

const icons = [FaStar, FaCheckCircle, FaHands, FaMapMarkedAlt];

const Feature = ({ title, iconNo, color, bgColor }) => {
	const Icon = icons[iconNo];

	return (
		<>
			<div className='col-12 col-lg-3 col-md-6'>
				<CardWrapper>
					<div className='d-flex align-items-center'>
						<Box style={{ backgroundColor: `${bgColor}` }}>
							<Icon style={{ color: `${color}` }} />
						</Box>
						<h5>{title}</h5>
					</div>
				</CardWrapper>
			</div>
		</>
	);
};

export default Feature;

const CardWrapper = styled.div`
	padding: 20px;
	border-radius: 8px;
	margin-top: 1.5rem !important;
	background-color: #fff;
	border: 1px solid #e3f2fd;
	transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	h5 {
		margin: 10px;
		font-size: 14px;
		color: rgb(33, 33, 33);
		font-weight: 500;
		line-height: 18px;
	}
	svg {
		font-size: 20px;
	}
	&:hover {
		box-shadow: rgb(32 40 45 / 8%) 0px 2px 14px 0px;
	}
`;
const Box = styled.div`
	min-width: 72px;
	min-height: 72px;
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
