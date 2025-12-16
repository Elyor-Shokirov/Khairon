import { motion } from 'framer-motion'
import {
	ArrowRight,
	Facebook,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	Send,
	Youtube,
} from 'lucide-react'

export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='relative w-full bg-linear-to-br from-[#283b89] via-[#1e2d6b] to-[#151f4d] overflow-hidden'>
			{/* Decorative Background Elements */}
			<div className='absolute inset-0 overflow-hidden'>
				<div className='absolute top-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl'></div>
				<div className='absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl'></div>
				<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-300/5 rounded-full blur-3xl'></div>
			</div>

			<div className='relative z-10 max-w-7xl mx-auto px-4 pt-20 pb-8'>
				{/* Main Footer Content */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
					{/* Company Info */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='lg:col-span-1'
					>
						<div className='mb-6'>
							{/* Logo */}
							<motion.h3
								whileHover={{ scale: 1.05 }}
								className='text-3xl font-bold text-white mb-3'
							>
								<img
									src='./white_logo_1.png'
									alt='Logo'
									className='h-14 w-auto'
								/>
							</motion.h3>
							<p className='text-blue-200 leading-relaxed'>
								Professional qurilish va logistika xizmatlari. Sizning ishonchli
								hamkoringiz.
							</p>
						</div>

						{/* Social Media */}
						<div className='space-y-4'>
							<h4 className='text-white font-semibold text-sm uppercase tracking-wider'>
								Ijtimoiy tarmoqlar
							</h4>
							<div className='flex gap-3'>
								{[
									{ icon: Facebook, href: '#', label: 'Facebook' },
									{ icon: Instagram, href: '#', label: 'Instagram' },
									{ icon: Linkedin, href: '#', label: 'LinkedIn' },
									{ icon: Youtube, href: '#', label: 'YouTube' },
								].map((social, index) => (
									<motion.a
										key={index}
										href={social.href}
										target='_blank'
										rel='noopener noreferrer'
										whileHover={{ scale: 1.1, y: -3 }}
										whileTap={{ scale: 0.95 }}
										className='w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:border-white flex items-center justify-center text-white hover:text-[#283b89] transition-all duration-300 group'
										aria-label={social.label}
									>
										<social.icon className='w-5 h-5' />
									</motion.a>
								))}
							</div>
						</div>
					</motion.div>

					{/* Services */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						<h4 className='text-white font-bold text-lg mb-6'>Xizmatlarimiz</h4>
						<ul className='space-y-3'>
							{[
								"Ichki ta'mirlash",
								'Turar joy qurilishi',
								'Tashqi qoplama',
								'Logistika va omborxona',
								'Loyiha menejment',
								'Konsalting xizmatlari',
							].map((service, index) => (
								<li key={index}>
									<motion.a
										href='#'
										whileHover={{ x: 5 }}
										className='text-blue-200 hover:text-white transition-all duration-300 inline-flex items-center gap-2 group'
									>
										<ArrowRight className='w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
										<span>{service}</span>
									</motion.a>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Quick Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<h4 className='text-white font-bold text-lg mb-6'>
							Tezkor havolalar
						</h4>
						<ul className='space-y-3'>
							{[
								{ label: 'Biz haqimizda', href: '#about' },
								{ label: 'Xizmatlar', href: '#services' },
								{ label: 'Loyihalar', href: '#projects' },
								{ label: "Bog'lanish", href: '#contact' },
							].map((link, index) => (
								<li key={index}>
									<motion.a
										href={link.href}
										whileHover={{ x: 5 }}
										className='text-blue-200 hover:text-white transition-all duration-300 inline-flex items-center gap-2 group'
									>
										<ArrowRight className='w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
										<span>{link.label}</span>
									</motion.a>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Contact Info */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						<h4 className='text-white font-bold text-lg mb-6'>Bog'lanish</h4>
						<ul className='space-y-4'>
							<li>
								<a
									href='tel:+998909090990'
									className='flex items-start gap-3 text-blue-200 hover:text-white transition-colors duration-300 group'
								>
									<div className='w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300'>
										<Phone className='w-5 h-5' />
									</div>
									<div>
										<div className='text-xs text-blue-300 mb-0.5'>Telefon</div>
										<div className='font-semibold'>+998 90 909 09 90</div>
									</div>
								</a>
							</li>
							<li>
								<a
									href='mailto:info@buildlogistics.uz'
									className='flex items-start gap-3 text-blue-200 hover:text-white transition-colors duration-300 group'
								>
									<div className='w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300'>
										<Mail className='w-5 h-5' />
									</div>
									<div>
										<div className='text-xs text-blue-300 mb-0.5'>Email</div>
										<div className='font-semibold'>info@khairon.uz</div>
									</div>
								</a>
							</li>
							<li>
								<a
									href='#'
									className='flex items-start gap-3 text-blue-200 hover:text-white transition-colors duration-300 group'
								>
									<div className='w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300'>
										<MapPin className='w-5 h-5' />
									</div>
									<div>
										<div className='text-xs text-blue-300 mb-0.5'>Manzil</div>
										<div className='font-semibold'>
											Toshkent shahar, Sergeli tumani, 10001
										</div>
									</div>
								</a>
							</li>
						</ul>

						{/* Telegram CTA */}
						<motion.a
							href='https://t.me/yourusername'
							target='_blank'
							rel='noopener noreferrer'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className='mt-6 inline-flex items-center gap-2 px-6 py-3 bg-white text-[#283b89] rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300'
						>
							<Send className='w-4 h-4' />
							<span>Telegram</span>
						</motion.a>
					</motion.div>
				</div>

				{/* Divider */}
				<div className='border-t border-white/10 mb-8'></div>

				{/* Bottom Bar */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className='flex flex-col md:flex-row items-center justify-between gap-4'
				>
					{/* Copyright */}
					<p className='text-blue-200 text-sm text-center md:text-left'>
						© {currentYear} Elyor Shokirov. Barcha huquqlar himoyalangan.
					</p>

					{/* Legal Links */}
					<div className='flex flex-wrap items-center justify-center gap-6'>
						{[
							{ label: 'Maxfiylik siyosati', href: '#' },
							{ label: 'Foydalanish shartlari', href: '#' },
							{ label: 'Cookie siyosati', href: '#' },
						].map((link, index) => (
							<a
								key={index}
								href={link.href}
								className='text-sm text-blue-200 hover:text-white transition-colors duration-300'
							>
								{link.label}
							</a>
						))}
					</div>
				</motion.div>
			</div>

			<div className='absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-white/20 to-transparent'></div>
		</footer>
	)
}
