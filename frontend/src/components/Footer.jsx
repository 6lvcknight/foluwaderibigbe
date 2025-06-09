import React from 'react'
import { format } from 'date-fns'

const Footer = () => {
  const date = new Date()
  const dt = format(date, 'yyyy')
  return (
    <footer className='border-t border-neutral-700 mt-20'>
        <p className='text-center my-4 text-base tracking-wide text-neutral-500 mx-auto'>© {dt} Folu Aderibigbe. All rights reserved</p>
    </footer>
  )
}

export default Footer
