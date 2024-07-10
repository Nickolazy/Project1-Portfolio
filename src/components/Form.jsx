import { forwardRef } from 'react';
import iconButton from "../assets/svg/icons/iconButton.svg";
import mail from "../assets/svg/icons/mail.svg";
import person from "../assets/svg/icons/person.svg";
import error from "../assets/svg/icons/error.svg";
import backgrGet from "../assets/png/backgrGet.png";
import GetTablet from "../assets/png/GetTablet.png";
import GetMobile from "../assets/png/GetMobile.png";

const Form = forwardRef((props, ref) => {
  const refresh = () => {
    window.location.reload();
    window.location.replace(props);
  }

  return (
    <>
      <div ref={ref} className="relative">
        <img src={backgrGet} alt="BackgrGet" className="hidden xl:block w-full h-auto"/>
        <img src={GetTablet} alt="GetTablet" className="hidden md:block xl:hidden w-full h-auto"/>
        <img src={GetMobile} alt="GetMobile" className="md:hidden w-full h-auto"/>

        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="relative bg-white px-3 py-10 md:p-8 xl:p-12 rounded-2xl w-11/12 md:w-5/6 xl:w-full max-w-3xl">
            <div className="subMobile md:h2 text-black mb-10">
              Let’s discuss your project
            </div>
            <form className="space-y-7 md:space-y-10 mb-10">
              <label className="block">
                <span className="subtitle2 block mb-2">Your full name</span>
                <img src={person} alt="Person" className="absolute left-6 md:left-12 xl:left-16 pt-3"/>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Name Surname"
                  className="w-full py-3 px-10 md:px-12 rounded-xl border border-grayLight placeholder:bodyText2 placeholder:text-grayDark"
                />
              </label>
              <label className="block">
                <span className="subtitle2 block mb-2">Your email</span>
                <img src={mail} alt="Mail" className="absolute left-6 md:left-12 xl:left-16 pt-3"/>
                <input
                  name="email"
                  type="text"
                  placeholder="name@example.com"
                  className="w-full py-3 px-10 md:px-12 rounded-xl border border-grayLight placeholder:bodyText2 placeholder:text-grayDark"
                />
              </label>
              <label className="block">
                <span className="subtitle2 block mb-2">Tell me about your project</span>
                <textarea
                  name="projectInf"
                  placeholder="Add here a general description of your idea and target aim"
                  className="w-full py-3 px-6 rounded-xl border border-grayLight h-32 placeholder:bodyText2 placeholder:text-grayDark"
                />
              </label>
            </form>
            <button onClick={refresh} className="w-32 md:w-36 xl:w-36 bg-lavender 
              rounded-full p-3 xl:p-3 px-4 transition-transform 
                hover:scale-105 active:scale-90">
              <div className="subMobile2 md:subtitle2 text-grayLight mx-2 md:mx-2 xl:mx-3 flex justify-between items-center">
                Submit
                <img src={iconButton} alt="IconButton"/>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="bodyMobile md:bodyText pl-4 md:pl-20 py-6 text-grayDark">
        © 2022 JetRuby. All Rights Reserved
      </div>
    </>
  );
});

export default Form;
