import connectDB from '../../../../config/db';
import Event from '../../../../models/events';
import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from "fs/promises";
import path from "path";
import { unlink } from "fs/promises";
import cloudinary from "@/src/lib/cloudinary";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const form = await req.formData();

    const title = form.get("title") as string;
    const description = form.get("description") as string;
    const location = form.get("location") as string;
    const startTime = form.get("startTime") as string;
    const endTime = form.get("endTime") as string;
    const published = form.get("published") === "true";
    const image = form.get("image");

    if (!title || !location || !startTime || !endTime) {
      return NextResponse.json(
        { success: false, message: "Title, location, startTime, and endTime are required" },
        { status: 400 }
      );
    }

    let imageUrl = "";
    if (image && image instanceof File) {
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const tempPath = path.join(process.cwd(), "public", image.name);
      await writeFile(tempPath, buffer);

      const uploadResult = await cloudinary.uploader.upload(tempPath, {
        folder: "events",
      });
      imageUrl = uploadResult.secure_url;

      await unlink(tempPath);
    }

    const newEvent = await Event.create({
      title,
      description,
      location,
      startTime,
      endTime,
      published,
      image: imageUrl,
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      message: "New Event created successfully",
      data: newEvent,
    }, { status: 201 });

  } catch (error: any) {
    console.error("EVENT CREATE ERROR:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}
