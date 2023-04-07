
"use client"
import { signIn, signOut } from "next-auth/react";
import { toast } from "@/components/toast";
import { useState } from "react";

export function useGoogleAuth(){
const [isSigningUp, setSigningUp] = useState<boolean>(false);
const [islogingIn, setLogingIn] = useState<boolean>(false);
const signUp = async () => {
  try {
    setSigningUp(true);
    await signIn("google");
  } catch (error) {
    toast({
      title: "Error signing in",
      message: "Please try again later.",
      type: "error",
    });
    setSigningUp(false);

  }
};

 const logIn = async () => {
   try {
     setLogingIn(true);
     await signOut();
   } catch (error) {
     toast({
       title: "Error loging out",
       message: "Please try again later.",
       type: "error",
     });
   }
     setLogingIn(false);
 };


return { signUp, isSigningUp, logIn, islogingIn };
}