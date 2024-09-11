import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

const cachedFetchSingle = async (url: string, localPath: string) => {
  let maps = {};
    await fetch(url, {
      cache: "force-cache",
      method: "GET",
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_URL_API_KEY || "6d9e2916be2be2f239f70ea4996b9176",
        "ssr-key": process.env.NEXT_PUBLIC_X_API_KEY || "65ad08b0-92a4-4987-a979-63a4e800f9a4",
      },
    }).then(async (response) => {

    });
    return maps;
  
};

export async function GET(req: any, res: NextApiResponse) {
  const url = new URL(req.url);
  const fullUrl = url.href;
  const searchParams = new URLSearchParams(url.searchParams);
  const query = searchParams.get("url");
  console.log("*** istek buraya ulaştı: ", url)
  console.log("*** parametre: ", query)
  let maps: any = {
    name: "metin"
  };
  let localPath: any = "";
  if (query?.includes("?")) localPath = query?.split("?")[0].replace(" ", "+");
  else localPath = query?.replace(" ", "+");

  let getSingleUrlFetch =
    "https://" +
    (process.env.NEXT_PUBLIC_RBS_URL || "rio-test.a101.com.tr") +
    "/" +
    (process.env.NEXT_PUBLIC_RBS_PROJECT_ID || "1pkksaf3d") +
    "/CALL/urlmanager/get/default?url=" +
    encodeURIComponent(localPath);

    // await cachedFetchSingle(getSingleUrlFetch, localPath).then(async (response: any) => {
    //   console.log("cachedFetchSingleResp", response);
    //   if (response) {
    //     if (query?.includes("?")) {
    //       let formatQuery = { ...req.query };
    //       delete formatQuery.url;
    //       let queriesArray: any = [];

    //       if (Object.entries(formatQuery).length > 0) {
    //         Object.entries(formatQuery).map((x) => {
    //           queriesArray.push(`${x[0]}=${x[1]}`);
    //         });
    //       }

    //       let destinationWithQuery = "";
    //       if (queriesArray)
    //         destinationWithQuery =
    //           response.destination +
    //           (response.destination?.includes("?") ? "&" : "?") +
    //           url.search.replace(" ", "+").split("?")[2] +
    //           "&" +
    //           queriesArray.join("&");
    //       else destinationWithQuery = response.destination + "&" + url.search.replace(" ", "+").split("?")[2];

    //       console.log("destinationWithQuery", destinationWithQuery);
    //       maps = {
    //         source: response.source,
    //         destination: destinationWithQuery,
    //         isRedirect: response.isRedirecet,
    //       };
    //     } else maps = response;
    //   }
    // }).catch((error: any) => {
    //   console.log("url manager error: ", error)
    // });

  return NextResponse.json(maps);
}