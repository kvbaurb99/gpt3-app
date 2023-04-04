import InputPrompt from '../../utils/InputPrompt'
import Capabilities from './options/Capabilities'
import Examples from './options/Examples'
import Limitations from './options/Limitations'

type Props = {}

export default function MainScreen({}: Props) {
  return (
    <div className='w-full h-screen bg-[#36393e] text-white flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold'>ChatGPT</h1>
        <div className='flex gap-4 mt-[4%]'>
            <Examples />
            <Capabilities />
            <Limitations />
        </div>
            <InputPrompt />
    </div>
  )
}