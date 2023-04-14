import React, { useEffect, useState } from "react";
import { addVideo } from "../modules/videoManager";
import { useNavigate } from "react-router-dom"


const VideoForm = () => {
    const [video, setVideo] = useState({
        Title: "",
        Description: "",
        Url: ""
    })

    const navigate = useNavigate();

    const handleAddVideo = (e) => {
        e.preventDefault()
        addVideo(video)
            .then(() => {
                // getVideos();
                navigate("/");
            })
        
    }

    // useEffect(() => {
    //     setVideo({
    //         Title: "",
    //         Description: "",
    //         Url: ""
    //     })
    //   }, [videos])

    const updateVideo = (evt) => {
        const copy = {...video}
        copy[evt.target.id] = evt.target.value
        setVideo(copy)
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleAddVideo}>
                <h3 className="h3 mb-3 font-weight-normal">Add a New YouTube Video</h3>
                <fieldset>
                    <label htmlFor="Title"> Video Title </label>
                    <input onChange={updateVideo}
                           value={video.Title} type="text" id="Title" className="form-control"
                           placeholder="Enter a title" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="Description"> Video Description </label>
                    <input onChange={updateVideo}
                        value={video.Description} type="text" id="Description" className="form-control"
                        placeholder="Enter a description" />
                </fieldset>
                <fieldset>
                    <label htmlFor="Url"> YouTube Video URL </label>
                    <input onChange={updateVideo}
                                value={video.Url} type="text" id="Url" className="form-control"
                                placeholder="Enter a YouTube video URL"/>
                </fieldset>
                <fieldset>
                    <button type="submit"> Add Video </button>
                </fieldset>
            </form>
        </main>
    )
}

export default VideoForm;