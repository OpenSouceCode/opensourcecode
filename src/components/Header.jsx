import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useContext } from 'react';

import styles from '../css/header.module.css';
import * as FirebaseAuth from './FirebaseAuth';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import SideDrawer from './SideDrawer/SideDrawer';
import UserContext from './UserContext';

export default function Header() {
  const router = useRouter();
  const { User, setUser } = useContext(UserContext);       
  const [profileDD, setProfileDD] = useState(false);
  const [sideDrawer, setSideDrawer] = useState(false);

  const toggleDD = () => {
    // eslint-disable-next-line no-unused-expressions
    profileDD === true ? setProfileDD(false) : setProfileDD(true);
  };
  const toggleSD = () => {
    // eslint-disable-next-line no-unused-expressions
    sideDrawer === true ? setSideDrawer(false) : setSideDrawer(true);
  };

  async function handleLogout(e) {
    e.preventDefault();
    await FirebaseAuth.logout();
    setUser(null);
    router.push('/');
  }

  return (
    <div className={styles.header}>
      <div>
        <Link href="/">
          <img
            className={styles['header-logo']}
            src="/logo/web_logo.png"
            alt=""
          />
        </Link>
      </div>
      {router.pathname !== '/' && (
        <div className={styles.links}>
          <div className={styles.link}>
            <Link href="/feed">
              <p>Feed</p>
            </Link>
            {router.pathname === '/feed' && (
              <hr
                style={{
                  width: '30%',
                  height: '3px',
                  backgroundColor: '#333',
                  border: 'none'
                }}
              />
            )}
          </div>
          <div className={styles.link}>
            <Link href="/organizations">
              <p>Organizations</p>
            </Link>
            {router.pathname === '/organizations' && (
              <hr
                style={{
                  width: '30%',
                  height: '3px',
                  backgroundColor: '#333',
                  border: 'none'
                }}
              />
            )}
          </div>
          <div className={styles.link}>
            <Link href="/howtowork">
              <p>How To Work</p>
            </Link>
            {router.pathname === '/howtowork' && (
              <hr
                style={{
                  width: '30%',
                  height: '3px',
                  backgroundColor: '#333',
                  border: 'none'
                }}
              />
            )}
          </div>
        </div>
      )}
      <div tabIndex={0} role="button" onKeyDown={toggleSD} onClick={toggleSD}>
        {router.pathname !== '/' && (
          <DrawerToggleButton className={styles['toggle-hamburger']} />
        )}
      </div>
      {sideDrawer && <SideDrawer handleClose={toggleSD} router={router} />}
      {router.pathname !== '/' && (
        <div className={styles.profile}>
          <div
            role="button"
            tabIndex="0"
            className={styles['profile-icon']}
            onClick={toggleDD}
            onKeyDown={toggleDD}>
            <img
              src="/icons/young-man.svg"
              alt=" "
              className={styles['header-profile-picture']}
            />
            { User !== null &&
              <p> {User.name} </p>
            }
            <img
              src="/SVG/Icon awesome-angle-down.svg"
              style={{ paddingLeft: '10px', width: '20px' }}
              alt=" "
            />
          </div>

          {profileDD && (
            <div className={styles.dropdown}>
              <div className={styles['top-row']}>
                <div className={styles['top-left-col']}>
                  <img src="/icons/young-man.png" alt=" " />
                    { User !== null && 
                      <p> {User.name} </p>
                    }
                </div>
                <div className={styles['top-right-col']}>
                  <Link href="/setting">
                    <img src="/icons/computer.png" alt=" " />
                  </Link>
                </div>
              </div>
              <div className={styles['bottom-row']}>
                <Link href="/profile">
                  <div className={styles['dd-button']}>My Profile</div>
                </Link>
                <Link href="/createproject">
                  <div className={styles['dd-button']}>Create OSP</div>
                </Link>
                <button type="button" onClick={handleLogout} className={styles['dd-button']}>
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
