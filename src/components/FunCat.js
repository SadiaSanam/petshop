import React from 'react';
import Resource from './Resource';

const myCatPath = 'https://api.thecatapi.com/v1/images/search/?limit=15&page=100&order=DESC';

const renderCat =  data => {
    if (data.loading) return (<p> loading ... </p>)

    return data.trans.map( cat => 
     <div key={cat.id}> 
          
             <img className='image' src= { cat.url} alt='cat img' /> 
          
    </div>  ) 
 }  

const FunCat = () => {

    
    return (
        <>
            <div>
            <Resource path={ myCatPath } 
                render = { renderCat } /> 
            </div>
        </>
    )
}

export default FunCat
