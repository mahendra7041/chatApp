import React, { memo } from 'react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Nav = ({ handleTheme }) => {
    console.log('nav')
    return (
        <div className='h-16 border-b border-gray-800 flex items-center divide-x divide-gray-700'>
            <div className='w-3/12 px-4'>
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
            </div>
            <div className='inline-flex items-center transition-colors space-x-4 w-9/12 py-1 px-4'>
                <div className='flex items-center rounded-t-md space-x-3 w-full'>
                    <div className='h-11 w-11 rounded-full bg-gray-200 inline-flex justify-center items-center text-gray-800'>MC</div>
                    <div className='flex flex-1 justify-start items-center'>
                        <div className='inline-flex flex-col justify-center w-full'>
                            <h1 className='text-gray-200 text-base leading-5'>Mahendra Chavda</h1>
                            <span className='text-xs text-gray-400'>Online</span>
                        </div>
                    </div>
                </div>
                <button className='text-gray-400 hover:text-white' onClick={() => handleTheme()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" viewBox="0 0 512 512"><path d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm0-96c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32zM288 96c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z" /></svg>
                </button>
                <button className='text-gray-400 hover:text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="currentColor" viewBox="0 0 576 512"><path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" /></svg>
                </button>
                <button className='text-gray-400 hover:text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" viewBox="0 0 128 512"><path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z" /></svg>
                </button>
            </div>
        </div>
    )
}

export default memo(Nav)