import React, { useEffect, useState } from "react";
import UserVideo from './UserVideo'
import { getVideosByUserId } from "../modules/userManager.js";
import { useParams } from "react-router-dom";

const UserVideos = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  const getUserInfo = () => {
    getVideosByUserId(id).then(user => setUser(user));
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    
    <div className="container">
      <div className="row justify-content-center">
        <h2>{user.name}'s Posts</h2>
        {user?.videos?.map((video) => (
          <UserVideo video={video} key={video.id} />
        ))}
      </div>
    </div>
  );
};

export default UserVideos;