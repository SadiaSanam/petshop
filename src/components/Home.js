import React, { useContext } from 'react'

import mainkitten from '../images/mainkitten.jpg';
import showcat from '../images/showcat.jpg';

import { GlobalContext } from './GlobalStore';

const Home = () => {

    const { info } = useContext( GlobalContext);

    const { email, name } = info;

    return (
        <div>

            { email ? ( 
                <>
                <h2>hi <span style={{color: "orange"}} > { name } </span>, welcome to Pet Shop member's Home </h2>
                <img src={ showcat } alt='show cat' className='showcat' />
                </>
             ) : ( 
             <>
                <h1>Welcome to Cat Lover's Pet Shop </h1>
    
                <img src={ mainkitten } alt='kitten' className='showcat' />
            </>

              )      }
            
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio omnis exercitationem sit praesentium deserunt totam quia labore commodi consequuntur voluptate laborum debitis corrupti aut in necessitatibus, dolores quis at iste?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam quos impedit mollitia necessitatibus libero soluta ad quisquam reprehenderit tempore doloremque quaerat et totam illum, ut autem consequatur nulla nostrum, rerum consequuntur error natus ipsum blanditiis ex. Officiis a dolores velit fugit accusamus error dolorum neque, earum dolor recusandae quae doloribus, delectus minima, placeat incidunt fugiat alias nostrum eos aspernatur voluptatem repudiandae quisquam mollitia labore. Ex sint similique laboriosam obcaecati consequatur, reiciendis, placeat officiis vitae ea nostrum explicabo. Natus eveniet ullam totam ad cum sit quas. Autem iste, assumenda minima omnis expedita libero, perferendis soluta voluptate illum nostrum dicta non.
            </p>
            
        </div>
    )
}

export default Home
