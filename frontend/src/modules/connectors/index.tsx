import React, {useState} from 'react';
export const ConnectorsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>CONNECTORS - Connectors - Gmail, Drive, Apple, Micros</h2><p>Gmail</p></div>
};
export default ConnectorsView;
