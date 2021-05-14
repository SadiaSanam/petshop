import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

const Resource = ( {path , render }) => {

    const initialState = {
        trans: [],
        loading: true,
        error: null
    };

    const [state, setState] = useState( initialState );

    async function getData () {

        try {
            const res = await axios.get( path );
            const data = res.data;
            console.log('is', data);
            const newState = {
                trans: data,
                loading: false,
                error:null
            } 

          //  setState( [{...state, loading:false, trans:data}]);
             setState( newState )
          
          //    console.log('how?', newState ); 
            
        } catch (error) {
            console.error('get error')
        }


    }
    useEffect( () => {
        getData(); 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

    return (
        <>

            <div className='showlist'> 
            {/* hello  checking of loading flag is crucial else break  */}
            {/* { state.loading === true ? ( <p>loading...</p> ) : (
                <img src= {state.trans[0].url} alt='cat img' 
                    width= '50%' /> ) }  */}

                {render( state )}
            </div>

            
        </>
    )
}

export default Resource
