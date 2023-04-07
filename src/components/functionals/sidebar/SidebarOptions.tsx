import Clear from "./options/Clear"
import LightMode from "./options/LightMode"
import LogOut from "./options/LogOut"
import Updates from "./options/Updates"
import Upgrade from "./options/Upgrade"



type Props = {
  setIsDark: (isDark: boolean) => void,
  isDark: boolean,
}

export default function SidebarOptions({setIsDark, isDark}: Props) {
  return (
    <div className="h-[30%] justify-center min-w-[270px] bg-[#1e2124] text-white py-2 px-4 flex flex-col gap-1 text-base">
      <Clear />
      <Upgrade />
      <LightMode setIsDark={setIsDark} isDark={isDark} />
      <Updates />
      <LogOut />
    </div>
  )
}