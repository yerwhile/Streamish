import React, { useEffect, useState } from "react";
import Video from './Video'
import { getAllVideos } from "../modules/videoManager";

const VideoList = ({searchResults}) => {
  const [videos, setVideos] = useState([]);

  const getVideos = () => {
    getAllVideos().then(videos => setVideos(videos));
  };

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    setVideos(searchResults)
  }, [searchResults])

  return (
    
    <div className="container">
      <div className="row justify-content-center">
        {videos.map((video) => (
          <Video video={video} key={video.id} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;