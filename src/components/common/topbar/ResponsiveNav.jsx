import React from "react";
import './style2.scss';
import {
    LinkedinLogo,
    NotificationIcon,
    QuotesIcon,
    JobsIcon,
    NetworkIcon,
    HomeIcon,
    SearchIcon
  } from "./SVGstorage";
  import { Link } from "react-router-dom";


const ResponsiveNav = () => {
  return (
    <ul className="responsive_nav_ul">
      <li>
        <Link to="/home">
          <div className="home icon">
            <HomeIcon />
            <p>Home</p>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/network">
          <div className="network icon">
            <NetworkIcon />
            <p>My Network</p>
          </div>
        </Link>
      </li>
      <li>
        <Link to="jobs">
          <div className="jobs icon">
            <JobsIcon />
            <p>Jobs</p>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/quotes">
          <div className="quotes icon">
            <QuotesIcon />
            <p>Quotes</p>
          </div>
        </Link>
      </li>
      <li>
        <Link to='/news'>
          <div className="notification icon">
            <NotificationIcon />
            <p>News</p>
          </div>
        </Link>
      </li>
    </ul>
  );
};

export default ResponsiveNav;
