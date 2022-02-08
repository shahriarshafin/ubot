import Image from 'next/image';
import botLogo from '../assets/images/botLogo.png';
const IsBot = ({ message }) => {
	return (
		<li className='is-ai animation'>
			<div className='is-ai__profile-picture'>
				<Image src={botLogo} height={44} width={44} alt='bot-logo'></Image>
			</div>
			<span className='chatbot__arrow chatbot__arrow--left'></span>
			<p className='chatbot__message'>{message}</p>
		</li>
	);
};

export default IsBot;
