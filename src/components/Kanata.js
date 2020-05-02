import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Kanata() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://us-central1-kanata-production.cloudfunctions.net/api/content'
      )
      .then(result => setData(result.data));
  }, []);

  return (
    <div>
      {data.map(item => (
        <img
          key={item.contentId}
          src={item.image}
          alt=""
          height="250px"
          width="250px"
          style={{ margin: '1em' }}
        />
      ))}
    </div>
  );
}
