import React, {useMemo, useState} from 'react';
import Topbar from '../components/common/topbar/Topbar';
import { getCurrentUser } from '../api/FireStoreAPI';
import { Routes, Route } from 'react-router-dom'; 
import Home from '../pages/home/Home';
import Network from '../pages/Network/Network';
import Quotes from '../pages/quotes/Quotes';
import Jobs from '../pages/jobs/Jobs';
import Profile from '../pages/profile/Profile';
import Error from '../pages/errorPage/Error';



const Layout = () => {

  const [currentUser, setCurrentUser] = useState({});

  useMemo(()=>{
    getCurrentUser(setCurrentUser);
  }, [])

  return (
    <div>
        <Topbar currentUser={currentUser}/>
        <Routes>
          <Route
            path= "/home"
            element= {<Home currentUser={currentUser}/>}
          />
          <Route
            path= "/network"
            element= {<Network currentUser={currentUser} />}
          />
          <Route
            path= "/quotes"
            element= {<Quotes currentUser={currentUser} />}
          />
          <Route
            path= "/jobs"
            element= {<Jobs currentUser={currentUser} />}
          />
          <Route
            path= "/profile"
            element= {<Profile currentUser={currentUser}/>}
          />

        </Routes>
    </div>
  )
}

export default Layout;