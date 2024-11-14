import { auth } from '@/auth'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
import React from 'react'
import ListBox from './ListBox'

type Props = {
    children : React.ReactNode
}

const LayoutPanel = async ({children}: Props) => {
    const session = await auth()
    if(!session){
        redirect("/signin")
    }
    const userId = session?.user.id
    const website = await prisma.website.findMany({where : {userId}})
  return (
    <div className='h-screen w-screen bg-white'>
        <div className="w-full flex gap-x-2">
            <ListBox options={website}/>
        </div>
        {children}
    </div>
  )
}

export default LayoutPanel