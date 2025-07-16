import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <footer className='w-full pt-20 pb-10' id='contact'>
        <div className='w-full absolute left-0 -bottom-72 min-h-96'>
          <img src="/footer-grid.svg" alt="grid"
            className='w-full h-full opacity-100'
          />
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='heading lg:max-w-[45vw]'>Ready to take <span className='text-purple'> your</span>  digital presence to the next level </h1>
          <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let&aop;s s discuss how i can help you achieve your goals</p>
          <a href="tabasshinafrinmeghla@gmail.com">
            <MagicButton
              title="Contact Me"
              icon={<FaLocationArrow />}
              position='right'
            />
          </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between'>
          <p className='md:text-base text-sm md:font-normal font-light'>Copyright @ 2025 Meghla</p>
        </div>


      </footer>
    </div>
  )
}

export default Footer
