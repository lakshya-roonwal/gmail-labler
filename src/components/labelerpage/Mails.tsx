import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"

interface MailsProps {}

const Mails: FC<MailsProps> = ({}) => {
  return (
    <div className="mt-8">
      {/* Mail Selection Section */}
      <div className="flex w-full justify-between">
        <div className="flex gap-2">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="No. of Email" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="15">15</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="25">25</SelectItem>
          </SelectContent>
        </Select>
        <Button>Fetch Emails</Button>
        </div>

        <Button>Classify</Button>
      </div>

      {/* Mails Section */}
      <div className="w-full flex flex-col gap-4 mt-8">
        {[1,2,3].map((number)=>(
          <Card className="w-full">
            <div className="flex items-center justify-between">
            <CardHeader>
              <div className="">
              <CardTitle>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
              </div>
            </CardHeader>
            <div className="px-4">
            <Badge>Badge</Badge>
            </div>
            </div>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, consequuntur provident rerum ipsa nostrum mollitia incidunt doloremque in repudiandae, quibusdam hic porro iusto! Doloremque alias adipisci, ipsam ratione ipsa atque.
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Mails;
