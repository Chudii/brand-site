import './App.css';
import './styles/navbar.css'
import './styles/banner.css'
import './styles/products.css'
import './styles/contact.css'
import { NavBar } from './components/navbar';
import { Banner } from './components/banner';
import { Products } from './components/products';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Contact } from './components/contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Products />
      <Contact />
    </div>
  );
}

export default App;
