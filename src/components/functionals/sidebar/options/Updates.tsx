import { MdOutlineOpenInNew } from 'react-icons/md'

type Props = {}

export default function Updates({}: Props) {
  return (
    <div className='flex items-center gap-2'>
        <MdOutlineOpenInNew />
        <p>Updates & FAQ</p>
    </div>
  )
}