import React, {useState} from 'react';
export const IdentityView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>IDENTITY - Identity - accounts, profiles, devices</h2><p>accounts</p></div>
};
export default IdentityView;
