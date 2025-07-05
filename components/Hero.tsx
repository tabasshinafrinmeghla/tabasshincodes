
import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
// import { cn } from "@/lib/utils";
import { FaLocationArrow } from "react-icons/fa";


const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-32 h-screen"
        fill="white"
      />
      <Spotlight
        className="top-10 left-full h-[80vh] w-[50vw]"
        fill="purple"
      />
      <Spotlight
        className="top-28 left-80 h-[80vh] w-[50vw] md:-top-20"
        fill="blue"
      />

      <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center dark:bg-black bg-white dark:bg-grid-white/[0.0] bg-grid-black/[0.1] ">

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center' >
          <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-89'>
            Dynamic Web Magic With Next.js & React
          </h2>
          <TextGenerateEffect className=' text-center text-[40p]x md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter mt-4'
            words='Transforming Ideas into Interactive Experiences with Next.js & React'
          />
          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Hi I&apos;m Tabasshin </p>
          <a href="#about">
            <MagicButton
              title="Show my Work"
              icon={<FaLocationArrow />}
              
              position='right'
            />
          </a>
        </div>

      </div>
    </div>
  )
}

export default Hero
