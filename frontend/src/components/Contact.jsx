import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Contact = ({ contact }) => {

  return (
    <div className='message rounded'>
      <h3>{contact.name}</h3>
      <div className='row'>
        <div className='col'>
          {contact.email}
        </div>
        <div className='col'>
          {contact.tel}
        </div>
      </div>
      <div className='btn btn-danger mt-2'>
        Delete
        <FontAwesomeIcon className='mx-1' icon={faTrash} />
      </div>
    </div>
  );
};

export default Contact;
