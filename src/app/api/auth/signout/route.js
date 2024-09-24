import { NextResponse } from "next/server";
import connectDb from "@/db/mongo_config";

connectDb();

export async function GET() {
  try {
    const response = NextResponse.json(
      {
        message: "Signed out successful",
        success: true,
        data: {},
      },
      { status: 200 }
    );

    response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
