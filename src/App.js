import "./App.css";
import { Main} from "./main/main";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
