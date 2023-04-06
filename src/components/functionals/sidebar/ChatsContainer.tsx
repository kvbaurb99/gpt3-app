import axios from "axios"
import { useState, useEffect } from "react"
import ChatItem from "./ChatItem"
import socket from "../../config/socket"

type Props = {}

export default function ChatsContainer({}: Props) {

    const [chatData, setChatData] = useState<[]>([])
    const [currentChat, setCurrentChat] = useState<string>('')

    const getChatData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/chats');
            setChatData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        getChatData()

        socket.on('chatCreated', getChatData)

        return () => {
            socket.off('chatCreated')
        }

    }, [])


  return (
    <div className="w-full h-full">
        <div className="w-[95%] mx-auto mt-2">
            {chatData.map((chat: {title: string, _id: string}) => (
                <ChatItem
                    title={chat.title}
                    setCurrentChat={setCurrentChat}
                    currentChat={currentChat}
                    id={chat._id}
                />
            ))}
        </div>
    </div>
  )
}