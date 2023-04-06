import { SlEnergy } from 'react-icons/sl'
import data from '../data/data.json'


export default function Capabilities() {
  return (
    <div className='flex flex-col items-center'>
        <SlEnergy className='text-2xl' />
        <p className='mt-4'>Capabilities</p>
        {data.filter(data => data.type === 'capabilities').map(data => (
            <div key={data.text} className='bg-[#424549] h-auto flex items-center mt-4 text-sm p-3 rounded-lg w-[250px] text-center cursor-default'>
                <p>"{data.text}"</p>
            </div>
        ))}
    </div>
  )
}