
import Image from "next/image";
import { useSession } from "next-auth/react";
import { json } from "stream/consumers";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session =await getServerSession()
  console.log(JSON.stringify(session))
  return (
   <>
   {JSON.stringify(session)}
 
   </>
  );
}
