import Image from 'next/image';

export default function Home() {
	return (
		<main className='w-full h-screen bg-pink-300 wide:bg-pink-400 web:bg-pink-500 tablet:bg-pink-600 mobile:bg-pink-700'>
			<h1 className='text-9xl tablet:text-4xl mobile:text-base'>Home</h1>
		</main>
	);
}
