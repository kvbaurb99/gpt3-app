import { CiWarning } from 'react-icons/ci'
import data from '../data/data.json'



export default function Limitations() {
  return (
    <div className='flex flex-col items-center'>
        <CiWarning className='text-2xl' />
        <p className='mt-2'>Limitations</p>
        {data.filter(data => data.type === 'limitations').map(data => (
            <div key={data.text} className='bg-[#424549] h-auto flex items-center mt-3 text-sm p-3 rounded-lg w-[250px] text-center cursor-default'>
                <p>"{data.text}"</p>
            </div>
        ))}
    </div>
  )
}