import CreateChatButton from "../utils/CreateChatButton"

type Props = {}

export default function ChatList({}: Props) {
  return (
    <div className="w-full text-white h-[75%] border-b border-gray-400/50">
      <CreateChatButton />
    </div>
  )
}