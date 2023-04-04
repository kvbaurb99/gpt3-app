import { FiLogOut } from 'react-icons/fi'

type Props = {}

export default function LogOut({}: Props) {
  return (
    <div className='flex items-center gap-2'>
        <FiLogOut />
        <p>Log out</p>
    </div>
  )
}