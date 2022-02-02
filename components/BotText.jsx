import styled from 'styled-components';

const BotText = ({ text }) => {
	return (
		<>
			<BubbleWrap>{text}</BubbleWrap>
		</>
	);
};

export default BotText;

const BubbleWrap = styled.div`
	border-radius: 15px;
	border-bottom-left-radius: 0px;
	background-color: cornflowerblue;
	color: #fff;
	padding: 0.25em 0.75em;
	margin: 0.0625em;
	max-width: 50%;
	display: block;
`;
