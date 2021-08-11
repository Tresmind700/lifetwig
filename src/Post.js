import { Avatar } from '@material-ui/core';
import React,{useState} from 'react';
import './Post.css';
import ReactPlayer from 'react-player';

import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

function Post({ profilePic, username, message }) {
  const [isActive, setActive] = useState(true);

 const toggleClass = () => {
   setActive(!isActive);
 };

  return (
    <div className='post'>
      <div className='post__top'>
        <Avatar src={profilePic} className='post__avatar' />
        <div className='post__topInfo'>
          <h3>{username}</h3>
          <p>Timestamp...</p>
        </div>
      </div>

      <div className='post__bottom'>
        <p>{message}</p>
      </div>

      <div className='post__image'>
        <ReactPlayer
          controls
          width='935px'
          url='youtube.com/watch?v=7sDY4m8KNLc'
        />
      </div>

      <div className='post__options'>
        {/* <div className='post__option'>
          <p>Heart21</p>
        </div> */}
        <div
          className={isActive ? 'post__option' : 'postred__option'}
          onClick={toggleClass}
        >
          <p>Heart21</p>
        </div>

        <div className='header__input'>
          <ChatBubbleOutlineIcon />
          <input placeholder='Comment' type='text' />
        </div>

        <div className='post__option'>
          <p>View Comment 21</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
