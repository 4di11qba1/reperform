import React from 'react'
import { colors } from '../constants/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import DrawerUser from './DrawerUser';

function Drawer({ user, open, drawerRef, handleDrawer }) {
  return (
    <div ref={drawerRef} className={`drawer ${open ? 'drawer-open' : ''}`} style={{backgroundColor: colors.white}}>
        <div className='drawer-content'>
            <div className='drawer-header'>
                <div className='user-profile-wrapper'>
                    <h3>User Profile</h3>
                    <p style={{color: colors.dimText}}>Welcome {user.userName}</p>
                </div>
                <FontAwesomeIcon className='close-icon' icon={faXmark} style={{color: colors.dimText}} onClick={handleDrawer} />
            </div>
            <DrawerUser user={user} />
        </div>
    </div>
  )
}

export default Drawer