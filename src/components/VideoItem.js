import React from 'react';

const VideoItem = ({ video })=> {
    const { id, snippet } = video
    return (
    <div key={id.videoId}>
    <img alt={snippet.description} src={snippet.thumbnails.medium.url} />
    {snippet.title}
    </div>
    )
}

export default VideoItem;