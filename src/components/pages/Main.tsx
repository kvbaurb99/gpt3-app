import MainScreen from "../functionals/screen/MainScreen"
import Sidebar from "../functionals/sidebar/Sidebar"
import { useState } from 'react'


export default function Main() {

  const [isDark, setIsDark] = useState<boolean>(true)
  const [mobileSidebar, setMobileSidebar] = useState<boolean>(false)

  return (
    <div className={`w-full h-full md:h-screen flex ${isDark ? 'bg-[#36393e]' : 'bg-white'}`}>
        <Sidebar isDark={isDark} setIsDark={setIsDark} mobileSidebar={mobileSidebar} setMobileSidebar={setMobileSidebar}  />
        <MainScreen isDark={isDark} mobileSidebar={mobileSidebar} setMobileSidebar={setMobileSidebar} />
    </div>
  )
}