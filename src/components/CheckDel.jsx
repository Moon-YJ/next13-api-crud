import { useGlobalData } from '@/hooks/useGlobalData';
import { useRouter } from 'next/navigation';

function CheckDel() {
	const { PostId, setModalOpen } = useGlobalData();
	const router = useRouter();
	const handleDelete = async () => {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/api/post/${PostId}`,
			{
				method: 'DELETE',
			}
		);
		if (res.ok) router.refresh();
		setModalOpen(false);
	};

	return (
		<div className='flex h-full flex-wrap content-center text-center [&>*]:w-full'>
			<h1 className='mb-5 text-6xl font-comfortaa'>Warning</h1>
			<div className='mb-10 text-lg'>
				<p>Are you sure to delete this post?</p>
				<p>
					{
						'Please note that this action is irreversible and the post cannot be recovered.'
					}
				</p>
			</div>
			<nav className='flex justify-center gap-3'>
				<button className='btn-line' onClick={() => setModalOpen(false)}>
					Cancel
				</button>
				<button className='btn-line' onClick={handleDelete}>
					Delete
				</button>
			</nav>
		</div>
	);
}

export default CheckDel;
