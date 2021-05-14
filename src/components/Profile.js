import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form'; 
import { GlobalContext } from './GlobalStore';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import keys from './keys'; 
import  { reactLocalStorage } from 'reactjs-localstorage';

const { WEB_BASE_URL, API_UPDATE_USER, API_DELETE_USER } = keys;

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor: '#264653'
  }
};
Modal.setAppElement('#root');

const Profile = () => {

    const { register, handleSubmit, errors, setValue, reset } = useForm();

    const { info, updateInfo } = useContext( GlobalContext ); 

    const { userid, name, email, memtype } = info; 

    const [modalIsOpen, setModalIsOpen] = useState(false);

    // console.log('chk > ', email, memtype ); 

    // if ( email !== null ) {

    //     // console.log('here ', email )
    //   setValue( 'name', name, {validate:true} );
    //   setValue( 'email', email, {validate:true} );
    //   setValue( 'memtype', memtype, {validate: true} );
    // }

    

const onSubmitForm = ( data ) => {

    const pskey = reactLocalStorage.get('PSInfoKey')

      const psjwt = pskey; 

      const UPDATE_URL = `${WEB_BASE_URL}${API_UPDATE_USER}${userid}`;
    
      let config = {
        headers: {
          authorization: 'Bearer ' + psjwt 
        }
      }
      
      axios.put( UPDATE_URL,
      {
        name: data.name,
        email: data.email,
        memtype: data.memtype,
        psjwt: psjwt 
      }, config )
      .then (response => {

            // console.log('in update ', response.data )
            const { success } = response.data; 
            const { _id, name, email, memtype } = response.data.data;
            

            updateInfo( { userid: _id, name, email, memtype  }    )

            if ( success === true ) {
              toast.success(`Update success: ${ name } with email ${email}`, {
                      position: 'bottom-right',
                      duration: 1000
            });

            }
    
            reset();

          
  
          const newmem = { 
            userid: _id,
            name: name,
            email: email,
            memtype: memtype
          }
  
          reactLocalStorage.setObject('PSInfo', newmem ); 
     
          setTimeout( () => window.location.assign('/'), 3000 )
       
  
      } )
      .catch (err => {
        console.log( 'User update failed >', err.message );
        toast.warning(`Updated failed: ${err.message }. Please logout / login again.`, {
          position: 'bottom-right',
          duration: 1000
        });
      })
      
    }


    const onDelete = () => {

      const localcheck = reactLocalStorage.get('PSInfoKey');

        
      const psjwt = localcheck; 

      let config = {
        headers: {
          authorization: 'Bearer ' + psjwt 
        }
      }

      const DELETE_URL = `${WEB_BASE_URL}${API_DELETE_USER}${userid}`;

      axios.delete( DELETE_URL, config)
      .then (response => {

            console.log( 'member deleted ')

            const { success } = response.data; 
            const {  name, email } = response.data.data;
            if ( success === true ) {
              toast.success(`Deleted: ${ name } with email ${email}`, {
                      position: 'bottom-right',
                      duration: 1000
            });

            }
    
          reset();

          const initmem = { 
            userid: null,
            name: null,
            email: null,
            memtype: null
          }
         
        reactLocalStorage.remove('PSInfo');
        reactLocalStorage.remove('PSInfoKey'); 

        updateInfo( initmem );
        
        setTimeout( () => window.location.assign('/'), 4000 )
         
        // window.location.assign('/');
  
      } )
      .catch (err => {
        console.log( 'User delete failed >', err.message );
        toast.warning(`Delete failed: ${err.message }. Please logout / login again.`, {
          position: 'bottom-right',
          duration: 1000
        });
      })
      

    }

    


    return (

      <div>
            <form onSubmit= {handleSubmit( onSubmitForm )} >
        <div className='form-control'>
       
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='name' defaultValue={name} ref={ register( {required:true}) }/>
          { errors.name ? <span className='err'> name is required! </span> : null } 
          
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' defaultValue={email} ref={register( {required:true})  }   />
          { errors.email ? <span className='err'> email is required!</span> : null } 
          
          <div className='member'>
          <label htmlFor='memtype'>Membership</label>
          <select name='memtype'  id='memtype' defaultValue={memtype} ref={register}>
            <option value='free'>Free</option>
            <option value='basic'>Basic</option>
            <option value='premium'>Premium</option>
          </select>
          </div>

          <div className='btngroup'>
          <button type='submit' className='btn2'>Update </button>
          <button type='button' onClick={ () => { setModalIsOpen( true ) } } className='btn2'>Delete </button>
          </div>

        </div>
      </form>

      <Modal isOpen= { modalIsOpen } style={ customStyles }
             onRequestClose= { () => setModalIsOpen(false)}   
       >
      
    <h3>Member's Pet Store</h3>
        <br /> 
        <hr /> 
    <p>hi <span className='memname'>  { name }</span>, </p> 
    <p> are you sure you want to delete membership?</p>
        <div className='btngroup'>
          <button className='btn2' onClick= { () => { 
            onDelete();
            setModalIsOpen(false); 
          }   } >Yes</button>
          <button className='btn2' onClick= { () => setModalIsOpen(false) } >No</button>
        </div>
      
      
      </Modal>



      </div>
    )
}

export default Profile
