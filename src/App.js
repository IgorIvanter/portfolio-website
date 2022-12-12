import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {


	return (
		<div className="App">
			<NavBar />
			<Banner />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
