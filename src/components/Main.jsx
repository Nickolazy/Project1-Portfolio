import { useRef } from 'react'
import iconButton from "../assets/svg/icons/iconButton.svg"
import photoMain from "../assets/png/photoMain.png"
import photoTablet from "../assets/png/photoTablet.png"
import photoMobile from "../assets/png/photoMobile.png"

const Main = ({scrollToForm}) => {

  return (
    <>
    <div className='opacity-0'>
      -
    </div>
    <div className="mt-20 md:mt-36 xl:mt-48 2xl:mt-68 ml-4 md:ml-14 xl:ml-24 2xl:ml-36 flex justify-between items-start">
    <div className="mb-48 md:mb-0 xl:mb-32 2xl:mb-72">
      <div className="mb-8 md:mb-12 xl:mb-24 2xl:mb-36">
        <div className="h3 md:h1 my-2 text-black">
          Hey, I’m Nick
        </div>
        <div className="bodyMobile md:bodyText text-grayDark">
          Frontend developer
        </div>
      </div>

      <div className="w-8/12 md:w-3/5 mb-6 md:mb-8 xl:mb-14 2xl:mb-20">
        <hr className="w-6 h-1 my-5 border-0 bg-lavender"/>
        <div className="bodyMobile md:bodyText text-grayDark">
          Help you to create high-quality digital 
          products that your clients will love and 
          let your business thrive 
        </div>
      </div>

      <button onClick={scrollToForm} className="w-40 md:w-44 xl:w-52 bg-lavender 
        rounded-full p-3 xl:p-4 px-4 xl:px-5 transition-transform 
          hover:scale-105 active:scale-90">
        <div className="subMobile2 md:subtitle2 text-grayLight mx-1 md:mx-2 xl:mx-3 flex justify-between items-center">
          Get in touch
          <img src={iconButton} alt="IconButton"/>
        </div>
      </button>
    </div>

    <div className="absolute right-0 top-64 md:top-32 2xl:top-60 flex-1 flex justify-end -z-10">
      <div className="max-w-sm md:max-w-2xl xl:max-w-4xl 2xl:max-w-7xl h-full">
        <img
          src={photoMain}
          alt="photoMain"
          className="hidden xl:block"
        />
        <img
          src={photoTablet}
          alt="photoTablet"
          className="hidden md:block xl:hidden"
        />
        <img
          src={photoMobile}
          alt="photoMobile"
          className="md:hidden"
        />
        </div>
      </div>
  </div>
  </>
  )
}

export default Main