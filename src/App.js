import logo from './logo.svg';
import './App.css';
import A2ZGuide from './Component/GetHelp/GetHelp';
import dynamicData from './dynamicFile/A2ZGuide.json'
import "./Assets/styles/_base.scss"
function App() {
  return (
    <A2ZGuide data={dynamicData} />
  );
}

export default App;
