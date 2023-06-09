import { AiOutlineUser } from 'react-icons/ai'


export default function Upgrade() {
  return (
    <div className='flex items-center text-sm md:text-[15px] gap-3 hover:bg-gray-700/30 py-3 px-2 rounded cursor-not-allowed'>
        <AiOutlineUser />
        <p>Upgrade to Plus</p>
    </div>
  )
}