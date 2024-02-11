import Btn from './Btn';

const getPosts = async () => {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, {
			cache: 'no-store',
		});
		if (!res.ok) throw new Error('Failed to load post data');
		return res.json();
	} catch (err) {
		console.log(err, 'Failed to load post data');
	}
};

export default async function PostList() {
	const result = await getPosts();
	const posts = result.posts || [];

	return (
		<section className='mt-5 flex w-full flex-wrap gap-[var(--gap)] p-4'>
			{posts.map((post) => {
				return (
					<article
						key={post._id}
						className='group flex h-[18vw] min-h-[300px] w-[var(--wid)] flex-wrap content-between rounded bg-white px-8 py-12 opacity-60 shadow-md transition-all duration-300 hover:-translate-y-1 hover:opacity-100 wide:h-[24vw] web:h-[30vw] tablet:h-[50vw] mobile:h-[80vw] [&>*]:w-full'
					>
						<div className='h-[calc(100%-30px)]'>
							<h2 className='relative py-5  font-comfortaa text-2xl text-black/70  transition-all  duration-500 before:absolute  before:left-0 before:top-0 before:h-[2px] before:w-10 before:bg-black/30 before:transition-all before:duration-500 group-hover:before:w-24 group-hover:before:bg-sky-400 web:text-3xl '>
								{post.tit}
							</h2>
						</div>
						<nav className='[&>*]:btn flex items-center justify-end gap-2 [&>*]:translate-y-10 [&>*]:opacity-0 group-hover:[&>*]:translate-y-0 group-hover:[&>*]:opacity-60'>
							{['view', 'edit', 'del'].map((el) => (
								<Btn key={el} type={el} />
							))}
						</nav>
					</article>
				);
			})}
		</section>
	);
}
