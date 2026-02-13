import handleProxyRequest from "@/lib/proxyHandler";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { path: string[] } },
) {
  return handleProxyRequest("GET", req, params);
}
export async function POST(
  req: NextRequest,
  { params }: { params: { path: string[] } },
) {
  return handleProxyRequest("POST", req, params);
}
export async function PATCH(
  req: NextRequest,
  { params }: { params: { path: string[] } },
) {
  return handleProxyRequest("PATCH", req, params);
}
export async function DELETE(
  req: NextRequest,
  { params }: { params: { path: string[] } },
) {
  return handleProxyRequest("DELETE", req, params);
}
