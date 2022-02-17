import './ProfileScreen.css'
import React from 'react';
import Nav from '../Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import {signOut} from 'firebase/auth'
import { auth } from '../firebase';
import PlansScreen from './PlansScreen';

function ProfileScreen() {

  const user = useSelector(selectUser)

  return(
    <div className='profileScreen'>
      <Nav/>
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix_avatar" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <PlansScreen />
              <button
                onClick={()=>{signOut(auth)}} 
                className='profileScreen__signOut'>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
);
}

export default ProfileScreen;

// publishable :  pk_test_51KT8hgSEoYHhVqzgblf0TsT6mSU2abwarXGXSYDSsKPK75FI9x9r64YLdFFitIfu6kEGhc2DVlyqbHqtdtZhwImu00KSdFcZ32
// secret key :  sk_test_51KT8hgSEoYHhVqzglVv1BuTaXWECpXXFbPTRPhVKQeT0UNUFUFd81Fa0I5X0pvOcWsivZiXgxOGlZN2snzyF4PLx00HIRWOgSO

// webhook event : https://us-central1-netflix-clone-react-c96e8.cloudfunctions.net/ext-firestore-stripe-payments-handleWebhookEvents