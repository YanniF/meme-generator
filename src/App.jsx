import './App.scss';
import Header from "./components/Header/Header";
import MemeGenerator from "./components/MemeGenerator/MemeGenerator";

function App() {
  return (
    <div className='container'>
      <Header />
      <MemeGenerator />
    </div>
  );
}

export default App;
