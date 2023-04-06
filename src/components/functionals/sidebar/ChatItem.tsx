import { BsChatLeft, BsTrash } from 'react-icons/bs'
import { FiEdit3 } from 'react-icons/fi'
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

    const navigateToChat = () => {
        setCurrentChat(title);
        navigate(`/chat/${id}`)
    }

    const deleteChat = async () => {
        try {
            navigate('/')
            await axios.post('http://localhost:3001/deleteChat', {
                chatId: id,
            })
        } catch (err) {
            console.log(err)
        }

    }

    const editChat = () => {

    }

  return (
    <div onClick={navigateToChat} className={`flex ${currentChat === title ? 'bg-gray-600/50' : 'hover:bg-gray-600/30'} items-center text-white/80 justify-between py-3 mt-2 px-3 rounded-lg cursor-pointer`}>
        <div className='flex items-center gap-3'>
            <BsChatLeft className='text-sm' />
            <p className='text-sm text-white'>{title}</p>
        </div>
        { currentChat === title ? <div className='text-sm flex items-center gap-2'>
            <BsTrash onClick={deleteChat} className='hover:text-white' />
            <FiEdit3 className='hover:text-white' />
        </div> : null}
    </div>
  )
}