import './App.css';
import User from './Components/User';
import logo from "./logo512.png"

function App() {
  const handleName = (n) => alert(`Hello ${n}`)
  return (
    <div className="App">
      <h1>Intro to ReactJS</h1>
      <div className="users">
      <User title={25} image={logo} content="I am learning react and NodeJS. Working on becoming full-stack developer." handleName={handleName}/>
      <User content="I am an angular and spring boot specialist, learning react to enlarge my development skills." handleName={handleName}/>
      <User title="Marie Doe"  content="I am a web integrator, and I enjoy learning react since it's making my job easier." handleName={handleName} image="https://s.wsj.net/public/resources/images/WW-AA695_SANDBE_P_20160923125605.jpg"/>
      </div>
    </div>
  );
}

export default App;
