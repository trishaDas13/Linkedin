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
import { useNavigate, NavLink } from "react-router-dom";
import ResponsiveNav from "./ResponsiveNav";
import ProfilePopUp from "../profilePopup/ProfilePopUp";
import SearchUsers from "../searchUsers/SearchUsers";
import { getAllUsers } from "../../../api/FireStoreAPI";

const Topbar = ({ currentUser }) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchWrapperClicked, setSearchWrapperClicked] = useState(true);
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
      setSearchWrapperClicked(true);
    }
  };

  //todo: applying debouncing here
  useEffect(() => {
    handleSearch();
  }, [searchInput]);

  //todo: set users from firestore
  useEffect(() => {
    getAllUsers(setUsers);
  }, [searchInput]);

  //todo: open user's profile
  const openUser = (user) => {
    navigate(`/profile/${user.name}`, {
      state: {
        id: user.id,
        email: user.email,
      },
    });
  };

  const handleSearchWrapperClick = () => {
    setSearchWrapperClicked(false);
    setSearchInput("");
  };

  return (
    <header className="topBar">
      <nav>
        <div className="logo_search_field">
          <LinkedinLogo />
          <SearchUsers
            setSearchInput={setSearchInput}
            searchInput={searchInput}
          />
        </div>
        <ul className="nav_ul">
          <li onClick={handleSearchWrapperClick}>
            <NavLink
              to="/home"
              className={`list_item ${({ isActive }) =>
                isActive ? "active" : ""}`}
            >
              <div className="home icon">
                <HomeIcon />
                <p>Home</p>
              </div>
            </NavLink>
          </li>
          <li onClick={handleSearchWrapperClick}>
            <NavLink
              to="/network"
              className={`list_item ${({ isActive }) =>
                isActive ? "active" : ""}`}
            >
              <div className="network icon">
                <NetworkIcon />
                <p>My Network</p>
              </div>
            </NavLink>
          </li>
          <li onClick={handleSearchWrapperClick}>
            <NavLink
              to="jobs"
              className={`list_item ${({ isActive }) =>
                isActive ? "active" : ""}`}
            >
              <div className="jobs icon">
                <JobsIcon />
                <p>Jobs</p>
              </div>
            </NavLink>
          </li>
          <li onClick={handleSearchWrapperClick}>
            <NavLink
              to="/quotes"
              className={`list_item ${({ isActive }) =>
                isActive ? "active" : ""}`}
            >
              <div className="quotes icon">
                <QuotesIcon />
                <p>Quotes</p>
              </div>
            </NavLink>
          </li>
          <li onClick={handleSearchWrapperClick}>
            <NavLink
              to="/news"
              className={`list_item ${({ isActive }) =>
                isActive ? "active" : ""}`}
            >
              <div className="notification icon">
                <NotificationIcon />
                <p>News</p>
              </div>
            </NavLink>
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
        searchWrapperClicked && (
          <div className="searchWrapper" onClick={handleSearchWrapperClick}>
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
                      openUser(user);
                      setSearchInput("");
                    }}
                  >
                    <img src={user.profileLink} />
                    <p className="name">{user.name}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        )
      )}
    </header>
  );
};

export default Topbar;
