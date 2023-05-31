import './App.css';
import './styles/navbar.css'
import './styles/banner.css'
import './styles/products.css'
import './styles/contact.css'
import './styles/footer.css'
import { NavBar } from './components/navbar';
import { Banner } from './components/banner';
import { Products } from './components/products';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
