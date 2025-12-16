import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Clock, Mail, MapPin, MessageSquare, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { contactFormSchema } from '../../lib/validation'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../ui/select'
import { Textarea } from '../ui/textarea'

export default function ContactSection() {
	//
	const [isLoading, setIsLoading] = useState(false)

	const form = useForm<z.infer<typeof contactFormSchema>>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			username: '',
			email: '',
			textarea: '',
			phone_number: '',
			service: '',
		},
	})

	function onSubmit(values: z.infer<typeof contactFormSchema>) {
		const telegramBotId = import.meta.env.VITE_PUBLIC_TELEGRAM_BOT_API
		const telegramChatId = import.meta.env.VITE_PUBLIC_TELEGRAM_CHAT_ID
		setIsLoading(true)

		const promise = fetch(
			`https://api.telegram.org/bot${telegramBotId}/sendMessage`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'cache-control': 'no-cashe',
				},
				body: JSON.stringify({
					chat_id: telegramChatId,
					parse_mode: 'HTML',
					text: `
				   🔔<b>Mijozning aloqa ma'lumotlari:</b>🔔 \n
						<b>🙍‍♂️Ismi Familyasi:</b> <i>${values.username}</i> \n
						<b>📱Telefon raqami:</b> <i>+${values.phone_number}\n</i>
						<b>📧Email:</b> <i>${values.email}\n</i>
						<b>🏢Xizmat turi:</b> <i>${values.service}\n</i>
						<b>✍️Xabar:</b> <i>${values.textarea}\n</i>
					`,
				}),
			}
		)
			.then(() => form.reset())
			.finally(() => setIsLoading(false))
		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Успешно отправлено',
			error: 'Somthing went wrong',
		})
	}

	return (
		<section
			id='contact'
			className='relative w-full min-h-[80vh] bg-linear-to-br from-gray-50 to-gray-100 py-10 px-4'
		>
			<div className='absolute inset-0 overflow-hidden'>
				<div
					className='absolute inset-0 bg-cover bg-center bg-no-repeat'
					style={{
						backgroundImage:
							'url(https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
					}}
				>
					<div className='absolute inset-0 bg-white/85'></div>
				</div>
				<div
					className='absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-10'
					style={{ backgroundColor: '#283b89' }}
				></div>
				<div
					className='absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-10'
					style={{ backgroundColor: '#4a5fc1' }}
				></div>
			</div>

			<div className='relative z-10 max-w-7xl mx-auto'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='text-center mb-16'
				>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className='text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-3'
					>
						Biz bilan{' '}
						<span className='text-transparent bg-clip-text bg-linear-to-r from-[#283b89] to-[#4a5fc1]'>
							bog'laning
						</span>
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className='text-gray-600 text-lg max-w-2xl mx-auto'
					>
						Loyihangizni muhokama qilish uchun biz bilan bog'laning.
						Professional jamoamiz sizga yordam berishga tayyor
					</motion.p>
				</motion.div>

				<div className='grid lg:grid-cols-2 gap-12'>
					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='space-y-8'
					>
						{/* Contact Cards */}
						<div className='space-y-6'>
							{[
								{
									icon: Phone,
									title: 'Telefon',
									content: '+998 90 909 09 90',
									href: 'tel:+998909090990',
								},
								{
									icon: Mail,
									title: 'Email',
									content: 'info@buildlogistics.uz',
									href: 'mailto:info@buildlogistics.uz',
								},
								{
									icon: MapPin,
									title: 'Manzil',
									content: 'Toshkent shahar, Sergeli tumani',
									href: '#',
								},
								{
									icon: Clock,
									title: 'Ish vaqti',
									content: 'Dushanba - Juma: 9:00 - 18:00',
									href: '#',
								},
							].map((item, index) => (
								<motion.a
									key={index}
									href={item.href}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
									whileHover={{ scale: 1.02, x: 5 }}
									className='flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group'
								>
									<div
										className='w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300'
										style={{
											background: 'linear-gradient(135deg, #283b89, #4a5fc1)',
										}}
									>
										<item.icon className='w-6 h-6 text-white' />
									</div>
									<div>
										<h3 className='text-lg font-bold text-gray-900 mb-1'>
											{item.title}
										</h3>
										<p className='text-gray-600'>{item.content}</p>
									</div>
								</motion.a>
							))}
						</div>

						{/* Social Media */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.7 }}
							className='p-6 bg-white rounded-2xl shadow-lg'
						>
							<h3 className='text-lg font-bold text-gray-900 mb-4'>
								Ijtimoiy tarmoqlar
							</h3>
							<div className='flex gap-3'>
								{['facebook', 'instagram', 'telegram', 'youtube'].map(
									(social, index) => (
										<motion.a
											key={index}
											href='#'
											whileHover={{ scale: 1.1, y: -2 }}
											whileTap={{ scale: 0.95 }}
											className='w-12 h-12 rounded-xl flex items-center justify-center text-white transition-all duration-300'
											style={{
												background: 'linear-gradient(135deg, #283b89, #4a5fc1)',
											}}
										>
											<span className='capitalize text-sm font-medium'>
												{social[0].toUpperCase()}
											</span>
										</motion.a>
									)
								)}
							</div>
						</motion.div>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className='space-y-6 p-8 bg-white rounded-3xl shadow-xl'
							>
								<FormField
									control={form.control}
									name='username'
									render={({ field }) => (
										<FormItem>
											<FormLabel className='text-sm font-semibold text-gray-700 flex items-center gap-2'>
												<span>Ismingiz</span>
												<span className='text-red-500'>*</span>
											</FormLabel>
											<FormControl>
												<Input
													className=' w-full px-5 py-6 rounded-md border-2 border-gray-200 focus:border-[#283b89] focus:outline-none font-bold text-base focus:ring-2 focus:ring-[#283b89]/20 transition-all duration-300'
													placeholder='Ismingizni kiriting'
													{...field}
													disabled={isLoading}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='phone_number'
									render={({ field }) => (
										<FormItem>
											<FormLabel className='text-sm font-semibold text-gray-700 flex items-center gap-2'>
												<span>Telefon Raqami</span>
												<span className='text-red-500'>*</span>
											</FormLabel>
											<FormControl>
												<Input
													className=' w-full px-5 py-6 rounded-md border-2 border-gray-200 focus:border-[#283b89] focus:outline-none font-bold text-base focus:ring-2 focus:ring-[#283b89]/20 transition-all duration-300'
													placeholder='+998 90 909 09 90'
													{...field}
													disabled={isLoading}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='email'
									render={({ field }) => (
										<FormItem>
											<FormLabel className='text-sm font-semibold text-gray-700 flex items-center gap-2'>
												<span>Telefon Raqami</span>
												<span className='text-red-500'>*</span>
											</FormLabel>
											<FormControl>
												<Input
													disabled={isLoading}
													className='w-full px-5 py-6 rounded-md border-2 border-gray-200 focus:border-[#283b89] focus:outline-none font-bold text-base focus:ring-2 focus:ring-[#283b89]/20 transition-all duration-300'
													placeholder='Email manzilingiz'
													{...field}
												/>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='service'
									render={({ field }) => (
										<FormItem>
											<FormLabel className='text-sm font-semibold text-gray-700 flex items-center gap-2'>
												<span>Xizmat turi</span>
												<span className='text-red-500'>*</span>
											</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
												disabled={isLoading}
											>
												<FormControl>
													<SelectTrigger className='w-full px-5 py-6 rounded-md border-2 border-gray-200 focus:border-[#283b89] focus:outline-none font-bold text-base focus:ring-2 focus:ring-[#283b89]/20 transition-all duration-300'>
														<SelectValue placeholder='Xizmat turini tanlang' />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value='interior'>
														Ichki ta'mirlash
													</SelectItem>
													<SelectItem value='residential'>
														Turar joy qurilishi
													</SelectItem>
													<SelectItem value='exterior'>
														Tashqi qoplama
													</SelectItem>
													<SelectItem value='logistics'>
														Logistika va omborxana
													</SelectItem>
													<SelectItem value='project'>
														Loyiha menejment
													</SelectItem>
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='textarea'
									render={({ field }) => (
										<FormItem>
											<FormLabel className='text-sm font-semibold text-gray-700 flex items-center gap-2'>
												<span>Xabar</span>
												<span className='text-red-500'>*</span>
											</FormLabel>
											<FormControl>
												<Textarea
													disabled={isLoading}
													className='w-full min-h-37.5 rounded-md border-2 border-gray-200 focus:border-[#283b89] focus:outline-none font-bold text-base focus:ring-2 focus:ring-[#283b89]/20 transition-all duration-300'
													placeholder='Xabaringizni yozing...'
													{...field}
												/>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								<motion.button
									type='submit'
									disabled={isLoading}
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className='w-full py-4 rounded-xl text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'
									style={{
										background: 'linear-gradient(135deg, #283b89, #4a5fc1)',
									}}
								>
									{isLoading ? (
										<>
											<div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
											<span>Yuborilmoqda...</span>
										</>
									) : (
										<>
											<Send className='w-5 h-5' />
											<span>Xabar yuborish</span>
										</>
									)}
								</motion.button>
							</form>
						</Form>
					</motion.div>
				</div>

				{/* Quick Contact CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.8 }}
					className='mt-16 p-8 rounded-3xl relative overflow-hidden'
					style={{ background: 'linear-gradient(135deg, #283b89, #4a5fc1)' }}
				>
					{/* Decorative circles */}
					<div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl'></div>
					<div className='absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl'></div>

					<div className='relative z-10 flex flex-col md:flex-row items-center justify-between gap-6'>
						<div className='text-white text-center md:text-left'>
							<div className='flex items-center justify-center md:justify-start gap-2 mb-2'>
								<MessageSquare className='w-6 h-6' />
								<h3 className='text-2xl font-bold'>Tezkor javob olish uchun</h3>
							</div>
							<p className='text-blue-100'>
								Telegram orqali to'g'ridan-to'g'ri murojaat qiling
							</p>
						</div>
						<motion.a
							href='https://t.me/yourusername'
							target='_blank'
							rel='noopener noreferrer'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className='px-8 py-4 bg-white text-[#283b89] rounded-full font-semibold flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all duration-300'
						>
							<Send className='w-5 h-5' />
							<span>Telegram orqali yozish</span>
						</motion.a>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
