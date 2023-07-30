import dbConnect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";
export const POST=async(request:NextRequest)=>{
    const {name,email,password}=await request.json();

    await dbConnect();

    const hashedPassword= await bcrypt.hash(password,5)
    const newUser = await new User({
        name,
        email,
       password:hashedPassword
    })


    try {
        await newUser.save()
        return NextResponse.json({
            success:"User Registered Successfully"
        })
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error:"ERROR"
        })
    }
}