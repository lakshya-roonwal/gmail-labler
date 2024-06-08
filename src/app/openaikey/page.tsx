"use client"
import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const submitKey=()=>{

  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Email Classifier</CardTitle>
        <CardDescription>
          Enter your OpenAI API key so that we can start classify your emails
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="openapikey">Open APi key</Label>
            <Input
              id="openapikey"
              type="text"
              placeholder="API key"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </div>
      </CardContent>
    </Card>
    </div>
  );
};

export default page;
