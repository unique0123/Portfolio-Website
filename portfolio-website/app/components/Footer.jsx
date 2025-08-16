import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='footer border border-t-[#33353F] border-l-transparent border-r-tranparent text-white'>
        <div className='container p-12 flex justify-between'>
            <div>
              <Image src="/images/alphalogo2.png" width={100} height={100} alt='logo'/>
            </div>
            <p className='text-slate-600'>All rights reserved </p>
        </div>
    </footer>
  )
}

export default Footer