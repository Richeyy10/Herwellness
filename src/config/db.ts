import mongoose from "mongoose";

declare global {
    var mongoose: { conn: any; promise: any } | undefined;
}

let cached = global.mongoose ?? (global.mongoose = { conn: null, promise: null });

async function connectDB () {
    if (cached.conn) {
        return cached.conn;
    }

    if (cached.promise) {
        await cached.promise; 
        return cached.conn; 
    }

    const opts = {
        bufferCommands: false
    }

    cached.promise = mongoose.connect(`${process.env.MONGODB_URI}/herwellness`, opts).then(mongooseInstance => {
        cached.conn = mongooseInstance;
        return mongooseInstance;
    });
    
    cached.conn = await cached.promise;
    return cached.conn;
}

export default connectDB;