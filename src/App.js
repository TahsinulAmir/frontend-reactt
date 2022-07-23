import logo from './logo.svg';
import './App.css';
import ManajemenBuku from './components/ManajemenBuku';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hello from './components/Hello';
import { useState } from "react";


function App() {
  const [books, setBooks] = useState([{ _id: 1, judul: "Laskar Pelangi", stok: 7 }, { _id: 2, judul: "Bumi", stok: 11 }])
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/hello" element={<Hello />} />            

          <Route path="/manajemen-buku" element={<ManajemenBuku bookList={books} />}/>
            
          
        </Routes>
      </Router>
    </div>
  );
}
export default App;
