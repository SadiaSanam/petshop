import React from 'react'

import { Link } from 'react-router-dom';

import sleepingkitten from '../images/sleepingkitten.jpg'

const About = () => {
    return (
        <div className='container'> 
            <h1>About Us</h1>
            
            <Link to='/promotion' >

            <img src={sleepingkitten} alt='sleeping kitten' className='showcat' />
            
            </Link>
            
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio omnis exercitationem sit praesentium deserunt totam quia labore commodi consequuntur voluptate laborum debitis corrupti aut in necessitatibus, dolores quis at iste?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam quos impedit mollitia necessitatibus libero soluta ad quisquam reprehenderit tempore doloremque quaerat et totam illum, ut autem consequatur nulla nostrum, rerum consequuntur error natus ipsum blanditiis ex. Officiis a dolores velit fugit accusamus error dolorum neque, earum dolor recusandae quae doloribus, delectus minima, placeat incidunt fugiat alias nostrum eos aspernatur voluptatem repudiandae quisquam mollitia labore. Ex sint similique laboriosam obcaecati consequatur, reiciendis, placeat officiis vitae ea nostrum explicabo. Natus eveniet ullam totam ad cum sit quas. Autem iste, assumenda minima omnis expedita libero, perferendis soluta voluptate illum nostrum dicta non.
            </p>

            <Link to='/promotion' >
            <button className='btn2'>Adopt a kitten <i className="fa fa-paw" aria-hidden="true"></i></button>
            </Link>
        </div>
    )
}

export default About
