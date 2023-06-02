import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Message = ({ message, onDelete }) => {

  const handleDelete = () => {
    onDelete(message._id)
  }
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
      <div className='btn btn-danger mt-2' onClick={handleDelete}>
        Delete
        <FontAwesomeIcon className='mx-1' icon={faTrash} />
      </div>
    </div>
  );
};

export default Message;
