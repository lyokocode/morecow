import React from 'react'

const App = () => {
  return (
    <>
      <div className='login-container'>
        <div className='logo'>

          <img src='images/aelita.png' />
        </div>
        <form className='login-form'>
          <label>
            <input placeholder='Phone Number, username or email' />
          </label>
          <label>
            <input placeholder='Password' />
          </label>
          <button disabled={false} type='submit'>Log In</button>
          <div className='or'>
            <div></div>
            <span>OR</span>
            <div></div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App