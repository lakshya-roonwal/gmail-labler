"use client"
import { FC } from 'react'
import { Button } from './ui/button';

interface FetchEmailProps {
  
}

const FetchEmail: FC<FetchEmailProps> = ({}) => {
  
  const fetchMessages = async () => {
      try {
          const response = await fetch('/api/fetchemail');
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log('Events:', data);
          const updatedData = await data.data.map((item, index) => {
            const uniqueId = `20240608${String(index + 1).padStart(3, '0')}`;
            return {
                ...item,
                id: uniqueId,
                classification: ""
            };
        });
          console.log("udpate data : ",updatedData)
          // Store the stringified data in localStorage
          localStorage.setItem("emails", JSON.stringify(updatedData));
      } catch (error) {
          console.error('Error fetching emails:', error);
      }
  };

  return <div>
    FetchEmail
    <Button onClick={fetchMessages}>Fetch Calendar Events</Button>
  </div>
}

export default FetchEmail