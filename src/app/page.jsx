import PostList from '@/components/PostList';

export default function Home() {
	return (
		/*
			<main className='w-full h-screen bg-pink-300 wide:bg-pink-400 web:bg-pink-500 tablet:bg-pink-600 mobile:bg-pink-700'>
				<h1 className='text-9xl tablet:text-4xl mobile:text-base'>Home</h1>
				<div className='absolute top-0 left-0 flex justify-center w-10 h-10 p-10 m-10 text-lg transition-all duration-300 rotate-45 bg-red-500 opacity-50 text-pink scale-120'>
					text
				</div>
			</main>
		*/
		<PostList />
	);
}
