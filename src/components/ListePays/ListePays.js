import './ListePays.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ListePays() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then(response => {
        const sortedData = response.data.sort((a, b) => {
          return a.name.common.localeCompare(b.name.common);
        });
        setData(sortedData);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="Recherche">
      <div className='div_input_select'>
        <input type="text" placeholder='Rentre dans ton pays'/>
        <select name="" id="">
          <option value="merge">Merge Sort</option>
          <option value="bubble">Bubble Sort</option>
          <option value="insertion">Insertion Sort</option>
          <option value="quick" selected>Quick Sort</option>
        </select>
      </div>
      <div className='box_country_all'>
        {data && data.map((country,index) => (
          <div key={index} className='box_country'>
            <Link to={`/recherche/${country.cca3}`}>
              <div className='box_country_flag' key={country.name.common}>
                <img src={country.flags.svg} alt={country.name.common}  />
                <span>{country.name.common}</span>
              </div>
            </Link>
            <div className='box_country_info'>
              <span>Population : {country.population}</span>
              <span>Région : {country.region}</span>
              <span>Capitale : {country.capital}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListePays;

