const IsUser = ({ message }) => {
	return (
		<li className='is-user animation'>
			<p className='chatbot__message'>{message}</p>
			<span className='chatbot__arrow chatbot__arrow--right'></span>
		</li>
	);
};

export default IsUser;
