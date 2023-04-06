import { BsSun } from 'react-icons/bs'

type Props = {}

export default function LightMode({}: Props) {
  return (
    <div className='flex items-center gap-2 hover:bg-gray-700/30 py-3 px-2 rounded cursor-pointer'>
        <BsSun />
        <p>Light mode</p>
    </div>
  )
}