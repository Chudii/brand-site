import './App.css';
import './styles/navbar.css'
import './styles/banner.css'
import { NavBar } from './components/navbar';
import { Banner } from './components/banner'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
    </div>
  );
}

export default App;
