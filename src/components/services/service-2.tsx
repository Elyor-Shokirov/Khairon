import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'
import {
	Autoplay,
	EffectCoverflow,
	Navigation,
	Pagination,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper-bundle.css'

interface Service {
	title: string
	titleUz: string
	description: string
	image: string
	icon: string
}

export default function ServicesCarousel() {
	const services: Service[] = [
		{
			title: 'Loyihani nazorat qilish',
			titleUz: 'Loyihani nazorat qilish',
			description:
				'Har bir qurilish bosqichini aniqlik, samaradorlik va murosasiz boshqaramiz',
			image:
				'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
			icon: '🏗️',
		},
		{
			title: 'Zamonaviy transformatsiyalar',
			titleUz: 'Zamonaviy transformatsiyalar',
			description:
				'Mavjud maydonlarga zamonaviy dizayn yechimlari bilan yangi energiya kiritamiz',
			image:
				'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
			icon: '✨',
		},
		{
			title: 'Maxsus loyihalar',
			titleUz: 'Maxsus loyihalar',
			description:
				'Individual yondashuv, hashamat va turmush tarzini hisobga olgan holda yaratilgan maxsus uylar',
			image:
				'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
			icon: '🏡',
		},
		{
			title: 'Ichki dizayn mukammalligi',
			titleUz: 'Ichki dizayn mukammalligi',
			description:
				"Sizning noyob shaxsiyatingizni aks ettiruvchi uyg'un va funksional makolar yaratamiz",
			image:
				'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
			icon: '🎨',
		},
		{
			title: 'Barqaror yechimlar',
			titleUz: 'Barqaror yechimlar',
			description:
				"Atrof-muhitga mas'uliyat va zamonaviy estetikani birlashtiruvchi ekologik arxitektura",
			image:
				'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80',
			icon: '🌿',
		},
	]

	return (
		<div
			id='services'
			className='relative w-full min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 py-20 px-4 overflow-hidden'
		>
			{/* Background decorative elements */}
			<div className='absolute inset-0 opacity-10'>
				<div
					className='absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl'
					style={{ backgroundColor: '#283b89' }}
				></div>
				<div
					className='absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl'
					style={{ backgroundColor: '#4a5fc1' }}
				></div>
			</div>

			<div className='relative z-10 max-w-7xl mx-auto mb-16 text-center'>
				<h2 className='text-5xl md:text-5xl font-bold text-white mb-6 tracking-tight'>
					Professional jamoamiz sizga
					<br />
					<span className='text-transparent bg-clip-text bg-gradient-to-r from-[#283b89] to-[#4a5fc1]'>
						eng yaxshi xizmatlarni
					</span>
					<br />
					taqdim etadi
				</h2>

				<p className='text-zinc-400 text-lg max-w-2xl mx-auto'>
					Arxitektura va dizaynda mukammallikka erishish yo'limiz
				</p>
			</div>

			{/* Carousel Container */}
			<div className='relative z-10 max-w-7xl mx-auto'>
				{/* Custom Navigation Buttons */}
				<button
					className='swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110'
					aria-label='Previous slide'
				>
					<ChevronLeft className='w-6 h-6' />
				</button>

				<button
					className='swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110'
					aria-label='Next slide'
				>
					<ChevronRight className='w-6 h-6' />
				</button>

				{/* Swiper Carousel */}
				<Swiper
					modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
					spaceBetween={24}
					slidesPerView={1}
					centeredSlides={true}
					loop={true}
					grabCursor={true}
					navigation={{
						prevEl: '.swiper-button-prev-custom',
						nextEl: '.swiper-button-next-custom',
					}}
					pagination={{
						clickable: true,
						bulletClass: 'swiper-pagination-bullet !bg-zinc-700 !opacity-100',
						bulletActiveClass: 'swiper-pagination-bullet-active !w-12',
					}}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
					effect='coverflow'
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 100,
						modifier: 2,
						slideShadows: false,
					}}
					breakpoints={{
						640: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 24,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 24,
						},
					}}
					className='py-8 px-4 pb-20!'
				>
					{services.map((service, index) => (
						<SwiperSlide key={index} className='h-auto!'>
							<div className='group h-full'>
								<div
									className='relative h-full bg-zinc-900/50 backdrop-blur-sm rounded-3xl border border-zinc-800/50 overflow-hidden transition-all duration-500 hover:border-[#283b89] hover:shadow-2xl hover:-translate-y-2'
									style={
										{
											'--tw-shadow-color': 'rgba(40, 59, 137, 0.2)',
										} as React.CSSProperties
									}
								>
									<div className='relative h-64 overflow-hidden'>
										<img
											src={service.image}
											alt={service.title}
											className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
											draggable='false'
										/>
										<div className='absolute inset-0 bg-linear-to-t from-zinc-900 via-zinc-900/50 to-transparent'></div>

										{/* Icon Badge */}
										<div className='absolute top-4 right-4 w-14 h-14 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center text-2xl shadow-lg'>
											{service.icon}
										</div>
									</div>

									{/* Content */}
									<div className='p-8'>
										<h3
											className='text-2xl font-bold text-white mb-2 transition-colors duration-300'
											style={{ color: 'white' }}
											onMouseEnter={e =>
												(e.currentTarget.style.color = '#283b89')
											}
											onMouseLeave={e =>
												(e.currentTarget.style.color = 'white')
											}
										>
											{service.title}
										</h3>
										<p className='text-zinc-500 text-sm mb-4 font-medium'>
											{service.titleUz}
										</p>
										<p className='text-zinc-400 mb-6 leading-relaxed'>
											{service.description}
										</p>

										<button
											className='group/btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-800 text-white transition-all duration-300 hover:gap-3'
											style={{ transition: 'all 0.3s' }}
											onMouseEnter={e =>
												(e.currentTarget.style.backgroundColor = '#283b89')
											}
											onMouseLeave={e =>
												(e.currentTarget.style.backgroundColor =
													'rgb(39 39 42)')
											}
										>
											<span className='text-sm font-medium'>Batafsil</span>
											<ArrowRight className='w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300' />
										</button>
									</div>
									<div
										className='absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl rounded-tl-full'
										style={{
											background:
												'linear-gradient(to top left, rgba(40, 59, 137, 0.1), transparent)',
										}}
									></div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className='relative z-10 text-center mt-16'>
				<button
					className='group inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-medium text-lg transition-all duration-300 hover:scale-105'
					style={{
						background: 'linear-gradient(to right, #283b89, #4a5fc1)',
						boxShadow: '0 0 0 0 rgba(40, 59, 137, 0.5)',
					}}
					onMouseEnter={e =>
						(e.currentTarget.style.boxShadow =
							'0 25px 50px -12px rgba(40, 59, 137, 0.5)')
					}
					onMouseLeave={e =>
						(e.currentTarget.style.boxShadow = '0 0 0 0 rgba(40, 59, 137, 0.5)')
					}
				>
					<span>Barcha xizmatlar</span>
					<ArrowRight className='w-5 h-5 group-hover:translate-x-2 transition-transform duration-300' />
				</button>
			</div>

			<style>{`
				.swiper-pagination {
					bottom: 0 !important;
				}

				.swiper-pagination-bullet {
					width: 12px !important;
					height: 12px !important;
					transition: all 0.3s ease !important;
					border-radius: 9999px !important;
				}

				.swiper-pagination-bullet-active {
					height: 12px !important;
					background-color: #283b89 !important;
				}

				.swiper-slide {
					display: flex !important;
					align-items: stretch !important;
				}
			`}</style>
		</div>
	)
}
