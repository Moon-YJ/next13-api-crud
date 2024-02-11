import { useGlobalData } from '@/hooks/useGlobalData';
import { useState } from 'react';

export default function Form() {
	const { setModalOpen } = useGlobalData();
	const [Tit, setTit] = useState('');
	const [Con, setCon] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!Tit.trim() || !Con.trim())
			return alert('Please enter both Title and Content');
		try {
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<form className='flex flex-wrap content-center gap-3'>
			<h1 className='mb-4 text-4xl text-white font-comfortaa'>Add Post</h1>
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
				<button type='reset' className='btn-line'>
					Cancel
				</button>
				<button type='submit' className='btn-line'>
					Add Post
				</button>
			</nav>
		</form>
	);
}
