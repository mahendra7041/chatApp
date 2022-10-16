import React, { memo, useEffect } from 'react'
import moment from 'moment'

const Message = ({ message, theme }) => {
    useEffect(() => {
        console.log('message up...')
    }, [theme])
    return (
        <>
            {(message.type === 'brodcast')
                ? (
                    <div className='flex justify-start'>
                        <span className='bg-gray-100 px-4 py-1.5 rounded-b-lg rounded-tr-lg shadow-lg min-w-min max-w-[640px]'>
                            <p className={`text-sm font-semibold leading-none ${theme.textColor}`}>{message.sendBy}</p>
                            <div className='flex justify-between space-x-2.5'>
                                <p className='text-sm inline-block'>{message.message}</p>
                                <span className='text-[11px] leading-none ml-auto mt-2'>{moment(message.timestemp).format('h:mm a')}</span>
                            </div>
                        </span>
                    </div>
                ) : (
                    <div className='flex justify-end'>
                        <span className='bg-black/30 px-4 py-1.5 rounded-b-lg rounded-tl-lg shadow-lg min-w-min max-w-[640px]'>
                            <p className='text-sm font-semibold text-gray-200 leading-none'>You</p>
                            <div className='flex justify-between space-x-2.5'>
                                <p className='text-sm inline-block text-gray-300'>{message.message}</p>
                                <span className='text-[11px] leading-none ml-auto mt-2 text-gray-300'>{moment(message.timestemp).format('h:mm a')}</span>
                            </div>
                        </span>
                    </div>
                )}
        </>
    )
}

export default memo(Message)