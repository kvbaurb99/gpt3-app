import { BsChatLeft, BsTrash } from 'react-icons/bs'
import { FiEdit3 } from 'react-icons/fi'
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

type Props = {
    title: string,
    setCurrentChat: (currentChat: string) => void,
    currentChat: string,
    id: string,
}

export default function ChatItem({title, setCurrentChat, currentChat, id}: Props) {

    const navigate = useNavigate();
    const [changeMode, setChangeMode] = useState<boolean>(false)
    const [changedTitle, setChangedTitle] = useState<string>(title)

    const navigateToChat = () => {
        setCurrentChat(title);
        navigate(`/chat/${id}`)
    }

    const deleteChat = async () => {
        navigate('/')
        try {
                const response = await axios.post('http://localhost:3001/deleteChat', {
                chatId: id,
            })

            if (response.data.message) {
                navigate('/')
                window.location.reload()
            }

        } catch (err) {
            console.log(err)
        }
    }

    const editChat = async () => {
        try {
            await axios.post(`http://localhost:3001/updateTitle/${id}`, {
                newTitle: changedTitle
            })
            setChangeMode(false)
        } catch (err) {
            console.log(err)
        }
    }

  return (
    <div onClick={navigateToChat} className={`flex ${currentChat === title ? 'bg-gray-600/50' : 'hover:bg-gray-600/30'} items-center text-white/80 justify-between py-3 mt-2 px-3 rounded-lg cursor-pointer`}>
        <div className='flex items-center gap-3'>
            <BsChatLeft className='text-sm' />
            { !changeMode ? <p className='text-sm text-white'>{title}</p> : <input type='text' className='w-[80%] bg-gray-600/50 border border-blue-500 rounded outline-none px-1' value={changedTitle} required onChange={(e) => setChangedTitle(e.target.value)} />}
        </div>
        { currentChat === title ? <div className='text-sm flex items-center gap-2'>
            { !changeMode ? <FiEdit3 onClick={() => setChangeMode(!changeMode)} className='hover:text-white' /> : <AiOutlineCheck onClick={editChat} className='hover:text-white' />}
            { !changeMode ? <BsTrash onClick={deleteChat} className='hover:text-white' /> : <AiOutlineClose className='hover:text-white' onClick={() => setChangeMode(false)}/>} 
        </div> : null}
    </div>
  )
}