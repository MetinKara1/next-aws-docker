import { NextRequest, NextResponse } from "next/server";
import { cars } from "../../../utils/database";


export const GET = (request: NextRequest, response: NextResponse) => {
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    const search = searchParams.get("search");

    let filterCars: any = cars.filter(x => x.searchKey.includes(search || ""));

    return NextResponse.json(filterCars, {
        status: 200
    })
}