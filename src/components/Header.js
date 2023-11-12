import React from 'react'
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { signOut,onAuthStateChanged } from "firebase/auth";
import { useSelector } from 'react-redux';
import { store } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'
import { addUser,removeUser } from '../utils/userSlice'
import { useEffect } from 'react';
import { LOGO } from '../utils/constants';

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();//this is a hook

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.

    }).catch((error) => {
      // An error happened.
      navigate("/");
    });
    
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName,photoURL} = user;
          dispatch(
            addUser({
              uid:uid, 
              email:email,
              displayName:displayName,
              photoURL:photoURL
            })
          )
          navigate("/browser")          
        } else {
          // User is signed out
          dispatch(removeUser())
          navigate("/")
        }
    });
    //unsubscribe when component unmount
    return () => unsubscribe()
},[])
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' 
      src={LOGO}
      alt="logo"
      />
    
      {user && (
      <div className='flex p-2'>
        <img
        className='w-12 h-12'
          alt='usericon'
          src={user?.photoURL}
        />
        <button onClick={handleSignOut} 
        className='font-bold text-white'>
          (Sign Out)</button>
      </div>
      )}
    </div>
  )
}

export default Header