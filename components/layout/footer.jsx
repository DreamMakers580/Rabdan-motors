import React from 'react'

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import Link from 'next/link';

const Footer = () => {

  const TiktokIcon = FaIcons["FaTiktok"];
  const FacebookIcon = FaIcons["FaFacebook"];
  const InstgramIcon = AiIcons["AiFillInstagram"];

 // const FacebookIcon = FaIcons[heroItem?.facebookIcon];
 // const GoogleIcon = FaIcons[heroItem?.googleIcon];

  return (
<footer className="relative bg-blueGray-200 md:pt-14 pt-10 pb-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
          Find us on any of these platforms .
        </h5>
        <div className="mt-6 lg:mb-0 mb-6">
          
          <button className="text-lightBlue-600  font-normal h-10 w-10 items-center justify-center align-center mr-2" type="button">
            <Link href="https://www.tiktok.com/@rabdanmotors"><TiktokIcon /></Link>
            

          </button>
           
            <button className="text-lightBlue-600  font-normal h-10 w-10 items-center justify-center align-center mr-2" type="button">
            
            <Link href="https://www.facebook.com/profile.php?id=100063740010949"><FacebookIcon /></Link>
            </button>
            
            <button className=" text-lightBlue-600  font-normal h-10 w-10 items-center justify-center align-center mr-2" type="button">
            <Link href="https://www.instagram.com/rabdanmotors/"><InstgramIcon /></Link>
            
            </button>
            
            
        </div>
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-blueGray-500 text-lg font-semibold mb-2">Pages</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/">Home</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/about">About</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/contact">Contact</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/cars">Cars</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 md:mt-[0] mt-4 px-4">
            <span className="block uppercase text-blueGray-500 text-lg font-semibold mb-2">Privacy</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/">Privacy Policy</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/">Terms and Conditions</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/">Privacy Policy</a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-blueGray-300" />
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
           © <span id="get-current-year">2023</span><a className="text-blueGray-500 hover:text-gray-800" target="_blank" > Rabdan Motors Powerd by </a>
          <a href="/" className="text-blueGray-500 hover:text-blueGray-800">Dream makers</a>.
        </div>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer