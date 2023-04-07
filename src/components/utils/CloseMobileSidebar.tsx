import { AiOutlineClose } from 'react-icons/ai'

type Props = {
    setMobileSidebar: (mobileSidebar: boolean) => void,
    mobileSidebar: boolean,
}

export default function CloseMobileSidebar({setMobileSidebar, mobileSidebar}: Props) {
  return (
    <>
    {mobileSidebar ? <div className='fixed top-0 right-0 z-10 md:hidden block bg-black/70 h-full p-2 w-[30%]'>
        <div onClick={() => setMobileSidebar(false)} className='absolute top-4 right-4 border-2 border-white p-2'>
            <AiOutlineClose className='text-xl text-white' />
        </div>
    </div> : null}
    </>
  )
}