import { apikeys } from "googleapis/build/src/apis/apikeys";
import { NextResponse } from "next/server";
import {  OpenAI } from "openai";

export async function POST(request: Request) {

    const { emails,apiKey } =await request.json();

    return NextResponse.json({something:"something"})
    
}