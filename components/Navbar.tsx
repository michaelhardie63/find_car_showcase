import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const Navbar = () => (
	<header className='w-full  absolute z-10'>
		<nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
			<Link href='/' className='flex justify-center items-center'>
				<Image
					src='/logo.svg'
					alt='logo'
					width={160}
					height={25}
					className='object-contain'
				/>
			</Link>

			<CustomButton
				title='Sign in'
				btnType='button'
				containerStyles='text-primary-blue px-5 py-2'
			/>
		</nav>
	</header>
);

export default Navbar;
