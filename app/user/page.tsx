"use client"

import { useSession } from "next-auth/react"

export default function User(){
    const session =useSession()
return(
    <>
    {JSON.stringify(session)}
    </>
)

}