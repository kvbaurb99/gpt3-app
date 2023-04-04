import MainScreen from "../functionals/screen/MainScreen"
import Sidebar from "../functionals/sidebar/Sidebar"

type Props = {}

export default function Main({}: Props) {
  return (
    <div className='w-full h-screen flex bg-[#36393e]'>
        <Sidebar />
        <MainScreen />
    </div>
  )
}