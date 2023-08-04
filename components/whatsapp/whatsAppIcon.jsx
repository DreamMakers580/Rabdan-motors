import React from 'react'

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import Link from 'next/link';

const WhatsAppIcon = () => {

  const WhatsAppIcon = AiIcons["AiOutlineWhatsApp"];

 // const FacebookIcon = FaIcons[heroItem?.facebookIcon];
 // const GoogleIcon = FaIcons[heroItem?.googleIcon];

  return (
    <div className='relative'>
        <a href='https://wa.me/971508030173' className='fixed z-[1000] cursor-pointer bottom-8 right-6 md:bottom-10 md:right-10 ' >
          <img className='md:h-[96px] md:w-[96px] h-[72px] h-[72px]' src = "/images/background/whatsapp.svg" alt="whatsapp SVG"/>
        </a>
    </div>

  )
}

export default WhatsAppIcon