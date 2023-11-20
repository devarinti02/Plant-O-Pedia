import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://plant-o-pedia-ae6a7-default-rtdb.firebaseio.com/plant-details.json');
      const responseData = response.data;
  
      if (responseData) {
        const filteredData = Object.values(responseData).filter(item =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
  
        if (filteredData.length > 0) {
          setData(filteredData);
        } else {
          alert("No matching data found for the given plant name.");
        }
      } else {
        alert("No data received from the server. Please try again later.");
      }
    } catch (error) {
      alert('Error fetching data. Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.length <= 0) {
      alert('Enter the plant name');
    } else {
      fetchData();
      setSearchTerm('');
    }
  };

  return (
    <div className='searcharea'>
      <center className='center'>
        <form className='searchform' onSubmit={handleSubmit}>
          <br></br>
          <input
            className='searchbar'
            type='text'
            placeholder='Enter the plant name...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />{' '}
          &nbsp;
          <input className='searchbtn' type='submit' name='submit' value='Search' />
        </form>
        <br></br>
        <div className='dataarea'>
          
            {data &&
              data.map((item, index) => (
                <div key={index}>
                  <div className='content'> <strong className='parahead'>Title:</strong > &nbsp; {item.title} </div>
                  <div className='content'> <strong className='parahead'>Soil:</strong > &nbsp; {item.soil}</div>
                  <div className='content'> <strong className='parahead'>Description:</strong > &nbsp; {item.description}</div>
                  <div className='content'> <strong className='parahead'>Methods:</strong > &nbsp;<p> {item.methods}</p></div>
                </div>
              ))}
          
        </div>
      </center>
    </div>
  );
};

export default Home;
