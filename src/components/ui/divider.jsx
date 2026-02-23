import React from 'react'

const divider = ({text, className}) => {
  return (
    <div className='relative flex items-center my-10'>
        <div className='flex-1 h-px bg-border'></div>
        <span className={`mx-3 text-sm ${className}`}>{text}</span>
        <div className="flex-1 h-px bg-border"></div>   
    </div>
  )
}

export default divider