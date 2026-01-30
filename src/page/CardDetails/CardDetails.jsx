import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaStar } from "react-icons/fa";

const handleSubmit = () => {
  alert('Toy request submitted successfully!');
};

const CardDetails = () => {
  const { id } = useParams();
  const toyId = parseInt(id);
  const data = useLoaderData();
  const singleCard = data.find(card => card.toyId === toyId);
  const { toyName, pictureURL, description, rating, availableQuantity, price, subCategory } = singleCard;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-10">

      <div className="flex flex-col md:flex-row gap-8">

        <div className="md:w-1/2">
          <img
            src={pictureURL}
            alt={toyName}
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>

        <div className="md:w-1/2 flex flex-col justify-start">
          <h2 className="font-bold text-xl md:text-3xl mb-3">{toyName}</h2>

          <p className="flex items-center font-semibold text-lg md:text-xl mb-2">
            {rating} <FaStar className="ml-1 text-yellow-400" />
          </p>

          <p className="font-bold my-2">{subCategory}</p>

          <div className="flex flex-wrap gap-3 my-4">
            <div className="badge badge-outline">Available: {availableQuantity}</div>
            <div className="badge badge-outline">Price: ${price}</div>
          </div>

          <div className="mt-6 font-medium">
            <p className="whitespace-pre-line leading-7">{description}</p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center md:justify-start">
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <fieldset className="flex flex-col gap-3">
              <label className="label">Name</label>
              <input type="text" className="input input-bordered w-full" placeholder="Name" required />

              <label className="label">Email</label>
              <input type="email" className="input input-bordered w-full" placeholder="Email" required />

              <button onClick={handleSubmit} className="btn btn-neutral mt-4">Try Now</button>
            </fieldset>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CardDetails;
