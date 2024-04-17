import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <video width="100%" height="240" controls playsinline webkit-playsinline>
          <source src="https://sugiapp-web.stg.sugi-ds.com/contents/t3-new/image/volume-shine/volume-shine.mp4#t=1" type="video/mp4"></source>
        </video>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
