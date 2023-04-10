'use client'

import Btn from '@/components/Btn';
import Icons from '@/components/Icons';
import { toast } from "@/components/toast";
import { signIn } from 'next-auth/react';
import { useState } from 'react';

const SignInBtn = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const signInWithGoogle = async () => {
    try {
      setIsLoading(true)
      await signIn('google')
    } catch (error) {
      toast({
        title: 'Error signing in',
        message: 'Please try again later.',
        type: 'error',
      })
    } finally{
       setIsLoading(false);
    }
  }

  return (
    <Btn className=' flex items-center justify-center' onClick={signInWithGoogle} disabled={isLoading}>
      <Icons.googleColored className="mr-2 h-4 w-4" />
      Sign in
    </Btn>
  );
}

export default SignInBtn
