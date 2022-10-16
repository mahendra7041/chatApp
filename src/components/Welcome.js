import React, { useState } from 'react'
import Createroom from './Createroom'
import Joinroom from './Joinroom'

const Welcome = () => {

    const [isJoinRoomOpen, setJoinRoomOpen] = useState(false)
    const [isCreateRoomOpen, setCreateRoomOpen] = useState(false)

    const nextModal = (next) => {
        if (next === 'JOINROOM') {
            setCreateRoomOpen(false)
            setJoinRoomOpen(true)
        } else {
            setJoinRoomOpen(false)
            setCreateRoomOpen(true)
        }
    }

    return (
        <div className="bg-gray-900 font-sans">
            <nav className="px-4 lg:p-0 h-16 border-b border-gray-800 container mx-auto flex items-center justify-between">
                <div className="inline-flex items-center space-x-2.5">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width={32} height={32} viewBox="0 0 196.000000 197.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,197.000000) scale(0.100000,-0.100000)"
                            fill="currentColor" className="text-gray-200" stroke="none">
                            <path d="M865 1929 c-190 -25 -397 -123 -535 -255 -31 -29 -79 -65 -106 -80
                                -135 -71 -212 -226 -185 -375 7 -41 7 -78 -1 -121 -13 -84 -3 -255 21 -350 85
                                -331 343 -595 671 -688 97 -28 295 -37 410 -21 316 47 610 280 728 577 63 158
                                69 207 66 539 -1 39 -1 102 -1 142 -1 54 -7 85 -26 125 -32 71 -95 139 -154
                                169 -26 13 -75 49 -108 80 -156 144 -345 233 -550 258 -101 12 -130 12 -230 0z
                                m-15 -499 c30 -21 48 -25 125 -28 84 -3 94 -2 147 27 l58 31 225 0 c248 0 272
                                -4 317 -58 44 -53 52 -93 39 -191 -24 -168 -51 -231 -115 -270 -31 -20 -48
                                -21 -243 -21 l-209 0 -41 30 c-53 39 -66 70 -93 213 l-22 117 -54 0 c-30 0
                                -54 -4 -54 -8 0 -36 -42 -227 -56 -257 -9 -21 -35 -50 -57 -66 l-40 -29 -211
                                0 c-231 0 -230 0 -288 63 -28 30 -46 92 -68 231 -17 110 7 175 83 221 l42 25
                                240 -2 c238 -3 240 -3 275 -28z m-171 -802 c104 -95 237 -137 375 -118 91 13
                                165 49 238 117 62 57 96 67 130 36 35 -32 23 -66 -46 -131 -85 -79 -179 -125
                                -300 -147 -92 -17 -98 -17 -196 3 -116 24 -199 65 -284 143 -65 59 -76 87 -49
                                123 30 41 66 34 132 -26z"/>
                        </g>
                    </svg>
                    <h1 className="text-xl font-semibold text-gray-100">ChatApp</h1>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} className="text-gray-400" fill="currentColor" viewBox="0 0 512 512"><path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zm48 0c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256z" /></svg>
            </nav>
            <div className="container mx-auto px-4 lg:px-0 lg:max-w-5xl flex items-center justify-center flex-col w-screen" style={{ height: 'calc(100vh - 64px)' }}>
                <h1 className="text-white text-2xl lg:text-4xl font-semibold mb-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                <p className="text-gray-400 text-center max-w-4xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatum non, fugiat doloribus vitae fugit impedit nobis, inventore quos,
                    dignissimos molestias dolorem a eius.</p>
                <div className="flex items-center justify-center space-x-3 mt-4">
                    <button onClick={() => setJoinRoomOpen(true)} className="border border-indigo-500 bg-gradient-to-br from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 py-2 px-4 rounded-md text-white text-sm transition-colors duration-100 ">Join room</button>
                    <button onClick={() => setCreateRoomOpen(true)} className="border border-indigo-500 transition-colors py-2 px-4 rounded-md text-white text-sm hover:bg-gradient-to-br hover:from-blue-500 hover:to-violet-500">Create room</button>
                </div>
            </div>
            <Joinroom isOpen={isJoinRoomOpen} setIsOpen={setJoinRoomOpen} next={nextModal} />
            <Createroom isOpen={isCreateRoomOpen} setIsOpen={setCreateRoomOpen} next={nextModal} />
        </div >
    )
}

export default Welcome
