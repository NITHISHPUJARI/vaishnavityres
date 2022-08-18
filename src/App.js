import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './components/Home'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar fixed="top" />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/products"
            element={<Products />}
          />
          <Route
            path="/aboutus"
            element={<About />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>
        <footer>Copyright &copy; 2022 Vaishnavi Tyres.</footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
