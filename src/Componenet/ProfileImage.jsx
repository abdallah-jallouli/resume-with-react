import React from 'react'
import logo from './logo.jpg'; // with import

const ProfileImage = () => {
  return (
    <div className="reframed-image-container">
      <img src={logo} alt="Reframed" className="reframed-image" />
    </div>
  )
}

export default ProfileImage