import Clear from "./options/Clear"
import LightMode from "./options/LightMode"
import LogOut from "./options/LogOut"
import Updates from "./options/Updates"
import Upgrade from "./options/Upgrade"



type Props = {}

export default function SidebarOptions({}: Props) {
  return (
    <div className="h-[25%] min-w-[270px] bg-[#1e2124] text-white py-2 px-4 flex flex-col gap-5 mt-2 text-base">
      <Clear />
      <Upgrade />
      <LightMode />
      <Updates />
      <LogOut />
    </div>
  )
}