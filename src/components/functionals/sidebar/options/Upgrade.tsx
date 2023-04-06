import { AiOutlineUser } from 'react-icons/ai'

type Props = {}

export default function Upgrade({}: Props) {
  return (
    <div className='flex items-center gap-2 hover:bg-gray-700/30 py-3 px-2 rounded cursor-not-allowed'>
        <AiOutlineUser />
        <p>Upgrade to Plus</p>
    </div>
  )
}