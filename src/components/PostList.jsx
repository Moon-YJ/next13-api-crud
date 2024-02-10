export default async function PostList() {
	const posts = Array(20).fill();

	return (
		<section className='mt-5 flex w-full flex-wrap gap-[var(--gap)] p-4'>
			{posts.map((post, idx) => {
				return (
					<article
						key={post + idx}
						className='flex h-[18vw] min-h-[300px] w-[var(--wid)] flex-wrap content-between rounded bg-white px-8 py-12 opacity-60 shadow-md transition-all duration-300 hover:-translate-y-1 hover:opacity-100 wide:h-[24vw] web:h-[30vw] tablet:h-[50vw] mobile:h-[80vw] [&>*]:w-full'
					></article>
				);
			})}
		</section>
	);
}
