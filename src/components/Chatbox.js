
import React, { memo, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { io } from "socket.io-client"
import Message from './Message';
import toast from 'react-hot-toast'
const socket = io.connect('http://localhost:4000');

const ChatBox = ({ theme }) => {
    // const theme = { themeColor: 'to-indigo-500 from-purple-500', textColor: 'text-purple-500' }
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [lastPong, setLastPong] = useState(null);
    const scrollBottom = useRef()
    const inputValue = useRef()
    const [messages, setMessage] = useState([])
    const location = useLocation()
    const [username] = useState(location.state?.username)
    const { roomId } = useParams()
    const navigate = useNavigate()


    const handleScroll = () => {
        scrollBottom.current.scrollTo(0, scrollBottom.current.scrollHeight)
    }
    const handleSend = (e) => {
        e.preventDefault()
        if (inputValue.current.value !== '') {
            handleScroll()
            setMessage([...messages, { message: inputValue.current.value, type: 'self', timestemp: new Date().getTime(), sendBy: username }])
            socket.emit('send', { message: inputValue.current.value, type: 'brodcast', timestemp: new Date().getTime(), sendBy: username })
            inputValue.current.value = ''
            inputValue.current.focus()
        }

    }

    socket.on('sent', (msg) => {
        handleScroll()
        setMessage([...messages, { ...msg }])
    });

    useEffect(() => {
        if (!location.state || !location.state.username) {
            navigate('/')
        }
        socket.on('connect', () => {
            setIsConnected(true);
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
        });

        socket.on('pong', () => {
            setLastPong(new Date().toISOString());
        });

        const init = async () => {
            socket.emit('join', {
                roomId,
                name: username
            })
            socket.on('joined', ({ clients, name, socketId }) => {
                if (name !== username) {
                    toast.success(`${name} joined the room`)
                }
            })
        }
        init()

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('pong');
            socket.off('joined');
        };
    }, [])


    return (
        <>
            <div className='flex chat-conatiner'>
                <div className='w-3/12'>
                    <div className='py-2 px-4 divide-y divide-gray-800'>
                        <div className='inline-flex items-center transition-colors space-x-4 w-full py-2'>
                            <div className='flex items-center rounded-t-md space-x-3 w-full'>
                                <div className='h-11 w-11 rounded-full bg-gray-300 inline-flex justify-center items-center text-gray-800'>MC</div>
                                <div className='flex flex-1 justify-start items-center'>
                                    <div className='inline-flex flex-col justify-center w-full'>
                                        <h1 className='text-gray-300 text-base leading-5'>Mahendra Chavda</h1>
                                        <span className='text-xs text-gray-400'>Online</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='inline-flex items-center transition-colors space-x-4 w-full py-2'>
                            <div className='flex items-center rounded-t-md space-x-3 w-full'>
                                <div className='h-11 w-11 rounded-full bg-gray-300 inline-flex justify-center items-center text-gray-800'>AS</div>
                                <div className='flex flex-1 justify-start items-center'>
                                    <div className='inline-flex flex-col justify-center w-full'>
                                        <h1 className='text-gray-300 text-base leading-5'>Anil sidhu</h1>
                                        <span className='text-xs text-gray-400'>Last seen yasterday</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`w-9/12 bg-gradient-to-r relative ${theme.themeColor}`} >
                    <div ref={scrollBottom} className='p-3 chat-conatiner overflow-y-scroll message-area pb-[120px]'>
                        <div className='w-full px-2 py-1 space-y-2'>
                            {/* date  */}
                            <div className='flex justify-center items-center sticky top-2'>
                                <span className='text-sm leading-none bg-black/30 text-gray-200 px-3 rounded-md py-1'>Today</span>
                            </div>
                            {/* message  */}
                            {messages.map((message, key) => (<Message socketId={''} message={message} theme={theme} key={key} />))}
                        </div>
                    </div>
                    <form onSubmit={(e) => handleSend(e)} className='absolute bottom-0 inset-x-0 rounded-b-md flex justify-start items-center pb-3 px-3 space-x-2'>
                        <div className='flex items-center py-2 px-4 flex-1 rounded-full bg-gray-900 h-11 space-x-3'>
                            <button className="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                    className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                                </svg>
                            </button>
                            <button className="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className='' fill="currentColor" width={18} height={18} viewBox="0 0 512 512">
                                    <path
                                        d="M396.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z" />
                                </svg>
                            </button>
                            {/* write message  */}
                            <input ref={inputValue} type="text" className='text-base focus:outline-none bg-transparent flex-1 px-1 border-0 focus:ring-0' placeholder='Type here...' />
                        </div>
                        <div className=' bg-gray-900 rounded-full inline-flex items-center justify-center'>
                            <button type='submit' className="flex items-center justify-center h-11 w-11 rounded-full pr-[3px]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width={18} height={18} viewBox="0 0 512 512">
                                    <path
                                        d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L277.3 424.9l-40.1 74.5c-5.2 9.7-16.3 14.6-27 11.9S192 499 192 488V392c0-5.3 1.8-10.5 5.1-14.7L362.4 164.7c2.5-7.1-6.5-14.3-13-8.4L170.4 318.2l-32 28.9 0 0c-9.2 8.3-22.3 10.6-33.8 5.8l-85-35.4C8.4 312.8 .8 302.2 .1 290s5.5-23.7 16.1-29.8l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default memo(ChatBox)