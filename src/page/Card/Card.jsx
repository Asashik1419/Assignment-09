import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';


const Card = () => {
     const [allData, setAllData] = useState([]);

     useEffect(()=> {
        fetch('jsonData.json')
        .then(res=>res.json())
        .then(data => {
            setAllData(data);
        })
     })
    return (

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {allData.map((data) => (
        <div key={data.toyId} className="card bg-base-100 w-96 shadow-sm">
          <figure className='h-70 px-5'>
            <img src={data.pictureURL} alt={data.toyName} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {data.toyName}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{data.description}</p>
            <p className='card-actions justify-end'>{data.rating} <FaStar /></p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">available: {data.availableQuantity}</div>
              <div className="badge badge-outline">Price: ${data.price}</div>
            </div>
            
            <Link to={`/cardDetails/${data.toyId}`}>
            <div className='card-actions justify-center mt-3 rounded-2xl'>
                <button className='btn btn-primary'>View More</button>
            </div>
            </Link>
          </div>
        </div>
      ))}
      </div>
    );
};

export default Card;