import CloseMobileSidebar from '../../utils/CloseMobileSidebar'
import ChatList from '../ChatList'
import SidebarOptions from './SidebarOptions'

type Props = {
  setIsDark: (isDark: boolean) => void,
  setMobileSidebar: (mobileSidebar: boolean) => void,
  isDark: boolean,
  mobileSidebar: boolean
}

export default function Sidebar({setIsDark, isDark, mobileSidebar, setMobileSidebar}: Props) {
  return (
    <div className={`w-[70%] md:w-[auto] md:min-w-[270px] bg-[#1e2124] h-screen overflow-y-hidden fixed z-50 md:static ${mobileSidebar ? 'right-[30%]' : 'right-[100%]'}`}>
        <ChatList />
        <SidebarOptions setIsDark={setIsDark} isDark={isDark} />
        <CloseMobileSidebar setMobileSidebar={setMobileSidebar} mobileSidebar={mobileSidebar} />
    </div>
  )
}