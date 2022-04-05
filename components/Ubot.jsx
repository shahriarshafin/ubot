import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { IoClose, IoEllipse, IoMic, IoSend } from 'react-icons/io5';
import SpeechRecognition, {
	useSpeechRecognition,
} from 'react-speech-recognition';
import styled from 'styled-components';
import useSound from 'use-sound';
import botLogo from '../assets/images/botLogo.png';
import { BotTyping, IsBot, IsUser } from './';

const SendSoundUrl = '/sounds/boop.mp3';
const MicSoundUrl = '/sounds/tap.mp3';

export default function Home() {
	const messagesEndRef = useRef(null);

	const [botOpen, setBotOpen] = useState(false);
	const [showIntro, setShowIntro] = useState(true);

	const [playMsgSend] = useSound(SendSoundUrl);
	const [playMicRec] = useSound(MicSoundUrl);
	const [userInput, setUserInput] = useState('');
	const [userData, setUserData] = useState([]);
	const [fetchData, setFetchData] = useState(
		'Hi, I am Ubot 😊. How can I help you?'
	);
	// test
	const [userArr, setUserArr] = useState([]);
	const [botArr, setBotArr] = useState([]);
	// test
	const {
		transcript,
		listening,
		isMicrophoneAvailable,
		browserSupportsSpeechRecognition,
	} = useSpeechRecognition();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (userInput.replace(/\s{2,}/g, ' ').trim() === '') {
			return;
		} else {
			setUserInput('');
			getMessage();
			createArr();
			playMsgSend();
		}
	};

	const getMessage = async () => {
		const response = await fetch(
			// `http://192.168.84.134:8080/predict/${userInput}`
			`http://localhost:4000/${userInput}`
		);
		const data = await response.json();

		// create new arr from get data
		const newArr = [...userData, data[0].conversation];
		setUserData(newArr);
		console.table(newArr);
		console.log(newArr[newArr.length - 1]);

		// setFetchData(data[0].conversation);
		setFetchData(newArr[newArr.length - 1]);
		console.log('fet', fetchData);
		// console.log(data[0].conversation);
	};

	const createArr = () => {
		// .....// test user msg.......
		const newRec = { userInput };
		const newArr = [...userArr, newRec];
		setUserArr(newArr);
		// console.log(newArr);
		// .....// test user msg.......

		// .....// test bot msg.......
		const newBotRec = { fetchData };
		const newBotArr = [...botArr, newBotRec];
		setBotArr(newBotArr);
		// console.log(newBotArr);
		// .....// test bot msg.......

		const newRecord = { userInput, fetchData };
		console.log(newRecord);
		const newArray = [...userData, newRecord];
		setUserData(newArray);
		// console.table(newArray);
	};
	const recStart = () => {
		playMicRec();
		if (listening) {
			SpeechRecognition.stopListening();
		} else {
			SpeechRecognition.startListening({ language: 'en-IN' });
		}
	};

	const scrollToBottom = () => {
		messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		setUserInput(transcript);
	}, [transcript]);

	useEffect(scrollToBottom, [userData]);

	if (!isMicrophoneAvailable) {
		console.log('Microphone is not available');
	}

	if (!browserSupportsSpeechRecognition) {
		return <h1>Browser does support speech recognition.</h1>;
	}

	return (
		<>
			<BotWrapper>
				<Header onClick={() => setBotOpen(botOpen == false ? true : false)}>
					<p>
						<strong>Got a question?</strong>
					</p>
					<CloseBtn>
						<IoClose />
					</CloseBtn>
				</Header>
				<MessageWindow className={botOpen == false ? 'd-none' : 'd-block'}>
					<ul className='chatbot__messages'>
						<Alert show={showIntro} variant='success'>
							<div className='d-flex align-items-center'>
								<Image
									src={botLogo}
									height={44}
									width={44}
									alt='bot-logo'
								></Image>
								<Alert.Heading className='ms-2 mt-2'>
									Hello I&apos;m Ubot.
								</Alert.Heading>
							</div>
							<p>
								I am an artificial intelligence-powered virtual assistant. I can
								find university related information, provide important links,
								assist you to apply, payment and more. How can I help you today?
								Click the button below to wake me up!
							</p>
							<hr />
							<div className='d-flex justify-content-end'>
								<Button
									onClick={() => setShowIntro(false)}
									variant='outline-success'
								>
									Get Started
								</Button>
							</div>
						</Alert>

						{/* {userData.map((item, index) => {
							return (
								<>
									<IsUser message={item.userInput} />

									<BotTyping />

									<IsBot message={()} />
								</>
							);
						})} */}
						{/* <BotTyping />
						<IsBot message={'uuu'} />
						<IsUser message={'BBB'} /> */}

						{/* .......combiners */}
						{userArr.map((item, index) => {
							return (
								<>
									<IsUser message={item.userInput} />

									{userArr.length - 1 === index ? <BotTyping /> : null}

									<IsBot message={botArr[index].fetchData} />
								</>
							);
						})}

						{/* {botArr.map((item, index) => {
							return (
								<>
									<IsBot message={item.fetchData} />
								</>
							);
						})} */}

						{/* .......combiners */}

						{/* {userArr.map((item, index) => {
							return (
								<>
									<IsUser message={item.userInput} />
								</>
							);
						})} */}

						{/* {botArr.map((item, index) => {
							return (
								<>
									<IsBot message={item.fetchData} />
								</>
							);
						})} */}
					</ul>
					<div ref={messagesEndRef} />
				</MessageWindow>

				<form
					action=''
					onSubmit={handleSubmit}
					className={botOpen == false ? 'd-none' : 'd-block'}
				>
					<div className='chatbot__entry'>
						<input
							onChange={(e) => setUserInput(e.target.value)}
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
			</BotWrapper>
		</>
	);
}
const BotWrapper = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	width: 100%;
	border-radius: 5px;
	box-shadow: 0 -6px 99px -17px rgba(0, 0, 0, 0.68);
	z-index: 99;

	@media screen and (min-width: 640px) {
		max-width: 420px;
		right: 80px;
		top: auto;
	}
`;
const Header = styled.div`
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #275cab;
	height: 54px;
	padding: 0 20px;
	width: 100%;
	cursor: pointer;
	border-radius: 5px 5px 0px 0px;
	transition: background-color 0.2s ease;
	border-bottom: 3px solid #94caf1;
	p {
		margin: 0;
	}
	&:hover {
		background-color: #0f3c7e;
	}
`;
const CloseBtn = styled.div`
	svg {
		font-size: 1.3rem;
	}
`;
const MessageWindow = styled.div`
	height: calc(100% - (54px + 60px));
	padding: 40px 20px 20px;
	background-color: #fff;
	overflow-x: none;
	overflow-y: auto;
	&::-webkit-scrollbar {
		width: 0px;
		background: transparent;
	}

	@media screen and (min-width: 640px) {
		height: 380px;
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
