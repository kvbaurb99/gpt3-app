import { MdOutlineOpenInNew } from 'react-icons/md'


export default function Updates() {
  return (
    <div className='flex items-center text-sm md:text-[15px] gap-3 hover:bg-gray-700/30 py-3 px-2 rounded cursor-not-allowed'>
        <MdOutlineOpenInNew />
        <p>Updates & FAQ</p>
    </div>
  )
}