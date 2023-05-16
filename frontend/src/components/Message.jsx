import React from 'react';

const Message = ({ message }) => {
  return (
    <div className='message rounded'>
      <h3>{message.name}</h3>
      <div className='row'>
        <div className='col'>
          {message.email}
        </div>
        <div className='col'>
          {message.tel}
        </div>
        <div className='message-field rounded'>
          {message.msg}
        </div>
      </div>
    </div>
  );
};

export default Message;
