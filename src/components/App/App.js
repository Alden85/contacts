import React, { useState, useEffect } from 'react';
import '../App/App.css';
import HeaderTitle from '../Header/HeaderTitle';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import axios from 'axios';
import Users from '../Users/Users';
import Page from '../Page/Page';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const url = `https://reqres.in/api/users`;
    axios(`${url}?page=${page}`)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  if (loading) return 'Loading...';
  if (error) return 'Error Loading!';

  console.log(data);

  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='headertitle'>
        <HeaderTitle />
      </div>
      <div className='search'>
        <Search
          data={data}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
      <div className='users'>
        <Users data={data} setData={setData} searchTerm={searchTerm} />
      </div>
      <div className='page'>
        <Page page={page} setPage={setPage} />
      </div>
    </div>
  );
}

export default App;
