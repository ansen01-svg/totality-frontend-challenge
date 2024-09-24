import * as jose from "jose";

const verifyToken = async (request) => {
  const token = request.cookies.get("token")?.value || "";
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  try {
    const { payload } = await jose.jwtVerify(token, secret);

    return payload.id;
  } catch (error) {
    throw new Error(error);
  }
};

export default verifyToken;
