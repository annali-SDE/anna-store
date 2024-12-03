'use client';

import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

import { navLinks } from '@/lib/constants';

const TopBar = () => {
	const [dropdownMenu, setDropdownMenu] = useState(false);
	const pathname = usePathname();

	const divRef = useRef(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				divRef.current &&
				!(divRef.current as HTMLElement).contains(event.target as Node)
			) {
				setDropdownMenu(false);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div className='sticky top-0 z-20 w-full flex justify-between items-center px-8 py-4 bg-blue-2 shadow-xl lg:hidden'>
			<Image src='/logo4.png' alt='logo' width={65} height={65} />
			<div className='flex gap-8 max-md:hidden'>
				{navLinks.map((link) => (
					<Link
						href={link.url}
						key={link.label}
						className={`flex gap-4 text-body-medium ${
							pathname === link.url ? 'text-blue-1' : 'text-gray-1'
						}`}>
						<p>{link.label}</p>
					</Link>
				))}
			</div>
			<div className='relative flex gap-4 items-center'>
				<Menu
					className='cursor-pointer md:hidden'
					onClick={() => setDropdownMenu(!dropdownMenu)}
				/>
				{dropdownMenu && (
					<div
						ref={divRef}
						className='absolute top-10 right-6 flex flex-col gap-8 p-5 bg-white shadow-xl rounded-lg'>
						{navLinks.map((link) => (
							<Link
								href={link.url}
								key={link.label}
								className={`flex gap-4 text-body-medium ${
									pathname === link.url ? 'text-blue-1' : 'text-gray-1'
								}`}>
								{link.icon} <p>{link.label}</p>
							</Link>
						))}
					</div>
				)}
				<UserButton />
			</div>
		</div>
	);
};
export default TopBar;
