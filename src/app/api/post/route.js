import { connectDB } from '@/lib/connectDB';
import Post from '@/lib/models';
import { NextResponse } from 'next/server';

export async function POST(req) {
	const { tit, con } = await req.json();
	await connectDB();
	await Post.create({ tit, con });
	return NextResponse.json({ message: 'Add Post' }, { status: 201 });
}
