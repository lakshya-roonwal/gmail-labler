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

  const classifyEmails = async () => {
    const apiKey = localStorage.getItem('openaikey');

    if (!apiKey) {
      console.error("API key not found in localStorage");
      return;
    }
    console.log(typeof(apiKey))

    try {
      const response = await fetch("/api/classifyemails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emails:mails}),
      });

      if (!response.ok) {
        throw new Error("Failed to classify emails");
      }

      const data = await response.json();
      console.log(data);
      setMails(data.classifiedEmails)
      localStorage.setItem("emails",JSON.stringify(data.classifiedEmails))
    } catch (error) {
      console.error("Error classifying emails:", error);
    }
  };

  const fetchMessages = async (noOfEmails:string) => {
    try {
        const response = await fetch(`/api/fetchemail?emailno=${noOfEmails}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Events:', data);
        const updatedData = await data.data.map((item:any, index:number) => {
          const uniqueId = `20240608${String(index + 1).padStart(3, '0')}`;
          return {
              ...item,
              id: uniqueId,
              classification: ""
          };
      });
        console.log("udpate data : ",updatedData)
        // Store the stringified data in localStorage
        setMails(updatedData)
        localStorage.setItem("emails", JSON.stringify(updatedData));
    } catch (error) {
        console.error('Error fetching emails:', error);
    }
};

  return <div className='w-full max-w-5xl p-8'>
    <UserInfo user={user}/>
    <Mails mails={mails} classifyEmails={classifyEmails} fetchMessages={fetchMessages}/>
  </div>
}

export default LabelerPage