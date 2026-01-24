import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaStar } from "react-icons/fa";

const CardDetails = () => {
    const {id} = useParams();
    const toyId=parseInt(id);
    const data = useLoaderData();
    const singleCard = data.find(card=>card.toyId===toyId);
    console.log(data)
    const {toyName,pictureURL,description,rating,availableQuantity,price,subCategory} = singleCard
    return (
        <div className=' w-[1200px] mx-auto'>
            <div className='flex gap-10 mt-15'>
                <div>
                    <img className='w-70 h-100 rounded-xl' src={pictureURL} alt="" />
                </div>
            <div>
                <div>
            <h2 className='font-bold text-2xl mb-3'>
              {toyName}
            </h2>
            
            <p className=' flex font-semibold text-xl'>{rating} <FaStar /></p>
            <p className='font-bold my-3'>{subCategory}</p>
            <div className=" justify-end font-bold">
              <div className="badge mr-5 badge-outline">available: {availableQuantity}</div>
              <div className="badge badge-outline">Price: ${price}</div>
            </div>
          </div>
            </div>
            </div>
            <div className='mt-10 font-medium '>
                <p>{description}</p>
            </div>
            <div className='flex mt-10'>
                <div className=''>
                    <input className='border-2' type="email" name="" id="" placeholder='Email' />
                    <input className='border-2' type="text" placeholder='Name' />
                </div>
                <div>
                    <button className='btn'>trey now</button>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;