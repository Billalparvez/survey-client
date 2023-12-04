import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import useAuth from '../../../hook/useAuth'
import './Menu.css'
const avatarImg = "https://i.ibb.co/SvDmxDQ/5856.jpg"
const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logOut } = useAuth()
  const handleLogOut = () => {
    logOut()
      .then({})
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        {/* Become A Host btn */}
        <div className='hidden md:block'>

          <NavLink to={'/'} >  
            <button className=' disabled:cursor-not-allowed cursor-pointer hover:bg-info py-3 px-4 text-sm font-semibold rounded-full  transition'>
            Home
            </button>
          </NavLink>

          <NavLink to={'/surveys'}>
            <button className=' disabled:cursor-not-allowed cursor-pointer hover:bg-info py-3 px-4 text-sm font-semibold rounded-full  transition'>
              Surveys
            </button>
          </NavLink>
          <NavLink to={'/service'}>
            <button className=' disabled:cursor-not-allowed cursor-pointer hover:bg-info py-3 px-4 text-sm font-semibold rounded-full  transition'>
              Service
            </button>
          </NavLink>
          <NavLink to={'/priceing'}>
            <button className=' disabled:cursor-not-allowed cursor-pointer hover:bg-info py-3 px-4 text-sm font-semibold rounded-full  transition'>
              Priceing
            </button>
          </NavLink>
          <NavLink to={'/dashboard/surveyCreation'}>
            <button className=' disabled:cursor-not-allowed cursor-pointer hover:bg-info py-3 px-4 text-sm font-semibold rounded-full  transition'>
              Dashboard
            </button>
          </NavLink>
        </div>
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            {/* Avatar */}
            <img
              className='rounded-full'
              referrerPolicy='no-referrer'
              src={user && user.photoURL ? user.photoURL : avatarImg}
              alt='profile'
              height='30'
              width='30'
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-black overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            <Link
              to='/'
              className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Home
            </Link>
            {
              user ? <><a onClick={handleLogOut} className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>logOUt</a></>
                : <>
                  <Link
                    to={'/login'}
                    className='px-4 py-3 hover:bg-neutral-400 transition font-semibold'
                  >
                    Login
                  </Link></>
            }
            <Link
              to='/signup'
              className='px-4 py-3 hover:bg-neutral-400 transition font-semibold'
            >
              Sign Up
            </Link>
            <Link
              to='/surveys'
              className='px-4 py-3 hover:bg-neutral-400 transition font-semibold'
            >
              Surveys
            </Link>
            <Link
              to='/service'
              className='px-4 py-3 hover:bg-neutral-400 transition font-semibold'>
              Services
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default MenuDropdown