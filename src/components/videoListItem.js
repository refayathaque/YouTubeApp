import React from 'react';

//Functional component bc we don't need state
const VideoListItem = ({video, onVideoSelect}) => {
    //^ same as having (props)
    // const video = props.video;

    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)} className='list-group-item'>
            <div className='video-list media'>
                <div className='media-left'>
                    <img className='media-object' src={imageUrl} />
                </div>
                <div className='media-body'>
                    <div className='media-heading + media-heading-left-padding'>{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;
