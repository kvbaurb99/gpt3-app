import { FiLogOut } from 'react-icons/fi'

type Props = {}

export default function LogOut({}: Props) {
  return (
    <div className='flex items-center gap-2 hover:bg-gray-700/30 py-3 px-2 rounded cursor-not-allowed'>
        <FiLogOut />
        <p>Log out</p>
    </div>
  )
}