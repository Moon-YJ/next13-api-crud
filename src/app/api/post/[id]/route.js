import { connectDB } from '@/lib/connectDB';
import Post from '@/lib/models';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
	const { id } = params;
	await connectDB();
	const post = await Post.findOne({ _id: id });
	return NextResponse.json({ post }, { status: 200 });
}
