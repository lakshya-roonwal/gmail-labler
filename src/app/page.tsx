import { auth, EnrichedSession } from '@/auth';
import LabelerPage from "@/components/LabelerPage"
import { User } from '@/types';


const GamilLabler = async() => {
  const session = (await auth()) as EnrichedSession;
  const user=session?.user as User;
  return (
    <LabelerPage user={user}/>
  )
}

export default GamilLabler