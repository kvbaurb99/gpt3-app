import { SiOpenai } from 'react-icons/si'
import { AiOutlineUser } from 'react-icons/ai'

type Props = {
    question: string,
    answer: string,
    isDark: boolean,
}

export default function Question({question, answer, isDark}: Props) {
  return (
    <div className='w-full flex flex-col justify-center bg-[#36393e]'>
        <div className={`w-full flex justify-center ${isDark ? 'bg-[#36393e]' : 'bg-white'} py-8 border-b border-black/20`}>
            <div className='w-[70%] md:w-[40%] relative'>
            <div className='absolute top-[-0.2rem] left-[-2rem] md:left-[-4rem] text-xl bg-blue-500 p-1 rounded'>
                <AiOutlineUser />
            </div>
                <p className={`${isDark ? 'text-white' : 'text-black'} mx-auto ml-6 md:ml-0`}>{question}</p>
            </div>
        </div>
        <div className={`w-full flex justify-center ${isDark ? 'bg-[#424549]' : 'bg-gray-200'} py-8 border-b border-black/20`}>
            <div className='w-[70%] md:w-[40%] relative'>
                <div className='absolute top-0 left-[-2rem] md:left-[-4rem] text-xl bg-green-600 p-1 rounded'>
                    <SiOpenai />
                </div>
                <p className={`${isDark ? 'text-white' : 'text-black'} mx-auto ml-6 md:ml-0`}>{answer}</p>
            </div>
        </div>
  </div>
  )
}