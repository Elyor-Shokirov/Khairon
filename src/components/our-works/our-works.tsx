/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import React, { useState } from 'react'

interface GalleryItem {
	id: number
	image: string
	category: string
	title: string
}

interface Category {
	id: string
	label: string
	labelUz: string
}

export default function GallerySection() {
	const [selectedCategory, setSelectedCategory] = useState<string>('all')
	const [selectedImage, setSelectedImage] = useState<number | null>(null)

	const categories: Category[] = [
		{
			id: 'all',
			label: 'Hammasi',
			labelUz: 'Hammasi',
		},
		{
			id: 'interior',
			label: "Ichki ta'mirlash",
			labelUz: "Ichki ta'mirlash",
		},
		{
			id: 'residential',
			label: 'Turar joy qurilishi',
			labelUz: 'Turar joy qurilishi',
		},
		{
			id: 'exterior',
			label: 'Tashqi qoplama',
			labelUz: 'Tashqi qoplama',
		},
		{
			id: 'urban',
			label: 'Logistika va omborxona',
			labelUz: 'Logistika va omborxona',
		},
	]

	const galleryItems: GalleryItem[] = [
		{
			id: 1,
			image:
				'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
			category: 'interior',
			title: 'Modern Living Room',
		},
		{
			id: 2,
			image:
				'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
			category: 'residential',
			title: 'Contemporary Kitchen',
		},
		{
			id: 3,
			image:
				'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
			category: 'residential',
			title: 'Luxury Living Space',
		},
		{
			id: 4,
			image:
				'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
			category: 'exterior',
			title: 'Modern Villa',
		},
		{
			id: 5,
			image:
				'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
			category: 'interior',
			title: 'Red Accent Lounge',
		},
		{
			id: 6,
			image:
				'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80',
			category: 'residential',
			title: 'Dining Area',
		},
		{
			id: 7,
			image:
				'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80',
			category: 'interior',
			title: 'Office Space',
		},
		{
			id: 8,
			image:
				'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
			category: 'urban',
			title: 'Glass Conference Room',
		},
		{
			id: 9,
			image:
				'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
			category: 'interior',
			title: 'Modern Kitchen Design',
		},
	]

	const filteredItems =
		selectedCategory === 'all'
			? galleryItems.slice(0, 6)
			: galleryItems
					.filter(item => item.category === selectedCategory)
					.slice(0, 6)

	const handlePrevious = () => {
		if (selectedImage !== null && selectedImage > 0) {
			setSelectedImage(selectedImage - 1)
		}
	}

	const handleNext = () => {
		if (selectedImage !== null && selectedImage < filteredItems.length - 1) {
			setSelectedImage(selectedImage + 1)
		}
	}

	const handleKeyDown = (e: KeyboardEvent) => {
		if (selectedImage === null) return
		if (e.key === 'ArrowLeft') handlePrevious()
		if (e.key === 'ArrowRight') handleNext()
		if (e.key === 'Escape') setSelectedImage(null)
	}

	React.useEffect(() => {
		window.addEventListener('keydown', handleKeyDown as any)
		return () => window.removeEventListener('keydown', handleKeyDown as any)
	}, [selectedImage])

	return (
		<div
			id='our-works'
			className='relative w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 md:px-8'
		>
			{/* Header */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className='max-w-7xl mx-auto mb-16 text-center'
			>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className='text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6'
				>
					Bizning{' '}
					<span className='text-transparent bg-clip-text bg-gradient-to-r from-[#283b89] to-[#4a5fc1]'>
						loyihalarimiz
					</span>
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className='text-gray-600 text-lg max-w-2xl mx-auto'
				>
					Professional arxitektura va dizayn loyihalarimiz bilan tanishing
				</motion.p>
			</motion.div>

			{/* Category Filter */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.5 }}
				className='max-w-7xl mx-auto mb-12'
			>
				<div className='flex flex-wrap justify-center gap-3'>
					{categories.map((category, index) => (
						<motion.button
							key={category.id}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => setSelectedCategory(category.id)}
							className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
								selectedCategory === category.id
									? 'text-white shadow-lg'
									: 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
							}`}
							style={
								selectedCategory === category.id
									? {
											background: 'linear-gradient(to right, #283b89, #4a5fc1)',
									  }
									: {}
							}
						>
							<span className='hidden sm:inline'>{category.label}</span>
							<span className='sm:hidden'>{category.labelUz}</span>
						</motion.button>
					))}
				</div>
			</motion.div>

			{/* Gallery Grid - Masonry Layout */}
			<div className='max-w-7xl mx-auto'>
				<motion.div
					layout
					className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[240px] gap-4'
				>
					<AnimatePresence mode='popLayout'>
						{filteredItems.slice(0, 6).map((item, index) => {
							// Define masonry layout positions exactly like the screenshot
							// Top row: small, tall (2 rows), wide (2 cols), small
							// Bottom row: small, continues from tall, continues from wide, small
							let className =
								'group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300'

							if (index === 0) {
								// Top-left: small square
								className += ' col-span-1 row-span-1'
							} else if (index === 1) {
								// Tall: 2 rows high
								className += ' col-span-1 row-span-2'
							} else if (index === 2) {
								// Wide: 2 columns
								className += ' col-span-2 row-span-1'
							} else if (index === 3) {
								// Top-right: small square
								className += ' col-span-1 row-span-1'
							} else if (index === 4) {
								// Bottom-left: small square
								className += ' col-span-1 row-span-1'
							} else if (index === 5) {
								// Bottom-center-right area
								className += ' col-span-1 row-span-1'
							}

							return (
								<motion.div
									key={item.id}
									layout
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.8 }}
									transition={{ duration: 0.5, delay: index * 0.05 }}
									className={className}
									onClick={() => setSelectedImage(index)}
								>
									<motion.img
										src={item.image}
										alt={item.title}
										className='w-full h-full object-cover'
										whileHover={{ scale: 1.05 }}
										transition={{ duration: 0.6 }}
									/>

									{/* Overlay */}
									<motion.div
										initial={{ opacity: 0 }}
										whileHover={{ opacity: 1 }}
										transition={{ duration: 0.3 }}
										className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6'
									>
										<div className='text-white'>
											<h3 className='text-lg font-bold mb-1'>{item.title}</h3>
											<p className='text-xs text-gray-300'>
												{
													categories.find(cat => cat.id === item.category)
														?.labelUz
												}
											</p>
										</div>
									</motion.div>

									{/* Corner Accent */}
									<div
										className='absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
										style={{
											background:
												'linear-gradient(to bottom left, rgba(40, 59, 137, 0.6), transparent)',
										}}
									/>
								</motion.div>
							)
						})}
					</AnimatePresence>
				</motion.div>
			</div>

			{/* Lightbox Modal */}
			<AnimatePresence>
				{selectedImage !== null && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className='fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4'
						onClick={() => setSelectedImage(null)}
					>
						{/* Close Button */}
						<motion.button
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.8 }}
							transition={{ duration: 0.2 }}
							onClick={() => setSelectedImage(null)}
							className='absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10'
						>
							<X className='w-6 h-6' />
						</motion.button>

						{/* Previous Button */}
						{selectedImage > 0 && (
							<motion.button
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -20 }}
								transition={{ duration: 0.2 }}
								onClick={e => {
									e.stopPropagation()
									handlePrevious()
								}}
								className='absolute left-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10'
							>
								<ChevronLeft className='w-6 h-6' />
							</motion.button>
						)}

						{/* Next Button */}
						{selectedImage < filteredItems.length - 1 && (
							<motion.button
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: 20 }}
								transition={{ duration: 0.2 }}
								onClick={e => {
									e.stopPropagation()
									handleNext()
								}}
								className='absolute right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10'
							>
								<ChevronRight className='w-6 h-6' />
							</motion.button>
						)}

						{/* Image */}
						<motion.div
							key={selectedImage}
							initial={{ opacity: 0, scale: 0.9, y: 20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.9, y: 20 }}
							transition={{ duration: 0.3 }}
							className='relative max-w-6xl max-h-[90vh] w-full'
							onClick={e => e.stopPropagation()}
						>
							<img
								src={filteredItems[selectedImage].image}
								alt={filteredItems[selectedImage].title}
								className='w-full h-full object-contain rounded-2xl'
							/>

							{/* Image Info */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, delay: 0.2 }}
								className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 rounded-b-2xl'
							>
								<h3 className='text-2xl font-bold text-white mb-2'>
									{filteredItems[selectedImage].title}
								</h3>
								<p className='text-gray-300'>
									{
										categories.find(
											cat => cat.id === filteredItems[selectedImage].category
										)?.labelUz
									}
								</p>
								<p className='text-gray-400 text-sm mt-2'>
									{selectedImage + 1} / {filteredItems.length}
								</p>
							</motion.div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
