import { BsSun } from 'react-icons/bs'
import data from '../data/data.json'



export default function Examples() {

    

  return (
    <div className='flex flex-col items-center'>
        <BsSun className='text-2xl' />
        <p className='mt-2'>Examples</p>
        {data.filter(data => data.type === 'example').map(data => (
            <div key={data.text} className='bg-[#424549] h-auto flex items-center mt-3 text-sm p-3 rounded-lg w-[250px] text-center cursor-pointer hover:bg-black/50'>
                <p>"{data.text}"</p>
            </div>
        ))}
    </div>
  )
}