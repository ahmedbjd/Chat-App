import React from 'react'

const Message = () => {
  return (
    <div className='m-3'>
        <div className="chat chat-end">
            <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img
                alt="Tailwind CSS chat bubble component"
                src={'https://avatar.iran.liara.run/public/boy'} />
            </div>
            </div>
            <div className="chat-bubble bg-blue-500 text-white">I hate you!</div>
            <div className="chat-footer opacity-50">12:46</div>
        </div>
    </div>
  )
}

export default Message
