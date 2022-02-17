import React,{useRef} from 'react';
import './SignupScreen.css'
import {auth} from '../firebase'

// HERE WE ARE USING MODULAR APPROACH FOR FIREBASE
// createUserWithEmailAndPassword >> Signup for new User using E-Mail & Password
// signInWithEmailAndPassword >> Signin for existing User using E-Mail & Password
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

function SignupScreen() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e)=>{
    e.preventDefault();

    //  CREATE NEW USER WITH EMAIL AND PASSWORD
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value ,
      passwordRef.current.value
    ).then((authUser)=>{
      console.log(authUser);
    }).catch((err)=>{
      alert(err.message);
    })
  }

  const signIn = (e)=>{
    e.preventDefault();

    //  HERE YOU CAN SIGNIN WITH EMAIL AND PASSWORD
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value ,
      passwordRef.current.value
      ).then((authUser)=>{
        console.log(authUser);
      }).catch((err)=>{
        alert(err.message)
      })
  }

  return( 
  <div className='signupScreen'>
    <form>
      <h1>Sign In</h1>
      <input ref={emailRef} type="email" placeholder='Email' />
      <input ref={passwordRef} type="password" placeholder='Password' />
      <button type='submit' onClick={signIn}>Sign In</button>
      <h4>
        <span className='signupScreen__gray'>New to Netflix?  </span> 
        <span className='signupScreen__link' onClick={register}> Sign Up now.</span>
      </h4>
    </form>
  </div>
  );
}

export default SignupScreen;