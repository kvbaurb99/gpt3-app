import ChatList from '../ChatList'
import CreateChatButton from '../../utils/CreateChatButton'
import SidebarOptions from './SidebarOptions'

type Props = {}

export default function Sidebar({}: Props) {
  return (
    <div className='min-w-[270px] bg-[#1e2124] h-screen overflow-y-hidden'>
        <ChatList />
        <SidebarOptions />
    </div>
  )
}