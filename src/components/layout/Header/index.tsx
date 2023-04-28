import React from 'react'

const Header = () => {
  return (
    <div className='z-50 right-0 top-0 py-4 px-8'>
        <ul className='text-gray-300 font-semibold flex justify-end gap-2'>
            <li>About</li>
            <li>Skills</li>
            <li>Blog</li>
        </ul>
    </div>
  )
}

export default Header