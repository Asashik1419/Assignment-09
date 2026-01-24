import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const CardDetails = () => {
    const {id} = useParams();
    const toyId=parseInt(id);
    const data = useLoaderData();
    const singleCard = data.find(card=>card.toyId===toyId);
    console.log(data)
    const {toyName,pictureURL} = singleCard
    return (
        <div className=' w-[1200px] mx-auto'>
            <img className='w-100' src={pictureURL} alt="" />
            <h5>{toyName}</h5>
        </div>
    );
};

export default CardDetails;