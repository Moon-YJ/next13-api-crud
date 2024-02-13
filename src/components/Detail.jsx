import { useGlobalData } from '@/hooks/useGlobalData';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
				<div className='w-full pr-5'>
					<motion.h2
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 100 }}
						transition={{ duration: 0.7, delay: 0.3 }}
						className='mb-10 text-6xl font-comfortaa'
					>
						{Post.tit}
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 100 }}
						transition={{ duration: 0.7, delay: 0.5 }}
						className='text-2xl text-white/70'
					>
						{Post.con}
					</motion.p>
				</div>
			)}
		</>
	);
}

export default Detail;
