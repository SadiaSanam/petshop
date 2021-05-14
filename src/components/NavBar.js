import React,  { useContext  } from 'react';


import logo from '../images/catlogo3.png'

import { Link } from 'react-router-dom'
import { GlobalContext } from './GlobalStore';

import { FacebookShareButton, WhatsappShareButton, 
    TwitterShareButton} from 'react-share'; 
import { FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';

const NavBar = () => {

    const { info } = useContext( GlobalContext  )
   
    const { email } = info; 

    return (
        <>
            <nav> 
                <div className='logopos'>
                    <Link to='/' >
                        <img src={ logo } alt='logo' className='logo' />
                    </Link>
                </div>

                <TwitterShareButton url='https://twitter.com' title='CatLoverHome' tags='#catloverhome'>
                    <TwitterIcon size={30} round={true} /> 
                </TwitterShareButton>
                <FacebookShareButton url= 'https://facebook.com'> 
                    <FacebookIcon size={30} round={true} /> 
                </FacebookShareButton>
                <WhatsappShareButton url='http://whatsapp.com' title='CatLoverHome'> 
                    <WhatsappIcon size={30} round={true} />
                </WhatsappShareButton>

                { email ? ( 
                <>
                <div className="dropdown">
                    <button className="dropbtn"> Member &nbsp;
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link  to='/profile'>Profile</Link>
                    </div>
                </div> 
                   
                </> ) : null }
                
            </nav>

            <nav>
                

            {  email ? ( 
                <>
                   
                    <div className='menuitem'>
                    <Link to='/home' >Home</Link>
                    <Link to='/funcat' >FunCat</Link>
                    <Link to='/promotion' >Promotion</Link>
                    <Link to='/about' >About</Link>
                    <Link to='/logout' >Logout</Link>
                    <Link to='#'> { email }   </Link>
                    </div>
                </>
              ) : ( 
              
                <>
                <div className='menuitem'>
                <Link to='/home' >Home</Link>
                <Link to='/funcat' >FunCat</Link>
                <Link to='/promotion' >Promotion</Link>
                <Link to='/about' >About</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login' >Login</Link>
                </div>
                </>  )    }

                

            </nav>

        </>
    )
}

export default NavBar
