import { FiFacebook, FiInstagram } from 'react-icons/fi'
import { IoLocationOutline } from 'react-icons/io5'
import { LiaTelegramPlane } from 'react-icons/lia'
import { LuClock2 } from 'react-icons/lu'
import { MdOutlineMail } from 'react-icons/md'
import { PiThreadsLogo } from 'react-icons/pi'

function TopNavbar() {
	return (
		<div className='bg-linear-to-br from-[#283b89] via-[#1e2d6b] to-[#151f4d] overflow-hidden p-3'>
			<div className='container mx-auto text-white text-sm'>
				<div className='flex items-center justify-between w-full'>
					{/* Chap blok — mobile’da yashirinadi */}
					<ul className='hidden md:flex items-center'>
						<li className='flex items-center border-r border-white pr-4 mr-4'>
							<IoLocationOutline className='text-2xl mr-2' />
							<span className='font-semibold'>
								Toshkent sh. Sergeli tumani 10001
							</span>
						</li>
						<li className='flex items-center'>
							<MdOutlineMail className='text-2xl mr-2' />
							<span>info@khairon.uz</span>
						</li>
					</ul>

					{/* O‘ng blok */}
					<ul className='flex items-center justify-between w-full md:w-auto'>
						{/* Soat — doim ko‘rinadi */}
						<li className='flex items-center md:border-r border-white pr-0 md:pr-4 mr-0 md:mr-4'>
							<LuClock2 className='text-2xl mr-2' />
							<span className='font-semibold text-xs sm:text-sm'>
								9:00–18:00
							</span>
						</li>

						{/* Social iconlar */}
						<li className='flex items-center gap-3'>
							<a
								href='https://www.facebook.com/khairon.uz'
								target='_blank'
								rel='noopener noreferrer'
							>
								<FiFacebook className='text-xl sm:text-2xl hover:text-gray-200' />
							</a>
							<a
								href='https://www.instagram.com/khairon.uz'
								target='_blank'
								rel='noopener noreferrer'
							>
								<FiInstagram className='text-xl sm:text-2xl hover:text-gray-200' />
							</a>
							<a
								href='https://t.me/khairon_uz'
								target='_blank'
								rel='noopener noreferrer'
							>
								<LiaTelegramPlane className='text-xl sm:text-2xl hover:text-gray-200' />
							</a>
							<a
								href='https://www.threads.net/@khairon.uz'
								target='_blank'
								rel='noopener noreferrer'
							>
								<PiThreadsLogo className='text-xl sm:text-2xl hover:text-gray-200' />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default TopNavbar
