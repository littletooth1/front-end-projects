import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from "./Footer";
import {useState} from "react";

function App() {
  const [page, setPage] = useState('Home');
  return (
      <div className="app">
        <Header setPage={setPage}/>
        <Main page={page}/>
        <Footer/>
      </div>
  );
}

export default App;
