import { FiLogOut } from 'react-icons/fi'


export default function LogOut() {
  return (
    <div className='flex items-center gap-3 text-sm md:text-[15px] hover:bg-gray-700/30 py-3 px-2 rounded cursor-not-allowed'>
        <FiLogOut />
        <p>Log out</p>
    </div>
  )
}