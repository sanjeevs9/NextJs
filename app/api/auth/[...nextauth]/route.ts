import { NextRequest,NextResponse } from "next/server";
import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials'
import { json, text } from "stream/consumers";
import { createSearchParams } from "react-router-dom";
import { use } from "react";

//--> get params passed in the browser

// export function GET(req:NextRequest,{ params }:{params: {nextauth:String[]}}){
//   console.log(params.nextauth[0])
//   return NextResponse.json({ message:"hello" }) // NextResponse is not defined
// }

const handler=NextAuth({
  providers:[
    CredentialsProvider({
      name:"Credentials",
      credentials:{
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      
      async authorize(credentials:any) {
      
      console.log(credentials)
     
          const user=JSON.stringify(credentials)
          console.log(credentials.username)
        return {
          user:credentials.username,
          email:"asdfasdf",
          id:"i"
        };
    },    
    })
  ],
    callbacks:{
      jwt: ({token,user}) =>{
        console.log(token)
        token.userId="nooooo"
        return token
      }
    }
  
})
export const GET=handler
export const POST=handler;
