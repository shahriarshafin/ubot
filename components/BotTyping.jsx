import Image from 'next/image';
import botLogo from '../assets/images/botLogo.png';

const BotTyping = () => {
	return (
		<li className='is-ai animation'>
			<div className='is-ai__profile-picture'>
				<Image src={botLogo} height={44} width={44} alt='bot-logo'></Image>
			</div>
			<span className='chatbot__arrow chatbot__arrow--left'></span>
			<div className='chatbot__message'>
				<span className='loader'>
					<span className='loader__dot'></span>
					<span className='loader__dot'></span>
					<span className='loader__dot'></span>
				</span>
			</div>
		</li>
	);
};

export default BotTyping;
