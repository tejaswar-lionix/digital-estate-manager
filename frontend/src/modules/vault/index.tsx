import React, {useState} from 'react';
export const VaultView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>VAULT - Vault - E2E AES-256, master password, ze</h2><p>AES-256</p></div>
};
export default VaultView;
