import React, {useState} from 'react';
export const SyncView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>SYNC - Sync - cross-platform, offline, CRDT</h2><p>cross-platform</p></div>
};
export default SyncView;
