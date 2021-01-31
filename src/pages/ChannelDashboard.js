import React from 'react';
import SelectedChannel from '../components/SelectedChannel';
import './Dashboard.css';

export default function ChannelDashboard() {
  return (
    <div className='dashboard'>
      <SelectedChannel />
    </div>
  );
}
