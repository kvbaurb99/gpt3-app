import { useEffect, useState } from 'react'
import InputPrompt from '../../utils/InputPrompt'
import Capabilities from './options/Capabilities'
import Examples from './options/Examples'
import Limitations from './options/Limitations'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Question from './Question'
import socket from '../../config/socket'
import TopBar from './mobile/TopBar'


type Props = {
  isDark: boolean,
  setMobileSidebar: (mobileSidebar: boolean) => void,
  mobileSidebar: boolean
}



export default function MainScreen({isDark, setMobileSidebar, mobileSidebar}: Props) {

  const [questionData, setQuestionData] = useState<[]>([])
  const [title, setTitle] = useState<string>('')

  const { id } = useParams();






  useEffect(() => {

    const getQuestionsData = async () => {

      if (id === undefined) {
        return;
      }
  
      try {
        const response = await axios.get(`http://localhost:3001/api/chat/${id}`)
        setTitle(response.data.title.title);
        setQuestionData(response.data.questions);
      } catch (err) {
        console.log(err)
      }
    }

    getQuestionsData();

    socket.on('promptCreated', getQuestionsData);

    return () => {
      socket.off('promptCreated')
    }

  }, [id])





  return (
    <div className='h-full md:h-screen w-full flex flex-col justify-end items-center'>
      <TopBar setMobileSidebar={setMobileSidebar} title={title} />
      {questionData.length > 0 ? (
        <div className={`w-full h-screen ${isDark ? 'bg-[#36393e]' : 'bg-white'} text-white flex flex-col justify-start items-center overflow-y-scroll scrollbar-hide`}>
          <div className='flex flex-col gap-2 w-full mb-[5%]'>
            {questionData.map((question: { question: string; answer: string }, index: number) => (
              <Question
                key={index}
                question={question.question}
                answer={question.answer}
                isDark={isDark}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className={`w-full h-full md:h-screen ${isDark ? 'bg-[#36393e]' : 'bg-white'} text-white flex flex-col overflow-x-hidden md:overflow-x-auto justify-center md:items-center md:overflow-y-auto overflow-y-scroll`}>
          <h1 className={`text-3xl text-center md:text-left md:text-4xl ${isDark ? 'text-white' : 'text-black'} font-bold md:mt-0 mt-[2rem]`}>MessageGPT3</h1>
          { id === undefined ? <p className={`${isDark ? 'text-white' : 'text-black'} font-bold hidden md:block text-center md:text-left text-base md:text-lg mt-4`}>Create a new chat or join to existing one to get started!</p> : null}
          <div className='flex md:flex-row flex-col gap-[3rem] md:gap-4 mb-[4rem] md:mb-0 mt-[3rem] md:mt-[3%]'>
            <Examples isDark={isDark} />
            <Capabilities isDark={isDark} />
            <Limitations isDark={isDark} />
          </div>
        </div>
      )}
      <InputPrompt isDark={isDark} />
    </div>
  );
  
}