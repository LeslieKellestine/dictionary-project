import logo from "./logo.png";
import './App.css';
import Dictionary from './Dictionary.js';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <header className='App-header'>
          <img src={logo} className="App-logo img-fluid" alt="logo" />  
            <h1>Leslie's Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="Code"/>
        </main>
        <footer className='App-Footer'>Coded by Leslie Kellestine and is <a href="https://github.com/LeslieKellestine/dictionary-project" target="_blank" rel="noreferrer">open-sourced on GitHub</a></footer>
      </div>
    </div>

  );
}

export default App;
