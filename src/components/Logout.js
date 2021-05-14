import React, { useContext } from 'react'

import {GlobalContext } from './GlobalStore'

import { reactLocalStorage } from 'reactjs-localstorage'

const Logout = () => {

    const { updateInfo } = useContext( GlobalContext ); 

    const logoutnow = () => {

        const newmem = { 
        userid: null,
        name: null,
        email: null, 
        memtype: null
    }
        updateInfo( newmem ); 

        reactLocalStorage.remove( 'PSInfo' );
        reactLocalStorage.remove( 'PSInfoKey' );

        window.location.assign('/');
    }




    return (
        <div>
            <h1>Logout </h1>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio omnis exercitationem sit praesentium deserunt totam quia labore commodi consequuntur voluptate laborum debitis corrupti aut in necessitatibus, dolores quis at iste?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam quos impedit mollitia necessitatibus libero soluta ad quisquam reprehenderit tempore doloremque quaerat et totam illum, ut autem consequatur nulla nostrum, rerum consequuntur error natus ipsum blanditiis ex. Officiis a dolores velit fugit accusamus error dolorum neque, earum dolor recusandae quae doloribus, delectus minima, placeat incidunt fugiat alias nostrum eos aspernatur voluptatem repudiandae quisquam mollitia labore. Ex sint similique laboriosam obcaecati consequatur, reiciendis, placeat officiis vitae ea nostrum explicabo. Natus eveniet ullam totam ad cum sit quas. Autem iste, assumenda minima omnis expedita libero, perferendis soluta voluptate illum nostrum dicta non.
            </p>
            
            <button className='btn2' 
               onClick={ () => logoutnow() }   >Confirm <i className="fa fa-paw" aria-hidden="true"></i></button>

        </div>
    )
}

export default Logout
