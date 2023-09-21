import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import CardData from './components/CardData';
import axios from 'axios';

const App = () => {

  const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
  const URL_ROOT = `https://api.unsplash.com/`;
  const [inputValue, setInputValue] = useState("");
  const [picturesData, setPicturesData] = useState([])
  const [Loading, setLoading] = useState(false)

  const Spinner = () => {
    return <div className="spinner-border text-dark" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  }
  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `${URL_ROOT}search/photos?page=1&query=${inputValue}&client_id=${ACCESS_KEY}`
      );
      setLoading(true)
      console.log(response.data.results);
      setPicturesData(response.data.results)
      setInputValue("")
      setLoading(false)
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <NavbarComponent inputValue={inputValue} setInputValue={setInputValue} handleSearch={handleSearch} />
      {Loading ? <Spinner /> : <CardData picturesData={picturesData} />}
    </>
  )
}

export default App