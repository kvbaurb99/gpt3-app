import CreateChatButton from "../utils/CreateChatButton"
import CreateChat from "./forms/CreateChat"
import { useState } from 'react'
import ChatsContainer from "./sidebar/ChatsContainer"
 

export default function ChatList() {

  const [isForm, setIsForm] = useState<boolean>(false)

  return (
    <div className="w-full text-white h-[67%] md:h-[70%] border-b border-gray-400/50">
      <CreateChatButton setIsForm={setIsForm} />
      <ChatsContainer />
      {isForm ? <CreateChat setIsForm={setIsForm} /> : null}
    </div>
  )
}