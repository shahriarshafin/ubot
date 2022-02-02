import { useState } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { BotText, UserText } from '../components';

export default function Home() {
	const [userInput, setUserInput] = useState('');
	const [userData, setUserData] = useState([]);
	const [fetchData, setFetchData] = useState('Hi, I am Ubot 😊');

	const handleSubmit = (e) => {
		e.preventDefault();
		setUserInput('');
		getStaticProps();
		createArr();
	};

	const getStaticProps = async () => {
		const response = await fetch(`http://localhost:3000/conv`);
		const data = await response.json();
		setFetchData(data[Math.floor(Math.random() * 26) + 1].text);
		// console.log(data[0].text);
	};

	const createArr = () => {
		const newRecord = { userInput, fetchData };
		const newArray = [...userData, newRecord];
		setUserData(newArray);
	};

	return (
		<>
			<Container>
				<Discussion>
					{userData.map((item, index) => {
						return (
							<>
								<UserText key={index} text={item.userInput} />
								<BotText text={item.fetchData} />
							</>
						);
					})}

					<form action='' onSubmit={handleSubmit}>
						<input
							onChange={(e) => setUserInput(e.target.value)}
							value={userInput}
							name='userInput'
							type='text'
							autoComplete='off'
						/>
						<button type='submit' className='mx-3 btn btn-success'>
							Send
						</button>
					</form>
				</Discussion>
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

const getStaticProps = async () => {
	const response = await fetch(`http://localhost:3000/conv`);
	const data = await response.json();
	// setFetchData(data[0].title);
	console.log(data[Math.floor(Math.random() * 26) + 1].text);
};
