import React from 'react'

const Input = ({ label, ...props }) => {
    return (
        <label >
            <input value={userName} onChange={e => setUserName(e.target.value)} placeholder='Phone Number, username or email' />
        </label>
    )
}

export default Input