const About = () => {
	return (
		<section id='about' className='md:pl-40 py-5 md:py-20'>
			<div className='relative w-full md:rounded-l-3xl overflow-hidden shadow-2xl'>
				{/* Background */}
				<div className='absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black'></div>

				{/* Content */}
				<div className='relative z-10 px-8 py-16 md:px-16 md:py-24 text-white'>
					<h2 className='text-3xl md:text-5xl font-bold mb-8'>Biz haqimizda</h2>

					<div className='grid md:grid-cols-2 gap-10'>
						<p className='text-gray-300 leading-7'>
							<span className='text-white font-semibold'>Khairon</span> —
							qurilish va logistika sohasida faoliyat yurituvchi ishonchli
							kompaniya. Biz murakkab loyihalarni aniq rejalashtirish, sifatli
							ijro va o‘z vaqtida topshirish tamoyillari asosida amalga
							oshiramiz.
						</p>

						<p className='text-gray-300 leading-7'>
							Kompaniyamiz zamonaviy texnologiyalar va professional jamoa
							yordamida mijozlar ehtiyojiga mos yechimlarni taklif etadi. Har
							bir loyiha biz uchun mas’uliyat va obro‘ masalasidir.
						</p>
					</div>

					{/* Cards */}
					<div className='grid md:grid-cols-2 gap-6 mt-12'>
						<div className='bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10'>
							<h3 className='text-xl font-semibold mb-3'>Qurilish</h3>
							<p className='text-gray-400 text-sm leading-6'>
								Turar-joy va sanoat obyektlari qurilishi, rekonstruksiya, texnik
								nazorat va zamonaviy standartlar asosida bajariladigan qurilish
								ishlari.
							</p>
						</div>

						<div className='bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10'>
							<h3 className='text-xl font-semibold mb-3'>Logistika</h3>
							<p className='text-gray-400 text-sm leading-6'>
								Yuklarni ichki va xalqaro miqyosda tezkor va xavfsiz yetkazib
								berish, omborxona xizmatlari va logistika jarayonlarini
								optimallashtirish.
							</p>
						</div>
					</div>

					{/* Accent */}
					<div className='mt-12 flex items-center gap-4'>
						<div className='w-12 h-1 bg-blue-600 rounded-full'></div>
						<span className='text-gray-400 text-sm uppercase tracking-widest'>
							Ishonch • Sifat • Natija
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
