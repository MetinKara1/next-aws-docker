import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) { 
  let servicePath;

  let req = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/urlApi?url=elektronik`);

  let res = await req.json();

  console.log("---- service response: ", res);
    

  if (!servicePath) {
    let cloneRequest = request.nextUrl.clone();
    servicePath = NextResponse.rewrite(new URL(request.nextUrl, cloneRequest));
  }
  servicePath.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=119')
  return servicePath;
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|_next/|masterpass/mfs-client|push_sw|favicon.ico).*)"],
  };