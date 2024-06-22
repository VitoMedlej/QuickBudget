"use client"
import Contact2 from '@/components/widgets/Contact2'
import Features2 from '@/components/widgets/Features2'
import {  contact2Contact, features2Contact } from '@/shared/data/pages/contact.data'
import { Login2Login } from '@/shared/data/pages/login.data'
import { Register2Register } from '@/shared/data/pages/register.data'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const Page = () => {
  const router = useRouter();
  const {action} = useParams<any>()
  console.log('action: ', Register2Register);


  if (action === 'register') {
    return (
      <>
      <Contact2 {...Register2Register} />
      </>
    )
  }
  else if (action === 'login') {
    return (
      <>
    <Contact2 {...Login2Login} />
    </>
  )
}


}

export default Page
