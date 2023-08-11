import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Search from './components/Search';
import List from './components/List';
import Navbar from './components/Navbar'

function App() {
  return (
      <div className="App">
          <Router>
              <Navbar/>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />}>
                      <Route path="search" element={<Search />} />
                      <Route path="list" element={<List/>} />
                  </Route>
              </Routes>
          </Router>
      </div>
  );
}

export default App;