import { Building2, ClipboardCheck, HardHat, Truck } from 'lucide-react'

const features = [
	{
		title: 'Strategik Rejalashtirish',
		desc: 'Loyihalarni puxta tahlil qilish va aniq reja asosida amalga oshirish.',
		icon: ClipboardCheck,
	},
	{
		title: 'Muhandislik Yechimlari',
		desc: 'Mustahkamlik va samaradorlikni ta’minlovchi texnik yondashuvlar.',
		icon: Building2,
	},
	{
		title: 'Qurilish Nazorati',
		desc: 'Xavfsizlik va sifat standartlariga to‘liq rioya qilgan holda boshqaruv.',
		icon: HardHat,
	},
	{
		title: 'Logistika Xizmatlari',
		desc: 'Yuklarni tezkor, xavfsiz va aniq yetkazib berish yechimlari.',
		icon: Truck,
	},
]

const Services = () => {
	return (
		<section className='py-4 md:py-20 px-4 container mx-auto'>
			<div className=' mx-auto'>
				<div className='grid gap-3 md:gap-8 md:grid-cols-2 lg:grid-cols-4'>
					{features.map((item, index) => {
						const Icon = item.icon
						return (
							<div
								key={index}
								className='group bg-white rounded-3xl p-8 shadow-sm border transition-all duration-500 hover:border-[#283b89] hover:shadow-2xl hover:-translate-y-2'
							>
								<div className='w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 mb-6 transition-colors duration-300 group-hover:bg-[#283b89]'>
									<Icon className='w-6 h-6 text-gray-500 group-hover:text-white transition-colors duration-300' />
								</div>
								<h3 className='text-lg font-semibold text-gray-900 mb-3'>
									{item.title}
								</h3>
								<div className='w-full h-[2px] bg-gray-200 mb-4 group-hover:bg-[#283b89] transition-colors duration-300'></div>
								<p className='text-sm text-gray-600 leading-6'>{item.desc}</p>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default Services
