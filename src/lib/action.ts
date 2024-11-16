"use server"

import { auth } from "@/auth"
import { TWebsite } from "../../types/website"
import prisma from "./prisma"


export const createWeb = async (data:TWebsite)=>{
    const session = await auth()
    
    try {
        await prisma.website.create({
            
            data : {
                name : data?.websiteName,
                userId : session?.user.id || "",
                content : "content website",
                subdomain : data?.websiteName,
            }
        })
        return {
            success : true,
            message : "Success create website"
        }
    } catch (error) {
        return {
            success : false,
            message : "Failed to create website"
        }
    }
}