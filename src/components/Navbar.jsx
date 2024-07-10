import { useState } from 'react';
import logo from "../assets/svg/logo.svg"
import menuBar from "../assets/svg/menuBar.svg"
import xMarkBar from "../assets/svg/xMarkBar.svg"

const Navbar = ({ scrollToHome, scrollToAbout, scrollToForm }) => {
	const[isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	}

  const navItems = [
    { link: "Main", action: scrollToHome },
    { link: "About", action: scrollToAbout },
    { link: "Form", action: scrollToForm },
  ];

  return (
		<>
    <nav className="bg-white shadow-sm fixed top-0 right-0 left-0">
        <div className="w-full px-4 md:px-14 xl:px-24 2xl:px-36 py-3 flex justify-between items-center">
          <a href="/"><img src={logo} alt="logo" className='h-9 w-9'/></a>

          <ul className="hidden md:flex space-x-8">
            {navItems.map(({link, action}) => (
              <li key={link}>
								<button onClick={action} className="subtitle2 text-grayDark 
									transition-transform hover:scale-105 active:scale-90 hover:text-lavender"> 
										{link} 
								</button>
              </li>
            ))}
          </ul>

			<div className="md:hidden">
				<button onClick={toggleMenu} className='text-grayDark focus:outline-none focus:text-lavender'>
				{isMenuOpen ? (
					<img src={xMarkBar} alt="XMarkBar" className="h-6 w-6" />
				) : (
					<img src={menuBar} alt="Menu" className="h-6 w-6" />
				)}
				</button>
      		</div>
        </div>
        <hr className="border-t border-grayLight"/>
    </nav>
		<div className={`space-y-4 px-4 pt-20 pb-5 bg-lavender ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
			{navItems.map(({link, action}) => (
				<button key={link} onClick={action} className=" block subtitle2 text-white 
				transition-transform hover:scale-105 hover:text-black active:scale-90"> 
					{link} 
				</button>
			))}
		</div>
		</>
  )
}

export default Navbar