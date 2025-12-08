import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface IEvent extends Document {
  title: string;
  description: string;
  location: string;
  startTime: Date;
  endTime: Date;
  image?: string;
  published: boolean;
  isOnline: boolean;
  attendeesCount: number;
  createdAt: Date;
  updatedAt: Date;
}

const eventSchema = new Schema<IEvent>({
  title: {
    type: String,
    required: [true, 'Event title is required.'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Event description is required.'],
  },
  location: {
    type: String,
    required: [true, 'Event location is required.'],
  },
  startTime: {
    type: Date,
    required: [true, 'Event start time is required.'],
  },
  endTime: {
    type: Date,
    required: [true, 'Event end time is required.'],
  },
  image: {
    type: String,
    default: '',
  },
  published: {
    type: Boolean,
    default: false,
  },
  isOnline: {
    type: Boolean,
    default: false,
  },
  attendeesCount: {
    type: Number,
    default: 0,
    min: 0,
  }
}, {
  timestamps: true,
});

const Event = models.Event || model<IEvent>('Event', eventSchema);

export default Event;
