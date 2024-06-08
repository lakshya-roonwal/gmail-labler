"use client"
import { FC, useState } from 'react'
import UserInfo from './labelerpage/UserInfo'
import Mails from './labelerpage/Mails'
import { User } from '@/types';

interface LabelerPageProps {
  user:User
}

const LabelerPage: FC<LabelerPageProps> = ({user}) => {
  
  const [mails, setMails] = useState(JSON.parse(localStorage.getItem('emails')))

  return <div className='w-full max-w-5xl p-8'>
    <UserInfo user={user}/>
    <Mails mails={mails}/>
  </div>
}

export default LabelerPage