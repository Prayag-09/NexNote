import Image from 'next/image';

const Hero = () => {
	return (
		<div className='flex flex-col items-center justify-center max-w-5xl mx-auto px-4'>
			<div className='flex flex-wrap justify-center items-center gap-8'>
				<div className='relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] max-w-xs sm:max-w-sm md:max-w-md aspect-[4/3]'>
					<Image
						alt='Stack of organized documents, symbolizing knowledge storage'
						src='/documents.png'
						className='object-contain'
						fill
					/>
				</div>

				<div className='relative hidden md:block w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] max-w-xs sm:max-w-sm md:max-w-md aspect-[4/3]'>
					<Image
						alt='Person reading a book, representing learning and growth'
						src='/reading.png'
						fill
						className='object-contain'
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
