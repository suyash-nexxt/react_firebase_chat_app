import React, { useRef } from 'react';
import { useChannel } from '../contexts/ChannelContext';
import './NewChannelForm.css';

export default function NewChannelForm({ modal }) {
  const { createNewChannel } = useChannel();
  const nameRef = useRef();
  const descriptionRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewChannel(nameRef.current.value, descriptionRef.current.value);
    nameRef.current.value = '';
    descriptionRef.current.value = '';
    modal.current.close();
  };

  return (
    <div className='channel_form'>
      <p>New channel</p>
      <form onSubmit={handleSubmit}>
        <input
          className='channel_form_name'
          type='text'
          ref={nameRef}
          placeholder='Channel name'
        />
        <textarea
          className='channel_form_description'
          type='text'
          ref={descriptionRef}
          placeholder='Channel Description'
        />
        <input className='channel_form_submit' type='submit' value='Save' />
      </form>
    </div>
  );
}
