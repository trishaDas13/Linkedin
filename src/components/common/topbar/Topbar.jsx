import React, { useState, useEffect } from "react";
import {
  LinkedinLogo,
  NotificationIcon,
  QuotesIcon,
  JobsIcon,
  NetworkIcon,
  HomeIcon,
} from "./SVGstorage";
import "./style.scss";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import ResponsiveNav from "./ResponsiveNav";
import ProfilePopUp from "../profilePopup/ProfilePopUp";
import SearchUsers from "../searchUsers/SearchUsers";
import { getAllUsers } from "../../../api/FireStoreAPI";

const Topbar = ({ currentUser }) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  let navigate = useNavigate();

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  //todo: implement search functionality
  const handleSearch = () => {
    if (searchInput !== "") {
      let searched = users.filter((user) => {
        return Object.values(user)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });

      setFilteredUsers(searched);
    } else {
      setFilteredUsers(users);
    }
  };

  //todo: applying debouncing here
  useEffect(() => {
    handleSearch();
  }, [searchInput]);

  //todo: set users from firestore
  useEffect(() => {
    getAllUsers(setUsers);
  }, []);

  //todo: open user's profile
  const openUser = (user) => {
    navigate("/profile", {
      state: {
        id: user.id,
        email: user.email,
      },
    });
  };


  return (
    <header className="topBar">
      <nav>
        <div className="logo_search_field">
          <LinkedinLogo />
          <SearchUsers setSearchInput={setSearchInput} />
        </div>
        <ul className="nav_ul">
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
            <Link to = "/news">
            <div className="notification icon">
              <NotificationIcon />
              <p>News</p>
            </div>
            </Link>
          </li>
        </ul>
        <div className="profile icon">
          <img
            src={currentUser?.profileLink}
            alt="my avatar"
            title="My profile"
            onClick={togglePopup}
          />
        </div>
      </nav>
      <div className="response">
        <ResponsiveNav />
      </div>
      {popupOpen && <ProfilePopUp />}
      {searchInput.length === 0 ? (
        <></>
      ) : (
        <div className="searchResults">
          {filteredUsers.length === 0 ? (
            <div className="search-inner" key={nanoid()}>
              No Results Found..
            </div>
          ) : (
            filteredUsers.map((user) => (
              <div
                className="search-inner"
                key={nanoid()}
                onClick={() => {
                    openUser(user)
                    setSearchInput('')
                }}
              >
                <img src={user.profileLink} />
                <p className="name">{user.name}</p>
              </div>
            ))
          )}
        </div>
      )}
    </header>
  );
};

export default Topbar;
