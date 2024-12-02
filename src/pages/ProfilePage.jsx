import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const ProfilePage = () => {
  const { user, updateProfilePicture } = useAuth();
  const [username, setUsername] = useState(user.username);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        updateProfilePicture(e.target.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-page">
      <h1>Perfil</h1>
      <img
        src={user.profilePicture || '/default-profile.png'}
        alt="Foto de perfil"
        style={{ width: '150px', borderRadius: '50%' }}
      />
      <h2>{username}</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Mude seu nome"
      />
      <input type="file" accept="image/*" capture="user" onChange={handleFileChange} />
    </div>
  );
};

export default ProfilePage;
