import { NextRequest, NextResponse } from "next/server"


export const GET = (request: NextRequest, response: NextResponse) => {
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    const id = searchParams.get("id");

    const cars = [
        {
            id: 1,
            searchKey: "rolls-royce",
            name: "Rolls Royce",
            detail: "NISMO has become the embodiment of Nissans outstanding performance, inspired by the most unforgiving proving ground, the race track.",
            type: "Sport",
            steering: "Manual",
            imageUrl: "/rolls-royce.png",
            images: [
                {
                    id: 1,
                    name: "detail-1",
                    url: "/nissan-gt-r.png"
                },
                {
                    id: 2,
                    name: "detail-2",
                    url: "/car-detail-1.png"
                },
                {
                    id: 3,
                    name: "detail-3",
                    url: "/car-detail-2.png"
                }
            ],
            capacity: 2,
            gas: "70L",
            price: "$96.00",
            reviews: [
                {
                    id: 1,
                    reviewerName: "Alex Stanton",
                    reviewerJob: "Ceo at Besiktas",
                    comment: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
                    date: "21 July 2024",
                },
                {
                    id: 2,
                    reviewerName: "Skylar Dias",
                    reviewerJob: "Ceo at Amazon",
                    comment: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
                    date: "21 July 2024",
                }
            ],
            reviewCount: 1903
        },
        {
            id: 2,
            searchKey: "koenigsegg",
            name: "Koenigsegg",
            detail: "NISMO has become the embodiment of Nissans outstanding performance, inspired by the most unforgiving proving ground, the race track.",
            type: "Sport",
            steering: "Manual",
            imageUrl: "/koenigsegg.png",
            images: [
                {
                    id: 1,
                    name: "detail-1",
                    url: "/koenigsegg.png"
                },
                {
                    id: 2,
                    name: "detail-2",
                    url: "/car-detail-1.png"
                },
                {
                    id: 3,
                    name: "detail-3",
                    url: "/car-detail-2.png"
                }
            ],
            capacity: 2,
            gas: "70L",
            price: "$96.00",
            reviews: [
                {
                    id: 1,
                    reviewerName: "Alex Stanton",
                    reviewerJob: "Ceo at Besiktas",
                    comment: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
                    date: "21 July 2024",
                },
                {
                    id: 2,
                    reviewerName: "Skylar Dias",
                    reviewerJob: "Ceo at Amazon",
                    comment: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
                    date: "21 July 2024",
                }
            ],
            reviewCount: 1903
        },
        {
            id: 3,
            searchKey: "nissan-gt-r",
            name: "Nissan Gt - R",
            detail: "NISMO has become the embodiment of Nissans outstanding performance, inspired by the most unforgiving proving ground, the race track.",
            type: "Sport",
            steering: "Manual",
            imageUrl: "/nissan-gt-r.png",
            images: [
                {
                    id: 1,
                    name: "detail-1",
                    url: "/nissan-gt-r.png"
                },
                {
                    id: 2,
                    name: "detail-2",
                    url: "/car-detail-1.png"
                },
                {
                    id: 3,
                    name: "detail-3",
                    url: "/car-detail-2.png"
                }
            ],
            capacity: 2,
            gas: "70L",
            price: "$96.00",
            reviews: [
                {
                    id: 1,
                    reviewerName: "Alex Stanton",
                    reviewerJob: "Ceo at Besiktas",
                    comment: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
                    date: "21 July 2024",
                },
                {
                    id: 2,
                    reviewerName: "Skylar Dias",
                    reviewerJob: "Ceo at Amazon",
                    comment: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
                    date: "21 July 2024",
                }
            ],
            reviewCount: 1903
        },
        {
            id: 4,
            searchKey: "all-new-rush",
            name: "All New Rush",
            detail: "NISMO has become the embodiment of Nissans outstanding performance, inspired by the most unforgiving proving ground, the race track.",
            type: "Sport",
            steering: "Manual",
            imageUrl: "/all-new-rush.png",
            images: [
                {
                    id: 1,
                    name: "detail-1",
                    url: "/all-new-rush.png"
                },
                {
                    id: 2,
                    name: "detail-2",
                    url: "/car-detail-1.png"
                },
                {
                    id: 3,
                    name: "detail-3",
                    url: "/car-detail-2.png"
                }
            ],
            capacity: 2,
            gas: "70L",
            price: "$96.00",
            reviews: [
                {
                    id: 1,
                    reviewerName: "Alex Stanton",
                    reviewerJob: "Ceo at Besiktas",
                    comment: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
                    date: "21 July 2024",
                },
                {
                    id: 2,
                    reviewerName: "Skylar Dias",
                    reviewerJob: "Ceo at Amazon",
                    comment: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
                    date: "21 July 2024",
                }
            ],
            reviewCount: 1903
        },
        {
            id: 5,
            searchKey: "cr-v",
            name: "CR - V",
            detail: "NISMO has become the embodiment of Nissans outstanding performance, inspired by the most unforgiving proving ground, the race track.",
            type: "SUV",
            steering: "Manual",
            imageUrl: "/tiguan.png",
            images: [
                {
                    id: 1,
                    name: "detail-1",
                    url: "/tiguan.png"
                },
                {
                    id: 2,
                    name: "detail-2",
                    url: "/car-detail-1.png"
                },
                {
                    id: 3,
                    name: "detail-3",
                    url: "/car-detail-2.png"
                }
            ],
            capacity: 2,
            gas: "70L",
            price: "$96.00",
            reviews: [
                {
                    id: 1,
                    reviewerName: "Alex Stanton",
                    reviewerJob: "Ceo at Besiktas",
                    comment: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
                    date: "21 July 2024",
                },
                {
                    id: 2,
                    reviewerName: "Skylar Dias",
                    reviewerJob: "Ceo at Amazon",
                    comment: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
                    date: "21 July 2024",
                }
            ],
            reviewCount: 1903
        }
    ];

    const carDetail = cars.find(x => x.searchKey === id);

    return NextResponse.json(carDetail, {
        status: 200
    })
}