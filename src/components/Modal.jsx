'use client';
import { useGlobalData } from '@/hooks/useGlobalData';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';

function Modal() {
	const { ModalOpen, setModalOpen, ModalType } = useGlobalData();
	let className = '';

	ModalType === 'view' && (className = '!bg-cyan-600/60 !shadow-cyan-600/60 ');
	ModalType === 'edit' && (className = '!bg-lime-500/60 !shadow-lime-600/60 ');
	ModalType === 'del' && (className = '!bg-pink-600/60 !shadow-pink-600/60 ');

	return (
		<AnimatePresence>
			{ModalOpen && (
				<motion.aside
					initial={{ x: '100%', opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: '-100%', opacity: 0 }}
					transition={{ type: 'spring', stiffness: 100, duration: 0.2 }}
					className={clsx(
						'fixed left-[50%] top-[50%] z-30 ml-[-25vw] mt-[-30vh] h-[60vh] w-[50vw]  rounded-xl  px-20 py-28 text-white shadow-2xl  saturate-150 backdrop-blur-sm web:ml-[-40vw] web:w-[80vw]',
						className
					)}
				>
					<div className='inner'></div>
					<span
						onClick={() => setModalOpen(false)}
						className='absolute text-lg cursor-pointer right-10 top-10'
					>
						close
					</span>
				</motion.aside>
			)}
		</AnimatePresence>
	);
}

export default Modal;
