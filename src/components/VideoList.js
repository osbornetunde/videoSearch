import React from 'react';
import VideoItem from './VideoItem'; 



const VideoList = ({ videos }) => {
    const renderList = videos.map( video => {
        return (
            <div key={video.id.videoId}>
             <VideoItem video={video} />
            </div>
        )
    });

    return <div>{renderList}</div>
};

export default VideoList;