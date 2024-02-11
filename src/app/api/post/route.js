import { connectDB } from '@/lib/connectDB';
import Post from '@/lib/models';
import { NextResponse } from 'next/server';

export async function POST(req) {
	const { tit, con } = await req.json();
	await connectDB();
	await Post.create({ tit, con });
	return NextResponse.json({ message: 'Add Post' }, { status: 201 });
}

export async function GET() {
	await connectDB();
	const posts = await Post.find().sort({ createdAt: -1 });
	return NextResponse.json({ posts });
}
