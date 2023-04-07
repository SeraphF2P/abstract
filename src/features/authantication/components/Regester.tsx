
"use client"
import Btn from '@/components/Btn'
import { useGoogleAuth } from '../hooks/useGoogleAuth'
import {} from "next"

const Regester = () => {
    const {signUp,isSigningUp,logIn,islogingIn} = useGoogleAuth()
  return (
    <>
      <Btn onClick={signUp} disabled={isSigningUp}>
        sign up
      </Btn>
      <Btn onClick={logIn} disabled={islogingIn}>
       login
      </Btn>
    </>
  );
}

export default Regester