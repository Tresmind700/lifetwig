import React from 'react'
import './RightSideBar.css';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop:75,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


function RightSideBar() {
    const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      variant='permanent'
      anchor='right'
    >
      <div >
        <div className='chatOnlineFriend'>
          <div className='chatOnlineImgContainer'>
            <img className='chatOnlineImg' src='/images/Group 29.png' />
            <div className='chatOnlineBadge'></div>
          </div>
          <span className='chatOnlineName'>Simmon Bradley</span>
        </div>
        <div className='chatOnlineFriend'>
          <div className='chatOnlineImgContainer'>
            <img className='chatOnlineImg' src='/images/Group 29.png' />
            <div className='chatOnlineBadge'></div>
          </div>
          <span className='chatOnlineName'>Simmon Bradley</span>
        </div>
        <div className='chatOnlineFriend'>
          <div className='chatOnlineImgContainer'>
            <img className='chatOnlineImg' src='/images/Group 29.png' />
            <div className='chatOnlineBadge'></div>
          </div>
          <span className='chatOnlineName'>Simmon Bradley</span>
        </div>
        <div className='chatOnlineFriend'>
          <div className='chatOnlineImgContainer'>
            <img className='chatOnlineImg' src='/images/Group 29.png' />
            <div className='chatOnlineBadge'></div>
          </div>
          <span className='chatOnlineName'>Simmon Bradley</span>
        </div>
        <div className='chatOnlineFriend'>
          <div className='chatOnlineImgContainer'>
            <img className='chatOnlineImg' src='/images/Group 29.png' />
            <div className='chatOnlineBadge'></div>
          </div>
          <span className='chatOnlineName'>Simmon Bradley</span>
        </div>
        <div className='chatOnlineFriend'>
          <div className='chatOnlineImgContainer'>
            <img className='chatOnlineImg' src='/images/Group 29.png' />
            <div className='chatOnlineBadge'></div>
          </div>
          <span className='chatOnlineName'>Simmon Bradley</span>
        </div>
        <div className='chatOnlineFriend'>
          <div className='chatOnlineImgContainer'>
            <img className='chatOnlineImg' src='/images/Group 29.png' />
            <div className='chatOnlineBadge'></div>
          </div>
          <span className='chatOnlineName'>Simmon Bradley</span>
        </div>
      </div>
    </Drawer>
  );
}

export default RightSideBar;


