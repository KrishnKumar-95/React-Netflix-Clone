import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router'
import "./Nav.css"

function Nav() {

    const navigate = useNavigate();

    const toProfile = () => {
        navigate("/profile");
    }

    const toHome = () => {
        navigate("/")
    }

    const [show,handleShow] = useState(false);

    const transitionNavBar = ()=>{
        if(window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    };

    // when to return
    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar);
        return () => window.removeEventListener("scroll",transitionNavBar);
    },[]);

  return( 
    <div className={`nav ${show && 'nav__black'}`}>
        <div className="nav__contents">
            {/* Netflix Logo */}
            <img 
                onClick={toHome}
                className='nav__logo' 
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
                alt="netflix-logo" />

            {/* Netflix Avatar */}
            <img 
                onClick={toProfile}
                className='nav__avatar' 
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                alt="Avatar" />
        </div>
    </div>
  )
}

export default Nav;