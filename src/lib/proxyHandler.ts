import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import api from "./axioxConfig";

async function handleProxyRequest(
  method: string,
  request: NextRequest,
  params: { path?: string[] },
) {
  const session = await getServerSession(authOptions);
  const targetPath = params.path ? params.path.join("/") : ""; // যেমন: auth/login বা users/profile
  console.log(targetPath, "path=====");
  const body = method !== "GET" ? await request.json() : undefined;
  const searchParams = request.nextUrl.searchParams.toString();
  const url = `${targetPath}${searchParams ? `?${searchParams}` : ""}`;

  try {
    const response = await api({
      method,
      url,
      data: body,
      headers: {
        Authorization: session?.accessToken ? session.accessToken : "",
      },
    });

   

    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(
      error.response?.data || { message: "Internal Server Error" },
      { status: error.response?.status || 500 },
    );
  }
}

export default handleProxyRequest;
