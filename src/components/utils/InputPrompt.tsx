import axios from 'axios'
import { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

type Props = {
  isDark: boolean
}

export default function InputPrompt({isDark}: Props) {

  const [prompt, setPrompt] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const { id } = useParams()

  const sendPrompt = async () => {

    setLoading(true)

    if (prompt === '') {
      setLoading(false)
      return;
    }

    try {

     await axios.post('http://localhost:3001/createPrompt', {
        prompt: prompt,
        chatId: id,
      })

      setPrompt('')
      setLoading(false)


    } catch (err) {
      console.log(err)
      setLoading(false)
    }

  }

  return (
    <> 
    <div className='relative md:block mb-5 flex items-center flex-col md:border-none border-t border-gray-400/50 py-1 md:py-0'>
    <input onChange={(e) => setPrompt(e.target.value)} type="text" value={prompt} placeholder='Send a message...' className={`w-[95%] md:w-[800px] py-2 md:py-3 ${isDark ? 'bg-[#424549] text-white' : 'bg-white text-black'} px-4 border border-black/20 outline-none rounded-lg`} />
    <p className='text-xs text-center w-[90%] md:w-auto text-gray-400 mt-3'><span className='underline cursor-pointer'>MessageGPT3 Mar 23 Version.</span> Free Research Preview. MessageGPT3 may produce inaccurate information about people, places, or facts</p>
    {loading ? <AiOutlineLoading3Quarters className='text-sm absolute top-5 md:top-1/4 right-6 md:right-4 animate-spin text-gray-300' /> : (id !== undefined && prompt !== "" ? <BsSend onClick={sendPrompt} className={`text-sm absolute top-5 md:top-1/4 right-6 md:right-4 cursor-pointer text-gray-300`}/> : <BsSend className='absolute top-5 md:top-1/4 right-6 md:right-4 text-sm text-gray-300/40 cursor-not-allowed' />)}
    </div>
    </>
  )
}