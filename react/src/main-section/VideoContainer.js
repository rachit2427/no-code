import React from 'react'

const VideoContainer = () => (
    <div className="video-container">
        <div className="embed-container">
            <iframe
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
                className="embed-video"
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
        </div>
    </div>
)

export default VideoContainer
