import { NextResponse } from "next/server";

const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

export async function GET(request) {

  const { searchParams } = new URL(request.url)
  const placeId = searchParams.get('placeId');
  console.log(BASE_URL + "/details/json?place_id=" + placeId + "&key=" + GOOGLE_API_KEY)
  const res = await fetch(
    BASE_URL + "/details/json?place_id=" + placeId + "&key=" + GOOGLE_API_KEY,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const productDetails = await res.json();

  return NextResponse.json({ productDetails });
}
