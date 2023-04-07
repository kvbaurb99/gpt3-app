import { BsTrash } from 'react-icons/bs'


export default function Clear() {
  return (
    <div className='flex text-sm md:text-[15px] items-center gap-3 hover:bg-gray-700/30 py-3 px-2 rounded cursor-not-allowed'>
        <BsTrash />
        <p>Clear conversations</p>
    </div>
  )
}