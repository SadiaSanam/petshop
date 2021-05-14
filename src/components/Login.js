import React, { useContext } from 'react';

import axios from 'axios'

import { GlobalContext } from './GlobalStore'
import { Link } from 'react-router-dom'

import { reactLocalStorage } from 'reactjs-localstorage'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';
import { useForm} from 'react-hook-form'; 
import keys from './keys'

const { WEB_BASE_URL, API_LOGIN } = keys; 

toast.configure(); 


const Login = () => {

    const { register, handleSubmit, errors, reset  } = useForm();

    const {  updateInfo  } = useContext( GlobalContext ); 
   
  
    const onSubmitForm = (data) => {
  
      console.log( data );
  
      const LOGIN_URL = `${ WEB_BASE_URL }${API_LOGIN}`
      axios.post( LOGIN_URL, 
      {
        email: data.email,
        password: data.password
      })
      .then (response => {
  
        const { _id, name, email, memtype } = response.data.data;
        const { token } = response.data;

        const newmem = { 
            userid: _id,
            name: name,
            email: email,
            memtype: memtype
          }

          updateInfo( newmem ); 

          reactLocalStorage.setObject('PSInfo', newmem   )
          reactLocalStorage.set('PSInfoKey', token )
        
          toast.success(   `Success: Login `, {
            position: 'bottom-right',
            duration: 500
  
          });
    
          reset();
  
  
          setTimeout( () => window.location.assign('/'), 2000 )
         
  
      } )
      .catch (err => {
        console.error( 'error in Login >', err);
  
        toast.warning('Login failed. Retry email / pwd.', {
          position: 'bottom-right',
          duration: 1000
        })
      })
  
  
    }
  
    return (
      <div>
        
        <h2>Please Login <span className='register'><i className="fa fa-paw" aria-hidden="true"></i> </span> to Member's Page</h2>
  
        <form onSubmit= {handleSubmit( onSubmitForm )} >
          <div className='form-control'>
           
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' ref={register( {required:true})  }   />
            { errors.email ? <span className='err'> email is required!</span> : null } 
          
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' 
                 ref={register({required:true, minLength:6, maxLength: 10} )} />
            
            { errors.password ? <span className='err'>invalid password (length: 6 to 10 )</span> : null}
           
           
            <button type='submit' className='btn'>Login <i className="fa fa-paw" aria-hidden="true"></i> </button>
           
          </div>
        </form>
        <br/> <br />
        <Link to='/register' >
        <h3>Not member?  Click <span className='register'>Register</span> to sign up</h3>
        </Link>
      </div>
    );
  }
  

export default Login
