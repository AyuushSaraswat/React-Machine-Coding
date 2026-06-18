import React from 'react'

const Profile3 = ({name,email,website}) => {
    console.log("Hello from profile3")
  return (
    <div>
      Name:{name}
      <br />
      Email:{email}
      <br />
      Website:{website}
      <br />
      <br />
    </div>
  )
}

export default Profile3
