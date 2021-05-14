import React from 'react';

import {useParams}   from 'react-router-dom';

import catsAdoption from './CatAdoption'

const CatAdoptionDetail = () => {

    const { slug } = useParams();

    const cat = catsAdoption[slug];

    if ( !cat ) {
        return <h2> Cat not found </h2>
    }

    const { name, img } = cat; 

    return (
        <div>
            <div className='productdetail'>
            <h3> {name} </h3>
            <img src={img} alt={name}  />
        </div>
        </div>
    )
}

export default CatAdoptionDetail
