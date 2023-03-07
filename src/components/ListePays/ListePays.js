  import './ListePays.css';
  import axios from 'axios';
  import { useEffect, useState } from 'react';
  import { Link } from 'react-router-dom';

  function ListePays(props) {
    const [data, setData] = useState([]);
    const [selectedContinent, setSelectedContinent] = useState("All");
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
      axios.get("https://restcountries.com/v3.1/all")
        .then(response => {
          const sortedData = response.data.sort((a, b) => {
            return a.name.common.localeCompare(b.name.common);
          });
          const dataWithContinent = sortedData.map(country => ({
            ...country,
            continent: country.region === "Americas" ? "America" : country.region,
          }));
          setData(dataWithContinent);
        })
        .catch(error => console.error(error));
    }, []);


    const handleSelectChange = (event) => {
      setSelectedContinent(event.target.value);
    };
    const filteredData = data.filter((country) => {
      // Filtrer par nom de pays
      const nameMatch =
        searchText === "" ||
        country.name.common.toLowerCase().includes(searchText.toLowerCase());
  
      // Filtrer par continent
      const continentMatch =
        selectedContinent === "All" || country.continent === selectedContinent;
  
      return nameMatch && continentMatch;
    });

    return (
      <div className={`Recherche ${props.darkMode ? 'dark-mode' : ''}`}>
        <div className='div_input_select'>
          <input type="text" placeholder='Rentre dans ton pays' value={searchText} onChange={(event) => setSearchText(event.target.value)} />
          <select name="" id="" value={selectedContinent} onChange={handleSelectChange}>
            <option value="All">Tous</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctic">Antarctic</option>
            <option value="Asia">Asia</option>
          </select>
        </div>
        <div className='box_country_all'>
          {filteredData.map((country, index) => (
            <div key={index} className='box_country'>
              <Link to={`/recherche/${country.cca3}`}>
                <div className='box_country_flag' key={country.name.common}>
                  <img src={country.flags.svg} alt={country.name.common} />
                  <span className='test'>{country.name.common}</span>
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

