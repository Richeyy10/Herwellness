import mongoose, { Schema, Document, models, model } from 'mongoose';

const BLOG_CATEGORIES = ['Menstrual Health', 'Reproductive Health', 'Wellness & Mental Health', 'Community Stories', 'Advocacy'] as const;

export interface IBlogPost extends Document {
  title: string;
  content: string;
  author: string; 
  category: typeof BLOG_CATEGORIES[number];
  tags: string[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const blogPostSchema = new Schema<IBlogPost>({
  title: {
    type: String,
    required: [true, 'Title is required.'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  content: {
    type: String,
    required: [true, 'Content is required.']
  },
  author: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: BLOG_CATEGORIES
  },
  tags: {
    type: [String],
    default: []
  },
  published: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true
});

const BlogPost = models.BlogPost || model<IBlogPost>('BlogPost', blogPostSchema);

export default BlogPost;
