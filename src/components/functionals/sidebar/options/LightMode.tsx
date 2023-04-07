import { BsSun, BsMoon } from 'react-icons/bs'

type Props = {
  setIsDark: (isDark: boolean) => void,
  isDark: boolean,
}

export default function LightMode({isDark, setIsDark}: Props) {
  return (
    <div onClick={() => setIsDark(!isDark)} className='flex text-sm md:text-[15px] items-center gap-3 hover:bg-gray-700/30 py-3 px-2 rounded cursor-pointer'>
        {isDark ? <BsSun /> : <BsMoon />}
        {isDark ? <p>Light mode</p> : <p>Dark mode</p>}
    </div>
  )
}