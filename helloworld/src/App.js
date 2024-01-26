import logo from './logo.svg';
import './App.css';
import './components/Greet.js'
import Greet from './components/Greet.js';
import Welcome from './components/Welcome.js';
import WelcomeName from './components/WelcomeJsx.js';
import WelcomeWithoutJsx from './components/WelcomewithoutJsx.js'; 
function App() {
  return (
    <div className="App">
      <Greet/>
      <Welcome/>
      <WelcomeName/>
      <WelcomeWithoutJsx/>
    </div>
  );
}

export default App;
