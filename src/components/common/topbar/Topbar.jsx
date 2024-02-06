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
import { Link } from "react-router-dom";


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
                    <Link to='/home'>
                        <div className="home icon">
                            <HomeIcon/>
                            <p>Home</p>
                        </div>
                    </Link>
                </li>
                <li>
                   <Link to='/network'>
                        <div className="network icon">
                            <NetworkIcon/>
                            <p>My Network</p>
                        </div>
                   </Link>
                </li>
                <li>
                    <Link to='jobs'>
                    <div className="jobs icon">
                        <JobsIcon/>
                        <p>Jobs</p>
                    </div>
                    </Link>
                </li>
                <li>
                    <Link to='/quotes'>
                        <div className="quotes icon">
                            <QuotesIcon/>
                            <p>Quotes</p>
                        </div>
                    </Link>
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
