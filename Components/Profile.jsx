import React from "react";

const Profile = ({userName}) => {
  console.log("Child Component");
  return (
    <div>
      <h1>My name is {userName}</h1>
    </div>
  );
};

export default Profile;
