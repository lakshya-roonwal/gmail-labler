import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";

interface UserInfoProps {}

const UserInfo: FC<UserInfoProps> = ({}) => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex gap-2 items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h3 className="font-semibold">Lakshya Runwal</h3>
          <p>lakshyaroonwal@gmail.com</p>
        </div>
      </div>
      <div>
        <Button>Logout</Button>
      </div>
    </div>
  );
};

export default UserInfo;
