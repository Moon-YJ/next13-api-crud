'use client';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

function Header() {
	const [Ison, setIson] = useState(false);

	const handleScroll = () => {
		const scroll = window.scrollY;
		setIson(scroll > 0 ? true : false);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header className={clsx(Ison && 'on')}>
			<h1 className='flex flex-wrap self-center text-black/80 [&_*]:w-full mobile:[&_*]:leading-none'>
				<span className='font-monoton text-[4vmax] web:text-5xl mobile:mb-4 mobile:text-[17vw] mobile:leading-none'>
					ABCD
				</span>
				<span className='text-[1vmax] text-black/40 web:text-xs mobile:mb-10 mobile:text-[3vw] mobile:leading-none'>
					WEB DESIGN & DEVELOPMENT
				</span>
			</h1>
			<button className='btn-lg w-[80%] bg-sky-400 shadow-sky-400 web:w-auto mobile:w-[80%]'>
				APPLY POST
			</button>
		</header>
	);
}

export default Header;
