'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const Header = () => {
	return (
		<div className='w-max-3xl flex flex-col justify-center items-center text-center space-y-6'>
			{/* Main Tagline */}
			<h1 className='text-3xl sm:text-4xl md:text-4xl font-extrabold text-gray-900 leading-snug'>
				Your Second Brain for Ideas, Notes & Knowledge.
			</h1>

			{/* Welcome Text */}
			<h1 className='text-4xl sm:text-5xl md:text-5xl font-black text-gray-800'>
				Welcome to {' '}
				<span className=' text-gray-600 lowercase underline'>Nexnote</span>
			</h1>

			{/* Second Brain Quote */}
			<p className='text-lg font-semibold sm:text-xl text-gray-700 italic max-w-2xl'>
				"Your mind is for having ideas, not holding them." – David Allen
			</p>

			{/* Call-to-Action Button with Semibold Text */}
			<Button className='bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-500 text-white px-8 py-3 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2'>
				<span className='font-semibold'>Explore</span>
				<ArrowRight className='h-5 w-5 text-white' />
			</Button>
		</div>
	);
};
