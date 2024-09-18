import { NextRequest, NextResponse } from "next/server"


export const GET = (request: NextRequest, response: NextResponse) => {
    const carData = [
        {
            id: 1,
            name: "Rolls Royce",
            type: "Sedan",
            imageUrl: "/rolls-royce.png",
            gas: "70L",
            capacity: 4,
            gearType: "Manual",
            price: "$96.00",
        },
        {
            id: 2,
            name: "Koenigsegg",
            type: "Sport",
            imageUrl: "/koenigsegg.png",
            gas: "90L",
            capacity: 2,
            gearType: "Manual",
            price: "$99.00",
        },
        {
            id: 3,
            name: "Nissan GT - R",
            type: "Sport",
            imageUrl: "/nissan-gt-r.png",
            gas: "80L",
            capacity: 2,
            gearType: "Manual",
            price: "$80.00",
        },
        {
            id: 4,
            name: "All New Rush",
            type: "SUV",
            imageUrl: "/all-new-rush.png",
            gas: "70L",
            capacity: 6,
            gearType: "Manual",
            price: "$72.00",
        },
        {
            id: 5,
            name: "CR - V",
            type: "SUV",
            imageUrl: "/tiguan.png",
            gas: "80L",
            capacity: 6,
            gearType: "Manual",
            price: "$80.00",
        },
    ]

    return NextResponse.json(carData, {
        status: 200
    })
}