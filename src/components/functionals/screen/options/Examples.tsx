import { BsSun } from 'react-icons/bs'
import data from '../data/data.json'

type Props = {
  isDark: boolean
}

export default function Examples({isDark}: Props) {

    

  return (
    <div className='flex flex-col items-center'>
        <div className='flex items-center md:flex-col gap-4 md:gap-0'>
          <BsSun className={`${isDark ? 'text-white' : 'text-black'} text-2xl`} />
          <p className={`md:mt-4 ${isDark ? 'text-white' : 'text-black'}`}>Examples</p>
        </div>
        {data.filter(data => data.type === 'example').map(data => (
            <div key={data.text} className={`${isDark ? 'bg-[#424549] text-white hover:bg-black/50' : 'bg-white text-black hover:bg-gray-400/50'} h-auto flex items-center mt-4 text-sm p-3 rounded-lg w-[90%] md:w-[250px] text-center justify-center md:justify-normal cursor-pointer`}>
                <p>"{data.text}"</p>
            </div>
        ))}
    </div>
  )
}