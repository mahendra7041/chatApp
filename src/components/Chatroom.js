import React, { memo, useState, useCallback, useEffect } from 'react'
import ChatBox from './Chatbox'
import Nav from './Nav'

const Chatroom = () => {
    const [rendom, setRendom] = useState(0)
    const [theme] = useState([
        { themeColor: 'to-indigo-500 from-purple-500', textColor: 'text-purple-500' },
        { themeColor: 'from-amber-300 to-orange-500', textColor: 'text-orange-500' },
        { themeColor: 'from-teal-400 to-cyan-400', textColor: 'text-cyan-400' },
        { themeColor: 'from-green-400 to-cyan-500', textColor: 'text-cyan-500' },
        { themeColor: 'from-fuchsia-500 to-purple-600', textColor: 'text-purple-600' },
        { themeColor: 'from-sky-400 to-indigo-500', textColor: 'text-indigo-500' },
        { themeColor: 'from-orange-400 to-pink-600', textColor: 'text-pink-600' },
        { themeColor: 'from-cyan-400 to-sky-500', textColor: 'text-sky-500' },
        { themeColor: 'from-sky-400 to-blue-600', textColor: 'text-blue-600' },
        { themeColor: 'from-pink-500 to-rose-500', textColor: 'text-rose-400' }
    ])

    const handleTheme = useCallback(() => {
        setRendom((old) => {
            let random = Math.floor((Math.random() * theme.length))
            while (random === old) {
                random = Math.floor((Math.random() * theme.length))
            }
            return random
        })
    }, [rendom])

    console.log('room component render');

    return (
        <div className='w-full bg-gray-900 text-gray-400 h-screen font-sans'>
            <Nav handleTheme={handleTheme} />
            <ChatBox theme={theme[rendom]} />
        </div>
    )
}

export default Chatroom