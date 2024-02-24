// App.js
import React, { useState, useEffect } from 'react';
import TableRow from './tablerow';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Crypto Market Data</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Symbol</th>
            <th>Current Price</th>
            <th>Total Volume</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <TableRow key={item.id} data={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
