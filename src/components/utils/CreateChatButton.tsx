import { BsPlus } from 'react-icons/bs'

type Props = {}

export default function CreateChatButton({}: Props) {
  return (
    <button className='text-white w-[95%] py-3 px-3 mt-2 ml-1 text-sm text-left rounded-lg border border-gray-400/50 flex items-center hover:bg-gray-500/10 duration-300'>
        <BsPlus className='text-xl' />
        <p className='ml-2'>New Chat</p>
    </button>
  )
}