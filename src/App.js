import React,{useEffect} from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen'
import {Route,Routes} from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  // const user = null;
  const dispatch = useDispatch();

  useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,
      (userAuth) => {
        if(userAuth){
          dispatch(
            login({
              uid: userAuth.uid,
              email: userAuth.email
            })
          );
        }else{
          //  Logged out
          dispatch(logout())
        }
    });
    return unsubscribe;
    //  This useEffect dependent on dispatch
  },[dispatch])

  return (
    <div className="app">
      {!user ? (<LoginScreen/>) : 
      (<Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/profile' element={<ProfileScreen />} />
      </Routes>)}
    </div>
  );
}

export default App;
