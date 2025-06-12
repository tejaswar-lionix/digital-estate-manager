import React, {useState} from 'react';
export const AuditView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>AUDIT - Audit - log, blame, history, export</h2><p>log</p></div>
};
export default AuditView;
