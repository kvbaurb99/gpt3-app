import React from 'react'

type Props = {}

export default function InputPrompt({}: Props) {
  return (
    <div className='relative top-[24%]'>
    <input type="text" placeholder='Send a message...' className='w-[800px] py-3 bg-[#424549] px-4 border border-black/20 outline-none rounded-lg' />
    <p className='text-xs text-center text-gray-400 mt-3'><span className='underline cursor-pointer'>ChatGPT Mar 23 Version.</span> Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts</p>
    </div>
  )
}