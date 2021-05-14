import React, { useContext } from 'react';

import { Link, Redirect } from 'react-router-dom';

import catsAdoption from './CatAdoption';

import { GlobalContext } from './GlobalStore'

const Promotion = () => {

    const { info  } = useContext(  GlobalContext );

    const { email } = info; 

    return (
        <>
        <div>
            <h1> Promotion - Cats for Adoption </h1>

            { email === null ? <Redirect to='/login' /> : null }


        <div className='productlist'>
           
        <ul>
            {
             Object.entries(catsAdoption).map( ([slug, {name, img}]) => (

                <li key={ slug }>
                    <Link to={ `/promotion/${slug}`} >
                    <h3 className='pname'>{ name } </h3>
                    <img src= {img} alt={name} className='promo-img' /> 
                    </Link>
                </li>
             ) 

             )

            }
        </ul>

            <Link to='/' >
            <button className='btn2'>Home <i className="fa fa-paw" aria-hidden="true"></i></button>
            </Link>
        </div>

        </div>
        </>
    )
}

export default Promotion
