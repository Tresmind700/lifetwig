import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import { Avatar,  Button} from '@material-ui/core';


function Header() {
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
            <SearchIcon />
            <input placeholder='Search' type='text' />
          </div>
        </div>
      </div>
    );
}

export default Header
