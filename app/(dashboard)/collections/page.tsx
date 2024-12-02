'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Collections = () => {
	const router = useRouter();

	return (
		<div className='px-10 py-5'>
			<div className='flex items-center justify-between'>
				<p className='text-heading2-bold'>Collections</p>
				<Button
					className='bg-blue-1 text-white'
					onClick={() => router.push('/collections/new')}>
					<Plus className='h-4 w-4 mr-2' />
					Create Collection
				</Button>
			</div>
			<Separator className='bg-grey-1 my-4' />
		</div>
	);
};

export default Collections;
