import { SlEnergy } from 'react-icons/sl'
import data from '../data/data.json'

type Props = {}

export default function Capabilities({}: Props) {
  return (
    <div className='flex flex-col items-center'>
        <SlEnergy className='text-2xl' />
        <p className='mt-2'>Capabilities</p>
        {data.filter(data => data.type === 'capabilities').map(data => (
            <div className='bg-[#424549] h-auto flex items-center mt-3 text-sm p-3 rounded-lg w-[250px] text-center cursor-default'>
                <p>"{data.text}"</p>
            </div>
        ))}
    </div>
  )
}