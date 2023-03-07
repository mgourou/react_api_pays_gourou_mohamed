import { useRoutes  } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Recherche from './components/Recherche/Recherche';
import ListePays from './components/ListePays/ListePays';
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        const sortedData = response.data.sort((a, b) => {
          return a.name.common.localeCompare(b.name.common);
        });
        setData(sortedData);
      })
      .catch((error) => console.error(error));
  }, []);
  const routes = useRoutes([
    {
      path: '/',
      element: <ListePays data={data} isDarkMode={isDarkMode}/>,
    },
    {
      path: '/recherche/:code',
      element: <Recherche data={data} isDarkMode={isDarkMode}/>,
    },
    {
      path: '*',
      element: <h1>404 - Page not found</h1>,
    },
  ]);

  return (
    <div>
      <Navbar toggleDarkMode={toggleDarkMode}/>
      {routes}
    </div>
  );
}

export default App;
