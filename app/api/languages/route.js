import { NextResponse } from "next/server";
import { languagesData } from "../../utils/sampleData";

export async function GET() {
  // Return the list of languages (server-side)
  return NextResponse.json(languagesData);
}
