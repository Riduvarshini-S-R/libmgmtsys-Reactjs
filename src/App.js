import Login from "./pages/Login";
import Home from "./pages/Home";
import Books from './pages/Books';
import Encyclo from "./pages/Encyclo";
import Magazines from "./pages/Magazines";
import Newspaper from "./pages/Newspaper";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/books" element={<Books/>}></Route>
          <Route path="/encyclo" element={<Encyclo/>}></Route>
          <Route path="/magaz" element={<Magazines/>}></Route>
          <Route path="/news" element={<Newspaper/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
