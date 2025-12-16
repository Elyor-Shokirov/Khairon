import { useEffect, useState } from 'react'

export default function HeroCarousel() {
	const [currentSlide, setCurrentSlide] = useState(0)

	const slides = [
		{
			image:
				'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
			category: 'TIMELESS DESIGN',
			title: 'Zamonaviy qurilish yechimlari,',
			description:
				'Eng murakkab loyihalarni ham yuqori sifat va professional yondashuv bilan amalga oshiramiz',
			buttonText: 'KHAIRON',
		},
		{
			image:
				'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070',
			category: 'MODERN LIVING',
			title: '15 Yillik tajriba qurilishda,',
			description:
				'Tajribali mutaxassislar va zamonaviy texnologiyalar bilan sizning oruyingizdagi binoni quramiz',
			buttonText: 'KHAIRON',
		},
		{
			image:
				'https://images.unsplash.com/photo-1629881635342-c1272d45d0fa?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			category: 'ARCHITECTURAL EXCELLENCE',
			title: 'Tez va samarali logistika xizmatlari,',
			description:
				"Qurilish materiallari va uskunalarini Tez va samarali logistika xizmatlari,O'zbekiston bo'ylab tez yetkazib berish xizmati",
			buttonText: 'KHAIRON',
		},
	]

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide(prev => (prev + 1) % slides.length)
		}, 5000)
		return () => clearInterval(timer)
	}, [slides.length])

	return (
		<div className='relative container mx-auto h-[60vh] overflow-hidden rounded-0 md:rounded-[3rem] mt-5 '>
			{slides.map((slide, index) => (
				<div
					key={index}
					className='absolute inset-0 transition-opacity duration-1000 ease-in-out rounded-0 md:rounded-[3rem] overflow-hidden'
					style={{
						opacity: currentSlide === index ? 1 : 0,
						pointerEvents: currentSlide === index ? 'auto' : 'none',
					}}
				>
					<div
						className='absolute inset-0 bg-cover bg-center'
						style={{
							backgroundImage: `url(${slide.image})`,
						}}
					>
						<div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent' />
					</div>

					{/* Content */}
					<div className='relative h-full flex items-center'>
						<div className='container mx-auto px-8 md:px-16 lg:px-24'>
							<div className='max-w-2xl'>
								{/* Category */}
								<div className='flex items-center gap-4 mb-8 animate-fade-in'>
									<span className='text-white/70 text-xs md:text-sm tracking-[0.25em] font-light uppercase'>
										Timeless Design
									</span>
									<span className='text-white/70 text-xs md:text-sm tracking-[0.25em] font-light uppercase'>
										{slide.category}
									</span>
								</div>

								{/* Title */}
								<h1 className='text-white mb-8 animate-fade-in-delay-1'>
									<div className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2'>
										{slide.title}
									</div>
									<div className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
										{slide.title2}
									</div>
								</h1>

								{/* Description */}
								<p className='text-white/85 text-sm md:text-base leading-relaxed mb-10 max-w-lg animate-fade-in-delay-2'>
									{slide.description}
								</p>

								{/* Button */}
								<button className='group inline-flex items-center gap-3 bg-primary hover:bg-primary/80 text-white px-6 py-3.5 rounded-full transition-all duration-300 animate-fade-in-delay-3 shadow-lg hover:shadow-xl'>
									<span className='flex items-center justify-center w-7 h-7 rounded-full bg-white/20 group-hover:bg-white/30 transition-all'>
										<svg
											className='w-3.5 h-3.5'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2.5}
												d='M9 5l7 7-7 7'
											/>
										</svg>
									</span>
									<span className='font-medium text-sm'>
										{slide.buttonText}
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			))}

			{/* Pagination Dots - Bottom Right with White Background */}
			<div className='absolute bottom-10 right-10 md:bottom-12 md:right-16 z-10'>
				<div className='bg-white/90 backdrop-blur-sm rounded-full px-4 py-3 flex gap-2 shadow-lg'>
					{slides.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentSlide(index)}
							className={`transition-all duration-500 rounded-full ${
								currentSlide === index
									? 'w-8 h-2.5 bg-primary hover:bg-primary/80'
									: 'w-2.5 h-2.5 bg-gray-400/50 hover:bg-gray-400'
							}`}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			</div>

			<style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delay-1 {
          animation: fade-in 0.8s ease-out 0.15s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.3s both;
        }

        .animate-fade-in-delay-3 {
          animation: fade-in 0.8s ease-out 0.45s both;
        }
      `}</style>
		</div>
	)
}
