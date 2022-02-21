import styled from 'styled-components';

const IsUser = ({ message }) => {
	return (
		<li className='is-user animation'>
			<p className='chatbot__message'>{message}</p>
			<Arrow></Arrow>
		</li>
	);
};

export default IsUser;

const Arrow = styled.span`
	width: 0;
	height: 0;
	margin-top: 18px;
	border-top: 6px solid transparent;
	border-bottom: 6px solid transparent;
	border-left: 6px solid #275cab;
`;
