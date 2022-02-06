import 'bootstrap/dist/css/bootstrap.min.css';
import 'regenerator-runtime/runtime';
import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
