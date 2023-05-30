import React from 'react';

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
    </div>
  );
};

export default Contact;
