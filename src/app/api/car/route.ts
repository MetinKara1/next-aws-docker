import { NextRequest, NextResponse } from "next/server"
import { cars } from "../../../utils/database";


export const GET = (request: NextRequest, response: NextResponse) => {

    return NextResponse.json(cars, {
        status: 200
    })
}