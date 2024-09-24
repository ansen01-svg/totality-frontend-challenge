import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import connectDb from "@/db/mongo_config";
import User from "@/models/user.model";
import createJwt from "@/app/_lib/server/jose_signJwt";

connectDb();

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const { email, password } = requestBody;

    //check if all the credentials are provided
    if (!email || !password) {
      return NextResponse.json(
        { error: "Please provide all the credentials" },
        { status: 400 }
      );
    }

    //check if user exists
    const user = await User.findOne({ email });

    // if user does not exist
    if (!user) {
      return NextResponse.json(
        { error: "Account does not exist. Please sign up" },
        { status: 400 }
      );
    }

    //check if password is correct
    const passwordMatches = await bcryptjs.compare(password, user.password);

    if (!passwordMatches) {
      return NextResponse.json(
        { error: "Incorrect password" },
        { status: 400 }
      );
    }

    //create token
    const session = await createJwt(user._id, user.username, user.email);

    const currentUser = await User.findOne({ email }).select("-password");

    const response = NextResponse.json(
      {
        message: "You are now signed in",
        success: true,
        data: user,
      },
      { status: 200 }
    );

    response.cookies.set("token", session, {
      httpOnly: true,
      secure: true,
    });

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
