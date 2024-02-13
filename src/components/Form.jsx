import { useGlobalData } from '@/hooks/useGlobalData';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Form({ isEdit = false }) {
	const router = useRouter();
	const { setModalOpen } = useGlobalData();
	const [Tit, setTit] = useState('');
	const [Con, setCon] = useState('');
	const { PostId } = useGlobalData();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!Tit.trim() || !Con.trim())
			return alert('Please enter both Title and Content');
		const query = isEdit ? `/${PostId}` : '';
		try {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/api/post${query}`,
				{
					method: isEdit ? 'PUT' : 'POST',
					headers: { 'Content-type': 'application/json' },
					body: JSON.stringify({ tit: Tit, con: Con }),
				}
			);
			if (!res.ok) throw new Error('Failed to add a post');
			router.refresh();
			setModalOpen(false);
		} catch (err) {
			console.log(err);
		}
	};

	const handleReset = () => {
		setTit('');
		setCon('');
	};

	useEffect(() => {
		const getSinglePost = async (id) => {
			const data = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/api/post/${id}`
			);
			const { post } = await data.json();
			setTit(post.tit);
			setCon(post.con);
		};
		isEdit && PostId !== '' && getSinglePost(PostId);
	}, [PostId, isEdit]);

	return (
		<form
			className='flex flex-wrap content-center gap-3'
			onSubmit={handleSubmit}
		>
			<h1 className='mb-4 text-4xl text-white font-comfortaa'>
				{isEdit ? 'Edit Post' : 'Add Post'}
			</h1>
			<input
				className='input'
				type='text'
				placeholder='title'
				value={Tit}
				onChange={(e) => setTit(e.target.value)}
			/>
			<textarea
				className='input'
				rows='5'
				placeholder='content'
				value={Con}
				onChange={(e) => setCon(e.target.value)}
			></textarea>
			<nav className='flex justify-center w-full gap-3 mt-5'>
				<button type='reset' className='btn-line' onClick={handleReset}>
					Cancel
				</button>
				<button type='submit' className='btn-line'>
					{isEdit ? 'Edit Post' : 'Add Post'}
				</button>
			</nav>
		</form>
	);
}
