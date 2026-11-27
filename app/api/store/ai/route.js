import { openai } from "@/configs/openai";
import authSeller from "@/middlewares/authSeller";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

async function main(base64Image, mimeType) {
  const messages = [
    {
      role: "system",
      content: `
            You are an assistant for GradPass, a peer-to-peer campus marketplace where graduating students sell extra commencement tickets to fellow students.
Analyze the uploaded ticket confirmation image or ceremony details and generate a clear, trustworthy listing in JSON format with two keys: "name" and "description".

Rules:
- "name": Write a concise, informative title including the university/college, ceremony session, and seating section if visible (e.g., "Main Commencement Ceremony - Section 104").
- "description": Write 2 to 3 short, direct sentences covering:
  1. Seating details (section, row, or general admission) and ticket quantity/type.
  2. Digital transfer method (e.g., official university student portal or Ticketmaster email transfer).
  3. Safe campus meetup terms (e.g., "Meet on campus to verify the ticket live before paying via Venmo, Zelle, or Cash").
- Do not include markdown, emojis, or promotional fluff. Return strictly valid JSON: {"name": "...", "description": "..."}.
        `,
    },
    {
      role: "user",
      content: [
        {
          type: "text",
          text: "Analyze this image and return name + description",
        },
        {
          type: "image_url",
          image_url: {
            url: `data:${mimeType};base64,${base64Image}`,
          },
        },
      ],
    },
  ];
  const response = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL,
    messages: messages,
  });

  const raw = response.choices[0].message.content
  const cleaned = raw.replace(/```json```/g,"").trim()
  let parsed;
  try {
    parsed = JSON.parse(cleaned)
  } catch (error) {
    throw new Error("AI did not return valid JSON")
  }
  return parsed
}

export async function POST(request) {
  try {
    const { userId } = getAuth(request);
    const isSeller = await authSeller(userId);
    if (!isSeller)
      return NextResponse.json({ error: "not authorized" }, { status: 401 });
    const { base64Image, mimeType } = await request.json();
    if (!base64Image) throw new Error("Missing base64Image")
    const cleanBase64 = base64Image.replace(/^data:image\/\w+;base64,/, '');
    const result = await main(cleanBase64, mimeType)
    return NextResponse.json({...result})
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error.code || error.message },
      { status: 400 }
    );
  }
}
