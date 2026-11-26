import authSeller from "@/middlewares/authSeller";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const {userId} = getAuth(request)
        const isSeller = await authSeller(userId)
        if(!isSeller) return NextResponse.json({error:'not authorized'}, {status:401})
        const {base64Image, mimeType} = await request.json()
    } catch (error) {
        console.error(error)
        return NextResponse.json({error:error.code || error.message}, {status:400})
    }
}