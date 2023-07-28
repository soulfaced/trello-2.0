import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    // todos in the body of the POST request
    const{todos}= await request.json();
    console.log(todos);

    //communicate with openAI
    const response = await openai.createChatCompletion({
        model:'gpt-3.5-turbo',
        temperature:0.8,
        n:1,
        stream:false,
        messages:[
            {
                role:'system',
                content:'when responding, welcome the user always as mr. sanchit and say welsome ,limit the resposne to 200 chracters.',
            },
            {
                role:'user',
                content:`hi there , provide a summary of the following todos. count how many todos are in each category such as To do in progress and done, then tell the user to have a productive day. and give suggestion to what to do next to learn coding and web develpoment! heres the data :${JSON.stringify(todos)}`,
            }
        ]
    })

    const {data}= response;

    // console.log("DATA is:",data);
    // console.log(data.choices[0].message);

    return NextResponse.json(data.choices[0].message);

}