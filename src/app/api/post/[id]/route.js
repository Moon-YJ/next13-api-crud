import { connectDB } from '@/lib/connectDB';
import Post from '@/lib/models';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
	const { id } = params;
	await connectDB();
	const post = await Post.findOne({ _id: id });
	return NextResponse.json({ post }, { status: 200 });
}

export async function PUT(req, { params }) {
	const { id } = params;
	const { tit, con } = await req.json();
	await connectDB();
	await Post.findByIdAndUpdate(id, { tit, con });
	return NextResponse.json({ message: 'Post Updated.' }, { status: 200 });
}

export async function DELETE(req, { params }) {
	const { id } = params;
	await connectDB();
	await Post.findByIdAndDelete(id);
	return NextResponse.json({ message: 'Post deleted.' }, { status: 200 });
}
