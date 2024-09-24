import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import User from "@/models/user.model";
import connectDb from "@/db/mongo_config";

connectDb();

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const { username, email, password } = requestBody;

    // check if all the credentials are provided
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "Please provide all the credentials" },
        { status: 400 }
      );
    }

    //check if user already exists
    const user = await User.findOne({ email });

    // if user already exist-
    if (user) {
      return NextResponse.json(
        { error: "Account already exists" },
        { status: 400 }
      );
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // create user
    const newUser = await User.create({
      email,
      username,
      password: hashedPassword,
      avatar: username.charAt(0).toUpperCase(),
    });

    const currentUser = await User.findById({ _id: newUser._id }).select(
      "-password"
    );

    return NextResponse.json(
      {
        message: "User created successfully",
        success: true,
        data: currentUser,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
