import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { User } from "@/types";
import { signOut } from "next-auth/react"


interface UserInfoProps {
  user:User
}

const UserInfo: FC<UserInfoProps> = ({user}) => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex gap-2 items-center">
        <Avatar>
          <AvatarImage src={user.image} />
          <AvatarFallback>{user.name[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h3 className="font-semibold">{user.name}</h3>
          <p>{user.email}</p>
        </div>
      </div>
      <div>
        <Button onClick={signOut}>Logout</Button>
      </div>
    </div>
  );
};

export default UserInfo;
