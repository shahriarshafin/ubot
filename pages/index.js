import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SpeechRecognition, {
	useSpeechRecognition,
} from 'react-speech-recognition';
import styled from 'styled-components';
import { BotText, UserText } from '../components';

export default function Home() {
	const [userInput, setUserInput] = useState('');
	const [userData, setUserData] = useState([]);
	const [fetchData, setFetchData] = useState('Hi, I am Ubot 😊');
	const {
		transcript,
		listening,
		resetTranscript,
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
			getStaticProps();
			createArr();
		}
	};

	const getStaticProps = async () => {
		const response = await fetch(`http://localhost:3000/conv`);
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
		SpeechRecognition.startListening({ language: 'en-IN' });
	};

	useEffect(() => {
		setUserInput(transcript);
	}, [transcript]);

	if (!isMicrophoneAvailable) {
		console.log('Microphone is not available');
	}

	if (!browserSupportsSpeechRecognition) {
		return <span>Browser does support speech recognition.</span>;
	}

	return (
		<>
			<Container>
				<Discussion>
					{userData.map((item, index) => {
						return (
							<>
								<UserText text={item.userInput} time={item.timeNow} />
								<BotText text={item.fetchData} time={item.timeNow} />
							</>
						);
					})}

					<form action='' onSubmit={handleSubmit}>
						<input
							onChange={handleChange}
							value={userInput}
							name='userInput'
							type='text'
							autoComplete='off'
						/>

						<button
							type='submit'
							className={
								userInput.replace(/\s{2,}/g, ' ').trim() === ''
									? 'mx-3 btn btn-light'
									: 'mx-3 btn btn-success'
							}
						>
							Send
						</button>
					</form>
				</Discussion>

				<div>
					<p>Microphone: {listening ? 'on' : 'off'}</p>
					<button onClick={recStart}>Start</button>
					<button onClick={SpeechRecognition.stopListening}>Stop</button>
					<button onClick={resetTranscript}>Reset</button>
					<p>{transcript}</p>
				</div>
			</Container>
		</>
	);
}

const Discussion = styled.div`
	max-width: 600px;
	margin: 0 auto;
	display: flex;
	flex-flow: column wrap;
`;
