import Image from 'next/image'
import Link from 'next/link'
import { ThemeToggler } from './ThemeToggler'
import SearchInput from './SearchInput'
import GenreDropdown from './GenreDropdown'

function Header() {
    return (
        <header className='fixed w-full z-20 top-0 flex items-center 
        justify-between p-5 bg-gradient-to-t from-gray-200/0 
        via-gray-900/25 to-gray-900'>

            {/* First part of the header(Left side)
                Disney Logo that takes to the homepage */}
            <Link href="/">
                <Image
                    src="https://links.papareact.com/a943ae"
                    alt='Disney Logo'
                    height={120}
                    width={100}
                    className='cursor-pointer invert-0 dark:invert'
                />
            </Link>

            {/* Second part of the header(right side)
                1. Genre Dropdown
                2. Search input 
                3. Theme toggler */}
            <div className='flex space-x-2'>
                <GenreDropdown />
                <SearchInput />
                <ThemeToggler />
            </div>
        </header>
    )
}

export default Header