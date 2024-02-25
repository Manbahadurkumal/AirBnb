import './App.css';
import NavBar from './component/NavBar';
import Content from './component/Content'; 
import Intro from './component/Intro';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Content/>
    </div>
  );
}

export default App;
