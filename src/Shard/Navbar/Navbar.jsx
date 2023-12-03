import Container from "../Container";
import { Link } from 'react-router-dom'
import MenuDropdown from '../Navbar/MenuDrop/MenuDropdown'

const Navbar = () => {
    return (
        <div className='fixed w-full bg-opacity-10 z-10 bg-black shadow-sm text-white'>
          <div className=' border-b-[1px] '>
            <Container>
              <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
                {/* Logo */}
                <Link to='/'>
                  <img
                    className='hidden md:block'
                    src='https://i.ibb.co/B2VFZ6V/LOGOf-removebg-preview-1.png'
                    alt='logo'
                    width='100'
                    height='100'
                  />
                </Link>
                {/* Dropdown Menu */}
                <MenuDropdown />
              </div>
            </Container>
          </div>
        </div>
      )
}

export default Navbar