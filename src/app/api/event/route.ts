import connectDB from '../../../config/db';
import Event from '@/src/models/events';
import { NextResponse } from "next/server";
import cloudinary from "@/src/lib/cloudinary";
import { writeFile } from "fs/promises";
import path from "path";
import { unlink } from "fs/promises";

export async function GET(req: Request) {
  await connectDB();

  const url = new URL(req.url);
  const isAdmin = url.searchParams.get("admin") === "true";
  const query = isAdmin ? {} : { published: true };

  const events = await Event.find(query).sort({ createdAt: -1 });
  return NextResponse.json({ success: true, data: events });
}



export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const location = formData.get("location") as string;
    const startTime = formData.get("startTime") as string;
    const endTime = formData.get("endTime") as string;
    const published = formData.get("published") === "true";
    const imageFile = formData.get("image") as File | null;

    let imageUrl = "";

    if (imageFile) {
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const tempPath = path.join(process.cwd(), "public", imageFile.name);

      await writeFile(tempPath, buffer);

      const uploadResult = await cloudinary.uploader.upload(tempPath, {
        folder: "events",
      });

      imageUrl = uploadResult.secure_url;

      await unlink(tempPath);
    }

    const eventData = {
      title,
      description,
      location,
      startTime,
      endTime,
      published,
      image: imageUrl,
      createdAt: new Date(),
    };

    const savedEvent = await Event.create(eventData);

    return NextResponse.json({
      success: true,
      data: savedEvent,
    });

  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { message: "Event creation failed" },
      { status: 500 }
    );
  }
}
