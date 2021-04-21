// import Menu from './components/Menu';
import Home from './components/Home';
// hooks
import MenuState from './hooks/MenuState';
function App() {
	return (
		<div className='App'>
			<MenuState>
				{/* <Menu /> */}
				<Home />
			</MenuState>
		</div>
	);
}

export default App;
