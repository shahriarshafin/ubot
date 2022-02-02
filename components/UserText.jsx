import styled from 'styled-components';

const UserText = ({ text }) => {
	return (
		<>
			<BubbleWrap>{text}</BubbleWrap>
		</>
	);
};

export default UserText;
const BubbleWrap = styled.div`
	border-radius: 15px;
	border-bottom-right-radius: 0px;
	background-color: #efefef;
	color: black;
	padding: 0.25em 0.75em;
	margin: 0.0625em;
	max-width: 50%;
	display: block;
	align-self: flex-end;
`;
