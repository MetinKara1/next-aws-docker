import { NextRequest, NextResponse } from "next/server"


export const GET = (request: NextRequest, response: NextResponse) => {

    return NextResponse.json({}, {
        status: 200
    })
}