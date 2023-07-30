import Post from "@/models/Post";
import dbConnect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    console.log("CONNECTING MONGO");
    await dbConnect();
    console.log("CONNECTED MONGO");
    const posts: any = await Post.find();
    console.log("POSTS Fecthed");
    return NextResponse.json({
      success: posts,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("DATABASE ERROR", { status: 500 });
  }
};
export const POST = async (request: NextRequest) => {
  const { title, desc, image, username, content } = await request.json();
  try {
    console.log("CONNECTING TO MONGO");
    await dbConnect();
    console.log("CONNECTED TO MONGO");

    console.log("CREATING DOCUMENT");
    const post = await new Post({
      title,
      desc,
      image,
      username,
      content,
    }).save();
    console.log("CREATED DOCUMENT");
    return NextResponse.json({
      success: post,
    });
  } catch (error) {
    console.log("error");
    console.log(error);
    throw new Error("ERROR");
  }
};
