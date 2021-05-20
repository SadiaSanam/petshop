import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import './Register.css'
import keys from './keys'; 
import axios from 'axios';
import { GlobalContext } from './GlobalStore'
import { reactLocalStorage }  from 'reactjs-localstorage'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
const  { WEB_BASE_URL, API_ADD_USER } = keys; 

toast.configure(); 


const Register = () => {

    const { register, handleSubmit, formState: { errors }, reset  } = useForm();

const { updateInfo }  = useContext( GlobalContext )

const onSubmit = ( data ) => {

    console.log('in register ', data );

    const ADD_URL = WEB_BASE_URL + API_ADD_USER; 

    axios.post( ADD_URL, {     
        name: data.firstname,
        email: data.email, 
        password: data.password,
        memtype: data.memtype
        } )
        .then( response => {

            const { success, token } = response.data;

            console.log(' res data ', response.data )

            if ( success === false ) {
                console.log( ' Add failed response ');
                toast.warning(`Error: ${data.email} duplicate email`, {
                    position: 'bottom-right',
                    duration: 1000
                  });
    
                return null; 

            }
            
            const { _id, name, email, memtype  } = response.data.data; 
            

            const newmem = {
                userid: _id,
                name, email, memtype 

            }
            
            updateInfo( newmem ); 

            reactLocalStorage.setObject('PSInfo', newmem  )

            reactLocalStorage.set('PSInfoKey', token )

            reset();

            toast.success(   `Success: ${name} ${email} added`, {
            position: 'bottom-right',
            duration: 1000
            });


            setTimeout( () => window.location.assign('/'), 4000 )

        })
        .catch( err => {

            console.log('error in Add ', err)
        } )


}


    return (
        <div>
            <h2> Member Registration <span className='register'><i className="fa fa-paw" aria-hidden="true"></i> </span>  </h2>

            <form  onSubmit= { handleSubmit( onSubmit   )    } > 
                <div className='form-control' >

                <label>First name</label>
                <input type='text' name='firstname' ref={ register( { required: true }  ) } />
                { errors.firstname ? <span className='err'>Name is required</span> : null }
                <label>Email</label>
                <input type='email' name='email' id='email' ref={register("email", {required:true})  }   />
                { errors.email ? <span className='err'>Email is required</span> : null }
                <label>Password</label>
                <input type='password' name='password' id='password' 
                 ref={register("password", {required:true, minLength:6, maxLength: 10} )} />
                { errors.password ? <span className='err'>Password is required</span> : null }
                <label>Membership</label>
                <select name='memtype' defaultValue='basic' id='memtype' ref={register}>
                    <option value='free'>Free</option>
                    <option value='basic'>Basic</option>
                    <option value='premium'>Premium</option>
                </select>

                <button type='submit' className='btn'>Sign up <i className="fa fa-paw" aria-hidden="true"></i></button>



                </div>

            </form>
           

        </div>
    )
}

export default Register

/* 
res.status(201).json( {
            success: true, 
            data : {
                    _id: user._id,
                    email: user.email,
                    name: user.name,
                    memtype: user.memtype },
            token:  token 
        });   */ 