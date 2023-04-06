import { MdOutlineOpenInNew } from 'react-icons/md'

type Props = {}

export default function Updates({}: Props) {
  return (
    <div className='flex items-center gap-2 hover:bg-gray-700/30 py-3 px-2 rounded cursor-not-allowed'>
        <MdOutlineOpenInNew />
        <p>Updates & FAQ</p>
    </div>
  )
}