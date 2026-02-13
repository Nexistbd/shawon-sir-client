import handleProxyRequest from "@/lib/proxyHandler";
import { NextRequest } from "next/server";

type RouteParams = { path?: string[] };

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<RouteParams> },
) {
  return handleProxyRequest("GET", req, await params);
}
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<RouteParams> },
) {
  return handleProxyRequest("POST", req, await params);
}
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<RouteParams> },
) {
  return handleProxyRequest("PATCH", req, await params);
}
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<RouteParams> },
) {
  return handleProxyRequest("DELETE", req, await params);
}
