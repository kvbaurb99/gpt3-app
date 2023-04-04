import { BsSun } from 'react-icons/bs'

type Props = {}

export default function LightMode({}: Props) {
  return (
    <div className='flex items-center gap-2'>
        <BsSun />
        <p>Light mode</p>
    </div>
  )
}