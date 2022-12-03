import 'bootstrap/dist/css/bootstrap.min.css';
// simport { useEffect } from 'react';
import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Skills from './components/Skills';

function App() {


	return (
		<div className="App">
			<NavBar />
			<Banner />
			<Skills />
		</div>
	);
}

export default App;
