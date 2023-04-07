import { useState } from "react"
import axios from "axios"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

type Props = {
    setIsForm: (isForm: boolean) => void;
}

export default function CreateChat({setIsForm}: Props) {

    const [chatTitle, setChatTitle] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const prevPropagation = (e: any) => {
        e.stopPropagation()
    }

    const createChat = async () => {

        setLoading(true)

        try {
            const response = await axios.post('http://localhost:3001/createChat', {
                title: chatTitle,
            })

            if (response.data.error) {
                setError(response.data.error)
                setLoading(false)
                setTimeout(() => {
                    setError('')
                }, 2000);
                return;
            }

            setLoading(false);
            setIsForm(false)

        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    }

  return (
    <div onClick={() => setIsForm(false)} className='fixed w-full z-20 top-0 left-0 h-screen bg-black/80 flex justify-center items-center'>
        <div onClick={prevPropagation} className="bg-[#36393e] w-[90%] md:w-[400px] h-[200px] rounded-lg p-2 flex flex-col items-center">
            <p className="text-xl font-bold mt-2">New Chat</p>
            <div className="flex flex-col w-[80%] mt-4">
                <label htmlFor="name" className="text-[10px] font-bold tracking-wider">CHAT NAME</label>
                <div className="relative w-full">
                <input onChange={(e) => setChatTitle(e.target.value)} type="text" name="name" id="name" required placeholder="e.g. Javascript section" className="w-full mx-auto mt-1 rounded outline-none py-2 px-2 text-sm bg-[#1e2124]" />
                {error ? <span className="text-xs text-red-600 absolute top-1/3 right-4 font-bold">{error}</span> : null}
                </div>          
            </div>
            <button onClick={createChat} className="mt-6 bg-green-600 flex justify-center hover:bg-green-700 py-2 active:scale-95 w-[60%] rounded-lg font-bold text-sm">
                {loading ? <AiOutlineLoading3Quarters className="animate-spin" /> : <p className="tracking-wide">Create</p>}
            </button>
        </div>
    </div>
  )
}