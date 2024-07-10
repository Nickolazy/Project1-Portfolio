import {useRef} from 'react';
import iconButton from "../assets/svg/icons/iconButton.svg"
import photoAbout from "../assets/png/photoAbout.png"
import iconMusic from "../assets/svg/icons/iconMusic.svg"
import iconArt from "../assets/svg/icons/iconArt.svg"
import iconPhoto from "../assets/svg/icons/iconPhoto.svg"

const icons = {
  iconMusic,
  iconArt,
  iconPhoto,
};

const About = ({scrollToForm}) => {

  const data = {
    'Interests': [
      {
        prim: "iconMusic",
        name: "Music",
        content: "Indie rock | Reggae"
      },
      {
        prim: "iconArt",
        name: "Art",
        content: "Munch | Frida Kahlo"
      },
      {
        prim: "iconPhoto",
        name: "Photography",
        content: "Portraits"
      }
    ],

    'Education & Experience': [
      {
        prim: "2008 - 2020",
        name: "Middle Frontend developer",
        content: "Ozon",

      },
      {
        prim: "2006 - 2007",
        name: "Frontend development courses",
        content: "Stepik"
      },
      {
        prim: "2000 - 2005",
        name: "Frontend developer",
        content: "Saint Petersburg State University"
      }
    ]
  };

  const handleClick = () => {
    scrollToForm();
  };

  return (
    <div className="mr-4 ml-4 md:ml-14 xl:ml-24 2xl:ml-36 mb-8">
      <div className="h3 md:h2 mt-14 md:mt-20 xl:mt-32 mb-12 md:mb-16 xl:mb-20 text-black">
        About me
      </div>

    <div className="flex flex-wrap md:flex-nowrap justify-start items-center md:gap-10 xl:gap-80 2xl:gap-96">
      <img src={photoAbout} alt="PhotoAbout" className="md:w-2/5 xl:w-1/3 2xl:w-1/4"/>

      <div className="mb:w-4/5 xl:w-2/6">
        <div className="mb-14"> 
          <hr className="w-6 h-1 my-5 border-0 bg-lavender"/>
          <div className="bodyMobile md:bodyText text-grayDark">
            <span className="subMobile2 md:subtitle text-black">Nick Richardson</span> - specialist in Frontend 
              development. Clear code is my passion. 
              Solving issues through negotiations  
          </div>
        </div>

        <button onClick={handleClick} className="hidden md:block w-40 md:w-44 xl:w-52
          bg-lavender rounded-full p-3 xl:p-4 px-4 xl:px-5 mb-16 transition-transform 
            hover:scale-105 active:scale-90">
          <div className="subMobile2 md:subtitle2 text-grayLight mx-1 md:mx-2 xl:mx-3 flex justify-between items-center">
            Get in touch
            <img src={iconButton} alt="IconButton"/>
          </div>
        </button>
      </div>
    </div>
    
    <div className="flex flex-wrap xl:flex-nowrap justify-start items-start md:gap-x-44 xl:gap-x-80 2xl:gap-x-96 md:mt-20 text-black">
      {Object.keys(data).map((category) => (
        <div key={category} className="mb-6 w-full md:w-1/2 xl:w-1/3 2xl:w-1/4">
          <div className="subMobile md:h3 mb-10">{category}</div>
          {data[category].map(({prim, name, content }) => (
            <div key={name} className="flex justify-start mb-10 gap-5">
              <div>
                {(prim.substr(0, 4) == 'icon') ? (
                  <img src={icons[prim]} alt="icon"/>
                ) : (
                  <div className="bodyMobile md:bodyText text-grayDark w-24 md:w-32">{prim}</div>)}
              </div>
              <div>
                <div className="subMobile2 md:subtitle">{name}</div>
                <div className="bodyMobile md:bodyText  text-grayDark">{content}</div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>

    </div>
  )
}

export default About