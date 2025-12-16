import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi'
import { Button } from '../../ui/button'

interface MenuItem {
	name: string
	id: string
}

const menuItems: MenuItem[] = [
	{ name: 'Bosh sahifa', id: 'hero' },
	{ name: 'Biz haqimizda', id: 'about' },
	{ name: 'Xizmatlar', id: 'services' },
	{ name: 'Loyihalar', id: 'our-works' },
	{ name: 'Aloqa', id: 'contact' },
]
function Navbar() {
	const [open, setOpen] = useState(false)

	const handleScroll = (id: string) => {
		const section = document.getElementById(id)
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' })
		}
		setOpen(false) // Mobile menyuda yopish
	}

	return (
		<header className='bg-white shadow-md'>
			<div className='container mx-auto px-4'>
				<nav className='flex items-center justify-between py-4'>
					<div className='flex items-center gap-2'>
						<img src='./navbar-logo.png' alt='Logo' className='h-14 w-auto' />
					</div>

					<ul className='hidden md:flex items-center gap-8 font-medium'>
						{menuItems.map(item => (
							<li
								key={item.id}
								className='relative group cursor-pointer'
								onClick={() => handleScroll(item.id)}
							>
								<span className='transition-colors duration-300 group-hover:text-primary text-black'>
									{item.name}
								</span>
								<span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full'></span>
							</li>
						))}
					</ul>

					{/* Button */}
					<div className='hidden md:block'>
						<Button
							className='group flex items-center gap-3 rounded-full bg-primary px-4! py-6! text-lg font-medium text-white shadow-md transition-all duration-300 hover:bg-white hover:text-primary hover:shadow-lg'
							onClick={() => handleScroll('contact')}
						>
							<div className='flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white'>
								<ArrowRight className='h-5 w-5' />
							</div>
							<span className='text-base'>Bog'lanish</span>
						</Button>
					</div>

					{/* Mobile menu icon */}
					<button onClick={() => setOpen(!open)} className='md:hidden text-3xl'>
						{open ? <HiX /> : <HiOutlineMenuAlt3 />}
					</button>
				</nav>

				{/* Mobile Menu */}
				{open && (
					<div className='md:hidden pb-4'>
						<ul className='flex flex-col gap-4 font-medium'>
							{menuItems.map(item => (
								<li
									key={item.id}
									className='hover:text-primary cursor-pointer'
									onClick={() => handleScroll(item.id)}
								>
									{item.name}
								</li>
							))}
							<button
								className='bg-primary text-white px-6 py-2 rounded-full w-fit'
								onClick={() => handleScroll('contact')}
							>
								Bog‘lanish
							</button>
						</ul>
					</div>
				)}
			</div>
		</header>
	)
}

export default Navbar
