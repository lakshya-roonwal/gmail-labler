"use client"
import { FC } from 'react'
import { Button } from "@/components/ui/button"
import UserInfo from './labelerpage/UserInfo'
import Mails from './labelerpage/Mails'

interface LabelerPageProps {
  
}

const LabelerPage: FC<LabelerPageProps> = ({}) => {
  return <div className='border-2 w-full max-w-5xl p-8'>
    <UserInfo/>
    <Mails/>
  </div>
}

export default LabelerPage