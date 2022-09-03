import './App.css';
import { Header } from './components/header';
import { Main } from './pages/main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      <Main/>
      </header>
    </div>
  );
}

export default App;
