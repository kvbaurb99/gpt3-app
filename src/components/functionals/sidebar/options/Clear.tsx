import { BsTrash } from 'react-icons/bs'

type Props = {}

export default function Clear({}: Props) {
  return (
    <div className='flex items-center gap-2'>
        <BsTrash />
        <p>Clear conversations</p>
    </div>
  )
}