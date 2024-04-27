import React from 'react'

export default function FlexContainer({ children }) {
    return (
        <div className='flex gap-x-3 mt-6'>{children}</div>
    )
}
