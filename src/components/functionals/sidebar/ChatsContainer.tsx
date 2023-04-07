import axios from "axios"
import { useState, useEffect } from "react"
import ChatItem from "./ChatItem"
import socket from "../../config/socket"
import { useParams } from 'react-router-dom'


export default function ChatsContainer() {

    const [chatData, setChatData] = useState<[]>([])
    const { id } = useParams()
    const [currentChat, setCurrentChat] = useState<string>(() => {
        return localStorage.getItem('currentChat') || '';
      });

    const getChatData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/chats');
            setChatData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        localStorage.setItem('currentChat', currentChat);
      }, [currentChat]);

      useEffect(() => {
        if (id === undefined) {
            setCurrentChat('');
        } else {
            return;
        }
      }, [id])

    useEffect(() => {

        getChatData()

        socket.on('chatCreated', getChatData)

        return () => {
            socket.off('chatCreated')
        }

    }, [])


  return (
    <div className="w-full h-full overflow-y-scroll scrollbar-hide">
        <div className="w-[95%] mx-auto mt-2">
            {chatData.map((chat: {title: string, _id: string}, index: number) => (
                <ChatItem
                    key={index}
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