'use client';
import { useGlobalData } from '@/hooks/useGlobalData';
import clsx from 'clsx';

export default function Btn({ type, postId = '' }) {
	const { ModalOpen, setModalOpen, setModalType, setPostId } = useGlobalData();
	let className = '';
	let txt = '';

	const handleClick = () => {
		if (ModalOpen) return;
		setModalType(type);
		setModalOpen(true);
		type !== 'post' && setPostId(postId);
	};

	type === 'post' &&
		((className =
			'btn-lg w-[80%] bg-sky-400 shadow-sky-400 web:w-auto mobile:w-[80%]'),
		(txt = 'Create Post'));
	type === 'view' &&
		((className = '!bg-cyan-400 !shadow-cyan-400/50 delay-0'), (txt = 'View'));
	type === 'edit' &&
		((className = '!bg-lime-300 !shadow-lime-300/50 delay-75'), (txt = 'Edit'));
	type === 'del' &&
		((className = '!bg-pink-400 !shadow-pink-400/50 delay-150'),
		(txt = 'Delete'));

	return (
		<button className={clsx('btn', className)} onClick={handleClick}>
			{txt}
		</button>
	);
}
