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
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"

interface MailsProps {
  mails: {
    subject: string;
    body: string;
    classification:string;
  }[];
}

const Mails: FC<MailsProps> = ({mails}) => {
  console.log(mails)
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
        {mails.map((mail)=>(
          <Card className="w-full max-h-[200px] overflow-hidden">
            <div className="flex items-center justify-between">
            <CardHeader>
              <div className="">
              <CardTitle>{mail.subject}</CardTitle>
              </div>
            </CardHeader>
            <div className="px-4">
            <Badge>{mail.classification}</Badge>
            </div>
            </div>
            <CardContent>
              <p style={{ whiteSpace: 'pre-line' }}>
              {mail.body}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Mails;
