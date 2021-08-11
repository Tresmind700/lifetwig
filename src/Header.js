import React,{useState} from 'react';
import "./Header.css";

import { Avatar,  Button} from '@material-ui/core';


function Header() {
  const[show,setShow]=useState()
    return (
      <div
        className='header'
        style={{ backgroundImage: `url(/images/leafs.png)` }}
      >
        <div className='header__left'>
          <img src='/images/lifetwig.png' alt='' />
        </div>

        <div className='header__center'>
          <Button>
            <div>
              <h4>Home Feed</h4>
            </div>
          </Button>

          <Button>
            <div>
              <h4>Map</h4>
            </div>
          </Button>
          <Button>
            <div>
              <h4>Family Tree</h4>
            </div>
          </Button>
          <Button>
            <div>
              <h4>Friends</h4>
            </div>
          </Button>
        </div>
        <div className='header__right'>
          <div className='header__info'>
            <Avatar src='/images/Group 29.png' />
            <h4>Simmon Bradley</h4>
          </div>
          <div className='header__input'>
            {show ? <input placeholder='Search' type='text' /> : null}
            <button className='searchbtn' onClick={() => setShow(!show)}>
              show
            </button>
          </div>
         
        </div>
      </div>
    );
}

export default Header
