import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Video = ({ video }) => {
  return (
    <Card >
      <CardBody>
        <p>
            Posted by <Link to={`/users/${video.userProfileId}`}>
                        {video.userProfile.name}
                     </Link>
        </p>
        <iframe className="video"
          src={video.url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />

        <p>
            <Link to={`/videos/${video.id}`}>
                <strong>{video.title}</strong>
            </Link>
        </p>
        <p>{video.description}</p>
        <p>{video.comments?.map(comment => (
            comment.message))}
        </p>
      </CardBody>
    </Card>
  );
};

export default Video;