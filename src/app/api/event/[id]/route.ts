import connectDB from '@/src/config/db';
import Event from '@/src/models/events';
import { NextResponse, NextRequest } from 'next/server';
import { writeFile } from "fs/promises";
import path from "path";
import { unlink } from "fs/promises";
import cloudinary from "@/src/lib/cloudinary";

export async function GET(request: NextRequest) {
  await connectDB();

  const pathnameParts = request.nextUrl.pathname.split('/');
  const eventId = pathnameParts[pathnameParts.length - 1];

  if (!eventId || eventId === 'undefined') {
    return NextResponse.json({ success: false, message: 'Invalid or missing ID provided' }, { status: 400 });
  }

  const event = await Event.findById(eventId);

  if (!event) {
    return NextResponse.json({ success: false, message: 'Event not found' }, { status: 404 });
  }
  return NextResponse.json({ success: true, data: event });
}

export async function PUT(req: NextRequest) {
  await connectDB();

  const pathnameParts = req.nextUrl.pathname.split('/');
  const eventId = pathnameParts[pathnameParts.length - 1];

  const formData = await req.formData();
  const updatedFields: any = {
    title: formData.get("title"),
    description: formData.get("description"),
    location: formData.get("location"),
    startTime: formData.get("startTime"),
    endTime: formData.get("endTime"),
    published: formData.get("published") === "true",
  };

  const imageFile = formData.get("image") as File | null;
  if (imageFile) {
    const bytes = await imageFile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const tempPath = path.join(process.cwd(), "public", imageFile.name);
    await writeFile(tempPath, buffer);

    const uploadResult = await cloudinary.uploader.upload(tempPath, {
      folder: "events",
    });

    updatedFields.image = uploadResult.secure_url;
    await unlink(tempPath);
  }

  const updatedEvent = await Event.findByIdAndUpdate(eventId, updatedFields, {
    new: true,
    runValidators: true,
  });

  return NextResponse.json({ success: true, data: updatedEvent });
}

export async function DELETE(request: NextRequest) {
  await connectDB();

  const pathnameParts = request.nextUrl.pathname.split('/');
  const eventId = pathnameParts[pathnameParts.length - 1];

  if (!eventId || eventId === 'undefined') {
    return NextResponse.json({ success: false, message: 'Invalid or missing ID provided' }, { status: 400 });
  }

  try {
    const deletedPost = await Event.findByIdAndDelete(eventId);

    if (!deletedPost) {
      return NextResponse.json({ success: false, message: 'Event not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Event deleted successfully' }, { status: 200 });

  } catch (error: any) {
    console.error("Mongoose DELETE Error:", error.message);

    if (error.name === 'CastError') {
      return NextResponse.json({ success: false, message: 'Invalid ID format' }, { status: 400 });
    }

    return NextResponse.json({ success: false, message: 'Internal Server Error during deletion' }, { status: 500 });
  }
}

