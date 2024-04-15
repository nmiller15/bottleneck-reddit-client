import logo from './logo.svg';
import './App.css';
import Feed from './components/Feed/Feed.js';
import SideBar from './components/SideBar/SideBar.js';

function App() {
  return (
    <div className="App">  
      <SideBar />
      <Feed />
    </div>
  );
}

export default App;
