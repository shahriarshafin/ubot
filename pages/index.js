import { useEffect, useState } from 'react';
import { IoClose, IoEllipse, IoMic, IoSend } from 'react-icons/io5';
import SpeechRecognition, {
	useSpeechRecognition,
} from 'react-speech-recognition';
import styled from 'styled-components';
import useSound from 'use-sound';
import { BotTyping, IsBot, IsUser } from '../components';

const SendSoundUrl = '/sounds/boop.mp3';
const MicSoundUrl = '/sounds/tap.mp3';

export default function Home() {
	const [playMsgSend] = useSound(SendSoundUrl);
	const [playMicRec] = useSound(MicSoundUrl);
	const [userInput, setUserInput] = useState('');
	const [userData, setUserData] = useState([]);
	const [fetchData, setFetchData] = useState(
		'Hi, I am Ubot 😊. How can I help you?'
	);
	const {
		transcript,
		listening,
		isMicrophoneAvailable,
		browserSupportsSpeechRecognition,
	} = useSpeechRecognition();

	const handleChange = (e) => {
		setUserInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (userInput.replace(/\s{2,}/g, ' ').trim() === '') {
			return;
		} else {
			setUserInput('');
			setTimeout(() => {
				createArr();
			}, 1200);
			getStaticProps();
			playMsgSend();
		}
	};

	const getStaticProps = async () => {
		const response = await fetch(`http://localhost:4000/conv`);
		const data = await response.json();
		setFetchData(data[Math.floor(Math.random() * 26) + 1].text);
		// console.log(data[0].text);
	};

	const createArr = () => {
		const getTime = () => {
			return new Date().toLocaleString('en-US', {
				hour: 'numeric',
				minute: 'numeric',
				hour12: true,
			});
		};
		const timeNow = getTime();
		const newRecord = { userInput, fetchData, timeNow };
		// console.log(newRecord);
		const newArray = [...userData, newRecord];
		setUserData(newArray);
		console.table(newArray);
	};

	const recStart = () => {
		playMicRec();
		if (listening) {
			SpeechRecognition.stopListening();
		} else {
			SpeechRecognition.startListening({ language: 'en-IN' });
		}
	};

	useEffect(() => {
		setUserInput(transcript);
	}, [transcript]);

	if (!isMicrophoneAvailable) {
		console.log('Microphone is not available');
	}

	if (!browserSupportsSpeechRecognition) {
		return <h1>Browser does support speech recognition.</h1>;
	}

	return (
		<>
			<p>{transcript}</p>
			<div className='chatbot'>
				<div className='chatbot__header'>
					<p>
						<strong>Got a question?</strong>
					</p>
					<CloseBtn>
						<IoClose />
					</CloseBtn>
				</div>
				<div className='chatbot__message-window'>
					<ul className='chatbot__messages'>
						<BotTyping />
						{userData.map((item, index) => {
							return (
								<>
									<IsUser message={item.userInput} />

									<BotTyping />

									<IsBot message={item.fetchData} />
								</>
							);
						})}
					</ul>
				</div>

				<form action='' onSubmit={handleSubmit}>
					<div className='chatbot__entry'>
						<input
							onChange={handleChange}
							value={userInput}
							name='userInput'
							type='text'
							autoComplete='off'
							placeholder='Write a message...'
							className='chatbot__input'
						/>
						<MicIcon onClick={recStart}>
							<IoMic className={listening ? 'text-danger' : ''} />
						</MicIcon>
						<RedDot>
							<IoEllipse className={listening ? 'visible' : 'invisible'} />
						</RedDot>
						<SendBtn
							type='submit'
							className={
								userInput.replace(/\s{2,}/g, ' ').trim() === ''
									? 'text-dark'
									: 'text-primary'
							}
						>
							<IoSend />
						</SendBtn>
					</div>
				</form>
			</div>
		</>
	);
}

const CloseBtn = styled.div`
	svg {
		font-size: 1.3rem;
	}
`;

const SendBtn = styled.button`
	border: none;
	cursor: pointer;
	margin: 0;
	padding: 0;
	background: none;
	svg {
		font-size: 1.2rem;
	}
`;
const MicIcon = styled.div`
	cursor: pointer;
	svg {
		font-size: 1.3rem;
	}
`;
const RedDot = styled.div`
	margin-right: 5px;
	svg {
		font-size: 0.7rem;
		color: #bb2d3b8c;
		animation: blinker 1.5s cubic-bezier(0.5, 0, 1, 1) infinite alternate;
		@keyframes blinker {
			from {
				opacity: 1;
			}
			to {
				opacity: 0;
			}
		}
	}
`;
