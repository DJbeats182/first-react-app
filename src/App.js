import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to my First React App!</h1>
        <p>
          React is so cool!
        </p>
        <p>
          I'm going to have a lot of fun learning React.
        </p>
        <ul>
          <li>React</li>
          <li>is</li>
          <li>Awesome!!!</li>
        </ul>
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
