import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Joinroom = ({ isOpen, setIsOpen, next }) => {

    const [roomId, setRoomId] = useState('')
    const [username, setUsername] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (roomId === '' || username === '') {
            toast.error('Username and room id is required')
        } else {
            navigate(`/${roomId}`, {
                state: {
                    username
                }
            })
        }
    }

    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/30" />
                </Transition.Child>
                <div className="fixed inset-0 flex items-center justify-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="bg-gray-800 rounded-md w-96 py-4 px-5">
                            <Dialog.Title as="div" className="text-gray-200 text-xl mb-2.5 relative">
                                <h1>Join Room</h1>
                                <button onClick={() => setIsOpen(false)} className="absolute text-gray-400 top-0 -right-1 text-2xl transition-colors hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </Dialog.Title>
                            <form onSubmit={handleSubmit}>
                                <input value={roomId} onChange={(e) => setRoomId(e.target.value)} type="text" className="text-gray-300 mb-4 w-full rounded-md bg-transparent border-gray-600 focus:outline-none focus:ring focus:ring-indigo-500/25 focus:border-indigo-500" placeholder="Enter room id" />
                                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="text-gray-300 mb-4 w-full rounded-md bg-transparent border-gray-600 focus:outline-none focus:ring focus:ring-indigo-500/25 focus:border-indigo-500" placeholder="Enter username" />
                                <button type="submit" className="border border-indigo-500 bg-gradient-to-br from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 py-2 px-4 rounded-md text-white text-sm transition-colors duration-100 block w-full">Join room</button>
                            </form>
                            <div className="flex justify-end">
                                <button onClick={() => next('CREATEROOM')} href="#join" className="text-blue-400 mt-1.5 text-sm hover:underline hover:underline-offset-2">Create room</button>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}

export default Joinroom
