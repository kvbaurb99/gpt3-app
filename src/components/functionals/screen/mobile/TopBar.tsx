import { AiOutlineMenu } from 'react-icons/ai'

type Props = {
    setMobileSidebar: (mobileSidebar: boolean) => void,
    title: string,
}

export default function TopBar({setMobileSidebar, title}: Props) {
  return (
    <div className='md:hidden flex bg-[#36393e] w-full h-[45px] border-b border-gray-400/50 items-center justify-between text-white'>
        <div className='ml-3'>
            <AiOutlineMenu onClick={() => setMobileSidebar(true)} className='text-xl' />
        </div>
        <div>
            <p>{title ? title : ''}</p>
        </div>
        <div className='mr-3'>
        </div>
    </div>
  )
}