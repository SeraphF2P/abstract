

import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { notFound } from "next/navigation"


export default async ()=>{
const user = await getServerSession(authOptions)
console.log(user)
if(!user) notFound()
    return < >
<h1>home</h1>
<p>{user?.user.name}</p>
    </>;
}