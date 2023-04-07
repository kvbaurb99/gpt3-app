import { SlEnergy } from 'react-icons/sl'
import data from '../data/data.json'

type Props = {
  isDark: boolean
}

export default function Capabilities({isDark}: Props) {
  return (
    <div className='flex flex-col items-center'>
        <div className='flex md:flex-col flex-row items-center gap-4 md:gap-0'>
          <SlEnergy className={`${isDark ? 'text-white' : 'text-black'} text-2xl`} />
          <p className={`md:mt-4 ${isDark ? 'text-white' : 'text-black'}`}>Capabilities</p>
        </div> 
        {data.filter(data => data.type === 'capabilities').map(data => (
            <div key={data.text} className={`${isDark ? 'bg-[#424549] text-white' : 'bg-white text-black'} h-auto flex items-center mt-4 text-sm p-3 rounded-lg w-[90%] md:w-[250px] text-center cursor-default md:justify-normal justify-center`}>
                <p>"{data.text}"</p>
            </div>
        ))}
    </div>
  )
}