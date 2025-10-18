import { NextResponse } from "next/server";
import { getLanguageById, languagesData } from "../../../utils/sampleData";

export async function GET(request, { params }) {
  const { id } = await params;
  const lang = getLanguageById(id);
  if (!lang) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(lang);
}
