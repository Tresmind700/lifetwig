import React from 'react'
import "./Feed.css"
import MessageSender from './MessageSender'
import Post from "./Post"

function Feed() {
   
   

    return (
      <div className='feed'>
        <MessageSender />

        <Post
          profilePic='/images/Group 29.png'
          message='This is a message'
          timestamp='8/11/2021'
          username='Simmon Bradley'
        />
        <Post
          profilePic='/images/Group 29.png'
          message='This is a message'
          timestamp='8/11/2021'
          username='Simmon Bradley'
     
        />
        <Post
          
          profilePic='/images/Group 29.png'
          message='This is a message'
          timestamp='8/11/2021'
          username='Simmon Bradley'
          
        />
        <Post
          
          profilePic='/images/Group 29.png'
          message='This is a message'
          timestamp='8/11/2021'
          username='Simmon Bradley'
          
        />
        <Post
          
          profilePic='/images/Group 29.png'
          message='This is a message'
          timestamp='8/11/2021'
          username='Simmon Bradley'
          
        />
        <Post
         
          profilePic='/images/Group 29.png'
          message='This is a message'
          timestamp='8/11/2021'
          username='Simmon Bradley'
         
        />
        <Post
          
          profilePic='/images/Group 29.png'
          message='This is a message'
          timestamp='8/11/2021'
          username='Simmon Bradley'
          
        />
      </div>
    );
}

export default Feed
