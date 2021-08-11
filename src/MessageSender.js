import { Avatar } from '@material-ui/core'
import React, { useState } from 'react';
import "./MessageSender.css"

function MessageSender() {
    
     const [input, setInput] = useState("")
   
     const handleSubmit = (e) => {
        e.preventDefault();
        setInput("")
        
    }

    return (
      <div className='messageSender'>
        <div className='messageSender__top'>
          <Avatar src='/images/Group 29.png' />
          <h4>Simmon Bradley</h4>
          
          <form>
            <input
              value={input}
              onChange={(e)=>setInput(e.target.value)}
              className='messageSender__input'
              placeholder={`pen Type Here`}
            />
<button onClick={handleSubmit} type='submit'>Hidden submit</button>
          </form>
        </div>
      </div>
    );
}

export default MessageSender
