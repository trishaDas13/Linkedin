import React from "react";
import {
  LinkedinLogo,
  NotificationIcon,
  QuotesIcon,
  JobsIcon,
  NetworkIcon,
  HomeIcon,
  SearchIcon
} from "./SVGstorage";
import './style.scss';
import avatar from '../../../assets/avatar.png';

const Topbar = () => {
  return (
    <header className="topBar">
        <nav>
            <div className="logo_search_field">
                <LinkedinLogo/>
                <div className="serachBar">
                    <input type="text" placeholder= 'Search ...'/>
                    
                </div>
            </div>
            <ul>
                <li>
                    <div className="home icon">
                        <HomeIcon/>
                        <p>Home</p>
                    </div>
                </li>
                <li>
                    <div className="network icon">
                        <NetworkIcon/>
                        <p>My Network</p>
                    </div>
                </li>
                <li>
                    <div className="jobs icon">
                        <JobsIcon/>
                        <p>Jobs</p>
                    </div>
                </li>
                <li>
                    <div className="quotes icon">
                        <QuotesIcon/>
                        <p>Quotes</p>
                    </div>
                </li>
                <li>
                    <div className="notification icon">
                        <NotificationIcon/>
                        <p>Notification</p>
                    </div>
                </li>
            </ul>
            <div className="profile icon">
                <img src={avatar} alt="my avatar" title="My profile"/>
            </div>

        </nav>
    </header>
  );
};

export default Topbar;
