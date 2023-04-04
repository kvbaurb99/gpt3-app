import { AiOutlineUser } from 'react-icons/ai'

type Props = {}

export default function Upgrade({}: Props) {
  return (
    <div className='flex items-center gap-2'>
        <AiOutlineUser />
        <p>Upgrade to Plus</p>
    </div>
  )
}