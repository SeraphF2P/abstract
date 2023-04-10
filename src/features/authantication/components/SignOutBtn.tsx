'use client'

import { signOut } from 'next-auth/react'
import { FC, useState } from 'react'
import Btn from '@/components/Btn'
import { toast } from "@/components/toast";

const SignOutBtn = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const signUserOut = async () => {
    try {
      setIsLoading(true)
      await signOut()
    } catch (error) {
      toast({
        title: 'Error signing out',
        message: 'Please try again later.',
        type: 'error',
      })
    } finally{
       setIsLoading(false);
    }
  }

  return (
    <Btn onClick={signUserOut} disabled={isLoading}>
      Sign out
    </Btn>
  )
}

export default SignOutBtn
