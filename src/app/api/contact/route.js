import { NextResponse } from "next/server";

// Replace this with your Google Apps Script Web App URL
const SHEET_URL = "https://script.google.com/macros/s/AKfycbx47Kn2QKU8USrgEN_VZwcG0NZ-o4K3YU9AgWUwd8Q05hTy8HdnZ61yTo9Opm-wEyVtnw/exec";

export async function POST(request) {
  try {
    const data = await request.json();

    // Send data to Google Sheets via fetch
    const res = await fetch(SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Failed to submit to Google Sheets");

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: err.message });
  }
}
