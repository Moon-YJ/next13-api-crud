import { useGlobalData } from '@/hooks/useGlobalData';
import { useEffect, useState } from 'react';

function Detail() {
	const { PostId } = useGlobalData();
	const [Post, setPost] = useState(null);

	useEffect(() => {
		const getSinglePost = async (id) => {
			const data = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/api/post/${id}`
			);
			const { post } = await data.json();
			setPost(post);
		};
		PostId !== '' && getSinglePost(PostId);
	}, [PostId]);

	return (
		<>
			{Post && (
				<div>
					<h2 className='mb-10 text-6xl font-comfortaa '>{Post.tit}</h2>
					<p className='text-2xl text-white/70'>{Post.con}</p>
				</div>
			)}
		</>
	);
}

export default Detail;
