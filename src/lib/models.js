import mongoose, { Schema } from 'mongoose';

const postSchema = new Schema(
	{ tit: String, con: string },
	{ timestamps: true }
);
const Post = mongoose.models.Post || mongoose.model('Post', postSchema);
export default Post;
