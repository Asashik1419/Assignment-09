import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaStar } from "react-icons/fa";

const handleSubmit = ()=>{
  alert('Toy request submitted successfully!')
}

const CardDetails = () => {
    const {id} = useParams();
    const toyId=parseInt(id);
    const data = useLoaderData();
    const singleCard = data.find(card=>card.toyId===toyId);
    // console.log(data)
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
                
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body w-90">
        <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" required />
            {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" required />
          
          <button onClick={handleSubmit} className="btn btn-neutral mt-4">Try Now</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
            </div>
    );
};

export default CardDetails;