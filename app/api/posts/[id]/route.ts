import Post from "@/models/Post";
import dbConnect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request:NextRequest,{params}:{params:{id:string}}) => {
  try {
    const {id}=params
    await dbConnect();
    const post: any = await Post.findById(id);
    return NextResponse.json({
      success: post,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("DATABASE ERROR", { status: 500 });
  }
};